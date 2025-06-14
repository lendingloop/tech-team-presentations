---
layout: default
---

# The Search for a Better Way

#### What We Desperately Needed

✓ **Reliable Coordination**: Orchestrate multiple services without losing track

✓ **Self-Healing Systems**: Recover automatically when things break

✓ **X-Ray Vision**: See exactly where money is at every moment

✓ **Bulletproof Consistency**: No more "it worked on my machine"

✓ **Ruby-Friendly**: Play nice with our existing Ruby investments

✓ **Pragmatic Complexity**: Doable without an army of DevOps engineers

<!--
**Speaker Notes - The Search for a Solution:**

- Begin with the business urgency: "After that $47,000 payment incident I mentioned, our leadership team gave us a clear mandate: find a solution that guarantees payment reliability, and do it quickly."

- Frame the evaluation process: "We established these six critical requirements you see on the slide. Any solution had to meet all of them - not just some."

- Walk through each requirement with context:
  * "Reliable coordination meant ensuring all steps complete successfully or roll back completely - no partial transactions"
  * "Self-healing meant automatic recovery from failures without human intervention"
  * "X-ray vision meant complete visibility into exactly where every payment is at every moment"
  * "Bulletproof consistency meant identical behavior in development and production"
  * "Ruby-friendly was non-negotiable - we weren't going to rewrite our entire stack"
  * "Pragmatic complexity meant our small team could actually operate it successfully"

- Add color on the evaluation process: "We spent three intensive weeks researching options. Our team evaluated several solutions including custom-built orchestrators, AWS Step Functions, and Apache Airflow."

- Highlight the key factors in choosing Temporal: "What ultimately sold us on Temporal were three things:"
  * "First, a production-ready Ruby SDK that worked with our existing stack"
  * "Second, time-travel debugging that lets us see exactly what happened in every workflow"
  * "Third, automatic compensation patterns that solve our partial failure problems"

- Share the proof of concept results: "After our evaluation, we ran a 2-week POC migrating our simplest payment flow. The results were immediate: zero partial failures, complete workflow visibility, and developers actually enjoying the experience."

- Time target: About 90 seconds - this introduces why Temporal was chosen before diving into how it works
-->