---
title: Your FinOps Tooling Has No Idea
author: Roelant Dieben
authorSlug: roelant
date: 2026-03-31
excerpt: Your FinOps tooling was built for workloads that humans start and stop. Agents don't work that way, and the gap between what your dashboards show and what your agents are actually spending is growing faster than most teams realize.
tags: azure, foundry, ai, agents
category: FinOps
---

FinOps was built on a reasonable assumption: a human starts a workload, a human stops it, and somewhere in between you tag it, track it, and optimize it. That model held up well for a decade of cloud infrastructure. Agents break it completely.

When an agent runs, it doesn't clock in. It doesn't carry a cost center tag. It calls a tool, which spins up compute, which calls another service, which triggers a subagent. None of that chain has an owner in the sense your FinOps dashboard understands. By the time your monthly report surfaces the anomaly, the spend already happened.

> 98% of FinOps teams now manage AI spend as part of their scope

This isn't a future problem. According to the State of FinOps 2026 (the FinOps Foundation's annual survey covering 1,192 practitioners representing over $83 billion in cloud spend), 98% of FinOps teams now manage AI spend as part of their scope, up from 31% just two years ago. That jump looks like progress. It isn't. Managing AI spend and having visibility into agentic workloads are two very different things, and the report is clear on where the gap sits: the top three challenges cited by practitioners are:
1. visibility into AI costs,  
2. allocating those costs to business units,  
3. determining ROI.  

One practitioner put it plainly: *"Is your AI providing value? No one can answer that question yet."*

## The Blind Spots Are Structural

The problem isn't that FinOps teams aren't paying attention. It's that the instrumentation they rely on wasn't designed for how agents actually behave.

**Agents don't tag themselves.** Traditional cost attribution works because you know what deployed a resource: a pipeline, a team, a project. An orchestrator agent calling a chain of subagents generates compute that belongs to nobody in your tagging taxonomy. The cost lands somewhere generic, or worse, gets absorbed into a shared pool where it's invisible.

**Token costs compound in ways dashboards don't model.** The FinOps Foundation calls this Context Window Creep, and it's the single largest hidden cost in most production AI applications. Every turn in an agent's reasoning chain re-bills the full conversation history. If an agent sends an image in turn one, that vision processing fee gets charged again on turn two, turn three, and every turn after. Silently, lumped in with text token costs. An agent working through a 20-step task isn't paying for 20 steps. It's paying for the sum of all context at each step, growing with every iteration.

> The correct metric is Cost Per Autonomous Action (CPAA)

**Failure rates double your effective costs.** Most teams measure cost per token or cost per inference. Neither of those tells you what you actually paid to get a successful outcome. The correct metric is Cost Per Autonomous Action (CPAA): the total cost of tokens, tool fees, and infrastructure, divided by your success rate. An agent action that costs $0.50 to run but succeeds 50% of the time costs you $1.00 per successful result. And that's before you count the human intervention required to clean up the failed attempts. No standard FinOps tool tracks this by default.

**Loops are invisible until they're catastrophic.** An agent caught in a reasoning loop (planning, critiquing, retrying) generates a multiplier effect on costs that traditional anomaly detection misses entirely because it's looking at resource utilization patterns, not behavioral patterns. The $400 million in unbudgeted agentic spend estimated across the Fortune 500 in 2026 isn't the result of reckless decisions. It's the result of agents doing exactly what they were designed to do, in environments where nobody put a ceiling on how far they could go.

## This Is the DevSecOps Problem, Repeated

If this sounds familiar, it should. The security industry spent most of the 2010s fighting the same structural battle. Security was bolted on at the end of the delivery pipeline, treated as a gate rather than a discipline, and teams consistently shipped vulnerabilities because the checks came too late to change anything. DevSecOps didn't solve that by adding more security reviews. It solved it by moving security left: making it a design constraint, an architectural requirement, something that shaped decisions before a line of code was written.

> New shift-left battles ahead, but this time for FinOps

Agentic FinOps needs the same shift. Right now, cost governance for agents is almost entirely reactive: dashboards, alerts, monthly reviews. That works when your workloads are predictable. Agents are not predictable. Their costs scale with behavior, not with user count or compute allocation. The only way to govern that effectively is to build the constraints into the design.

## What Shifting Left Looks Like in Practice

Concretely, this means treating cost governance as a deployment requirement rather than a monitoring layer.

Every agent needs an identity, not just a name, but a trackable entity that carries cost attribution through every tool call and subagent invocation it generates. [Microsoft Foundry's distributed tracing](https://learn.microsoft.com/en-us/azure/foundry/observability/concepts/trace-agent-concept), built on OpenTelemetry and integrated with Application Insights, gives you visibility into LLM calls, tool invocations, and inter-service dependencies across a multi-agent workflow. That's the foundation. But visibility without limits is just a better view of the damage.

Hard limits on reasoning depth and tool call frequency should be architectural constraints, set at design time, not alerts configured after the first expensive incident. Model routing (sending simple formatting tasks to a cheaper, faster model and reserving high-reasoning models for genuinely complex decisions) cuts costs significantly without degrading outcomes, but only if it's built into the agent's decision logic from the start, and can lead to other challenges.

Unit economics need to shift from tokens to outcomes. The question isn't "how many tokens did this agent use?" It's "what did each successful action actually cost, and is that cost justified by the value it generated?" That reframe requires instrumenting for CPAA, which requires knowing your failure rate, which requires tracing individual agent runs end to end. That's now available natively in Foundry's observability plane, but only if you turn it on and design your agents to surface the right signals.

## The Discipline That Doesn't Exist Yet

The uncomfortable reality is that Agentic FinOps isn't a mature discipline. The tooling is catching up. [Foundry's control plane](https://learn.microsoft.com/en-us/azure/foundry/control-plane/overview), Azure Monitor integration, model routing, and the [Agent Pre-Purchase Plan](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/agent-pre-purchase) are real capabilities. But the frameworks for using them as a coherent governance practice are still being written.

What's clear is the direction. The teams that get this right won't be the ones with the most sophisticated dashboards. They'll be the ones that stopped treating cost governance as something you add after your agents are running, and started treating it the same way good engineering teams now treat security: as a property of the system, designed in from the start.

Your agents are going to spend money you didn't budget for. The question is whether you find out in the architecture review or in the invoice.
