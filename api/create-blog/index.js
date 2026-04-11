const https = require('https');

const GITHUB_OWNER = 'RoelantD';
const GITHUB_REPO  = 'shots-fired';

module.exports = async function (context, req) {
  // ── Auth check ──────────────────────────────────────────────────────────────
  const principalHeader = req.headers['x-ms-client-principal'];
  if (!principalHeader) {
    context.res = { status: 401, body: { error: 'Unauthorized' } };
    return;
  }

  // ── Validate input ───────────────────────────────────────────────────────────
  const { title, slug, author, authorSlug, date, category, tags, excerpt, body } = req.body || {};

  if (!title || !slug || !author || !authorSlug || !date || !excerpt || !body) {
    context.res = { status: 400, body: { error: 'Missing required fields' } };
    return;
  }

  // Ensure slug is safe (alphanumeric + hyphens only)
  if (!/^[a-z0-9-]+$/.test(slug)) {
    context.res = { status: 400, body: { error: 'Invalid slug — use lowercase letters, numbers, and hyphens only' } };
    return;
  }

  const githubToken = process.env.GITHUB_PAT;
  if (!githubToken) {
    context.log.error('GITHUB_PAT environment variable is not set');
    context.res = { status: 500, body: { error: 'Server misconfiguration' } };
    return;
  }

  // ── Build markdown content ───────────────────────────────────────────────────
  const markdown = `---
title: ${title}
author: ${author}
authorSlug: ${authorSlug}
date: ${date}
excerpt: ${excerpt}
tags: ${tags || ''}
category: ${category || 'General'}
---

${body}
`;

  try {
    // 1. Check the blog file doesn't already exist
    let existingSha = null;
    try {
      const existing = await githubGet(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs/${slug}.md`, githubToken);
      existingSha = existing.sha;
    } catch (e) {
      if (!e.message.includes('404')) throw e;
      // 404 is expected — file doesn't exist yet
    }

    if (existingSha) {
      context.res = { status: 409, body: { error: `A post with slug "${slug}" already exists` } };
      return;
    }

    // 2. Create the markdown file
    await githubPut(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs/${slug}.md`,
      {
        message: `Add blog post: ${title}`,
        content: Buffer.from(markdown).toString('base64'),
        committer: { name: 'Shots Fired Admin', email: 'admin@shotsfired.show' }
      },
      githubToken
    );

    // 3. Update blogs.json — get current file first to obtain its SHA
    const blogsJsonFile = await githubGet(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/blogs.json`,
      githubToken
    );
    const currentSlugs = JSON.parse(Buffer.from(blogsJsonFile.content, 'base64').toString('utf8'));

    if (!currentSlugs.includes(slug)) {
      currentSlugs.push(slug);
    }

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

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { success: true, slug }
    };
  } catch (err) {
    context.log.error('GitHub API error:', err.message);
    context.res = { status: 500, body: { error: err.message } };
  }
};

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
        'User-Agent':    'shots-fired-admin',
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
