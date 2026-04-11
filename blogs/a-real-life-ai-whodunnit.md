---
title: A Real-Life AI Whodunnit
author: Roelant Dieben
authorSlug: roelant
date: 2026-04-08
excerpt: AI is solving problems that stumped humans for decades. But read the fine print. There was a human in every room.
tags: ai, research, mathematics, collaboration
category: AI
---

A researcher at [VUB sat down with ChatGPT](https://press.vub.ac.be/chatgpt-can-autonomously-provide-mathematical-proofs) and, across seven chat sessions and four evolving versions of the argument, produced a formal proof for a geometry conjecture that had been sitting unproven since 2024. The headline wrote itself: AI solves unproven math problem.

Except, read the paper. The researcher was there for all of it. Steering. Evaluating. Deciding when version three was close and version four needed to go further. The proof did not fall out of a chatbox. It emerged from a collaboration, and one half of that collaboration knew what a valid proof was supposed to look like.

That detail keeps getting buried. And it is the most interesting part.

> The proof did not fall out of a chatbox. A human who knew what "correct" looks like was in the room the entire time.

## The Pattern Keeps Showing Up

It is not just geometry. GPT-5.2 has been working through Erdős problems, a collection of over a thousand conjectures assembled by the Hungarian mathematician Paul Erdős that have become something of an informal AI proving ground. Since Christmas, eleven of them have seen meaningful progress. Fields medalist [Terence Tao reviewed the results](https://mathstodon.xyz/@tao/115855840223258103) and noted, carefully, that AI is better suited for the long tail of obscure problems than for the hardest ones. The distinction matters.

[Claude helped solve a problem](https://boingboing.net/2026/03/03/donald-knuth-the-godfather-of-computer-science-says-an-ai-solved-a-math-problem-he-was-stuck-on-for-weeks.html) that had stumped one of the greatest computer scientists alive. It took 31 attempts. It failed repeatedly, changed approaches, got stuck, and at one point apparently could not even run its own code correctly. A human was steering the session throughout. When Claude finally found a construction that worked, the human wrote the rigorous proof. Those are different things, and the difference matters.

> 31 attempts. One human steering. The machine found the construction. The human wrote the proof.

UCLA Professor Ernest Ryu spent 15 years in optimization theory and tested ChatGPT-3.5 in 2023, decided it was not ready, and moved on. When GPT-5 arrived, he tried again. He ended up [co-solving a 40-year-old open problem](https://openai.com/index/gpt-5-mathematical-discovery/) in his field. He did not expect that to happen. Neither did anyone else.

## The Benchmark Problem

Meanwhile, the AI research community is quietly having an argument about whether any of this is being measured right. Models now score above 90% on MMLU, the benchmark that was supposed to test broad knowledge across history, law, science, and more. So researchers built a harder one, [Humanity's Last Exam](https://arxiv.org/abs/2501.14249), with 2,500 questions written by domain experts. The best model scores 44.7%. Benchmarks keep getting retired the moment AI gets too good at them.

> Benchmarks keep getting retired the moment AI gets too good at them.

But [MIT Technology Review published a sharp piece](https://www.technologyreview.com/2026/03/31/1134833/ai-benchmarks-are-broken-heres-what-we-need-instead/) last week arguing that the whole AI-versus-human framing is the wrong lens. AI is almost never used the way it is benchmarked — in isolation, on a clean problem, with a clear right or wrong answer. Real use happens inside messy workflows, with multiple people, over extended periods of time. A score on a geometry benchmark tells you something. It does not tell you what happens when a researcher and a model spend a week together working on a hard problem.

## What Is Actually Changing

[Claude Opus 4.6 can now complete programming tasks](https://www.anthropic.com/research/long-running-Claude) that a human would take 12 hours to finish. Six months ago, the record was 3 hours, held by GPT-5. The capability is compressing fast.

But notice what that framing actually describes. A human is still deciding which task to assign. A human is still reviewing what comes back. A human is still responsible for whether the thing that gets shipped is correct. The work is not disappearing. The shape of it is changing.

> The work is not disappearing. The shape of it is changing.

Vibe-proving — the VUB team's term for using language models to explore and structure high-level theoretical reasoning — is a useful frame. It rhymes with vibe-coding, which started as AI autocomplete and is now producing production software with minimal hand-holding. The question the researchers explicitly raised is whether vibe-proving will follow the same trajectory.

If it does, the human in that loop will not disappear. They will just be doing what they were already doing in the math examples: knowing what right looks like, catching what is wrong, and deciding where to push next.

That is not a small job. It is just a different one than we thought we were training for.

> At some point the human stops being the one who does the work and becomes the one who decides what work is worth doing.

And it is going to keep changing. The gap between "AI found the construction" and "AI wrote the proof" is closing. The gap between "AI completed a 3-hour task" and "AI completed a 12-hour task" closed in two months. At some point the human in the loop stops being the one who does the work and becomes the one who decides what work is worth doing.

We are not there yet. But the job listings are already being rewritten.
