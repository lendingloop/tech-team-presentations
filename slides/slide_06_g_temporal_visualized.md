---
layout: text-window
---

# Temporal's Ruby SDK

> "Under the hood: Your activities execute as separate processes that can retry independently"

::window::
```ruby
# Define your workflow logic
class PaymentWorkflow < Temporal::Workflow
  def execute(payment_data)
    # Activities are executed on remote workers
    verify = activity.verify_account(payment_data)
    rate = activity.get_exchange_rate(payment_data)
    auth = activity.authorize_payment(payment_data, rate)
    
    # Failures at any point will resume right here
    activity.capture_payment(auth)
    activity.update_ledgers(payment_data)
  end
end
```
<!--
**What Temporal Actually Is:**
For those who haven't seen Temporal before, think of it as reliability infrastructure for your business logic.

You write Ruby code that looks like normal synchronous business processes, but Temporal makes it resilient to any kind of failure.

**Core Concepts:**
Four main concepts:

**Workflows:** Your business logic, written as Ruby classes. This is where you define the steps of your process.

**Activities:** Individual tasks that can be retried independently. Each activity is a Ruby method that does one specific thing.

**Workers:** Processes that execute your activities. These can run in different services, different containers, even different languages.

**Temporal Server:** The orchestrator that manages state, handles retries, and coordinates everything.

**Key Insight:**
You focus on writing business logic. Temporal handles all the distributed systems complexity - state management, retries, failures, coordination.
-->
