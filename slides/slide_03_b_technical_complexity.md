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
**The Complexity:**
Here's what I learned when I joined Loop Card: multi-currency payments are deceptively complex.

What sounds like 'process a payment' actually involves 10+ discrete steps across 6-8 different services, each with their own failure modes.

**Real Stakes:**
This isn't a typical CRUD app where a failed request means someone has to click refresh. This is distributed systems with other people's money on the line.

Every transaction touches:
- Payment gateways in multiple countries
- Real-time foreign exchange systems
- Fraud detection services
- Multiple compliance frameworks
- Banking infrastructure across borders
- Accounting systems with multi-currency requirements

**What Can Go Wrong:**
And here's the thing: each step can fail independently:
- FX service timeout during rate lookup
- Payment gateway pre-auth succeeds but capture fails
- Compliance check takes too long and times out
- Network partition between services
- External API rate limits
- Database deadlocks during concurrent updates

**The Challenge:**
The fundamental challenge is coordination. How do you ensure that either ALL steps succeed, or ALL steps are safely rolled back? How do you debug failures across 8 different services? How do you retry safely without double-charging customers?

Traditional job queues weren't designed for this level of coordination and state management.
-->