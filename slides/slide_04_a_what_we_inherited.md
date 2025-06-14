---
layout: text-window
---

# Our Original Implementation: Robust But Limited

A well-architected Rails system with state machines and Sidekiq orchestration.

**The Challenges We Still Faced:**
- Long-running processes exceeding Sidekiq timeouts
- Error recovery requiring complex custom code
- State scattered across databases, Redis, and external partners

::window::
```ruby
# A solid Rails implementation with proper patterns
class PaymentOrchestrator
  def process_exchange(from_currency, to_currency, amount)
    transaction = Transaction.create!(state: "initiated")
    ExchangeProcessor.perform_async(transaction.id)
  end
end

class ExchangeProcessor
  include Sidekiq::Worker
  sidekiq_options retry: 3
  
  def perform(transaction_id)
    transaction = Transaction.find(transaction_id)
    
    # Track state progression with state machine
    begin
      transaction.with_lock do
        case transaction.state
        when "initiated"
          verify_account(transaction)
        when "verified"
          select_banking_partner(transaction)
        # More states and transitions...
        end
      end
    rescue => e
      # Complex error handling...
      transaction.update!(state: "failed", error: e.message)
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

**No Visibility:** Payment failed? Great, check Redis, check the database, check logs from 6 different services. Good luck figuring out where it broke.

**Lost Money:** We actually lost money to partial failures. Pre-auth succeeded, capture failed, money stuck in limbo for days.

**Why We Needed Something Better:**
The fundamental issue: we were trying to coordinate stateful workflows across multiple services using a tool designed for stateless background jobs.
-->