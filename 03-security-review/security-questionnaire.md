# Security Questionnaire

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Sent:** March 3, 2025  
**Responses Received:** March 10, 2025  
**Reviewed By:** Lazaro Denis, GRC Analyst  

> **Instructions to Vendor:** Please respond to each question accurately and completely. Where applicable, provide supporting documentation (policies, audit reports, diagrams). Incomplete responses will be flagged as gaps.

---

## Domain 1: Governance and Risk Management

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 1.1 | Does the organization have a formal Information Security Policy? | Yes — reviewed annually | Acceptable |
| 1.2 | Is there a dedicated security team or CISO? | Yes — CISO + 4-person security team | Acceptable |
| 1.3 | Are third-party risk assessments performed on CloudSync's own vendors? | Yes — annually | Partially verified; no evidence provided |
| 1.4 | Is there a documented risk management program? | Yes — ISO 27001 aligned | Acceptable |
| 1.5 | Are security risks reviewed at the executive level? | Yes — quarterly board briefings | Acceptable |

**Domain 1 Status: ✅ Satisfactory**

---

## Domain 2: Access Control

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 2.1 | Is Multi-Factor Authentication (MFA) required for all users? | MFA required for admin accounts; optional for standard users | ⚠️ **GAP** — MFA should be required for all users with access to Meridian data |
| 2.2 | Is role-based access control (RBAC) implemented? | Yes — granular RBAC with least privilege | Acceptable |
| 2.3 | How is privileged access managed? | PAM tool (CyberArk) with session recording | Acceptable |
| 2.4 | Are access reviews conducted? | Yes — quarterly access reviews | Acceptable |
| 2.5 | Is Single Sign-On (SSO) available for customers? | Yes — SAML 2.0 and OIDC supported | Acceptable |
| 2.6 | Are shared or generic accounts prohibited? | Yes — policy prohibits shared accounts | Acceptable |
| 2.7 | Is vendor support access logged and auditable? | Yes — all support access logged with ticket reference | Acceptable |

**Domain 2 Status: ⚠️ Gap Identified (Item 2.1)**

---

## Domain 3: Data Security and Encryption

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 3.1 | Is data encrypted at rest? | Yes — AES-256 | Acceptable |
| 3.2 | Is data encrypted in transit? | Yes — TLS 1.2 minimum | Acceptable; TLS 1.3 preferred |
| 3.3 | Are encryption keys managed securely? | AWS KMS with annual key rotation | Acceptable |
| 3.4 | Is customer data logically isolated in the multi-tenant environment? | Yes — per-tenant database schemas with row-level security | Acceptable; design doc requested |
| 3.5 | Is data masking or tokenization used for sensitive fields (SSN, payroll)? | SSNs are tokenized in production; not in non-production environments | ⚠️ **GAP** — PII/sensitive data must be masked in non-production environments |
| 3.6 | Is a data retention and disposal policy in place? | Yes — 7-year retention; secure deletion via certified vendor | Acceptable |
| 3.7 | Are data loss prevention (DLP) controls in place? | Partially — DLP on email only; no endpoint DLP | ⚠️ **GAP** — Limited DLP coverage |

**Domain 3 Status: ⚠️ Gaps Identified (Items 3.5, 3.7)**

---

## Domain 4: Network and Infrastructure Security

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 4.1 | Is the production environment separated from non-production? | Yes — separate AWS accounts | Acceptable |
| 4.2 | Are firewalls and network segmentation controls in place? | Yes — AWS Security Groups and NACLs | Acceptable |
| 4.3 | Is vulnerability scanning performed? | Yes — monthly automated scans + annual pen test | Acceptable |
| 4.4 | Are critical patches applied within defined SLAs? | Critical patches within 72 hours | Acceptable |
| 4.5 | Is an Intrusion Detection / Prevention System (IDS/IPS) in place? | AWS GuardDuty enabled; no dedicated IPS | Acceptable for cloud environment |
| 4.6 | Are unused ports and services disabled? | Yes — hardened AMIs used | Acceptable |

**Domain 4 Status: ✅ Satisfactory**

---

## Domain 5: Incident Response

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 5.1 | Is there a documented Incident Response (IR) plan? | Yes — tested annually via tabletop | Acceptable |
| 5.2 | What is the breach notification timeline for customers? | 72 hours per GDPR; contract allows 48-hour notification | Acceptable |
| 5.3 | Has the vendor experienced a security incident in the past 3 years? | One minor incident in 2023 (misconfigured S3 bucket; no data exfiltration) | Noted; resolved promptly |
| 5.4 | Are incidents logged and tracked to closure? | Yes — ticketing system with SLA tracking | Acceptable |
| 5.5 | Is forensic capability available post-incident? | Yes — AWS CloudTrail + third-party forensics firm retained | Acceptable |

**Domain 5 Status: ✅ Satisfactory (with note on 2023 incident)**

---

## Domain 6: Business Continuity and Disaster Recovery

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 6.1 | Is there a documented Business Continuity Plan (BCP)? | Yes — tested annually | Acceptable |
| 6.2 | What is the Recovery Time Objective (RTO)? | 4 hours | Acceptable |
| 6.3 | What is the Recovery Point Objective (RPO)? | 1 hour | Acceptable |
| 6.4 | Are backups performed and tested? | Daily automated backups; quarterly restore tests | Acceptable |
| 6.5 | Is there geographic redundancy? | Yes — active-passive across two AWS regions | Acceptable |

**Domain 6 Status: ✅ Satisfactory**

---

## Domain 7: Third-Party and Supply Chain

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 7.1 | Does CloudSync use sub-processors that may access Meridian data? | Yes — AWS, Stripe (payroll), Twilio (MFA) | ⚠️ Must verify sub-processor security posture |
| 7.2 | Are sub-processors contractually bound to equivalent security requirements? | Yes — DPA in place with each sub-processor | Acceptable |
| 7.3 | Is a list of sub-processors available to customers? | Yes — published at cloudsyncsolutions.com/sub-processors | Acceptable |
| 7.4 | Are sub-processors assessed annually? | Yes — self-attestation and SOC 2 review | Acceptable |

**Domain 7 Status: ⚠️ Monitor (sub-processor list to be reviewed)**

---

## Domain 8: Compliance and Audit

| # | Question | Vendor Response | Analyst Notes |
|---|---|---|---|
| 8.1 | Is a current SOC 2 Type II report available? | Yes — provided under NDA | Report reviewed; clean opinion |
| 8.2 | Is ISO 27001 certification current? | Yes — certificate provided | Verified; expires Sept 2025 |
| 8.3 | Is a HIPAA Business Associate Agreement (BAA) available? | Yes — included in contract template | Acceptable |
| 8.4 | Are penetration tests performed annually? | Yes — by third-party firm; summary available | Acceptable |
| 8.5 | Is there a customer audit right in the contract? | Limited — right to review SOC 2 report, not direct audit | ⚠️ Below Meridian preferred standard; negotiate |

**Domain 8 Status: ⚠️ Minor gap (Item 8.5 — audit rights)**

---

## Questionnaire Summary

| Domain | Status |
|---|---|
| 1. Governance and Risk Management | ✅ Satisfactory |
| 2. Access Control | ⚠️ Gap — MFA not universal |
| 3. Data Security and Encryption | ⚠️ Gaps — non-prod data masking, limited DLP |
| 4. Network and Infrastructure | ✅ Satisfactory |
| 5. Incident Response | ✅ Satisfactory |
| 6. Business Continuity / DR | ✅ Satisfactory |
| 7. Third-Party / Supply Chain | ⚠️ Monitor sub-processors |
| 8. Compliance and Audit | ⚠️ Minor — limited audit rights |

**Total Gaps Identified: 4**  
**Critical Gaps: 1** (MFA not required for all users)  
**Notable Gaps: 3** (non-prod data masking, limited DLP, limited audit rights)

**Proceed to:** Security Review Findings (`security-review-findings.md`)
