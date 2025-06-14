---
layout: default
---

# Finding the Right Workflow Solution

#### Why We Chose Temporal

**Production-ready Ruby SDK** - *No need to rewrite existing services*

**Time-travel debugging** - *See exactly what happened at each step*

**Automatic compensation** - *Solved our partial failure problem*

**Durable execution guarantees** - *Workflows resume exactly where they left off*

**Built-in versioning** - *Deploy changes without disrupting in-flight transactions*

**Horizontal scalability** - *Handles our growth without breaking a sweat*

<!--
**Speaker Notes - Why Temporal:**

- Start with the broader context: "Let me walk you through the specific reasons why Temporal was the right fit for our payment processing challenges."

- For Production-ready Ruby SDK:
  * "This was a major selling point - we have a substantial Ruby codebase and team expertise in Ruby"
  * "The SDK is well-maintained and feature-complete, with excellent documentation"
  * "We didn't have to rewrite our business logic or service boundaries to adopt Temporal"

- For Time-travel debugging:
  * "This is a game-changer for troubleshooting payment issues"
  * "Example: When a customer reported a failed transaction, instead of digging through logs across multiple systems, we could see the exact sequence of events in the Temporal UI"
  * "This reduced our debugging time from hours to minutes"

- For Automatic compensation:
  * "This directly addressed our partial failure problem"
  * "If step 4 of a 5-step process fails, Temporal provides patterns to automatically undo steps 1-3"
  * "Example: If we debit CAD but can't credit USD, we can automatically refund the CAD"

- For Durable execution:
  * "Even if the entire service crashes midway through a workflow, Temporal picks up exactly where it left off"
  * "This was incredible for our team - no more lost state when services restart"

- For Built-in versioning:
  * "We can deploy new versions of workflows without disrupting in-flight transactions"
  * "This means we can ship improvements continuously without worrying about payments in progress"

- For Scalability:
  * "As we've grown 300% in transaction volume, Temporal has scaled horizontally without issues"

- Mention social proof: "Companies like Stripe, Datadog, Netflix, and Snap use Temporal for similar critical workflows. This gave us confidence in our choice."

- Close with the outcome: "After a successful proof of concept, every new payment flow we've built has used Temporal, and we've seen zero partial failures in production."

- Time target: About 2 minutes - this is a crucial explanation of the core technology choice
-->