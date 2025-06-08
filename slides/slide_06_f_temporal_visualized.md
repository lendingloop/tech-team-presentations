---
layout: default
---

# Introducing Temporal

### A Better Way to Build Reliable Applications

```
┌────────────────────────────────────┐
│ Think of Temporal As...            │
│ ├── A reliability layer for code   │
│ ├── Error handling on steroids     │
│ ├── State management that works    │
│ └── The "undo" button for failures │
└────────────────────────────────────┘
```

### What It Does For Us

- **Makes regular Ruby code** reliable and crash-proof
- **Remembers exactly where things stopped** if servers crash
- **Shows a timeline** of everything that happened (like Git history)
- **Retries automatically** when things go wrong
- **Cleans up properly** when failures can't be fixed


> "Imagine if your code could survive any crash or failure and just keep working."

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
