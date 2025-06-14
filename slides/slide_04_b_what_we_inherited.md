---
layout: text-window
---

# Real-World Challenges We Faced

Despite following best practices, our system showed cracks at scale.

**Visibility Problem**: When transactions failed halfway through, finding the exact failure point across distributed services required intense detective work.

**Recovery Headaches**: Even with retry mechanisms, inconsistent states between systems meant frequent manual intervention.

::window::
```ruby
def exchange_currency(account_id, from_currency, to_currency, amount)
  # Verify account exists and has sufficient funds
  account = Account.find(account_id)
  raise InsufficientFundsError unless account.has_funds?(from_currency, amount)
  
  # Create a transaction record
  transaction = Transaction.create!(
    account: account,
    from_currency: from_currency,
    to_currency: to_currency,
    amount: amount,
    status: 'pending'
  )
  
  # Enqueue jobs with no coordination between them
  CurrencyExchangeJob.perform_later(transaction.id)
  
  # What if any of these jobs fail? No automatic recovery
  FxRateProcessingJob.perform_later(transaction.id)
  LedgerUpdateJob.perform_later(transaction.id)
  
  transaction.id
rescue => e
  # Just log and move on
  log_error(e.message)
end

# Background job runs separately
class TransferProcessingJob < ApplicationJob
  def perform(account_id)
    update_ledgers(account_id)
  end
end
```

<!--

*Problems with this approach:*
- If cross-border transfer succeeds but ledger updates fail, we've moved money but our records are wrong
- If a job fails and retries, we might get different exchange rates or duplicate compliance checks
- Debugging across 7+ connected jobs with no centralized state tracking was nearly impossible

**What We Started With:**
When I joined Loop Card, we had a Rails monolith coordinating everything through Sidekiq jobs. Now, Sidekiq is great for many use cases, but coordinating financial workflows across multiple services? That's where the limitations become painful.

**What Actually Happened:**
This looks clean, but in production it was a nightmare:

**Partial Failures:** What if capture succeeds but ledger update fails? We've charged the customer but our books are wrong.

**Retry Hell:** Job fails and retries. Now we have a different exchange rate, duplicate fraud checks, confused state everywhere.

**No Visibility:** Payment failed? Great, check Redis, check the database, check logs from 6 different services. Good luck figuring out where it broke.

**Lost Money:** We actually lost money to partial failures. Pre-auth succeeded, capture failed, money stuck in limbo for days.

**Why We Needed Something Better:**
The fundamental issue: we were trying to coordinate stateful workflows across multiple services using a tool designed for stateless background jobs.
-->