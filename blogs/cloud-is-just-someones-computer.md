---
title: Stuart Is Typing…
author: Stuart van der Lee
authorSlug: stuart
date: 2026-03-15
excerpt: Stuart has a lot of thoughts about cloud. He will share them very soon. Any minute now. We are all waiting.
tags: cloud, architecture, azure
---

There was a time when that sentence was a joke. You would see it on a t-shirt at a conference, printed under a cartoon of a server rack with a smiley face. It was the kind of thing a sceptic said when they wanted to dismiss the hype. Fair enough — the hype deserved some scepticism. But somewhere along the way, the joke became the most expensive misunderstanding in enterprise IT history.

Because the teams that repeated it and meant it — the ones who genuinely believed that cloud was just a different hosting model — are the same teams now paying for sprawling architectures that are slower, more expensive, and harder to manage than what they replaced. They moved to the cloud. They just did not move into it.

This piece is for them. And for every architect who has ever inherited their work.

## The Migration That Was Not a Migration

Let us be precise about what actually happened in most organisations during the great cloud push of the last decade. A server was virtualised. That virtual machine was picked up and deposited into a cloud provider's data centre. A ticket was closed. Migration: complete.

This is not cloud adoption. This is co-location with extra steps. The organisation still manages the operating system. It still patches it, sizes it, monitors it, and worries about it at three in the morning. The only thing that changed is whose floor the physical hardware sits on.

> Lift and shift is not cloud migration. It is virtualisation with a monthly invoice and fewer excuses.

The cloud providers know this, of course. They have entire teams dedicated to helping customers move up the stack — from IaaS to PaaS to serverless — because those customers have dramatically better outcomes and significantly higher spend. The incentive is aligned. The advice is sound. And most organisations ignore it anyway, because moving workloads is hard and changing architectures while keeping the lights on is even harder.

The cost of that avoidance compounds. Every month that a workload runs on a virtual machine that could run as a managed service is a month of operational overhead that did not need to exist.

## Architecture Is a Series of Bets

Here is the thing that took me years to fully internalise: every architectural decision you make in the cloud is a bet. You are betting on a service staying available. On a pricing model holding. On a latency profile being acceptable. On a vendor being the right long-term partner. These are reasonable bets — cloud providers have earned significant trust — but they are bets nonetheless, and you should make them consciously.

The teams that get into trouble are the ones who do not know they are gambling. They choose a technology because it was there, because a blog post recommended it, because the demo looked good. They do not ask: what happens if this service is deprecated? What happens if our usage pattern falls outside the pricing sweet spot? What happens if we need to move?

> The ceiling of what you can build is determined by the foundation you lay in the first six months.

None of this means you should design for portability at all costs. Abstract everything into a lowest-common-denominator layer and you have thrown away most of the value that cloud platforms offer. The managed services, the native integrations, the platform-specific capabilities — these are not lock-in traps. They are leverage. Use them. But use them with your eyes open.

The discipline is knowing which bets you are making, why you are making them, and what the exit looks like if you are wrong. Most architectural regrets I have seen do not come from choosing the wrong service. They come from not knowing a choice was being made at all.

## The Cost Problem Nobody Talks About

Cloud costs are a software engineering problem. This is not obvious to everyone, and it should be.

In on-premises environments, hardware is a capital expense. You buy it, you depreciate it, and you use it until it falls apart or becomes a bottleneck. Waste is invisible because the money is already spent. In the cloud, waste runs on a meter. Every idle compute resource, every over-provisioned database, every misconfigured storage tier, every API call that did not need to happen — they all show up on the invoice.

The teams that manage cloud costs well are not the ones with the best FinOps dashboards. They are the teams with the best engineering culture. They instrument their workloads. They understand their scaling patterns. They review their architecture regularly. They treat cost as a first-class engineering concern rather than a finance team problem.

> Cloud costs are a software engineering problem. If your developers cannot explain your bill, your architecture is opaque.

I have worked with organisations where the engineering team could not tell you what was driving their cloud spend. They knew the total. They did not know the breakdown. That is not a billing problem — it is an observability problem, and it is an architecture problem. When your system is a black box to the people who built it, you have lost something important.

Tagging strategies, cost allocation, rightsizing exercises — these are not administrative tasks. They are engineering hygiene. The discipline of understanding where your money is going forces you to understand how your system actually behaves. That understanding makes you a better architect.

## Reliability Is Designed, Not Inherited

One of the persistent myths of cloud adoption is that moving to the cloud automatically makes your system more reliable. The cloud provider has redundant power, redundant networking, redundant everything. Surely that reliability flows downstream to you?

It does not. Not automatically. Not even mostly.

Cloud providers are extraordinarily reliable at the infrastructure level. The services they offer are designed with multiple nines of availability. But your application runs on top of those services, and your application's reliability is entirely your responsibility. If your application has a single point of failure — a single database instance, a single availability zone, a single queue that everything depends on — the cloud cannot save you when it fails. The infrastructure beneath it may be bulletproof. The architecture on top of it is not.

Reliability in the cloud is designed. It means thinking about failure modes at every layer. It means using availability zones deliberately. It means designing for graceful degradation rather than clean success paths only. It means chaos engineering, load testing, and runbooks that have actually been rehearsed.

The organisations that have genuinely high reliability are not the ones with the best SLAs from their cloud provider. They are the ones that have made reliability a design principle from the first architecture review, and have never stopped asking: what breaks next, and what happens when it does?

## What a Decade Actually Teaches You

If I had to compress ten years of cloud architecture work into something useful, it would be this: the cloud rewards intentionality.

Every decision you make consciously — the service you choose, the redundancy pattern you implement, the cost model you optimise for, the migration path you design — pays compounding dividends. Every decision you make by default, by inertia, or by not realising you are making a decision at all, becomes technical debt at cloud scale.

The teams that are genuinely good at cloud are not the ones who know the most features. They are the ones who ask the most questions before they build anything. Why this service? Why this region? Why this tier? What is the failure mode? What does scale look like? What does the exit look like?

The cloud is not just someone else's computer. It is an entirely different way of thinking about infrastructure, reliability, cost, and operations. The teams that understood that early built remarkable things. The teams that are still figuring it out have a lot of migrations ahead of them.

Start asking the questions now. Your future self will be grateful.
