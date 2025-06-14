---
layout: default
---

# Sidekiq vs. Temporal: Why It Matters

#### When Task2 Fails: Two Different Worlds

| **Sidekiq** | **Temporal** |
|---|---|
| ❌ Retries the individual job | ✅ Remembers the entire workflow context |
| ❌ Loses progress if worker crashes | ✅ Continues from exact failure point |
| ❌ No built-in workflow visibility | ✅ Full history and state inspection |
| ❌ Manual compensation for partial failures | ✅ Automated compensation patterns |

> **Real-World Impact**: When a payment capture failed with Sidekiq, we often had to manually reconcile accounts. With Temporal, the system automatically handles failure and continues the transaction exactly where it left off.

<!--
Image Prompt for Eraser:

Create a side-by-side comparison diagram showing two workflows processing a payment transaction. 

Left side labeled "SIDEKIQ": Show 5 connected boxes in a workflow (Account Check → FX Rate → Compliance → Capture → Settle) with the middle box (Compliance) colored red with an X. Below it, show a "retry" arrow going back just to that box, with a small explosion icon and text "State lost between retries".

Right side labeled "TEMPORAL": Show the same 5 connected boxes, with Compliance also marked with an X, but show a "retry" arrow that maintains a connection to a "Workflow History" database below. Include text "Continues with full context".

Use professional fintech-style graphics with a clean, modern look suitable for a business presentation.
-->


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
