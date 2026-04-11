# Shots Fired — Blogging Guide

Everything you need to write and publish a post.

---

## Publishing a post

### Option A — Admin page (recommended for mobile / quick posts)

1. Go to [shotsfired.info/admin](https://yellow-island-0b8d1b403.azurestaticapps.net/admin)
2. Log in with your Microsoft account
3. Fill in the form — title, author, date, tags, excerpt, and body
4. Hit **Publish post**

The post is committed to GitHub automatically and goes live once the Azure deploy completes (usually 1–2 minutes).

### Option B — Claude Code (`/new-blog`)

In a Claude Code session on your laptop, type:

```
/new-blog
```

Claude will walk you through the details and handle the commit and push.

### Option C — Directly in the repo

1. Create a new file in `blogs/your-slug-here.md`
2. Add the slug to `blogs.json`
3. Commit and push — the deploy runs automatically

---

## Post file format

Every post is a Markdown file with a YAML frontmatter block at the top:

```markdown
---
title: Your Post Title
author: Roelant Dieben
authorSlug: roelant
date: 2026-04-11
excerpt: One or two sentences shown on the blog listing page.
tags: azure, ai, cloud
---

Your post content starts here...
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Displayed as the post heading |
| `author` | ✅ | Full name: `Roelant Dieben` or `Stuart van der Lee` |
| `authorSlug` | ✅ | `roelant` or `stuart` |
| `date` | ✅ | `YYYY-MM-DD` format |
| `excerpt` | ✅ | Shown on the blog listing page and in link previews |
| `tags` | — | Comma-separated, e.g. `azure, ai, prompting` |

---

## Formatting reference

### Headings

```markdown
## Section heading
### Sub-heading
```

Use `##` for main sections and `###` for sub-sections. Avoid `#` — the post title already uses that level.

---

### Paragraphs and emphasis

```markdown
Normal paragraph text.

**Bold text** and *italic text*.
```

---

### Links

```markdown
[Link text](https://example.com)
```

---

### Lists

```markdown
- Bullet item
- Another item

1. Numbered item
2. Another item
```

---

### Heading eyebrow

Place a `{label}` decorator at the start of any heading to render a small coloured label above the heading text. Good for acts, chapters, numbered sections, or any thematic grouping.

```markdown
## {Act I} What directors actually do
## {Tip} Keep your context tight
## {01} Introduction
```

The decorator renders in accent orange above the heading in small caps. The heading text itself is unchanged.

---

### Pull quote

Use a `>` blockquote. It renders as a centred pull quote with accent lines — best for a single punchy sentence.

```markdown
> The certification that said "I build cloud apps" is gone.
```

Renders as:

> ── ✦ ──
> *The certification that said "I build cloud apps" is gone.*
> ── ✦ ──

---

### Example card

Use a fenced code block with `example:Your Label` as the language. Best for showing contrasting examples, prompts, or short scenarios.

````markdown
```example:The bad brief
"What's the best way to handle authentication in my app?"
```
````

Renders as a card with an orange top border and the label in small caps above the content.

---

### Code block

Standard fenced code block with an optional language for syntax highlighting context:

````markdown
```typescript
const greeting = "hello";
```
````

---

## Slug rules

The slug becomes the URL: `/blog/your-slug-here`

- Lowercase letters, numbers, and hyphens only
- No spaces or special characters
- Keep it short and descriptive
- Example: `microsoft-just-rewrote-the-azure-developer-playbook`
