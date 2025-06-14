---
layout: text-window
---

# Our Payment Workflow in Action

#### Bringing the Concepts to Life

**State Persistence:** Workflow state auto-preserved across crashes

**Compensation Tracking:** Auto-rollback for partial failures

**Smart Retries:** Activity-specific retry policies

**Parallel Execution:** 90 second process reduced to 45 seconds

**Exchange Rate Safety:** Locked rate prevents arbitrage on retries

**Result:** Either complete success or clean failure with compensation

::window::
```ruby
class PaymentWorkflow < Temporal::Workflow
  def execute(payment_data)
    # State is automatically persisted across crashes
    @state = PaymentState.new(payment_data)
    
    # Lock exchange rate for entire workflow (prevents arbitrage on retries)
    rate = activity.get_exchange_rate(
      from_currency: payment_data[:currency],
      to_currency: "USD"
    )
    
    # Run multiple compliance checks in parallel to save time
    fraud_future = activity.start_fraud_check_async(payment_data)
    aml_future = activity.start_aml_check_async(payment_data)
    sanctions_future = activity.start_sanctions_check_async(payment_data)
    
    # Wait for all checks with automatic retry on failure
    fraud_result = await(fraud_future)
    aml_result = await(aml_future)
    sanctions_result = await(sanctions_future)
    
    # Auto-compensation if payment capture fails
    auth = activity.authorize_payment(payment_data, rate)
    activity.with_compensate(-> { activity.reverse_auth(auth.id) }) do
      activity.capture_payment(auth.id)
      activity.update_ledger(payment_data, rate)
    end
  end
end
```

<!--
**Speaker Notes - Our Payment Workflow in Action:**

- Start with the context: "Now let's bring everything together and look at a simplified version of our actual production payment workflow. This demonstrates how the Temporal concepts translate into real business value."

- Explain the code sample step by step:
  * "First, we initialize a payment state object. What's important here is that this state is automatically persisted by Temporal - if our workflow crashes and restarts, we don't lose any information."
  * "Next, we get the exchange rate and lock it in for the entire transaction. This solves a serious problem we had before: if a payment partially failed and retried an hour later with a different exchange rate, we could lose money on the exchange rate difference."

- Highlight the parallel compliance checks:
  * "Here's where it gets interesting - we run three compliance checks in parallel: fraud detection, anti-money laundering, and sanctions screening."
  * "Before Temporal, these checks ran sequentially and took 90+ seconds to complete. Now they run in parallel and complete in about 45 seconds - cutting our processing time in half."
  * "Importantly, each check has its own retry policy. For example, our sanctions check API is occasionally flaky, so we retry up to 5 times with exponential backoff."

- Explain the automatic compensation pattern:
  * "The most powerful pattern here is the compensation tracking. When we authorize a payment, we also register a compensation function that will reverse that authorization if any later step fails."
  * "This is a classic 'saga pattern' that's extremely hard to implement correctly in traditional systems, but Temporal makes it straightforward."
  * "In practice, this means if we debit a customer's account but then encounter an issue when crediting the recipient, we automatically roll back the debit - the customer's money is never left in limbo."

- Share concrete business impacts:
  * "This workflow pattern has transformed our payment reliability. Let me share some numbers:"
  * "Before Temporal: We had an average of 112 stuck payments per month requiring manual intervention."
  * "After Temporal: Over 99.99% of payments either complete fully or cleanly roll back with no manual intervention required."
  * "Payment processing time improved by 52%, and our operations team now spends 85% less time troubleshooting payment issues."

- Explain the broader implications:
  * "What's remarkable is that this code looks relatively simple - just standard Ruby - but it's handling extremely complex distributed transaction patterns that would require thousands of lines of custom code otherwise."
  * "The boundary between local and remote execution is completely abstracted away. A developer doesn't need to think about network failures or retries; they can focus purely on the business logic."

- End with the key insight: "In financial services, partial failures are unacceptable - money can't just disappear. Temporal gives us a programming model where we can guarantee that every payment either fully succeeds or fully fails with proper compensation - exactly what our business needs."

- Time target: 2-3 minutes - this is a crucial slide showing the real-world application of the concepts
-->
