---
layout: default
---

# Your Turn to Grill Me!

## Let's Chat About...

Your payment system horror stories (we've all got them)

Burning questions about our Temporal implementation

How this might apply to your own reliability challenges

> **Thanks for hanging out! You've been a fantastic audience.**

<!--
**Speaker Notes - Q&A Session:**

- Start with summary (1 minute):
  * "Before we dive into your questions, let me quickly summarize the key takeaways from today's talk:"
  * "First, distributed systems are incredibly challenging - especially in financial services where every transaction must be reliable and traceable."
  * "Second, choosing the right tools matters. Temporal didn't just solve technical problems; it transformed how we approach system design."
  * "Third, the business impact has been substantial: 94% reduction in payment-related incidents, 52% faster processing times, and significantly improved customer satisfaction."
  * "Finally, there's tremendous opportunity in fintech infrastructure, especially in Canada where businesses need more reliable financial tools."

- Transition to Q&A (15 seconds):
  * "Now, I'd love to hear from you! Questions about our Temporal implementation, payment systems in general, or how this might apply to your own challenges?"
  * [Pause and make eye contact with the audience, showing you're genuinely interested in their questions]

- If questions are slow to start (30 seconds):
  * "To get us started, I often get asked about..." [Choose one of the prepared questions below]
  * "I'm also curious - how many of you have experience with background job systems like Sidekiq or Resque?" [Show of hands]
  * "And how many have encountered the kinds of partial failure scenarios I described today?" [Show of hands]

- Common Questions and Prepared Answers:

  * Q: "How does Temporal compare to AWS Step Functions?"
    A: "Great question! Step Functions are excellent for AWS-native workflows, but Temporal offers three key advantages: language-native development in Ruby, superior local testing capabilities, and vendor independence. The Ruby SDK is particularly well-designed, which was crucial for our team's productivity."

  * Q: "What about performance overhead compared to direct service calls?"
    A: "There is some overhead - each activity involves serialization and persistence. However, for complex workflows, Temporal is often faster end-to-end because better error handling prevents expensive recovery scenarios. In our payment flows, the reliability benefits far outweigh the milliseconds of added latency per step."

  * Q: "How do you handle secrets and sensitive data in workflows?"
    A: "This is critical - workflow histories are persisted forever, so we NEVER put secrets or PII in workflow state. Instead, we use token IDs or references that point to secure data in our services. For example, we'll pass a 'payment_token' through the workflow that our services can exchange for the actual payment details when needed."

  * Q: "Is Temporal overkill for simpler applications?"
    A: "Absolutely! If you're building straightforward CRUD apps with occasional background jobs, stick with Sidekiq. Temporal shines when you have multi-step business processes that need strong coordination guarantees. I'd say it's worth considering when the cost of failure is high or when you're dealing with long-running, stateful processes."

  * Q: "What's the learning curve like for developers?"
    A: "It's real but manageable. The hardest conceptual shift is from job-based thinking to workflow-based thinking. Most developers get comfortable with basic workflows in 1-2 weeks. Mastering advanced patterns like saga compensation or workflow versioning takes longer - maybe 1-2 months of consistent work. The good news is that the code itself is just Ruby - there's no new syntax to learn."

  * Q: "What about local development and testing?"
    A: "This is where Temporal really shines! We use Docker Compose to spin up a local Temporal server for development. The SDK includes test helpers that let you unit test workflow logic without a server. For integration tests, we have a test cluster that runs real workflows but accelerates time - a 3-day workflow completes in seconds during testing."

- Open Discussion Prompts:
  * "I'd love to hear about your experiences with payment processing or distributed systems challenges."
  * "Has anyone here tried Temporal or similar workflow orchestration tools? What was your experience?"
  * "What's the most painful distributed systems issue you've encountered in production?"

- Final Call to Action (30 seconds):
  * "If you're intrigued by what you've heard today, I encourage you to try Temporal this week with a simple workflow. The documentation and getting started guides are excellent."
  * "If you're interested in fintech challenges, Loop is always looking for talented engineers who care about building reliable systems. Feel free to grab me after the talk or email the address from the previous slide."
  * "And if you just want to discuss workflow orchestration or distributed systems reliability, I'm always up for that conversation - online or over coffee."

- Closing thanks (15 seconds):
  * "Thank you so much for your attention and engagement today. And thanks to the Ruby meetup organizers for having me. Let's keep the conversation going!"
  * [Make sure to stay available after the talk for one-on-one questions]

- Time target: 10-15 minutes for entire Q&A session, depending on audience engagement
-->