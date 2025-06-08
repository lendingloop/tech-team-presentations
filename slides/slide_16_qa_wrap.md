---
layout: default
---

# Questions & Discussion

## Let's Discuss

- Your payment processing experiences
- Questions about our implementation
- Interest in Temporal or Loop Card

> **Thank you for attending!**

<!--
Wrap-up:
To wrap up, here's what I hope you take away from this talk:

Distributed systems are hard. Multi-currency payment processing taught us that coordinating multiple services reliably is genuinely challenging.

The right tools matter. Temporal didn't just solve our technical problems - it changed how we think about building reliable systems.

Business impact is real. This isn't just about cool technology. Better reliability translated directly to saved money, happier customers, and more confident developers.

There's opportunity in fintech. Canadian businesses need better financial infrastructure, and there's exciting work to be done.

Common Questions I Expect:

Q: "How does Temporal compare to AWS Step Functions?"
A: Step Functions are great for AWS-native workflows, but Temporal gives you language-native development, better local testing, and vendor independence. Plus, the Ruby SDK is excellent.

Q: "What about performance overhead?"
A: There is overhead compared to direct service calls, but for complex workflows, Temporal is often faster because better error handling prevents expensive recovery scenarios.

Q: "How do you handle secrets in workflows?"
A: Workflows are logged forever, so never put secrets in workflow state. Use token IDs that reference secure data in your services.

Q: "Is this overkill for simple applications?"
A: Absolutely. If you're building simple CRUD apps, stick with Sidekiq. Temporal shines when you have multi-step business processes that need coordination.

Q: "What's the learning curve like?"
A: Real but manageable. The hardest part is shifting from job-based thinking to workflow-based thinking. Once that clicks, it's very productive.

Open Discussion:
I'd love to hear about:
- Your payment processing challenges
- Distributed systems war stories  
- Questions about our Loop Card implementation
- Interest in joining our team

Final Call to Action:
If you're interested in Temporal, try it this week with a simple workflow. If you're interested in fintech challenges, let's talk about Loop Card opportunities. And if you just want to discuss building reliable systems, I'm always up for that conversation.

Thank You:
Thanks for your attention, and thanks to the Ruby meetup organizers for having me. Let's keep the conversation going!
-->