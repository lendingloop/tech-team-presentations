---
layout: text-image
media: https://images.ctfassets.net/0uuz8ydxyd9p/3q2myxzg0G6pruZM7v18ed/9fe742877e645a24b8f9cd82be2f4327/retryflow_diagram.png?fm=avif&q=60
---

# What is Temporal?

### A Workflow Engine for Reliable Apps

Temporal is an open-source platform that makes building reliable applications simple.

- **Workflow:** Your business logic that runs reliably, even if servers crash
- **Activity:** Individual tasks that can be retried automatically
- **Worker:** Process that executes your actual code
- **SDK:** Write normal Ruby code that becomes resilient

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
