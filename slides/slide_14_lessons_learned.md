---
layout: default
---

# Our Hard-Earned Wisdom

#### So You Don't Have to Learn the Hard Way

| **What Worked Like a Charm** | **What We'd Do Differently** |
|---|---|
| Start with simple workflows | More upfront team training |
| Local dev environment focus | Better monitoring from day one |
| Temporal Cloud > self-hosted | Document patterns earlier |
| Testing with Temporal SDK | More gradual service migration |

> **The Bottom Line**: Yes, there's a learning curve, but it's like learning to ride a bike—painful at first, then you wonder how you ever lived without it.

<!--
**Speaker Notes - Our Hard-Earned Wisdom:**

- Start with humility: "After two years of working with Temporal in production, we've learned a lot - some of it the hard way. Let me share what worked well and what we'd do differently if starting over."

- What worked well - detailed explanations:
  * "Starting with simple workflows: We began with a single, simple payment flow before tackling more complex patterns. This let us build expertise incrementally."
  * "Example: Our first workflow had just three sequential activities. Once we got that working reliably, we added parallel execution, child workflows, and compensation patterns."
  * "Local dev environment focus: Setting up Temporal to run locally in development was crucial. It let developers test workflows on their laptops without needing the full infrastructure."
  * "We built docker-compose configs that spin up Temporal Server, PostgreSQL, and our worker processes in seconds, making the developer experience seamless."
  * "Temporal Cloud > self-hosted: We initially tried self-hosting Temporal Server, but maintaining it was a distraction. Switching to Temporal Cloud was absolutely worth the cost."
  * "The reliability, automated upgrades, and built-in monitoring saved us at least 20 hours of DevOps work per week."
  * "Testing with Temporal SDK: The Ruby SDK includes test helpers that let us simulate workflow execution and write comprehensive test suites."
  * "Our test coverage is now over 90%, and we can verify compensation logic works correctly in failure scenarios."

- What we'd do differently - lessons learned:
  * "More upfront team training: We underestimated the paradigm shift from traditional background jobs to durable workflows. More upfront training would have accelerated adoption."
  * "Anecdote: One developer spent three days debugging a workflow that wasn't working, only to discover they'd forgotten to register an activity type - something basic training would have caught immediately."
  * "Better monitoring from day one: We didn't set up proper alerts and dashboards until after our first production incident. Monitoring should be part of the initial implementation."
  * "Now we track metrics like workflow completion rates, activity error rates, and execution times, with alerts for any anomalies."
  * "Document patterns earlier: We reinvented several patterns that are common in Temporal workflows before realizing they were already solved problems."
  * "For example, we built our own saga implementation before discovering Temporal's built-in compensation tracking."
  * "More gradual service migration: We tried to move too many payment flows to Temporal simultaneously, which caused integration challenges. A more incremental approach would have been smoother."
  * "Our recommendation: Migrate one service or flow at a time, with dual-writing to both old and new systems initially."

- End with practical advice: "The big takeaway is that Temporal is absolutely worth the investment, but don't underestimate the learning curve. It's a fundamentally different way of thinking about distributed processing that takes time to master."

- Personal reflection: "For me personally, the most satisfying moment was when we had our first server crash after implementing Temporal. In the old system, this would have triggered a weekend of recovery work. With Temporal, everything just picked up where it left off when the server restarted - zero data loss, zero manual intervention."

- Time target: 2 minutes - balance of technical detail and practical advice
-->
