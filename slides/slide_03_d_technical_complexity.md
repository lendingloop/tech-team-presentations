---
layout: default
---

# Why Payments Are Complicated

#### The Perfect World Solution Would Need To:

- Coordinate all steps perfectly
- Automatically fix any failures
- Track every action
- Work across different currencies

#### What We Needed to Solve This:

- A reliable system for maintaining complete transaction integrity
- Smart handling of failures at any step
- Full visibility into what's happening at each moment
- Technology that would grow with our business


<!--
**Speaker Notes - Solution Requirements:**

- Start with a summary of the challenge: "After understanding the complexity of our payment flows, we defined what an ideal solution would need to provide."

- For Coordinating All Steps Perfectly:
  * "We needed a system that could track the state of a payment across all these different services"
  * "If step 3 succeeds but step 4 fails, the system needs to know exactly where things left off"
  * "Traditional background job systems like Sidekiq don't maintain this kind of state across job runs"

- For Automatically Fixing Failures:
  * "With money, retry isn't enough - sometimes we need compensation actions"
  * "Example: If we've already debited a customer's account but the transfer fails, we need to credit them back automatically"
  * "This requires sophisticated error handling that understands the business context"

- For Tracking Every Action:
  * "Every step of a payment flow needs perfect visibility - both for debugging and for compliance"
  * "We need to know not just what happened, but when it happened and in what order"
  * "This audit trail needs to be built into the system, not added as an afterthought"

- For Working Across Currencies:
  * "Multi-currency adds another dimension of complexity with exchange rates and international banking partners"
  * "We need a system that can handle the additional steps and contingencies of cross-border payments"

- Transition to solution: "This set of requirements led us to evaluate several different approaches before finding Temporal - which I'll explain next."

- Time target: About 90 seconds - this slide completes the problem statement and sets up the solution
-->
