---
layout: text-image
media: "transaction_life.png"
---

# The Money Journey: Behind the Curtain

#### Your $5,000 embarks on quite the adventure

**Validation & Routing**: Verify balances, limits, and select optimal banking partners

**Currency Operations**: Lock in exchange rates and calculate appropriate fees

**Cross-Border Orchestration**: Coordinate transfers between international banking systems

**Financial Record-Keeping**: Update multiple ledgers and ensure final settlement


<!--
**Speaker Notes - The Money Journey:**

- Reference the image: "This diagram gives us a visual representation of what happens during a currency exchange. Each color represents a different system or service boundary."

- For Validation & Routing:
  * "First, we authenticate the user and verify they have sufficient funds"
  * "We check their transaction limits and compliance flags"
  * "Based on amount, user tier, and other factors, we select the optimal banking partner"

- For Currency Operations:
  * "This is where we connect to external FX providers to get real-time rates"
  * "We need to lock in that rate - which is only valid for seconds - while the rest of the transaction proceeds"
  * "If any subsequent step fails, we need to release or compensate for that rate lock"

- For Cross-Border Orchestration:
  * "Now we coordinate actual movement of funds between banking systems"
  * "This involves multiple API calls with potential timeouts and network failures"
  * "We need to track the transaction state across multiple external systems"

- For Financial Record-Keeping:
  * "Finally, we update our internal ledgers and generate audit records"
  * "This needs to be atomic with the transaction itself - partial updates create accounting nightmares"

- Technical insight: "What makes this challenging is that each step could take seconds or minutes, creating a long-running transaction that traditional databases can't handle well."

- Time target: About 90 seconds - this provides the technical context for why we needed Temporal
-->