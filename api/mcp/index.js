const https = require('https');

const GITHUB_OWNER = 'RoelantD';
const GITHUB_REPO  = 'shots-fired';

// ── MCP server metadata ──────────────────────────────────────────────────────
const SERVER_INFO = {
  name: 'shots-fired-blog',
  version: '1.0.0'
};

const TOOLS = [
  {
    name: 'create_blog_post',
    description: 'Publish a new blog post to the Shots Fired website. Creates the markdown file and updates the blog manifest, triggering a deploy.',
    inputSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: 'The post title'
        },
        authorSlug: {
          type: 'string',
          enum: ['roelant', 'stuart'],
          description: 'Author identifier: "roelant" for Roelant Dieben, "stuart" for Stuart van der Lee'
        },
        date: {
          type: 'string',
          description: 'Publication date in YYYY-MM-DD format'
        },
        excerpt: {
          type: 'string',
          description: 'One or two sentences shown on the blog listing page'
        },
        body: {
          type: 'string',
          description: 'Full post content in Markdown'
        },
        tags: {
          type: 'string',
          description: 'Comma-separated tags (optional)'
        }
      },
      required: ['title', 'authorSlug', 'date', 'excerpt', 'body']
    }
  }
];

// ── Auth ─────────────────────────────────────────────────────────────────────
function isAuthorized(req) {
  const secret = process.env.MCP_SECRET;
  if (!secret) return false;
  const auth = req.headers['authorization'] || '';
  return auth === `Bearer ${secret}`;
}

// ── Main handler ─────────────────────────────────────────────────────────────
module.exports = async function (context, req) {
  if (!isAuthorized(req)) {
    context.res = { status: 401, body: { error: 'Unauthorized' } };
    return;
  }

  // MCP uses POST for all JSON-RPC messages
  if (req.method === 'POST') {
    const message = req.body;

    if (!message || !message.method) {
      context.res = { status: 400, body: { error: 'Invalid MCP message' } };
      return;
    }

    const result = await handleMessage(context, message);
    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: result
    };
    return;
  }

  // GET — return server info for discovery
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: { server: SERVER_INFO, tools: TOOLS.map(t => ({ name: t.name, description: t.description })) }
  };
};

// ── MCP message dispatcher ────────────────────────────────────────────────────
async function handleMessage(context, message) {
  const { id, method, params } = message;

  try {
    switch (method) {
      case 'initialize':
        return {
          jsonrpc: '2.0', id,
          result: {
            protocolVersion: '2024-11-05',
            serverInfo: SERVER_INFO,
            capabilities: { tools: {} }
          }
        };

      case 'notifications/initialized':
        return null; // no response needed for notifications

      case 'tools/list':
        return {
          jsonrpc: '2.0', id,
          result: { tools: TOOLS }
        };

      case 'tools/call':
        return await handleToolCall(context, id, params);

      default:
        return {
          jsonrpc: '2.0', id,
          error: { code: -32601, message: `Method not found: ${method}` }
        };
    }
  } catch (err) {
    context.log.error('MCP handler error:', err.message);
    return {
      jsonrpc: '2.0', id,
      error: { code: -32603, message: err.message }
    };
  }
}

// ── Tool call handler ─────────────────────────────────────────────────────────
async function handleToolCall(context, id, params) {
  const { name, arguments: args } = params || {};

  if (name !== 'create_blog_post') {
    return {
      jsonrpc: '2.0', id,
      error: { code: -32602, message: `Unknown tool: ${name}` }
    };
  }

  const { title, authorSlug, date, excerpt, body, tags } = args || {};

  if (!title || !authorSlug || !date || !excerpt || !body) {
    return {
      jsonrpc: '2.0', id,
      result: {
        content: [{ type: 'text', text: 'Missing required fields: title, authorSlug, date, excerpt, and body are all required.' }],
        isError: true
      }
    };
  }

  const AUTHORS = {
    roelant: 'Roelant Dieben',
    stuart:  'Stuart van der Lee'
  };

  if (!AUTHORS[authorSlug]) {
    return {
      jsonrpc: '2.0', id,
      result: {
        content: [{ type: 'text', text: `Unknown authorSlug "${authorSlug}". Use "roelant" or "stuart".` }],
        isError: true
      }
    };
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  if (!slug) {
    return {
      jsonrpc: '2.0', id,
      result: { content: [{ type: 'text', text: 'Could not generate a valid slug from the title.' }], isError: true }
    };
  }

  const githubToken = process.env.GITHUB_PAT;
  if (!githubToken) {
    return {
      jsonrpc: '2.0', id,
      result: { content: [{ type: 'text', text: 'Server misconfiguration: GITHUB_PAT not set.' }], isError: true }
    };
  }

  const markdown = `---
title: ${title}
author: ${AUTHORS[authorSlug]}
authorSlug: ${authorSlug}
date: ${date}
excerpt: ${excerpt}
tags: ${tags || ''}
---

${body}
`;

  try {
    // Check slug doesn't already exist
    try {
      await githubGet(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs/${slug}.md`, githubToken);
      return {
        jsonrpc: '2.0', id,
        result: { content: [{ type: 'text', text: `A post with slug "${slug}" already exists.` }], isError: true }
      };
    } catch (e) {
      if (!e.message.includes('404')) throw e;
    }

    // Create the markdown file
    await githubPut(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs/${slug}.md`,
      {
        message: `Add blog post: ${title}`,
        content: Buffer.from(markdown).toString('base64'),
        committer: { name: 'Shots Fired Admin', email: 'admin@shotsfired.show' }
      },
      githubToken
    );

    // Update blogs.json
    const blogsJsonFile = await githubGet(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs.json`,
      githubToken
    );
    const currentSlugs = JSON.parse(Buffer.from(blogsJsonFile.content, 'base64').toString('utf8'));
    if (!currentSlugs.includes(slug)) currentSlugs.push(slug);

    await githubPut(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs.json`,
      {
        message: `Update blogs.json: add ${slug}`,
        content: Buffer.from(JSON.stringify(currentSlugs, null, 2) + '\n').toString('base64'),
        sha: blogsJsonFile.sha,
        committer: { name: 'Shots Fired Admin', email: 'admin@shotsfired.show' }
      },
      githubToken
    );

    return {
      jsonrpc: '2.0', id,
      result: {
        content: [{
          type: 'text',
          text: `Blog post published successfully!\n\nSlug: ${slug}\nURL: /blog/${slug}\n\nThe post will be live once the Azure Static Web Apps deploy completes (usually 1–2 minutes).`
        }]
      }
    };
  } catch (err) {
    context.log.error('GitHub API error:', err.message);
    return {
      jsonrpc: '2.0', id,
      result: { content: [{ type: 'text', text: `GitHub API error: ${err.message}` }], isError: true }
    };
  }
}

// ── GitHub API helpers ────────────────────────────────────────────────────────
function githubGet(path, token) {
  return githubRequest('GET', path, null, token);
}

function githubPut(path, body, token) {
  return githubRequest('PUT', path, body, token);
}

function githubRequest(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent':    'shots-fired-mcp',
        'Accept':        'application/vnd.github.v3+json',
        ...(bodyStr ? {
          'Content-Type':   'application/json',
          'Content-Length': Buffer.byteLength(bodyStr)
        } : {})
      }
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}
