---
layout: default
---

# Our Starting Point: The Original System

## Code That Looked Good But Had Problems

*Problems with this simple approach:*
- **Race conditions**: The main function and background job run independently with no coordination
- **Incomplete error handling**: Just logging errors doesn't help recover the transaction
- **No visibility**: When failures happen, we can't easily see at which step they occurred
- **Missing transactions**: Money moves but ledger updates fail, creating accounting discrepancies
  
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