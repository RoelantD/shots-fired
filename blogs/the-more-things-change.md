---
title: The More Things Change
author: Roelant Dieben
authorSlug: roelant
date: 2026-03-28
excerpt: AI is rewriting the rules of software development — or is it? A look at the fundamentals that never go out of style.
tags: ai, engineering, software development
category: AI
---

There is a particular kind of excitement in our industry right now. Every week brings a new model, a new agent framework, a new way to generate code, automate pipelines, or summarize documentation. It is thrilling. It is also, at times, deeply disorienting.

But here is the thing nobody is putting on the conference slides: the fundamentals have not gone anywhere. In fact, in a world where software can be generated at machine speed, where agents can write and execute code autonomously, and where the gap between "idea" and "running prototype" has shrunk to hours, the boring old disciplines of good software engineering have become more critical than ever. Not less. More.

This is not a "back in my day" column. This is a wake-up call.

## Garbage In, Garbage Out — Now At Scale

Let us start with specifications. Writing clear, precise, testable requirements has always been the unglamorous foundation of good software. Most developers have at some point shipped something perfectly functional that was completely wrong, because the spec was vague, assumed too much, or was written on a napkin at a planning meeting.

With code generation tools and agents, the spec is now your primary interface with your build process. When you prompt an agent to build a feature, you are writing a specification. A bad prompt produces bad code, fast. A good prompt, grounded in a well-understood requirement, produces something you can actually use and deploy.

The problem is that many teams are discovering this the hard way. They are generating thousands of lines of code per day and then spending just as long figuring out why none of it does what they actually wanted, or worse, follow the path of AI disillusionment where they stop using it altogether. The specification problem has not been solved by AI. It has been amplified.

If you could not write a clear user story before, you cannot write a clear prompt now. The skill is the same. The consequences of getting it wrong are just faster, more expensive, and snowball harder than before.

> A bad prompt produces bad code, fast. The specification problem has not been solved by AI — it has been amplified.

## Testing Is Not Optional, It Is Existential

Automated testing has been a known best practice for the better part of two decades. We know unit tests matter. We know integration tests matter. We have TDD, BDD, contract testing, and shift-left strategies. And yet, test coverage in many codebases is still embarrassingly thin, or none-existent.

Now consider what happens when you generate code with an agent that has no test suite to run against. You have no idea what you have got. The agent will confidently produce code that compiles, runs, and is completely broken in ways that will only surface in production at 2am on a Friday.

Tests are the feedback mechanism for generated code. Without them, you are flying blind at a higher altitude. A well-tested codebase gives an agent something to work against: a definition of correctness that is machine-readable and ruthlessly objective. With good tests, you can iterate fast. Without them, you are just gambling.

Testing has also acquired a new dimension: evaluations. When your system includes AI-generated outputs, how do you know if those outputs are any good? Evals are just tests for probabilistic systems. The concept is identical. The skill set is identical. Teams that have always taken testing seriously are building robust AI-powered systems. Teams that have always skipped it are finding that skipping it now is even more costly.

> Tests are the feedback mechanism for generated code. Without them, you are flying blind at a higher altitude.

## If It Is Not Documented, It Does Not Exist

Documentation has always been the discipline that developers love to skip and hate to miss. The classic scenario: you join a new team, the senior engineer who built the core system left eight months ago, and the documentation consists of three bullet points in a Confluence page that nobody has updated since 2019.

Now imagine that system is being maintained by an AI agent. The agent has no institutional memory. It cannot phone a colleague. It can only work with what is in front of it: the code, the tests, and the documentation. If the documentation is absent or wrong, the agent will make assumptions. Those assumptions will be wrong in ways that are subtle and hard to detect.

Good documentation has always served future developers. Now it also serves your automated systems. Every Architecture Decision Record you write, every README you keep current, every API specification you maintain, is training data for the humans and agents that come after you. The investment compounds faster than it ever did before.

## The Feedback Cycle Determines Everything

Short feedback loops are one of the core principles of modern software development. The CI/CD movement, the shift to agile, the whole DevOps philosophy, all of it is fundamentally about reducing the time between writing code and knowing whether it works. The faster you break it, the faster you learn, the faster you improve.

With agents in the loop, this becomes even more pressing. An agent running without a tight feedback cycle will confidently go in the wrong direction for a very long time. The cost of a misaligned agent working autonomously for four hours is orders of magnitude higher than the cost of a developer doing the same. Developers pause, second-guess themselves, check in with a colleague. Agents do not.

If your pipelines are slow, if your test suites take forty minutes to run, if you only find out something is broken when a user reports it, you are already behind. With agentic systems in your workflow, you are handing the wheel to someone who cannot see the road. Invest in fast pipelines. Instrument everything. Make failures visible and immediate.

> An agent running without a tight feedback cycle will confidently go in the wrong direction for a very long time.

## Communication Is Still a Human Problem

Here is an uncomfortable truth: the hardest problems in software development have never been technical. They have been organizational. Building the right thing requires alignment between the people who understand the business and the people who build the software. That alignment is achieved through conversation, iteration, trust, and clear communication. No tool has ever changed this.

What AI tools are very good at is solving technical problems that have been clearly framed. What they are very bad at is figuring out what problem you actually need to solve. That is still a human job. Product managers, architects, engineers, and stakeholders still need to sit in a room (or a call) and argue about what to build and why. The output of that conversation needs to be written down clearly (by an AI) before anyone, human or AI, starts building.

If anything, the speed at which you can now build prototypes makes the upfront communication work more important, not less. You can now build the wrong thing remarkably fast. Getting alignment right before you start is your best protection against that.

## Guardrails Are Not Bureaucracy. They Are Engineering.

Policies, governance, security controls, access management, audit logging. Every organization has a version of the conversation where someone calls these things "red tape" and tries to move fast by ignoring them. This is not new and certainly has always been a bad idea. In agentic systems, it is now genuinely dangerous as well.

When software systems can take actions autonomously, read data, write to databases, call external APIs, and trigger workflows, the blast radius of a poorly scoped agent or a misconfigured system is enormous. Guardrails are not there to slow you down. They are your primary mechanism for keeping probabilistic systems within predictable bounds, and ensuring that when something goes wrong, the damage is contained.

This includes all the basics: least-privilege access, input validation, rate limiting, output filtering. But it also includes the less glamorous work of defining what your AI systems are and are not allowed to do. That is a policy question before it is a technical question. Organizations that skip this step are accumulating risk at a rate they do not fully appreciate...yet.

## Observability: You Cannot Fix What You Cannot See

This one has grown in importance so steeply that it deserves its own mention: observability, knowing what your system is doing, why, and when, has always been a mark of mature engineering. Logs, metrics, traces. With agentic systems, that definition expands: you also need to know what context the agent was operating with when it made a decision, the prompt, the state, the memory, the tools available. The teams that invest in this level of observability fix incidents faster, build more reliable systems, and sleep better.

With AI components in your stack, the observability challenge is harder and the stakes are higher. An AI component that behaves unexpectedly is much harder to debug than a traditional function with deterministic outputs. You need to know what inputs it received, what it returned, how long it took, and whether its outputs were within expected ranges. For AI components, that last point has a name: evaluations. Tracking eval scores over time is observability for output quality, the equivalent of a latency graph, but for correctness. Without that visibility, you are not operating a system. You are flying blind, and hoping that whatever you land on turns out to be solid ground.

## Version Control and Reproducibility

You would think this one goes without saying. And yet. Prompt engineering is code. Agent configurations are code. Fine-tuned models and their training data are artifacts that need to be versioned. The principle has not changed: if you cannot reproduce it, you cannot trust it, and you cannot fix it when it breaks. With probabilistic systems, that bar is harder to clear than it has ever been. The same inputs will not always produce the same outputs, which means versioning the code is necessary but not sufficient. You also need to capture the model version, the configuration, and enough context to reconstruct why a given result was produced.

Version everything. Review changes. Use branches. Write meaningful commit messages. These habits that good engineers developed over decades apply just as much to your AI-powered workflows as to your traditional codebase.

## The Boring Stuff Was Never Boring

There is a temptation, when something new and exciting arrives, to assume that it has made the old disciplines obsolete. It rarely does. Usually what it does is raise the stakes for getting those disciplines right.

The teams that will build the best things with AI are not the ones who were fastest to adopt the new tools. They are the teams that already had solid foundations: clear requirements, good tests, proper documentation, short feedback loops, strong communication practices, and sensible governance. AI gives those teams a significant multiplier on their existing strengths.

For everyone else, AI will multiply their existing weaknesses just as efficiently.

The fundamentals were never glamorous. They were never the thing you put on a slide at a conference. They are however the thing that separates teams that ship confidently from teams that are permanently on fire, and not in a good way.

Write the spec. Write the tests. Write the docs. Talk to each other. Put guardrails in place. Measure everything.

None of this is new. That is exactly the point.
