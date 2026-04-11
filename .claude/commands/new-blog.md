Help the user create and publish a new blog post for the Shots Fired website.

Follow these steps:

1. Ask the user for the following, one message at a time if they haven't already provided them:
   - **Title** — the post title
   - **Author** — ask them to choose: "Roelant" or "Stuart"
   - **Tags** — comma-separated keywords (optional, can be skipped)
   - **Excerpt** — one or two sentences that appear on the blog listing page
   - **Body** — the full post content in Markdown

   If the user provides some or all of these upfront in their message, use what they've given and only ask for what's missing.

2. Generate a slug from the title: lowercase, spaces and special characters replaced with hyphens, no leading/trailing hyphens. For example "My Great Post!" becomes "my-great-post".

3. Set the date to today's date in YYYY-MM-DD format.

4. Map the author choice to the correct values:
   - "Roelant" → author: "Roelant Dieben", authorSlug: "roelant"
   - "Stuart"  → author: "Stuart van der Lee", authorSlug: "stuart"

5. Create the markdown file at `blogs/<slug>.md` with this exact frontmatter format:
```
---
title: <title>
author: <author full name>
authorSlug: <authorSlug>
date: <YYYY-MM-DD>
excerpt: <excerpt>
tags: <tags>
---

<body>
```

6. Read the current `blogs.json` and append the new slug to the array. Preserve the existing slugs exactly.

7. Commit both files with the message: `Add blog post: <title>`

8. Push to origin/main.

9. Confirm to the user that the post is published and will be live at `/blog/<slug>` once the deploy completes.
