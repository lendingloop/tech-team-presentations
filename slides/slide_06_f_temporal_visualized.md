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
**What Temporal Actually Is:**
For those who haven't seen Temporal before, think of it as reliability infrastructure for your business logic.

You write Ruby code that looks like normal synchronous business processes, but Temporal makes it resilient to any kind of failure.

**Core Concepts:**
Four main concepts:

**Workflows:** Your business logic, written as Ruby classes. This is where you define the steps of your process.

**Activities:** Individual tasks that can be retried independently. Each activity is a Ruby method that does one specific thing.

**Workers:** Processes that execute your activities. These can run in different services, different containers, even different languages.

**Temporal Server:** The orchestrator that manages state, handles retries, and coordinates everything.

**Key Insight:**
You focus on writing business logic. Temporal handles all the distributed systems complexity - state management, retries, failures, coordination.
-->
