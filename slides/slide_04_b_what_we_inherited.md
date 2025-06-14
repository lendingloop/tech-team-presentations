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
**Speaker Notes - Real-World Challenges:**

- Point to the code: "Looking at this simplified example, you can immediately spot the issues - we're queuing multiple jobs independently with no coordination between them."

- Explain why this approach fails for complex flows: "In isolation, each piece worked correctly. But in production, we regularly encountered partial successes where some parts completed while others failed."

- Share a specific failure case: "Here's what would happen: A customer exchanges CAD to USD. Our system debits their CAD balance and updates our ledger. Then it tries to execute the USD credit but the external bank API times out. Sidekiq retries the job, but now we've already debited the CAD - potentially creating duplicate debits or orphaned transactions."

- Highlight the visibility issue with a real example: "When a customer called saying their exchange didn't complete, our support team had to coordinate with engineering to trace through multiple systems. It might take hours to figure out exactly what happened and at which step it failed."

- Explain the recovery complexity: "Even with retry mechanisms, inconsistent states between systems meant frequent manual intervention. If a job failed after executing some API calls but before updating our database, we'd have to manually reconcile the state."

- Mention scaling problems: "As we added more payment types and more banking partners, the complexity increased exponentially. Each new integration added another potential failure point."

- Connect to the business impact: "These technical challenges directly affected our customers and our ability to scale reliably. We had to spend too much engineering time playing detective and fixing broken transactions rather than building new features."

- End with the key insight: "We realized we were using the wrong tool for the job. Sidekiq is great for independent background tasks, but for coordinating complex, stateful workflows across multiple systems, we needed something purpose-built."

- Time target: About 90 seconds, with emphasis on real examples that demonstrate the concrete challenges
-->