---
layout: default
---

# Key Temporal Concepts

#### The Building Blocks of Durable Execution

| **Concept** | **What It Does** | **Why It Matters** |
|---|---|---|
| **Workflows** | Long-running business processes | Maintains execution state across crashes |
| **Activities** | Individual units of work | Can be retried independently |
| **Event History** | Complete audit trail of execution | Debug and track every step like Git |
| **Workers** | Process pools executing your code | Scale horizontally without complexity |

> "Temporal separates *what* gets done from *how* it gets done, making business logic resilient to infrastructure failures"

<!--
**Speaker Notes - Key Temporal Concepts:**

- Begin with the context: "Now that we understand why Temporal is so valuable, let's break down the key concepts that make it work. I'll explain each one in the context of our payment processing flows."

- For Workflows:
  * "Think of a Workflow as the complete journey of money from source to destination. For example, we have a 'CrossBorderPaymentWorkflow' that handles the entire process of moving funds internationally."
  * "What makes workflows special is that they maintain their execution state no matter what happens - server crashes, network outages, deploys - nothing interrupts them."
  * "In code terms, a workflow is a Ruby class with a single 'execute' method that looks almost like normal synchronous code, despite spanning multiple services and potentially running for hours."
  * "Example: Our international payment workflow can run for up to 3 days while waiting for SWIFT transfers to complete."

- For Activities:
  * "Activities are the individual tasks that make up a workflow - each one does exactly one thing."
  * "Examples from our payment system: 'verify_account_balance', 'apply_currency_conversion', 'execute_bank_transfer'"
  * "Each activity can have its own retry policy. For bank APIs that are flaky, we can retry dozens of times with exponential backoff. For compliance checks that rarely fail, maybe we only retry once before alerting a human."
  * "What's powerful is that activities can be executed on different workers, in different services, even different languages - while maintaining workflow continuity."

- For Event History:
  * "The event history is like Git for your workflow execution - a complete, immutable record of everything that happened."
  * "This is transformative for troubleshooting. When a payment fails, we can see exactly which activity failed, what inputs it had, how many times it retried, and what the error was."
  * "Our finance team uses this for auditing - we can prove exactly when funds moved, what exchange rates were applied, and which compliance checks were performed."

- For Workers:
  * "Workers are just processes that run your workflow and activity code - they're stateless and replaceable."
  * "We run multiple workers across different AWS availability zones - if one goes down, others pick up the load."
  * "Scaling up is as simple as starting more worker processes - no complex coordination required."

- Close with the conceptual insight: "The key insight here is the separation of concerns - workflows define WHAT should happen in your business process, while Temporal handles HOW it happens reliably. This lets our team focus on payment logic rather than distributed systems complexity."

- Time target: 2 minutes - these technical concepts need clear explanation and concrete examples
-->
