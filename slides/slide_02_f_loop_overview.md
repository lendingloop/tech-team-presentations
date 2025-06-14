---
layout: default
---

# Where We're Heading

#### Our Evolution: Modular, Resilient, Scalable

🌐 **ECS Fargate** - Infrastructure-as-code with multi-region redundancy

🧩 **Domain-Driven Microservices** - Payment processing broken into bounded contexts

⚡ **Event-Driven Architecture** - Async communication via event streams

🗡️ **Temporal as Orchestration Layer** - Reliable coordination across services

📈 **Auto-Scaling** - Dynamically handle 10x transaction spikes


<!--
**Current Architecture:**
- We're currently running on a traditional Ruby on Rails stack
- The application was built in 2021 and has evolved considerably
- Still primarily monolithic, though we've begun extracting some services
- Fully hosted on Heroku for ease of operations with our small team
- We're PCI DSS compliant, which adds complexity to any infrastructure changes

**Why We're Moving:**
- As transaction volumes grow, we're hitting Heroku's scaling limitations
- Cost structure doesn't make sense at our scale anymore
- Need more granular control over our infrastructure
- Limited ability to optimize for our specific workloads
- Want to move to a more resilient, multi-region architecture

**The Migration Plan:**
- This is a phased approach over the next 9 months
- Payment processing is the first component moving off Heroku
- We'll be deploying to Kubernetes for better scaling and resource utilization
- Temporal is a central component in this new architecture
- Eventually everything will move, but we're being pragmatic about the transition

**Technical Challenges:**
- Maintaining PCI compliance during migration
- Zero downtime requirements for financial services
- Preserving observability across platforms
- Managing the complexity of a hybrid deployment

## Timing: 90 seconds
-->
