# Risk Scoring Methodology

**Assessment ID:** TPRM-2025-007  
**Date:** March 14, 2025  

---

## Overview

This document defines the risk scoring methodology used to evaluate and prioritize risks identified during the CloudSync Solutions vendor assessment. The methodology follows standard GRC practice using a qualitative 5x5 risk matrix.

---

## Risk Score Formula

**Risk Score = Likelihood × Impact**

Scores range from **1 (lowest)** to **25 (highest)**.

---

## Likelihood Scale

| Score | Level | Description |
|---|---|---|
| 1 | Rare | Unlikely to occur; no historical precedent in similar vendors |
| 2 | Unlikely | Possible but not expected; limited indicators |
| 3 | Possible | Could occur; some historical or industry precedent |
| 4 | Likely | Expected to occur at some point; common in industry |
| 5 | Almost Certain | Expected to occur; strong indicators or active threat |

---

## Impact Scale

| Score | Level | Description |
|---|---|---|
| 1 | Negligible | Minimal disruption; no data exposure; no regulatory trigger |
| 2 | Minor | Limited disruption; minor data exposure; no regulatory reporting |
| 3 | Moderate | Moderate disruption; limited PII exposure; regulatory review possible |
| 4 | Significant | Material disruption; broad PII exposure; regulatory reporting likely |
| 5 | Severe | Business-disrupting; large-scale data breach; regulatory action probable |

---

## Risk Rating Matrix

|  | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | 5 | 10 | 15 | 20 | **25** |
| **Likelihood 4** | 4 | 8 | 12 | **16** | **20** |
| **Likelihood 3** | 3 | 6 | **9** | **12** | **15** |
| **Likelihood 2** | 2 | 4 | 6 | 8 | 10 |
| **Likelihood 1** | 1 | 2 | 3 | 4 | 5 |

---

## Risk Rating Thresholds

| Score Range | Risk Rating | Action Required |
|---|---|---|
| 20–25 | 🔴 Critical | Immediate escalation; vendor onboarding blocked until resolved |
| 12–19 | 🟠 High | Conditional approval; remediation required within 90 days |
| 6–11 | 🟡 Medium | Accepted with remediation plan; monitor quarterly |
| 1–5 | 🟢 Low | Accepted; review at next annual assessment |

---

## Residual Risk

Residual risk accounts for existing compensating controls. For each risk, the analyst applies a **control effectiveness adjustment** (0–40% reduction) based on vendor-provided evidence:

| Control Effectiveness | Reduction Applied |
|---|---|
| Strong — fully implemented, evidenced | 30–40% |
| Moderate — partially implemented | 15–25% |
| Weak — minimal controls in place | 0–10% |

**Residual Risk Score = Inherent Risk Score × (1 − Control Effectiveness %)**

---

## Escalation Thresholds

- Any **Critical** residual risk → Escalate to CISO and Legal; onboarding paused
- Any **High** residual risk → CISO notification; conditional approval with signed POA&M commitment
- Any **Medium** residual risk → POA&M entry; quarterly monitoring
- **Low** residual risk → Standard annual review cycle
