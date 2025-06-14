---
layout: default
---

# Our Solution Showdown

#### The Finalists in Our Evaluation

| **Solution** | **Key Strength** | **Deal-Breaker** |
|---|---|---|
| **AWS Step Functions** | Fully managed | AWS lock-in |
| **Kafka Streams** | High throughput | Complex state management |
| **Temporal** | ✅ **Durable execution + Ruby SDK** | Higher learning curve |

> "For a Ruby team handling payments, Temporal offered exactly what we needed - reliability without rewriting our core services"

<!--
**Speaker Notes - Solution Comparison:**

- Introduce the comparison context: "After narrowing down our options, we had three serious contenders that made it to our final evaluation phase."

- For AWS Step Functions:
  * "Step Functions was appealing because it's fully managed - no infrastructure for us to maintain"
  * "However, the AWS lock-in was a significant concern since we use multiple cloud providers"
  * "The local development experience was also challenging - long feedback loops and difficult testing"

- For Kafka Streams:
  * "Kafka Streams offered excellent throughput and integrates well with our existing event messaging"
  * "The deal-breaker was complex state management - we'd need to build too much infrastructure around it"
  * "For our small team, the operational overhead would have been excessive"

- For Temporal:
  * "Temporal hit our sweet spot of durable execution with a production-ready Ruby SDK"
  * "We could immediately start building with our existing Ruby expertise"
  * "The learning curve was steeper than Step Functions, but the benefits outweighed this concern"

- Provide real decision context: "What sealed the deal for us was a conversation with Stripe engineers who confirmed they use Temporal for similar payment workflows - this validation from a fintech leader gave us confidence"

- Share the proof of concept: "Our 2-week POC migrating a simple payment flow showed immediate results: zero partial failures, complete workflow visibility, and developers actually enjoying the development experience"

- End with the business outcome: "Looking back, this decision has proven correct - we've processed millions in transactions without a single payment getting stuck in an inconsistent state"

- Time target: About 90 seconds - this slide provides the final justification for choosing Temporal
-->