---
layout: text-window
---

# Our Starting Point: The Original System

A standard Rails app with background jobs handling each currency exchange step

Each job operates independently with no knowledge of overall workflow state
If any job fails, there's no automated way to recover the process or fix the state

::window::
```ruby
class CurrencyExchangeJob < ApplicationJob
    def perform(from_currency, to_currency, amount)
      # Start the currency exchange process
      # No coordination with other jobs
    end
end

class AccountVerificationJob < ApplicationJob 
class BankingPartnerSelectionJob < ApplicationJob 
class FxRateProcessingJob < ApplicationJob 
class CrossBorderTransferJob < ApplicationJob 
class ComplianceCheckJob < ApplicationJob 
class LedgerUpdateJob < ApplicationJob 
class SettlementProcessingJob < ApplicationJob
```


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