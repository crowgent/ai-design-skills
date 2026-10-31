# Design strategy

Use this guide when a design choice depends on who the experience serves, what it promises, or how someone gets to an outcome. Apply it to new work, audits, and redesigns. Scale discovery to the cost of being wrong: do not turn a low-risk screen adjustment into a research project, and do not treat a consequential promise as a styling detail.

## At a glance

| Stage | Decision to make | Useful output |
|---|---|---|
| Frame | Who is acting, in what context, toward what outcome? | User-and-task statement |
| Ground | What is known, observed, assumed, or still missing? | Evidence ledger and open questions |
| Trace | What must happen before, during, and after the key action? | Journey or task path |
| Prioritize | What must be understood first, and what can wait? | Ordered content and action hierarchy |
| Commit | Why is this design the right response? | Compact decision record |
| Verify | What can be checked now, and what requires testing? | Quality-gate results and next test |

## 1. Frame the audience, task, and stakes

Describe the work in terms of a person and their situation, not a page type alone. Capture the likely prior context, the job they need to do, what success looks like to them, and the consequence of failure or confusion. Keep the person's outcome distinct from the organization's proxy metric.

> **Frame:** When **[person/group]** is **[situation]**, they need to **[task or decision]** so they can **[user-valued outcome]**. The cost of getting this wrong is **[consequence]**.

Choose the primary mode; note secondary modes only when they change the design:

| Mode | The design primarily needs to… |
|---|---|
| Offer evaluation | Make a proposition understandable and support an informed next step |
| Product task | Help a person act, interpret system feedback, and recover when needed |
| Shared identity | Keep related surfaces recognizable while meeting different local needs |
| Existing experience review | Find the causes of a real usability or communication problem before changing it |
| Learning prototype | Make a consequential uncertainty concrete enough to inspect |

**Gate — framing:** Can a teammate state the audience, immediate task, user-valued outcome, and primary risk without relying on “more engagement” or “make it modern”? If not, clarify those points before choosing a visual direction.

## 2. Establish what the evidence can support

Use the strongest available evidence for the claim being made. A source can be reliable for one question and irrelevant for another—for example, product analytics can describe observed behavior but cannot explain a person's motivation by itself.

### Evidence ladder

| Evidence class | Examples | How to use it |
|---|---|---|
| Direct, current evidence | Observed task sessions, current product behavior, approved policy, verified pricing | Treat as a constraint or finding within its stated scope |
| Corroborated evidence | Repeated support themes, consistent research and analytics, independently checked source material | Use with scope and date; preserve meaningful disagreement |
| Indirect signal | Stakeholder recollection, an isolated report, broad market convention | Form a hypothesis; seek a check when the decision is consequential |
| Unverified input | Assumption, placeholder, generated example, unsourced performance statement | Do not present as fact; label, neutralize, or omit |

Keep working notes in four buckets: **verified**, **observed**, **inferred**, and **unknown**. For each consequential item, record where it came from, who can confirm it, and when it was last checked. Treat conflicts as conflicts; do not average them into false certainty.

### Handle unknowns deliberately

1. Ask for clarification when the answer could change a user commitment, eligibility, safety, privacy, legal meaning, product capability, or core journey.
2. If the unknown is reversible and low-impact, state a bounded working assumption and continue.
3. If a safe neutral treatment exists, avoid specificity until evidence arrives.
4. If no responsible choice is possible, mark the decision blocked rather than inventing content.

Never turn an assumption into a customer quote, endorsement, outcome, price, comparative advantage, guarantee, security statement, or compliance claim.

### Risk-based discovery

Spend discovery effort according to **impact × uncertainty × irreversibility**. A cosmetic choice can usually be prototyped and inspected. A claim that changes a purchasing decision, a flow that can lose user data, or a permissions model needs stronger evidence and review before release.

| Risk | Typical response |
|---|---|
| Low: easy to undo, little user consequence | Inspect the current screen and context; proceed with a stated assumption |
| Medium: changes comprehension, navigation, or an important routine | Review representative content and edge cases; validate with a quick walkthrough or prototype |
| High: affects money, safety, access, privacy, rights, or an important claim | Confirm authoritative sources and owners; test critical paths; obtain required specialist approval |

## 3. Map the route to a meaningful outcome

For an offer or conversion journey, trace the person's expectation from its source—search, referral, campaign, prior conversation—to the page, commitment, and next state. The promise should remain consistent across that boundary. Identify prerequisites, cost or effort, likely objections, what information is requested, and what happens after the action.

For a product task, map the actual sequence: entry condition → choice or input → system response → completion evidence → recovery path. Include interruption, empty, loading, error, and permission states when they can change the outcome. A press or submission is not proof that the task succeeded.

Use this compact path to identify missing support:

```text
context → user question → answer → proof or system feedback → next step → resulting state
```

For each transition, ask: what does the person expect, what does the interface communicate, and what can go wrong? Put reassurance and recovery near the point where uncertainty appears.

## 4. Order information around the decision

Prioritize content by the questions that block understanding or action, not by a familiar page template. A typical sequence is: orientation, relevance, explanation, evidence, conditions, action, and confirmation—but change the order when the user's situation demands it.

Decide explicitly:

- What must be understood in the first view for the intended task to make sense?
- Which evidence belongs beside the statement it supports?
- Which terms, limits, prerequisites, or costs must be visible before commitment?
- What can move to a secondary route without hiding information needed for consent or completion?
- What confirmation or next-step guidance closes the journey?

Prefer one clear primary action. Add a secondary action only when it serves a distinct need and its consequence is obvious. Ask only for information needed now; explain unusual or sensitive fields, preserve entries after errors, and make the completion state explicit. In a product, retain familiar navigation unless evidence identifies a real problem; do not hide required controls merely to simplify the composition.

## 5. Verify claims at the point of use

Maintain a short claim ledger for any statement likely to affect a choice. Keep the evidence close to the statement in the experience as well as in the working record.

| Claim or implication | Source, owner, date | Scope and caveat | Status and treatment |
|---|---|---|---|
| Feature, outcome, comparison, price, testimonial, security, or guarantee | Traceable source and accountable owner | Population, period, conditions, exclusions | Approved wording, qualify, replace, or remove |

If an outcome cannot be substantiated, describe the verified mechanism instead of promising its result. If the source is stale, ask for revalidation. Clearly label illustrative or sample material where it could be mistaken for actual customer, product, or performance data.

**Gate — claims:** Every decision-shaping claim has a current source and appropriate scope, or has been rewritten neutrally, labeled as illustrative, or removed. No visual polish can compensate for a misleading statement.

## 6. State the design argument

Before detailed production, write a short thesis that links the user need, the strongest relevant product truth, and the presentation choice that makes that truth easier to understand. Include one deliberate restraint, such as delaying a secondary choice or avoiding unsupported specificity.

Generate alternatives only when requested or when the evidence reveals a real strategic fork. Make alternatives differ in user path, explanation, or proof—not just surface styling. Record the trade-off and who chooses the direction.

## 7. Keep a compact decision record

For substantial work, keep one small record that another designer or reviewer can use to understand and challenge the choices. Update it when a material decision changes.

```text
Audience and situation:
Task / offer and user-valued outcome:
Evidence relied on (source + date):
Key unknowns and assumptions:
Journey and content order:
Design thesis and primary action:
Risks, owners, and unresolved decisions:
Success signal / guardrail:
Validation performed; not yet tested:
```

For a small change, reduce this to **issue → user consequence → decision → verification**. Do not describe an untested hypothesis as a result.

## 8. Quality gates

### Before design
- [ ] Audience, context, task, user outcome, and consequence are stated.
- [ ] The evidence ledger separates verified information from observation, inference, and unknowns.
- [ ] Discovery effort matches impact, uncertainty, and reversibility.
- [ ] The route includes the real next state and at least one relevant recovery path.
- [ ] Content order answers the user's blocking questions; material conditions appear before commitment.
- [ ] Claims have sources, scope, and an owner—or are neutralized or removed.

### Before handoff or release
- [ ] The primary action names the actual consequence; confirmation closes the loop.
- [ ] Required inputs, error recovery, and sensitive-field explanations are accounted for.
- [ ] Example data and illustrative content cannot be mistaken for verified evidence.
- [ ] The decision record names unresolved risks and what has not been tested.
- [ ] Measurement claims distinguish observed association from demonstrated causation.

### When measuring outcomes
Write the hypothesis, target audience, primary outcome, guardrail measures, and decision rule before comparing variants. Choose a method proportionate to the decision. Do not infer causality from a visual change without a suitable experiment and adequate evidence; report limitations and uncertainty plainly.
