---
layout: default
---

# Payment Complexity: The Iceberg Under the Surface

#### Customer Request (Sounds Simple):

> "Just exchange $5,000 CAD to USD in my Loop account"

#### The Hidden Reality:

That single button click triggers **multiple actions** and **multiple transactions** across multiple systems, banking networks, regulatory checks, and international boundaries.

**Each with its own failure modes, timeout risks, and consistency requirements.**

<!--
**Speaker Notes - The Payment Complexity:**

- Start with impact: "This slide is where we transition from business context to technical challenges. What sounds trivially simple from a user perspective - a currency exchange - is actually a complex orchestration problem."

- Use contrast for effect: "What the customer sees: one button. What our systems handle: a cascade of transactions across multiple banking networks, jurisdictions, and regulatory frameworks."

- Get specific with technical details:
  * "Let me walk through what actually happens when someone exchanges $5,000 CAD to USD:"
  * "First, we need to lock in an FX rate, which requires calling an external rate provider"
  * "Then we need to verify sufficient CAD balance, initiate CAD withdrawal, and convert to USD"
  * "Then route the USD to the appropriate banking partner, which varies by user type and amount"
  * "All while keeping compliance checks running in parallel and respecting bank cutoff times"

- Emphasize the failure modes: "Each of these steps has its own timeouts, retry policies, and failure modes. And with money, we can't afford to be wrong."

- Build to the problem statement: "Our core technical problem was this: How do you ensure that either ALL steps succeed, or ALL steps are safely rolled back? And how do you debug failures across distributed services?"

- Foreshadow the solution: "Traditional job queues like Sidekiq weren't designed for this level of coordination and state management. We needed something better."

- Time target: This is a crucial slide - spend about 2 minutes here to make sure everyone understands the problem space
-->