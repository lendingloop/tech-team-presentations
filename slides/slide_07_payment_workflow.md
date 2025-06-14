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
**The Real Workflow:**
Let me show you our actual payment workflow. This is the code running in production right now.

**Key Workflow Steps:**
The validate_transaction method checks if the payment is valid and raises an error if it's not.

The get_exchange_rate method locks in the FX rate for the entire workflow to prevent arbitrage bugs.

The authorize_payment method pre-authorizes the payment and tracks it for compensation if later steps fail.

**What Makes This Different:**
Notice what's happening here that wasn't possible with Sidekiq:

State Persistence: The @state object is automatically persisted. If the workflow crashes and resumes, all state is intact.

Compensation Tracking: We build a stack of compensations. If step 6 fails, steps 1-5 are automatically undone.

Exchange Rate Consistency: We lock the FX rate at the beginning. Retries don't cause currency arbitrage bugs.

Smart Retries: Each activity has its own retry policy. Network timeouts retry, invalid cards don't.

Parallel Compliance: By running checks in parallel, we reduced the compliance check time from 90 seconds to 45 seconds.

**The Key Insight:**
This workflow eliminates partial failures. Either the entire payment succeeds, or it fails cleanly with automatic compensation. No more money stuck in limbo.
-->
