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
**Speaker Notes - Original Implementation:**

- Begin with acknowledgment: "Let me be clear - this wasn't a poorly designed system. It used all the standard Rails best practices with state machines and Sidekiq."

- Point to the code: "This is a simplified version of what we had. A transaction record with states, Sidekiq workers to process each step, state machines to track progress."

- Share a specific failure story: "We had a real incident where a $47,000 payment got stuck halfway through processing. The Sidekiq job timed out after 25 seconds during a bank API call, but the bank actually processed the transaction. Because the job failed, our system thought the payment failed, but the money had actually moved."

- Explain the technical limitations:
  * "Sidekiq has a 25-second default timeout - but banking APIs can take minutes to respond"
  * "When a Sidekiq job restarts, it loses all in-memory state from the previous run"
  * "There's no built-in mechanism for coordinating multiple jobs in a sequence"
  * "Custom error handling for every possible failure path created extremely complex code"

- Talk about scaling issues: "As we added more payment types and currencies, the state machine grew exponentially complex. Every new payment method doubled the number of edge cases."

- Humanize the impact: "For a fintech, these weren't just technical issues - they affected real people's money and our reputation. We needed better reliability guarantees."

- Frame the transition: "We needed to find a solution specifically designed for stateful, long-running workflows that could survive process crashes and system outages."

- Time target: About 90 seconds - this bridges the problem statement to the solution
-->