# Risk Register

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Date:** March 17, 2025  
**Analyst:** Lazaro Denis, GRC Analyst  
**Review Cycle:** Annual (next review: March 2026)

> See [`risk-scoring-methodology.md`](risk-scoring-methodology.md) for full scoring definitions.

---

## Risk Register Summary

| Risk ID | Risk Title | Category | Likelihood | Impact | Inherent Score | Control Effectiveness | Residual Score | Residual Rating | Status |
|---|---|---|---|---|---|---|---|---|---|
| RISK-001 | Unauthorized Access via Compromised User Account (No MFA) | Access Control | 4 | 4 | 16 | 20% (partial MFA) | **13** | 🟠 High | Open |
| RISK-002 | PII Exposure in Non-Production Environment | Data Security | 3 | 4 | 12 | 10% (env separation only) | **11** | 🟡 Medium | Open |
| RISK-003 | Undetected Data Exfiltration via API or Bulk Export | Data Security | 3 | 4 | 12 | 20% (email DLP, logging) | **10** | 🟡 Medium | Open |
| RISK-004 | Tenant Data Leakage in Multi-Tenant Environment | Infrastructure | 2 | 5 | 10 | 30% (schema isolation, RLS) | **7** | 🟡 Medium | Monitoring |
| RISK-005 | Insufficient Audit Evidence / Inability to Verify Controls | Compliance | 2 | 3 | 6 | 20% (SOC 2 report available) | **5** | 🟢 Low | Open |
| RISK-006 | Fourth-Party Breach via Sub-Processor | Supply Chain | 2 | 4 | 8 | 30% (DPAs, reputable vendors) | **6** | 🟡 Medium | Monitoring |
| RISK-007 | Vendor Business Disruption / Outage | Business Continuity | 2 | 3 | 6 | 35% (RTO 4hr, geo redundancy) | **4** | 🟢 Low | Accepted |
| RISK-008 | Non-Compliance with HIPAA due to Benefits Data Handling | Regulatory | 2 | 4 | 8 | 30% (BAA in place, SOC 2) | **6** | 🟡 Medium | Monitoring |
| RISK-009 | Breach Notification Delay Beyond Contractual SLA | Incident Response | 1 | 4 | 4 | 40% (IR plan, 48hr SLA) | **2** | 🟢 Low | Accepted |
| RISK-010 | Failure to Securely Delete Data at Contract Termination | Data Retention | 1 | 4 | 4 | 35% (policy + certified vendor) | **3** | 🟢 Low | Accepted |

---

## Detailed Risk Entries

---

### RISK-001 — Unauthorized Access via Compromised User Account (No Universal MFA)

| Field | Detail |
|---|---|
| **Risk ID** | RISK-001 |
| **Risk Statement** | An attacker who obtains a standard user's credentials (via phishing or credential stuffing) can gain unauthorized access to Meridian's employee data within CloudSync due to the absence of mandatory MFA for non-admin accounts. |
| **Threat Source** | External attacker; insider threat |
| **Vulnerability** | MFA not required for standard CloudSync users |
| **Likelihood** | 4 — Likely (credential attacks are highly prevalent; standard user accounts routinely targeted) |
| **Impact** | 4 — Significant (Confidential employee PII, SSN, payroll data could be accessed or exfiltrated) |
| **Inherent Score** | **16 — High** |
| **Existing Controls** | MFA enforced for admins; SAML SSO available; quarterly access reviews |
| **Control Effectiveness** | 20% — Partial; admins protected but standard users are not |
| **Residual Score** | **13 — High** |
| **Risk Owner** | VP of HR (Business Owner); GRC Analyst (Monitor) |
| **Treatment** | Mitigate — Require CloudSync to mandate MFA for all users within contractual terms. Enforce MFA at SSO layer in the interim. |
| **Finding Reference** | FIND-001 |
| **POA&M Reference** | POA&M-001 |
| **Target Resolution** | June 30, 2025 |
| **Status** | Open |

---

### RISK-002 — PII Exposure in Non-Production Environments

| Field | Detail |
|---|---|
| **Risk ID** | RISK-002 |
| **Risk Statement** | Employee PII (including SSNs) used in CloudSync's development or test environments may be accessed by unauthorized personnel or exposed through weaker non-production security controls. |
| **Threat Source** | Internal (developer, QA staff); external attacker targeting dev environment |
| **Vulnerability** | No data masking policy for non-production environments |
| **Likelihood** | 3 — Possible (development environments are commonly accessed by broader teams with fewer controls) |
| **Impact** | 4 — Significant (SSNs and PII exposure triggers regulatory obligations) |
| **Inherent Score** | **12 — High** |
| **Existing Controls** | Production/non-production environments are in separate AWS accounts |
| **Control Effectiveness** | 10% — Weak; environment separation does not protect data itself |
| **Residual Score** | **11 — Medium** |
| **Risk Owner** | GRC Analyst; VP of HR |
| **Treatment** | Mitigate — Require data masking policy and synthetic data use in non-production. Obtain written confirmation. |
| **Finding Reference** | FIND-002 |
| **POA&M Reference** | POA&M-002 |
| **Target Resolution** | August 31, 2025 |
| **Status** | Open |

---

### RISK-003 — Undetected Data Exfiltration via API or Bulk Export

| Field | Detail |
|---|---|
| **Risk ID** | RISK-003 |
| **Risk Statement** | Without comprehensive DLP controls, a malicious insider or compromised account could perform a bulk data export via the CloudSync API or export feature without triggering a security alert. |
| **Threat Source** | Insider threat; compromised external account |
| **Vulnerability** | DLP limited to outbound email; no coverage on API or bulk download events |
| **Likelihood** | 3 — Possible |
| **Impact** | 4 — Significant |
| **Inherent Score** | **12 — High** |
| **Existing Controls** | Email DLP; RBAC; access logging via CloudTrail |
| **Control Effectiveness** | 20% — Moderate logging present but no DLP alerting for data export |
| **Residual Score** | **10 — Medium** |
| **Risk Owner** | GRC Analyst |
| **Treatment** | Mitigate — Request expanded DLP roadmap with timeline. Interim: ensure Meridian admin export permissions are scoped to minimum necessary. |
| **Finding Reference** | FIND-003 |
| **POA&M Reference** | POA&M-003 |
| **Target Resolution** | December 31, 2025 |
| **Status** | Open |

---

### RISK-004 — Tenant Data Leakage in Multi-Tenant Environment

| Field | Detail |
|---|---|
| **Risk ID** | RISK-004 |
| **Risk Statement** | A misconfiguration or software vulnerability in CloudSync's multi-tenant architecture could result in Meridian's data being accessible to another tenant. |
| **Threat Source** | Software vulnerability; misconfiguration |
| **Vulnerability** | Multi-tenant architecture inherently shares underlying infrastructure |
| **Likelihood** | 2 — Unlikely (strong isolation controls reported) |
| **Impact** | 5 — Severe (would constitute a data breach; regulatory reporting required) |
| **Inherent Score** | **10 — Medium** |
| **Existing Controls** | Per-tenant database schemas; row-level security; SOC 2 covers tenant isolation |
| **Control Effectiveness** | 30% — Moderate; controls appear appropriate but not independently verified |
| **Residual Score** | **7 — Medium** |
| **Risk Owner** | GRC Analyst |
| **Treatment** | Monitor — Request tenant isolation architecture documentation. Verify via SOC 2 bridge letter or supplemental evidence. |
| **Finding Reference** | — |
| **POA&M Reference** | — |
| **Target Resolution** | Annual review |
| **Status** | Monitoring |

---

### RISK-005 — Insufficient Audit Evidence

| Field | Detail |
|---|---|
| **Risk ID** | RISK-005 |
| **Risk Statement** | Contract terms limit Meridian's audit rights to review of the SOC 2 report, which may not cover all controls relevant to Meridian's data. |
| **Likelihood** | 2 — Unlikely |
| **Impact** | 3 — Moderate |
| **Inherent Score** | **6 — Medium** |
| **Control Effectiveness** | 20% |
| **Residual Score** | **5 — Low** |
| **Treatment** | Transfer — Negotiate enhanced audit rights in contract. |
| **Finding Reference** | FIND-004 |
| **Status** | Open |

---

### RISK-006 — Fourth-Party Breach via Sub-Processor

| Field | Detail |
|---|---|
| **Risk ID** | RISK-006 |
| **Risk Statement** | A security incident at AWS, Stripe, or Twilio could result in exposure of Meridian data processed by CloudSync's sub-processors. |
| **Likelihood** | 2 — Unlikely |
| **Impact** | 4 — Significant |
| **Inherent Score** | **8 — Medium** |
| **Control Effectiveness** | 30% — DPAs in place; named sub-processors are large reputable vendors |
| **Residual Score** | **6 — Medium** |
| **Treatment** | Monitor — Review sub-processor list annually; require change notification. |
| **Finding Reference** | FIND-005 |
| **Status** | Monitoring |

---

### RISK-007 — Vendor Business Disruption / Outage

| Field | Detail |
|---|---|
| **Risk ID** | RISK-007 |
| **Risk Statement** | An extended CloudSync outage could disrupt Meridian's HR and payroll operations. |
| **Likelihood** | 2 — Unlikely |
| **Impact** | 3 — Moderate |
| **Inherent Score** | **6 — Medium** |
| **Control Effectiveness** | 35% — 4-hour RTO, multi-region, tested BCP |
| **Residual Score** | **4 — Low** |
| **Treatment** | Accept — RTO/RPO acceptable; BCP in place. |
| **Status** | Accepted |

---

### RISK-008 — HIPAA Non-Compliance (Benefits Data)

| Field | Detail |
|---|---|
| **Risk ID** | RISK-008 |
| **Risk Statement** | If CloudSync mishandles benefits-related health data, Meridian could face HIPAA liability. |
| **Likelihood** | 2 — Unlikely |
| **Impact** | 4 — Significant |
| **Inherent Score** | **8 — Medium** |
| **Control Effectiveness** | 30% — HIPAA BAA available; SOC 2 covers data handling |
| **Residual Score** | **6 — Medium** |
| **Treatment** | Mitigate / Transfer — Execute HIPAA BAA; confirm scope with legal. |
| **Status** | Monitoring |

---

### RISK-009 — Breach Notification Delay

| Field | Detail |
|---|---|
| **Risk ID** | RISK-009 |
| **Risk Statement** | CloudSync fails to notify Meridian within the 48-hour contractual SLA following a breach. |
| **Likelihood** | 1 — Rare |
| **Impact** | 4 — Significant |
| **Inherent Score** | **4 — Low** |
| **Residual Score** | **2 — Low** |
| **Treatment** | Accept — Contractual SLA and IR plan in place. |
| **Status** | Accepted |

---

### RISK-010 — Insecure Data Deletion at Contract Termination

| Field | Detail |
|---|---|
| **Risk ID** | RISK-010 |
| **Risk Statement** | CloudSync fails to securely delete Meridian data upon contract termination as required. |
| **Likelihood** | 1 — Rare |
| **Impact** | 4 — Significant |
| **Inherent Score** | **4 — Low** |
| **Residual Score** | **3 — Low** |
| **Treatment** | Accept — Policy and certified deletion vendor in place. |
| **Status** | Accepted |

---

## Risk Register Summary Dashboard

| Rating | Count | Risk IDs |
|---|---|---|
| 🔴 Critical | 0 | — |
| 🟠 High | 1 | RISK-001 |
| 🟡 Medium | 5 | RISK-002, 003, 004, 006, 008 |
| 🟢 Low | 4 | RISK-005, 007, 009, 010 |

**Overall Residual Risk: MEDIUM**  
**Recommendation: Conditional Approval — subject to RISK-001 remediation and POA&M acceptance**
