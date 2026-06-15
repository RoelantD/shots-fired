---
title: "The Free Lunch Is Over: Being Deliberate With AI in Your Dev Workflow"
author: Roelant Dieben
authorSlug: roelant
date: 2026-06-15
excerpt: GitHub's usage-based billing just sent a lot of developers a wake-up call. The era of reaching for your AI tool on every task, every time, with the most powerful model available, is over. That is not bad news. It is a forcing function.
tags: ai, developer-tools, github-copilot, cost, genai
category: AI
---

For a while there, it felt like the rules did not apply. AI assistance was fast, cheap enough to feel free, and we collectively agreed to stop asking whether it made sense.

That era is ending.

> "A flagship model for everything. No friction, no tradeoffs, just output. That era is ending."

---

GitHub recently moved toward usage-based billing for Copilot. If you have been using it for everything: autocomplete, boilerplate, test stubs, commit messages, the occasional "what does this do?", or you want to know the best recipe for your grandmother's flan, you are going to notice. Not because the price is outrageous, but because you are now being asked to look at what you are actually spending it on.

Do not be surprised that when you look, some of it is going to be hard to justify.

> "When you look, some of it is going to be hard to justify."

---

## The model problem

For the past year or so, the default answer to "which model should I use?" was "the best one available." Opus. GPT-5. Whatever sat at the top of the benchmark leaderboard. It was fine when cost was abstracted away. It is not fine now.

Using a flagship model to rename a variable or summarise a five-line function is like hiring a consultant to sort your inbox. The output is fine. The economics are not.

The new question is not "what can AI help me with?" It is "what size of model does this task actually warrant?" A quick autocomplete is a job for a fast, cheap model running close to your cursor. An architectural review of a new service is a job for something with more headroom. The distinction matters, and it is a distinction most of us have not had to make until now.

> "Using a flagship model to rename a variable is like hiring a consultant to sort your inbox."

---

## Local is becoming real

There is a third option entering the conversation: running models yourself.

Microsoft's new Surface Laptop Ultra page makes the direction explicit: local AI is now a first-class selling point for premium Windows hardware with a new NVIDIA chip, and configurations with up to 128GB unified memory to run larger models on-device. That does not eliminate cloud models, but it does make hybrid local-plus-cloud workflows much more realistic for developers.

For tasks that are repetitive, low-stakes, and high-volume, the exact tasks that inflate your Copilot bill, a local model that costs "nothing" per token starts to look very attractive. You give up some quality ceiling. You gain control, privacy, and a bill that does not scale with how many times you asked AI to write a for-loop.

This is not yet a replacement for the cloud. But it is a viable complement, and it is going to get more viable quickly.

---

## The business case question

Here is the discipline this moment is asking for: before you reach for AI assistance on a task, ask whether the task warrants it.

Not as a moralistic exercise. As a practical one.

> "If AI spend is real, the bar for value should be real too."

Some tasks are genuinely accelerated by AI. Design exploration, getting unstuck on an unfamiliar codebase, synthesising documentation, generating test cases from a spec. The time savings are real and the quality is good enough.

Other tasks are habits. Autocomplete for things you could have typed. Summaries of things you already understood. Refactors you delegated because it felt faster in the moment. These are fine to do. They are not free anymore, and they were never as valuable as they felt.

> "The shift is not 'use less AI.' It is 'use it where it earns its place.'"

---

This is actually good news dressed up as a constraint.

When everything is free, you stop thinking. When things have a cost, you get deliberate. Deliberate is better. It means you are building a habit of asking whether AI assistance is the right tool, the right model, and the right moment, rather than just reaching for it by default.

The free lunch is over. The intentional one is better anyway.
