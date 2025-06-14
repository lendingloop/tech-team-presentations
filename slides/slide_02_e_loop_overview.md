---
layout: default
---

# Our Tech Stack Evolution

#### Where We Started (AKA The Classic Ruby Stack)

🛤️ **Ruby on Rails** - Core application since 2021  

🔄 **Sidekiq** - Background job processing  

📊 **PostgreSQL** - Primary data store  

🚢 **Heroku** - Hosting & deployment platform  


#### Challenges Even for Experienced Rails Teams

🧵 **Complex workflows spanning multiple services** that Sidekiq alone couldn't orchestrate

🕒 **Long-running transactions** that exceed typical background job time windows

🔎 **Workflow visibility gaps** across distributed job processing

🔄 **Reliability at scale** as transaction volume grew exponentially

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
