# Security Review Findings

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Review Date:** March 10–14, 2025  
**Analyst:** Lazaro Denis, GRC Analyst  

---

## Overview

Following the security questionnaire review, this document consolidates analyst observations, identified control gaps, and risk ratings for each finding. Findings are prioritized by severity to guide remediation planning.

---

## Finding Summary

| Finding ID | Domain | Finding Title | Severity | Status |
|---|---|---|---|---|
| FIND-001 | Access Control | MFA Not Universally Required | High | Open |
| FIND-002 | Data Security | PII Exposed in Non-Production Environments | High | Open |
| FIND-003 | Data Security | Limited DLP Coverage | Medium | Open |
| FIND-004 | Compliance | Restricted Customer Audit Rights | Low | Open |
| FIND-005 | Supply Chain | Sub-Processor Inventory Not Reviewed | Low | Monitoring |

---

## Detailed Findings

---

### FIND-001 — MFA Not Universally Required

| Field | Detail |
|---|---|
| **Finding ID** | FIND-001 |
| **Severity** | High |
| **Domain** | Access Control |
| **Control Reference** | NIST CSF PR.AA-01 / ISO 27001 A.8.5 |
| **Observed Condition** | CloudSync requires MFA for administrator accounts but treats MFA as optional for standard user accounts. Standard users may include Meridian HR staff with access to sensitive employee data. |
| **Risk** | If a standard user account is compromised (phishing, credential stuffing), an attacker gains direct access to Meridian's employee PII, payroll, and benefits data without an additional authentication barrier. |
| **Likelihood** | High — credential-based attacks are among the most common attack vectors |
| **Impact** | High — direct exposure of Confidential data |
| **Risk Rating** | **High** |
| **Recommended Remediation** | Require MFA for all users who access Meridian tenant data. Preferably enforce MFA at the SAML/SSO layer so Meridian can control enrollment. |
| **Vendor Response to Finding** | CloudSync stated MFA enforcement for all users is on their Q2 2025 roadmap. |
| **Target Remediation Date** | June 30, 2025 |

---

### FIND-002 — PII Exposed in Non-Production Environments

| Field | Detail |
|---|---|
| **Finding ID** | FIND-002 |
| **Severity** | High |
| **Domain** | Data Security |
| **Control Reference** | NIST CSF PR.DS-01 / ISO 27001 A.8.11 |
| **Observed Condition** | CloudSync confirmed that SSNs and other PII are tokenized in production, but the same protections are not applied in development and test environments. Real employee data may be present in non-production environments. |
| **Risk** | Non-production environments typically have weaker access controls and less security monitoring. PII present in these environments is at elevated risk of unauthorized access or accidental disclosure. |
| **Likelihood** | Medium — non-prod environments are common attack targets |
| **Impact** | High — direct exposure of PII including SSNs |
| **Risk Rating** | **High** |
| **Recommended Remediation** | Require use of synthetic or masked data in all non-production environments. Implement a formal data masking procedure for any production data subset used in dev/test. Confirm with a written policy and evidence. |
| **Vendor Response to Finding** | CloudSync acknowledged the gap. Committed to implementing a data masking policy by Q3 2025. |
| **Target Remediation Date** | August 31, 2025 |

---

### FIND-003 — Limited Data Loss Prevention (DLP) Coverage

| Field | Detail |
|---|---|
| **Finding ID** | FIND-003 |
| **Severity** | Medium |
| **Domain** | Data Security |
| **Control Reference** | NIST CSF PR.DS-05 / ISO 27001 A.8.12 |
| **Observed Condition** | CloudSync has DLP controls in place for outbound email only. There is no DLP coverage on endpoint devices, cloud storage (S3), or API-layer data exports. Bulk data exports of employee records are possible without a triggering alert. |
| **Risk** | Without comprehensive DLP, sensitive data can be exfiltrated via API, unauthorized bulk download, or misconfigured S3 bucket without detection. |
| **Likelihood** | Medium — insider threats and misconfiguration are real-world risks |
| **Impact** | Medium to High — depends on scope of data exfiltrated |
| **Risk Rating** | **Medium** |
| **Recommended Remediation** | Expand DLP coverage to include cloud storage and API-layer exports. Implement alerting for bulk data download events. Provide Meridian with notification if anomalous data egress is detected. |
| **Vendor Response to Finding** | CloudSync is evaluating CASB/DLP tooling for broader coverage. No committed timeline provided. |
| **Target Remediation Date** | December 31, 2025 |

---

### FIND-004 — Restricted Customer Audit Rights

| Field | Detail |
|---|---|
| **Finding ID** | FIND-004 |
| **Severity** | Low |
| **Domain** | Compliance |
| **Control Reference** | NIST CSF GV.OC-05 / ISO 27001 A.5.20 |
| **Observed Condition** | The CloudSync contract grants Meridian the right to review the SOC 2 report but does not allow Meridian to conduct a direct audit, on-site inspection, or engage an independent third party to assess CloudSync's controls. |
| **Risk** | Limited audit rights reduce Meridian's ability to independently verify vendor security claims, particularly for data types not covered by SOC 2 scope. |
| **Likelihood** | Low — SOC 2 Type II provides reasonable assurance |
| **Impact** | Low — current SOC 2 is clean; risk is prospective |
| **Risk Rating** | **Low** |
| **Recommended Remediation** | Negotiate contract language to allow Meridian to request supplemental evidence or engage a third-party assessor at Meridian's cost. Add annual questionnaire re-assessment clause. |
| **Vendor Response to Finding** | Under legal review. CloudSync open to adding questionnaire re-assessment clause. |
| **Target Remediation Date** | April 30, 2025 (contract negotiation) |

---

### FIND-005 — Sub-Processor Inventory Not Independently Verified

| Field | Detail |
|---|---|
| **Finding ID** | FIND-005 |
| **Severity** | Low |
| **Domain** | Supply Chain |
| **Control Reference** | NIST CSF GV.SC-06 / ISO 27001 A.5.19 |
| **Observed Condition** | CloudSync confirmed use of AWS, Stripe, and Twilio as sub-processors. These are reputable vendors; however, their posture has not been independently reviewed by Meridian as part of this assessment. |
| **Risk** | Fourth-party risk is unassessed. A breach at a sub-processor could expose Meridian data without a direct CloudSync failure. |
| **Likelihood** | Low — named sub-processors are large, mature cloud vendors |
| **Impact** | Medium — data is processed by sub-processors |
| **Risk Rating** | **Low** |
| **Recommended Remediation** | Request CloudSync's sub-processor list at onboarding and at each annual review. Confirm DPAs are in place. Request notification if sub-processors change. |
| **Vendor Response to Finding** | Sub-processor list confirmed available. DPAs in place with all listed sub-processors. Change notification clause available. |
| **Target Remediation Date** | April 30, 2025 (contract) |

---

## Overall Security Review Assessment

| Metric | Value |
|---|---|
| Total Questions Evaluated | 38 |
| Satisfactory Responses | 33 (87%) |
| Gaps Identified | 5 (13%) |
| Critical/High Gaps | 2 |
| Medium Gaps | 1 |
| Low Gaps | 2 |

**Overall Assessment:** CloudSync demonstrates a reasonable baseline security posture with active certifications (SOC 2 Type II, ISO 27001) and mature controls in most domains. However, two high-severity gaps — universal MFA and non-production data masking — must be remediated or mitigated before or shortly after onboarding.

**Proceed to:** Control Mapping Matrix (`04-control-mapping/control-mapping-matrix.md`)
