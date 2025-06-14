---
layout: text-window
---

# Temporal's Ruby SDK

> "Under the hood: Your activities execute as separate processes that can retry independently"

::window::
```ruby
# Define your workflow logic
class PaymentWorkflow < Temporal::Workflow
  def execute(payment_data)
    # Activities are executed on remote workers
    verify = activity.verify_account(payment_data)
    rate = activity.get_exchange_rate(payment_data)
    auth = activity.authorize_payment(payment_data, rate)
    
    # Failures at any point will resume right here
    activity.capture_payment(auth)
    activity.update_ledgers(payment_data)
  end
end
```
<!--
**Speaker Notes - Temporal's Ruby SDK:**

- Begin with the Ruby context: "Let's look at what Temporal code actually looks like in Ruby. The beauty here is how simple and readable the code is, despite the powerful durability features it enables."

- Walk through the code structure:
  * "This is a simplified version of one of our payment workflows. It inherits from Temporal::Workflow and defines a single 'execute' method that takes payment data."
  * "The code looks sequential and synchronous, but don't be fooled - each activity call could be running on a different machine, potentially even in a different language."

- Explain each step in the workflow:
  * "We start with verify_account - checking that the source account has sufficient funds."
  * "Next, we get the current exchange rate for the currency pair."
  * "Then, we authorize the payment with the payment processor using that rate."
  * "After authorization succeeds, we capture the payment - actually moving the money."
  * "Finally, we update our internal ledgers to reflect the completed transaction."

- Highlight the resilience features:
  * "What's remarkable is what happens if something fails. Say we get through authorization, but the capture_payment call fails due to a network issue."
  * "When the system recovers, Temporal will resume execution exactly at the capture_payment line - it doesn't re-run the earlier steps."
  * "This means we don't double-charge the customer or get a different exchange rate on retry - critical for financial correctness."

- Address common developer questions:
  * "But wait - how does this magic work? Temporal records each activity invocation as an event in the workflow history."
  * "When a workflow resumes after failure, it replays the history to reconstruct the exact state before continuing."
  * "The code is deterministic, meaning each replay produces the same results given the same inputs."

- Explain the Ruby SDK's developer experience:
  * "For Ruby developers, working with Temporal feels natural - you're just writing Ruby classes and methods."
  * "The SDK handles all communication with the Temporal server, serializing arguments, and managing retries."
  * "We even use RSpec to test our workflows in a real Temporal environment."

- End with the key insight: "What looks like five simple lines of code is actually a durable, fault-tolerant payment process that can survive server crashes, network outages, and even code deployments. This is the power of Temporal's programming model."

- Time target: 2 minutes - focus on making the code understandable to both technical and non-technical audience members
-->
