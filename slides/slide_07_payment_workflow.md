---
layout: default
---

# Our Payment Workflow

## Simple Code, Powerful Results

```ruby
class PaymentWorkflow < Temporal::Workflow
  def execute(payment_data)
    @state = PaymentState.new(payment_data)
    @compensations = []
    
    begin
      # Standard payment processing steps
      validate_transaction(payment_data)      # Step 1
      get_exchange_rate(payment_data)         # Step 2
      authorize_payment(payment_data)         # Step 3
      run_compliance_checks(payment_data)     # Step 4
      capture_payment(payment_data)           # Step 5
      update_ledgers(payment_data)            # Step 6
      send_notifications(payment_data)        # Step 7
      
      payment_successful(@state)
    rescue => error
      execute_compensations                   # Clean up on failure
      payment_failed(error, @state)
    end
  end
end
```

> **Demo:** We'll see this executing in real-time


## Exchange Rate Handling

```ruby
      def get_exchange_rate(payment_data)
        # Lock in FX rate for entire workflow
        rate = GetExchangeRateActivity.execute_with_retry(
          from: payment_data[:charge_currency],    # CAD
          to: payment_data[:settlement_currency],  # USD
          retry_policy: fx_retry_policy
        )
        
        @state.exchange_rate = rate.rate
        @state.charge_amount = payment_data[:amount]  # $5,000 CAD
        @state.settlement_amount = payment_data[:amount] * rate.rate  # $6,750 USD
      end
      ```

## Parallel Compliance Checks

```ruby
def run_compliance_checks(payment_data)
  # Run multiple checks in parallel - 90 seconds becomes 45 seconds
  fraud_future = FraudCheckActivity.execute_async(payment_data)
  aml_future = AMLCheckActivity.execute_async(payment_data)
  sanctions_future = SanctionsCheckActivity.execute_async(payment_data)
  
  # Wait with appropriate timeouts
  fraud_result = await(fraud_future, timeout: 15.seconds)
  aml_result = await(aml_future, timeout: 30.seconds)
  sanctions_result = await(sanctions_future, timeout: 45.seconds)
  
  if fraud_result.flagged? || aml_result.flagged? || sanctions_result.flagged?
    raise ComplianceFailureError.new("Transaction flagged")
  end
end
```

## Key Improvements Over Sidekiq

- **State Persistence:** Workflow state auto-preserved across crashes
- **Compensation Tracking:** Auto-rollback for partial failures
- **Smart Retries:** Activity-specific retry policies
- **Parallel Execution:** 90 second process reduced to 45 seconds
- **Exchange Rate Safety:** Locked rate prevents arbitrage on retries

**Result:** Either complete success or clean failure with compensation

*No more partial failures, no more money stuck in limbo*

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
