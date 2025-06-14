---
layout: text-window
---

# Where Even Good Code Falls Short

When processing millions in payments, even well-engineered systems face fundamental challenges:

**Business Continuity**: Despite retries, we still needed a human to resolve complex failure scenarios

**Traceability Gaps**: Tracking the exact state of multi-step transactions across system boundaries required custom tooling

::window::
```ruby
# Example error handling - inadequate for financial transactions

class LedgerUpdateJob < ApplicationJob
  def perform(transaction_id)
    transaction = Transaction.find(transaction_id)
    
    begin
      # Attempt to update ledger
      update_ledger(transaction)
      transaction.update(ledger_status: 'complete')
    rescue StandardError => e
      # Just log and maybe retry
      Rails.logger.error("Ledger update failed: #{e.message}")
      # No way to coordinate with other jobs or reset workflow
      transaction.update(ledger_status: 'failed')
      
      # Retry logic doesn't consider other jobs or overall state
      retry_job(wait: 1.hour) if retries < 3 
    end
  end
end
```

<!--
**Speaker Notes - Fundamental Limitations:**

- Draw attention to the code example: "This is a simplified version of our error handling. Look at how limited our options are when something goes wrong."

- Highlight the technical constraints: "In a standard Rails/Sidekiq setup, each job has no knowledge of the overall workflow. When a job fails, it can only retry itself - it can't coordinate with other parts of the transaction."

- Explain the business continuity issue: "When a payment failed halfway through, even with retries, we still needed engineers to manually investigate and fix the issue. This isn't sustainable at scale."

- Give a concrete example: "Imagine a customer making a $10,000 CAD to USD exchange. Our system debits CAD, gets an FX rate, starts the USD credit - then the bank API times out. When the job retries an hour later, the FX rate has changed, and we now have a mismatch between what we debited and what we can credit."

- Explain the traceability gaps: "With transactions spanning multiple systems, tracking the exact state was incredibly difficult. We built custom dashboards and logging, but still struggled to get a complete picture of every transaction's state."

- Make the key insight clear: "The issue wasn't with our Ruby code or even with Sidekiq itself - it was a fundamental architectural mismatch. We were using a tool designed for independent, stateless background jobs to orchestrate complex, stateful workflows."

- Transition to the solution: "What we needed was a system designed specifically for long-running, stateful workflows - one that could maintain transaction state across failures, provide complete visibility, and handle compensation logic automatically."

- Time target: About 60-90 seconds - this is the final slide before transitioning to the Temporal solution
-->