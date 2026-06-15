---
title: "The Kill Switch Just Clicked"
author: Roelant Dieben
authorSlug: roelant
date: 2026-06-15
excerpt: On June 12, the US government ordered Anthropic to pull Fable 5 and Mythos 5 offline for all foreign nationals. Every concern Europeans had about cloud dependency just got a lot louder.
tags: ai, anthropic, fable, export-control, governance, cloud, geopolitics
category: AI
---

On June 12, 2026, at approximately 5:21 p.m. Eastern time, Anthropic received a written directive from the US government.

> Suspend access to Fable 5 and Mythos 5 

The instruction was direct: suspend access to Fable 5 and Mythos 5 for all foreign nationals. Immediately.

Because Anthropic cannot reliably identify where its users are from in real-time, they did the only thing they could: they pulled both models offline for everyone, worldwide. Not just foreign nationals. Everyone.

> "They pulled both models offline for everyone, worldwide. Not just foreign nationals. Everyone."

---

## What happened

Fable 5 had been publicly available for exactly three days. Mythos 5, its more capable underlying counterpart, is a different story.

Before Fable 5 ever reached the public, Mythos 5 had been in the hands of US government agencies for review, with thousands of hours of access in controlled environments and with people whose entire job is to find national security risks in exactly these kinds of systems. Anthropic did not sneak this past anyone. The most capable version of this technology was reviewed, evaluated, and cleared by the very institutions that later issued the shutdown directive.

Then Fable 5 went public. Three days passed. And the directive arrived.

Both are what Anthropic calls Mythos-class models, the company's most capable systems to date. The underlying capability was not new to US officials. What was new was who had access to it.

> "The underlying capability was not new to US officials. What was new was who had access to it."

Within days of public release, US officials were informed of a possible jailbreak technique. The claim: a method involving code review and vulnerability discovery that could be used to defeat Fable 5's safeguards.

Anthropic disputes the severity. They call the jailbreak narrow and non-universal. They point out that similar capabilities exist in other publicly accessible frontier models. They say no universal jailbreak was demonstrated. They describe the situation as a misunderstanding.

They are also complying. Because they have to.

---

## Three things this breaks

**First: we just lost access to the most powerful model we had ever touched.**

Three days. That is how long most of us had with Fable 5 before it disappeared. Long enough to get a sense of what it could do. Not long enough to build anything serious with it. Not long enough to understand its limits. Just long enough to want more.

That sting is real. It is not the main story, but it is worth naming.

**Second: every European CTO who ever worried about cloud dependency just got handed a slide for their next board deck.**

For years, the conversation about European cloud sovereignty has circled the same question: *what happens if the US decides to flip a switch?* The standard pushback was always "that's theoretical," "that would take years," "the politics would never allow it."

It took three days.

Now, this is not a cloud infrastructure shutdown. No AWS regions went dark. No Azure tenants lost access to compute. This is targeted at a specific AI model from a specific company, for specific national-security reasons. Those distinctions matter.

But to the executive who has spent the last two years trying to build internal alignment on why European cloud infrastructure and sovereign AI investment deserves budget? This is not a theoretical risk anymore. It is a news story with a timestamp.

> "The question was always 'what happens if the US flips a switch?' It took three days."

**Third: taking a model offline is not governance. It is a panic button.**

Here is the part that should concern everyone watching the AI industry: the response to a potential jailbreak affecting one narrow capability domain was to shut down access for the entire planet.

Not to patch. Not to restrict specific use cases. Not to apply enhanced monitoring. Not to require additional verification for high-risk queries. To just... turn it off.

That is a blunt instrument applied to a precision problem.

The reason is partly understandable. Anthropic cannot reliably separate foreign nationals from other users in real time, so global suspension was the only compliant option available. But that limitation itself is a governance failure. If the infrastructure does not support targeted, granular access controls tied to identity and jurisdiction, the only lever available is the big one.

We have been talking about AI governance for years. Mostly in the abstract. This incident is a concrete example of what happens when the models are deployed before the governance architecture is. The answer cannot always be "take it offline."

We need frameworks for runtime mitigation. Capability throttling at the query level. Jurisdictional access controls that actually work. Jailbreak response protocols that are proportionate to the actual threat. These are hard problems. They are also urgent ones, and they have been on the roadmap long enough.

> "We deployed the models before we built the governance. The answer cannot always be 'take it offline.'"

---

## But maybe

There is something worth sitting with before we fully commit to outrage.

We do not know what the US government knows.

But here is what we do know: the agencies that issued the directive had already spent thousands of hours with Mythos 5. They were not reviewing a black box. They had access to the most capable version of this technology before the public ever touched Fable 5. Whatever the jailbreak is, their reviewers had every opportunity to find it first.

They apparently did not. Or if they did, it was not enough to block the release.

That is the question that does not have a clean answer. Either the jailbreak only became visible at public scale, which is plausible because adversarial testing by millions of users is categorically different from controlled review, or it was knowable during the agency window and missed. Neither option reflects well on the process that led to a global shutdown three days after launch.

Anthropic says the jailbreak is narrow. Anthropic also has an interest in characterising it that way. The government's directive did not include a detailed technical brief. That is frustrating and probably a communication failure. It is also not the same as the government being wrong.

If there is a genuinely viable technique for using Fable 5 to accelerate software vulnerability discovery at scale, and if that technique was spreading faster than Anthropic's ability to patch it, a temporary suspension might still be a reasonable precaution. The prior review window does not make the threat imaginary.

But it does make the timeline harder to explain. And it makes "we had no choice" harder to accept at face value.

We do not know the full picture. That is the honest answer.

What we do know is that this was described by multiple outlets as an unprecedented use of export-control powers to take deployed frontier AI models offline. The absence of a playbook is itself the problem.

---

## What comes next

Anthropic says it is working with US authorities to restore access. No timeline. No public criteria for what resolution looks like. Just "as soon as possible," which tells us nothing.

In the meantime, the rest of the world is watching.

The kill switch just clicked. What matters now is whether anyone uses this moment to build something better than a kill switch.

Because right now, that is all we have.
