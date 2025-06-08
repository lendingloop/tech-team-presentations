---
layout: default
---

# Introducing Temporal

## Before vs. After: Same Code, New Superpowers

```ruby
# This normal-looking Ruby code...
def process_payment(payment_data)
  validate_transaction(payment_data)
  rate = get_exchange_rate(payment_data)
  auth = authorize_payment(payment_data, rate)
  run_compliance_checks(payment_data)
  capture_payment(auth)
  update_ledgers(payment_data)
  send_notifications(payment_data)
end
# ...becomes crash-proof, reliable, and observable
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
