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
**What We Started With:**
When I joined Loop Card, we had a Rails monolith coordinating everything through Sidekiq jobs. Now, Sidekiq is great for many use cases, but coordinating financial workflows across multiple services? That's where the limitations become painful.

**What Actually Happened:**
This looks clean, but in production it was a nightmare:

**Partial Failures:** What if capture succeeds but ledger update fails? We've charged the customer but our books are wrong.

**Retry Hell:** Job fails and retries. Now we have a different exchange rate, duplicate fraud checks, confused state everywhere.

**Why We Needed Something Better:**
The fundamental issue: we were trying to coordinate stateful workflows across multiple services using a tool designed for stateless background jobs.
-->