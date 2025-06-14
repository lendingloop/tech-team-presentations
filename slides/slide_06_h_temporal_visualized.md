---
layout: default
---

# Advanced Temporal Features

#### Beyond Just Reliability

| **Feature** | **Real-World Benefit** |
|---|---|
| **Signals & Queries** | Interact with running workflows (e.g., cancel a payment mid-flow) |
| **Child Workflows** | Compose complex processes from simpler building blocks |
| **Saga Patterns** | Automatic compensation when things go wrong (built-in rollback) |
| **Versioning** | Deploy changes without disrupting in-flight workflows |
| **Cron Workflows** | Scheduled execution with failure guarantees (unlike cron jobs) |

<!--
**Speaker Notes - Advanced Temporal Features:**

- Start with the progression: "Beyond the core reliability features, Temporal provides several advanced capabilities that we've leveraged to solve complex payment orchestration challenges. Let me walk you through our favorites."

- For Signals & Queries:
  * "Signals allow you to send information to a running workflow, changing its execution path."
  * "Real example: When a customer wants to cancel a pending payment, we send a signal to the workflow which triggers our cancellation logic - even if it's in the middle of processing."
  * "Queries let you ask a running workflow about its current state without affecting execution."
  * "Our customer support team uses queries to check exactly where a payment is in the process without looking at logs or databases."

- For Child Workflows:
  * "Child workflows let you compose complex processes from simpler, reusable parts."
  * "We've built a library of standard financial workflows - account verification, currency exchange, compliance checking - that we compose into higher-level services."
  * "For example, our 'multi-currency payment' workflow creates child workflows for each currency conversion step."
  * "This modularity dramatically improves our development speed and code maintainability."

- For Saga Patterns:
  * "The saga pattern is a sequence of transactions where each step has a compensation action if something goes wrong."
  * "In our payment flows, if we debit an account but then can't complete the full transaction, we automatically trigger a compensation workflow to refund the customer."
  * "Before Temporal, implementing sagas required complex custom code. Now it's a built-in pattern."
  * "This has eliminated cases where money gets stuck in an intermediate state."

- For Versioning:
  * "This is crucial for production systems - the ability to deploy new workflow code without interrupting in-flight executions."
  * "When we improve a payment workflow, Temporal ensures that transactions already in progress complete using the version they started with."
  * "New transactions use the latest version, which means no downtime during deploys."
  * "We routinely deploy improvements multiple times per week without affecting active payments."

- For Cron Workflows:
  * "Unlike traditional cron jobs that can silently fail, Temporal cron workflows have all the same durability guarantees."
  * "We use these for scheduled batch operations like daily settlement runs and reconciliation tasks."
  * "If the scheduled task fails, Temporal ensures it retries properly - we don't miss a settlement run just because a server was down at 2 AM."

- End with the broader picture: "These advanced features have transformed how we think about building financial systems. We're now building workflows that would have been prohibitively complex to implement reliably before Temporal."

- Time target: 2 minutes - emphasize how these technical features solve real business problems
-->
