---
layout: text-image
media: https://images.ctfassets.net/0uuz8ydxyd9p/3q2myxzg0G6pruZM7v18ed/9fe742877e645a24b8f9cd82be2f4327/retryflow_diagram.png?fm=avif&q=60
---

# What is Temporal?

#### Our Knight in Shining Armor

Temporal is an open-source platform that makes building reliable applications actually, well... reliable.

- **Workflow:** Your business logic that runs reliably, even if servers crash
- **Activity:** Individual tasks that can be retried automatically
- **Worker:** Process that executes your actual code
- **SDK:** Write normal Ruby code that becomes resilient

<!--
**Speaker Notes - Introducing Temporal:**

- Start with an approachable introduction: "So what exactly is Temporal? I like to think of it as the reliability layer that our payment systems were missing."

- Define the core concepts with Loop examples:
  * "A Workflow in Temporal is like your payment orchestrator - it contains the entire logic of moving money from point A to point B, and it's guaranteed to execute correctly even if machines crash."
  * "Activities are the individual tasks within that flow - like 'debit customer account', 'apply currency exchange', or 'credit recipient account'. Each can be retried independently if they fail."
  * "Workers are the processes that actually execute your code - they pick up tasks, run them, and report back results. If a worker dies, another one simply picks up where it left off."
  * "And the SDK lets us write all this in Ruby, our team's language of choice. We're writing normal Ruby code that magically becomes resilient."

- Point to the diagram: "This diagram visualizes a key Temporal strength - automatic retries with backoff. Notice how if a single activity fails, Temporal automatically retries it with configurable backoff, while maintaining the overall workflow state."

- Explain the fundamental architecture difference: "What makes Temporal different from Sidekiq or other job systems is this separation between the 'brain' - the Temporal server that tracks workflow state - and the 'muscles' - workers that execute the actual code."

- Share a real example: "When our AWS RDS instance went down for maintenance last month, all our payment workers crashed. In the old system, we'd have lost track of hundreds of in-progress payments. With Temporal, when new workers came online, every single workflow continued precisely where it left off - no lost state, no duplicate operations."

- Highlight the business impact: "This is game-changing for financial transactions. We no longer worry about partial failures or inconsistent state - Temporal gives us durability for free."

- End with the visibility aspect: "And the cherry on top? We can see exactly what's happening in every workflow through the Temporal UI - which steps completed, which are pending, which failed and why. Gone are the days of digging through logs across multiple systems."

- Transition: "In the next slides, I'll show you exactly how we implemented this for our payment flows."

- Time target: 2 minutes - this is a crucial foundation to understand before diving into code examples
-->
