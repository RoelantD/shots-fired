---
title: Token Hunger: The Meter Is Running
author: Roelant Dieben
authorSlug: roelant
date: 2026-04-14
excerpt: AI subscription fatigue is real. Every platform has converged on $20/month, but what you get for that $20 keeps shrinking. Here's what the limits actually look like in 2026.
tags: ai, developer-tools, pricing, github-copilot, cursor, claude
category: AI
---

# Token Hunger: The Meter Is Running

**The fix is wearing off.**

You know the feeling. It's 3pm. You're mid-refactor. GitHub Copilot throws up a rate limit error. You switch tabs to Claude. You've hit the rolling window. You open Cursor. The credit bar is in the red. You've got Perplexity, ChatGPT, and Midjourney all running in the background, and somehow, collectively, they still can't give you an uninterrupted hour of flow.

Welcome to AI subscription fatigue. Population: everyone with a credit card and a curiosity problem.

> *AI subscription fatigue. Population: everyone with a curiosity problem.*

---

## The $20 lock-in that wasn't

Remember when everyone was irate about GitHub Copilot charging $10 a month? That felt like a lot at the time. Quaint, in retrospect.

There's a cruel joke buried in 2026's AI pricing landscape: almost every major platform has since converged on the same number. ChatGPT Plus, Claude Pro, Google AI Pro (formerly Gemini Advanced), Perplexity Pro. They all cost $20. A clean, tidy number. Feels like a single subscription to something useful.

It isn't.

Each $20 buys you a different slice of capability, a different set of arbitrary walls, and a different way of counting your usage against you. The math doesn't add up to one subscription. It adds up to four or five, depending on which walls you hit first.

For developers specifically, the picture gets uglier. Because coding assistants don't just charge per message. They charge per token, per model choice, per premium request, and in some cases, per session type. You thought you were buying a tool. You bought a gas tank with a leak and sometimes there is no telling how big the tank is, and what our fuel consumption is.

> *You bought a gas tank with a leak.*

---

## GitHub Copilot: the canary in the coal mine

Last week, GitHub quietly dropped an update that deserves more attention than it got. As GitHub Copilot continues to grow, GitHub observed an increase in patterns of high concurrency and intense usage, placing significant strain on shared infrastructure and operating resources.

Translation: people are actually using this thing. Heavily. And the flat-rate model is breaking.

The result is two new limit types: service reliability limits that lock you out until your session resets, and model-specific capacity limits that force you onto a cheaper model mid-task. When you hit a usage limit for specific models, you can switch to an alternative model or use Auto mode.

This is the polite version of "we mispriced this."

> *People are using this heavily. The flat-rate model is breaking.*

The numbers themselves are revealing. Customers on the Copilot Pro tier at $10 per month receive 300 monthly premium requests, while Copilot Pro+ at $39 per month offers 1,500. Premium requests cover everything interesting: agentic coding, multi-file edits, anything beyond the base model. The base model still works after you exhaust your quota, but you're coding with one hand tied behind your back.

Here's where it gets spicy. Claude Opus 4.6 in fast mode carries a 30x multiplier: one interaction counts as 30 premium requests. Standard Claude Opus 4.5 and 4.6 run at 3x (as of April 14 2026). At those rates, 300 monthly premium requests burns through in a single focused afternoon. Copilot Pro+ users with 1,500 premium requests don't have as much runway as the number implies.

And now GitHub is adding session-level rate limits on top of those monthly caps. Limits on top of limits.

---

## Cursor: the pricing bait-and-switch that became a case study

Cursor had a simpler world. $20/month bought you 500 fast premium requests. Simple. Predictable.

Then in June 2025, they switched to a credit system. The pricing structure changed significantly, effectively cutting the monthly request count from 500 to approximately 225 per month at the same $20 price point. The CEO issued a public apology. A chunk of users migrated to Windsurf in protest.

The underlying reason is the same as Copilot's: frontier models like Claude Opus or GPT-5 cost far more per token than lighter alternatives. When users default to the best model for every prompt, the economics fall apart fast.

Thinking models generate reasoning tokens before the final output, and those tokens count against your credit pool just like any other tokens. On an expensive model like Claude Opus, a single thinking session can burn through many dollars of credits before it types a single line of code. A background agent run on a large codebase compounds this: the agent re-sends the full conversation history on every step, so costs grow with context size, not just turn count.

That's not a rounding error. That's a week's worth of AI budget in one task.

> *A week's worth of AI budget. One agent task.*

---

## Claude: the honest vagueness

Anthropic at least deserves credit for not pretending the limits don't exist. They just won't tell you exactly what they are.

> *They won't pretend the limits don't exist. They just won't tell you what they are.*

Claude does not publish one fixed public daily token number for consumer plans. Pro offers at least five times the usage per session compared with Free during peak hours, working on a five-hour reset, and also includes a weekly all-model limit.

In practice, Claude Pro users get roughly 45 messages per 5-hour window. Claude Max comes in two tiers: $100/month for 5x the capacity (around 225 messages per window), and $200/month for 20x (around 900 messages per window).

The weekly cap is the one that catches people off guard. It was introduced in August 2025 and it's a hard stop. There's no way to bypass the weekly cap except upgrading to Claude Max or waiting for the reset.

One more detail worth knowing: all Claude platforms (claude.ai in the browser, Claude Code in the terminal, Claude Desktop) share the same usage pool. Switching apps doesn't give you extra capacity. It's one bucket, and every tool is drinking from it.

---

## Perplexity: the exception that proves the rule

Perplexity is the odd one out here. Unlike ChatGPT's message limits or Claude's undisclosed caps, Perplexity Pro offers effectively unlimited Pro queries. For research and fact-checking, it genuinely delivers on the subscription promise.

The catch is that Perplexity is not a coding assistant, not a writing tool in the traditional sense, and the context window is smaller than its rivals. It does one thing very well. It doesn't replace the others.

---

## The streaming wars came for your dev tools

Here's the pattern: launch with generous limits to build habits, then tighten the screws once dependency is established.

We've seen this before. Netflix launched with one plan. Now you choose between ad-supported, standard, and premium, and you still don't get the sports. Disney Plus launched and immediately you needed Hulu for the back catalog. Spotify's podcast strategy requires you to also have Audible for the audiobooks.

AI subscriptions are doing the same thing, just faster and more technically complex. The base tier handles routine work. Anything interesting costs premium requests. Agentic workflows cost more still. Running the best model costs the most. And the overage rate (in Copilot's case, $0.04 per additional premium request) sounds cheap until you remember the multipliers.

Every platform is building the same kind of two-speed system. There's the slow lane that's included, and the fast lane that costs more. They advertise the fast lane but price you into the slow one.

---

## What does this actually cost a developer?

Let me put some numbers on the table for a working developer in 2026.

| Tool | Cost/month | What you get | The catch |
|---|---|---|---|
| GitHub Copilot Pro | $10 | 300 premium requests | up to 30x multipliers on advanced models |
| GitHub Copilot Pro+ | $39 | 1,500 premium requests | Session-level rate limits now too |
| Cursor Pro | $20 | ~225 effective requests | Credit model cut this from 500 in mid-2025 |
| Claude Pro | $20 | ~45 messages per 5h window | Shared across all Claude surfaces |
| Perplexity Pro | $20 | Unlimited research queries | Not a coding tool |

Total: $69 to $109 per month, before you hit a single hard limit. And you will hit limits.

---

## When is enough, enough?

That's the question worth asking, but it's a trap. "Enough" is moving. Six months ago, 500 Cursor requests felt like plenty. Now the benchmark has shifted because the workflows have changed. Agentic coding is the norm. Multi-file context is the minimum. Autonomous agents run tasks in the background without you watching. These use tokens you didn't budget for.

The answer isn't to subscribe to everything. It's to be deliberate about which tool does which job. Copilot for IDE integration and PR workflows. Claude for heavy reasoning, long context, and terminal-based agentic work. Perplexity for research. One coding IDE, not two.

The real danger is treating all of them as interchangeable and using whichever one your fingers land on. That's how you wake up on the 15th of the month with four exhausted quotas and two weeks to go.

> *They advertise the fast lane. They price you into the slow one.*

The AI subscription market wants you to feel like you're always just one more plan away from unlimited access. You're not. You're in a rate-limited world, and the limits are only getting more creative.

Pick your stack. Know your limits. Save your tokens.
