# Vendor Intake Form

**Assessment ID:** TPRM-2025-007  
**Date Submitted:** March 1, 2025  
**Submitted By:** James Holloway, VP of HR  
**Reviewed By:** Lazaro Denis, GRC Analyst  

---

## Section 1: Vendor Information

| Field | Response |
|---|---|
| Vendor Name | CloudSync Solutions |
| Website | www.cloudsyncsolutions.com (fictional) |
| Headquarters | Austin, TX |
| Founded | 2017 |
| Company Size | ~350 employees |
| Primary Contact | Alex Rivera, Enterprise Account Manager |
| Security Contact | security@cloudsyncsolutions.com (fictional) |
| Legal Entity | CloudSync Solutions, Inc. |

---

## Section 2: Service Description

| Field | Response |
|---|---|
| Service Type | SaaS — HR & Workforce Management Platform |
| Service Description | Cloud-based platform for employee records, payroll processing, time tracking, performance management, and HR reporting |
| Contract Type | Annual SaaS Subscription |
| Estimated Annual Value | $48,000 |
| Proposed Start Date | April 1, 2025 |
| Contract Term | 3 years |

---

## Section 3: Data Classification

### What types of data will the vendor access, store, or process?

| Data Type | Involved? | Notes |
|---|---|---|
| Employee PII (name, address, SSN) | ✅ Yes | Core HR data |
| Payroll and compensation data | ✅ Yes | Bi-weekly payroll processing |
| Health or benefits information | ✅ Yes | Benefits enrollment data |
| Performance reviews | ✅ Yes | Annual review records |
| Financial data | ⚠️ Limited | Payroll-related only |
| Customer PII | ❌ No | Not applicable |
| Intellectual property | ❌ No | Not applicable |
| Regulated data (HIPAA, PCI) | ⚠️ Possible | Benefits data may trigger HIPAA |

### Data Classification per Meridian Policy

**Classification Level: CONFIDENTIAL**  
Rationale: The vendor will process employee PII including SSNs, payroll data, and potentially health-related benefits information. This meets Meridian's definition of Confidential data.

---

## Section 4: Data Flow Summary

```
Meridian Financial Group
        │
        │ SFTP / API (TLS 1.2+)
        ▼
CloudSync Solutions (AWS us-east-1)
        │
        ├── Multi-tenant SaaS environment
        ├── Data encrypted at rest (AES-256)
        └── Data retained per customer contract (default: 7 years)
```

### Data Flow Details

| Step | Description |
|---|---|
| Ingestion | HR admin uploads employee data via secure API or SFTP |
| Storage | Data stored in AWS RDS (encrypted) and S3 (encrypted) |
| Processing | Payroll calculations, reporting, analytics run within CloudSync platform |
| Access | Role-based access for Meridian HR admins via SSO |
| Egress | Reports exported by authorized users; data returned to Meridian upon contract termination |
| Retention | Per Meridian contract: 7-year retention; secure deletion upon request |

---

## Section 5: Integration and Access

| Field | Response |
|---|---|
| System integrations required | Active Directory / Azure AD (SSO via SAML 2.0) |
| Meridian users with access | ~15 HR staff + 2 IT admins |
| Vendor staff with access to Meridian data | Support team (break-glass access only, logged) |
| API connections | Yes — payroll and directory sync |
| Network connectivity required | Internet-based (no direct network tunnel required) |

---

## Section 6: Compliance and Certifications (Self-Reported)

| Certification / Standard | Status | Expiry |
|---|---|---|
| SOC 2 Type II | ✅ Active | December 2025 |
| ISO/IEC 27001:2022 | ✅ Active | September 2025 |
| GDPR Compliance | ✅ Self-attested | N/A |
| CCPA Compliance | ✅ Self-attested | N/A |
| HIPAA BAA Available | ✅ Yes | Per contract |

---

## Section 7: Business Justification

**Requesting Department:** Human Resources  
**Business Owner:** James Holloway, VP of HR

> "Our current HR system is end-of-life and lacks the reporting and automation capabilities we need. CloudSync was selected after a competitive RFP process. We are requesting GRC review before finalizing the contract."

**Alternatives Considered:** Workday (cost-prohibitive), BambooHR (limited payroll integration), internal solution (not feasible).

---

## Section 8: Intake Risk Flags

| Flag | Present? | Notes |
|---|---|---|
| Handles regulated data (PII, PHI) | ✅ Yes | Triggers formal assessment |
| Internet-facing access | ✅ Yes | Standard SaaS delivery |
| Multi-tenant environment | ✅ Yes | Tenant isolation controls must be verified |
| Sub-processors / fourth parties | ⚠️ Unknown | Must be clarified in questionnaire |
| Recent breach or incident history | ⚠️ Unknown | Must verify via questionnaire and public records |
| Financial stability concerns | ❌ None identified | Established vendor, Series B funded |

---

## Section 9: Intake Disposition

**Inherent Risk Tier (Preliminary):** HIGH  
**Rationale:** Vendor will process employee PII, SSNs, payroll, and benefits data in a multi-tenant cloud environment. Formal security assessment required before approval.

**Next Step:** Proceed to inherent risk questionnaire and security questionnaire.

**Intake Reviewer Signature:** Lazaro Denis, GRC Analyst — March 1, 2025
