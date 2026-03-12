# Inherent Risk Questionnaire

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Completed By:** Lazaro Denis, GRC Analyst  
**Date:** March 1, 2025  

> **Purpose:** This questionnaire scores the vendor's *inherent risk* — the level of risk that exists before any security controls are considered. Inherent risk is driven by the sensitivity of data involved, the nature of the service, and the vendor's access profile.

---

## Scoring Guide

Each factor is scored on a scale of **1–5** (1 = Lowest Risk, 5 = Highest Risk).  
Inherent Risk Score = Weighted average of all factor scores.

| Score | Meaning |
|---|---|
| 1 | Minimal risk |
| 2 | Low risk |
| 3 | Moderate risk |
| 4 | High risk |
| 5 | Critical risk |

---

## Factor 1: Data Sensitivity

| Question | Response | Score |
|---|---|---|
| Does the vendor process Personally Identifiable Information (PII)? | Yes — names, addresses, SSNs, DOBs | 5 |
| Does the vendor process financial data (payroll, compensation)? | Yes — payroll processing | 4 |
| Does the vendor process health or benefits data? | Yes — benefits enrollment | 4 |
| Does the vendor process regulated data (HIPAA, PCI, FERPA)? | Possible HIPAA (benefits) | 4 |
| Does the vendor process proprietary or classified business data? | Limited — internal HR records | 3 |

**Data Sensitivity Sub-Score: 4.0 / 5**

---

## Factor 2: Volume and Breadth of Data

| Question | Response | Score |
|---|---|---|
| Estimated number of employee records in scope | ~500 employees | 3 |
| Frequency of data transfer or sync | Daily (payroll cycle bi-weekly) | 3 |
| Scope of data access | Full HR dataset for all employees | 4 |

**Volume Sub-Score: 3.3 / 5**

---

## Factor 3: Access and Connectivity

| Question | Response | Score |
|---|---|---|
| Does the vendor have direct access to Meridian's internal network? | No — internet-based only | 1 |
| Does the vendor use APIs to interact with Meridian systems? | Yes — AD sync and payroll API | 3 |
| Does the vendor have administrative or privileged access? | Break-glass support access | 3 |
| Is the vendor accessible via the public internet? | Yes — SaaS platform | 3 |

**Access Sub-Score: 2.5 / 5**

---

## Factor 4: Hosting and Deployment Model

| Question | Response | Score |
|---|---|---|
| Where is data hosted? | AWS us-east-1 (cloud) | 3 |
| Is the environment multi-tenant? | Yes — multi-tenant SaaS | 4 |
| Does the vendor use sub-processors or fourth parties? | Unknown at intake | 4 |
| Is the data stored in the United States? | Yes — AWS us-east-1 | 2 |

**Hosting Sub-Score: 3.25 / 5**

---

## Factor 5: Business Criticality

| Question | Response | Score |
|---|---|---|
| How critical is this vendor to Meridian's operations? | High — core HR function | 4 |
| What is the impact if the vendor becomes unavailable? | Significant — payroll disruption | 4 |
| Is there a backup or alternate vendor available? | No current backup | 4 |
| Contract term | 3 years | 3 |

**Business Criticality Sub-Score: 3.75 / 5**

---

## Factor 6: Vendor Maturity and History

| Question | Response | Score |
|---|---|---|
| How long has the vendor been in business? | ~8 years | 2 |
| Has the vendor experienced a known breach or security incident? | Unknown — requires verification | 3 |
| Does the vendor have active certifications (SOC 2, ISO 27001)? | Yes (self-reported) | 2 |
| Is the vendor financially stable? | Series B funded, established | 2 |

**Vendor Maturity Sub-Score: 2.25 / 5**

---

## Inherent Risk Score Summary

| Factor | Sub-Score | Weight | Weighted Score |
|---|---|---|---|
| Data Sensitivity | 4.0 | 30% | 1.20 |
| Volume and Breadth | 3.3 | 15% | 0.50 |
| Access and Connectivity | 2.5 | 20% | 0.50 |
| Hosting and Deployment | 3.25 | 15% | 0.49 |
| Business Criticality | 3.75 | 10% | 0.38 |
| Vendor Maturity | 2.25 | 10% | 0.23 |
| **Total** | | **100%** | **3.30 / 5** |

---

## Inherent Risk Rating

| Score Range | Rating |
|---|---|
| 4.1 – 5.0 | Critical |
| **3.1 – 4.0** | **High** |
| 2.1 – 3.0 | Medium |
| 1.0 – 2.0 | Low |

### **Inherent Risk Rating: HIGH (3.30 / 5)**

---

## Analyst Notes

CloudSync Solutions presents **high inherent risk** primarily due to the sensitivity of data being processed (employee PII, SSNs, payroll, benefits) and the multi-tenant cloud deployment model. The vendor's use of sub-processors is currently unknown and must be clarified during the security questionnaire phase.

The high inherent risk rating does not indicate the vendor should be rejected — it means a thorough security review is required, and residual risk must be reduced to an acceptable level through strong controls.

**Proceed to:** Security Questionnaire (`03-security-review/security-questionnaire.md`)
