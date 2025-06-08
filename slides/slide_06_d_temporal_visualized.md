---
layout: default
---

# How Temporal Helps Us

## What Makes It Different From Sidekiq

```
┌──────────────────────────────────────────────────────┐
│          Temporal Workflow Timeline                   │
├──────┬──────┬─────────┬───────┬────────┬─────────────┤
│ Start│ Task1│ Task2   │ Task3 │ Task4  │ Complete    │
│      │  OK  │ FAIL→OK │  OK   │   OK   │             │
└──────┴──────┴─────────┴───────┴────────┴─────────────┘
         │       ↑↓       │        │           │
         │      Retry     │        │           │
         └───────┴───────┴────────┘           │
                                               ↓
┌────────────────────────────────────────────────────────┐
│ ✅ Records execution history step-by-step              │
│ ✅ Continues exactly where it left off after failure   │
│ ✅ Shows entire workflow status in real-time           │
└────────────────────────────────────────────────────────┘
```

<!--
**Explaining the Architecture:**
- Temporal has a unique architecture that preserves workflow state even when workers fail
- The Temporal server acts as the "brain" - storing workflow state and history
- Workers are stateless and can be restarted at any time
- This provides durability that's impossible with traditional job processors

**Key Advantages Visualized:**
- In traditional architecture: If a worker processing a payment dies mid-transaction, you lose state
- With Temporal: The workflow continues exactly where it left off when a new worker starts
- This is what makes it so powerful for payment processing - we get true durability for free

**The Timeline View:**
- Each workflow execution is recorded as an immutable history of events
- Activities can be executed sequentially or in parallel
- Failed activities are automatically retried based on configurable policies
- The entire execution history is queryable and visible in the Temporal UI

**Technical Note:**
- The charts show how Temporal's "event sourcing" approach is fundamentally different
- Rather than storing current state, it records the full history of events
- This allows for time-travel debugging and complete auditability

## Timing: 90 seconds
-->
