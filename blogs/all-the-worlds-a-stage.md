---
title: All the World's a Stage. Your LLM is the Lead Actor.
author: Roelant Dieben
authorSlug: roelant
date: 2026-04-11
excerpt: An LLM has no fixed identity. No opinions. No defaults beyond the statistical average of everything it was trained on. Until you talk to it, it is an actor standing in the wings with no role, no script, and no idea what scene it's walking into. And you've been directing it like an intern on their first day.
tags: ai, developer tools, prompting
---

Shakespeare wrote that all the men and women are merely players. He didn't have access to GPT-4, but the metaphor holds up surprisingly well. An LLM has no fixed identity. No opinions. No defaults beyond the statistical average of everything it was trained on. Until you talk to it, it is an actor standing in the wings with no role, no script, and no idea what scene it's walking into.

Most developers treat it like a search engine. They type a question. They get an answer. They complain that the answer is mediocre. Then they try a different model.

The model isn't the problem. The direction is.

## Act I — What directors actually do

A great film director doesn't walk onto set and say "okay, be good." Before the camera rolls, they've given their lead actor everything they need: who the character is, where the scene takes place, what the emotional stakes are, what happened just before this moment, and what they want the audience to feel when it's over.

That's a system prompt. That's context. That's the difference between a model that hedges everything and gives you corporate soup, and one that writes with voice, makes confident decisions, and stays in character when things get complicated.

> "You are a senior developer reviewing a pull request. You are direct. You don't soften criticism. You care more about maintainability than feelings. The codebase is a .NET 8 API."

That's not a prompt. That's a director's brief. And the performance that follows will be categorically different from "review my code."

## Act II — Hallucination is bad improv

Here's where the metaphor gets genuinely useful for developers. Hallucination isn't a bug in the traditional sense. It's what happens when a talented actor is put on stage with no script, no character, no scene partner, and an audience expecting something specific. They improvise. Sometimes brilliantly. Often disastrously.

Good improvisational theatre has rules. The famous "yes, and" principle only works because the actors have agreed on a shared reality before they walk out. They know who they are, where they are, and what the scene is about. Without that grounding, improvisation collapses into noise.

Take Curb Your Enthusiasm. It looks like pure chaos. Larry David wandering through LA, offending everyone in earshot, no script in sight. But it isn't undirected. Every episode starts with a detailed outline: the setup, the characters, the beats that need to land, the point of conflict. The actors improvise the dialogue, but inside a carefully constructed scene. Larry David the showrunner is always directing Larry David the actor. The freedom only works because the structure exists.

LLMs are the same. When you give a model a well-grounded context, it has guardrails. It knows what kind of answer belongs in this scene. When you give it nothing, it fills the void. And the void, it turns out, is where confident-sounding nonsense lives.

```scene:The bad brief
"What's the best way to handle authentication in my app?"
```

The model doesn't know what your app is. It doesn't know your stack, your threat model, your team size, or whether "best" means most secure, fastest to ship, or cheapest to maintain. So it gives you the Wikipedia version of authentication. Technically correct. Completely useless.

```scene:The director's brief
"I'm building a .NET 8 Web API used by a B2B SaaS product. Users authenticate via Azure AD. We're adding a new public-facing endpoint that third-party developers will call with an API key. What's the right approach for issuing, storing, and validating those keys, given we already have Entra ID in place?"
```

Now the model has a scene to play. It knows the stack. It knows the context. It knows what "best" means in this specific situation. The improvisation is bounded by reality, and bounded improvisation is where LLMs shine.

## Act III — The practical directing toolkit

You don't need to write a novel every time you open a chat window. Directors are efficient. They know which details matter and which don't. And the details that matter are usually the ones that come from actual human experience — the stuff a model cannot infer from your one-line question.

Here's the short list for developer prompting:

**Set the scene.** What is the codebase? What language, framework, version? What constraints exist that the model can't see? You know your codebase has a legacy authentication module held together with prayers and a comment that says "don't touch this." The model doesn't. Tell it.

**Cast the character.** Who do you want answering this? A cautious architect? A pragmatic senior engineer? Someone who will tell you when your approach is wrong rather than just completing the task? You've worked with both types. You know which one you need right now.

**Define success.** Is this for production? A prototype? A code review? The answer to "how should I structure this" is completely different depending on whether you're shipping tomorrow or building for the next five years. Only you know which deadline is real and which one slipped three sprints ago.

**Give the stakes.** What breaks if this goes wrong? What have you already tried? What constraints are non-negotiable? The model has no scar tissue. It hasn't been paged at 2am because someone thought that approach was fine. You have. Use that.

```
Role:     Senior .NET architect, blunt, pragmatic
Stack:    .NET 8, Azure, Entity Framework Core, React frontend
Context:  B2B SaaS, ~50k daily active users, 3-person backend team
Goal:     Production-ready, not prototype-ready
Tone:     Skip the caveats. If my approach is wrong, say so.

// This isn't boilerplate. This is the director's brief.
// Everything that follows will be shaped by it.
```

You can bake this into a custom GPT, a system prompt in your IDE extension, or just keep it as a snippet you paste. The point isn't the format. The point is that the model needs to know what scene it's in before you call action.

## Epilogue — The actor is only as good as the direction

The discourse around LLMs is obsessed with model quality. Which model is smarter. Which one hallucinates less. Which one is worth the API cost. That's a reasonable conversation, but it's putting all the blame on the actor when the real problem is the direction.

The best actors in the world have given terrible performances under bad directors. And remarkably good performances have been coaxed out of limited actors by directors who knew exactly what they needed and communicated it clearly.

Your LLM is standing in the wings. It has no idea what kind of developer you are, what you're building, what you value, or what a good answer looks like for your specific problem. It is waiting for direction.

So give it some.
