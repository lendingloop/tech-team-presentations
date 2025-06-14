---
layout: default
---

# Why Traditional Systems Keep Us Up at Night

#### The Recurring Nightmares of Background Jobs

**The Usual Suspects**

❌ State stored in regular database

❌ Progress lost if server crashes

❌ Developers must write retry logic

❌ Custom code needed to fix failures

<!--
**Speaker Notes - Traditional Background Job Pain Points:**

- Start by emphasizing the context: "Before we see how Temporal solves these problems, let's identify why traditional background job systems like Sidekiq kept causing us headaches for payment processing."

- For state stored in regular database:
  * "When implementing multi-step workflows with Sidekiq, we had to constantly update transaction records in our database to track progress."
  * "Example: We needed custom tables with columns like 'step_completed', 'retry_count', and 'last_error' just to know where things stood."
  * "This meant our database became both the source of truth AND the workflow state tracker - mixing concerns and creating complexity."

- For progress lost if server crashes:
  * "If a Sidekiq worker was processing a payment and the server crashed, all in-memory state was instantly gone."
  * "Real example: During an AWS zone outage, we had dozens of payments where money had left the source account but hadn't arrived at the destination - and we had to manually reconcile each one."
  * "The worst part was not knowing exactly which step had completed before the crash - leading to hours of forensic work."

- For developers writing retry logic:
  * "Every payment endpoint integration required custom retry logic with different timeouts and error handling."
  * "We had payment code littered with begin/rescue blocks, retry counts, and exponential backoffs - all implemented slightly differently across services."
  * "This inconsistency led to bugs where some services would retry infinitely while others would give up too soon."

- For custom code needed to fix failures:
  * "When a payment got stuck, our on-call engineers needed to write one-off scripts to diagnose and fix the state."
  * "We literally had a folder called 'rescue_scripts' with dozens of Ruby files to handle different types of payment failures."
  * "This was error-prone, time-consuming, and completely unsustainable as we scaled our transaction volume."

- Close with the real business impact: "These technical limitations directly affected our customers and our business. Recovery from failures took too long, inconsistent states led to customer support issues, and engineering time was diverted from building new features to fixing workflow problems."

- Time target: 60-75 seconds - a brisk pace focusing on the problems that will be solved
-->
