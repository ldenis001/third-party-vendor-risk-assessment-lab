# Executive Summary

**To:** Maria Chen, CISO | James Holloway, VP of HR  
**From:** Lazaro Denis, GRC Analyst  
**Date:** March 21, 2025  
**Subject:** Third-Party Vendor Risk Assessment — CloudSync Solutions  
**Classification:** Internal — Confidential  

---

## Purpose

This summary presents the results of the third-party risk assessment conducted on **CloudSync Solutions**, a SaaS HR and workforce management platform being evaluated by Meridian Financial Group. The assessment was initiated by the GRC team in response to a vendor selection request from Human Resources.

---

## Business Context

Meridian's HR department requires a modern, cloud-based platform to replace its end-of-life HR system. Following a competitive RFP process, CloudSync Solutions was selected. Before the contract is finalized, the GRC team conducted a full security assessment to evaluate CloudSync's ability to protect Meridian's employee data.

---

## What Was Assessed

The assessment covered CloudSync's security posture across eight domains:

- Governance and Risk Management
- Access Controls
- Data Security and Encryption
- Network and Infrastructure
- Incident Response
- Business Continuity and Disaster Recovery
- Third-Party Supply Chain
- Compliance and Audit

Evidence reviewed included CloudSync's security questionnaire responses, SOC 2 Type II report (clean opinion), ISO 27001 certificate, and vendor-provided policy documentation.

---

## Key Findings

The assessment identified **5 security gaps**. Two are high-severity and require remediation:

| # | Finding | Severity | Status |
|---|---|---|---|
| 1 | MFA is not required for all users with access to Meridian's employee data | 🟠 **High** | Open — remediation committed by June 30, 2025 |
| 2 | Employee PII is not masked in CloudSync's development and testing environments | 🟠 **High** | Open — remediation committed by August 31, 2025 |
| 3 | Data Loss Prevention (DLP) coverage is limited to outbound email only | 🟡 Medium | Roadmap in progress; no firm date |
| 4 | Customer audit rights are limited to SOC 2 review only | 🟢 Low | Contract negotiation in progress |
| 5 | Sub-processor list has not been independently reviewed by Meridian | 🟢 Low | Sub-processor list obtained; DPAs confirmed |

---

## Risk Summary

| | Score |
|---|---|
| Inherent Risk | **High** (3.30 / 5) |
| Residual Risk (with current controls) | **Medium** |
| Open High-Severity Risks | 1 (RISK-001: MFA) |
| Open Medium-Severity Risks | 4 |

---

## What CloudSync Does Well

- Active SOC 2 Type II and ISO 27001 certifications with clean findings
- Strong encryption practices (AES-256 at rest, TLS 1.2+ in transit, KMS key management)
- Mature privileged access management (CyberArk PAM with session recording)
- Documented and tested incident response and business continuity plans
- 4-hour RTO with multi-region AWS architecture
- HIPAA BAA available for benefits data

---

## Recommendation

> **Conditional Approval** — CloudSync Solutions is recommended for approval subject to the following conditions:

1. **Before go-live:** Meridian IT must enforce MFA for all Meridian users accessing CloudSync via Azure AD Conditional Access (compensating control for FIND-001).
2. **Before go-live:** No Meridian production data may be used in CloudSync's non-production environments (compensating control for FIND-002).
3. **Before contract execution:** Legal must negotiate enhanced audit rights and sub-processor change-notification clauses.
4. **By June 30, 2025:** CloudSync must demonstrate MFA enforcement for all users via written confirmation and screenshot evidence.
5. **By August 31, 2025:** CloudSync must provide a written data masking policy and evidence of implementation in non-production environments.

If these conditions are not met on schedule, escalation to the CISO and potential contract suspension will be initiated.

---

## Next Steps

| Action | Owner | Due Date |
|---|---|---|
| Enforce MFA via Azure AD before go-live | Meridian IT | Before April 1, 2025 |
| Finalize contract with audit rights clause | Meridian Legal | April 30, 2025 |
| Obtain sub-processor list and DPA confirmation | Meridian GRC | April 30, 2025 |
| Execute HIPAA BAA | Meridian Legal / HR | Before April 1, 2025 |
| First POA&M progress review | Lazaro Denis, GRC | July 15, 2025 |
| Annual vendor reassessment | GRC Team | March 2026 |

---

*Prepared by Lazaro Denis, GRC Analyst — March 21, 2025*
