---
layout: default
---

# Our Starting Point: The Original System

## Code That Looked Good But Had Problems

```ruby
# Main function - no coordination with background jobs
def exchange_currency(account_id, from_currency, to_currency, amount)
  # Get exchange rate and move money
  rate = get_exchange_rate(from_currency, to_currency)
  process_transfer(account_id, amount, rate)
  
  # Queue background job for ledger updates
  TransferProcessingJob.perform_later(account_id)
  
  "Success!"
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

*Problems with this approach:*
- If cross-border transfer succeeds but ledger updates fail, we've moved money but our records are wrong
- If a job fails and retries, we might get different exchange rates or duplicate compliance checks
- Debugging across 7+ connected jobs with no centralized state tracking was nearly impossible

<!--
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