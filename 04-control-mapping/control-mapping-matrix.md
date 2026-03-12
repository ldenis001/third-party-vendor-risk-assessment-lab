# Control Mapping Matrix

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Date:** March 14, 2025  
**Analyst:** Lazaro Denis, GRC Analyst  
**Frameworks:** NIST Cybersecurity Framework (CSF) 2.0 | ISO/IEC 27001:2022

---

## Purpose

This matrix maps CloudSync's security controls (as documented in the security questionnaire and SOC 2 report) to the relevant NIST CSF 2.0 functions/categories and ISO 27001:2022 Annex A controls. It also captures the control status based on the assessment findings.

---

## Control Status Legend

| Status | Meaning |
|---|---|
| ✅ Implemented | Control is in place and functioning effectively |
| ⚠️ Partial | Control is partially implemented; gaps identified |
| ❌ Not Implemented | Control is absent |
| 🔍 Unverified | Vendor attests to control; independent verification not performed |

---

## Control Mapping Table

| Control Area | Vendor Control Description | NIST CSF 2.0 | ISO 27001:2022 | Status | Finding Ref |
|---|---|---|---|---|---|
| **Information Security Policy** | Documented IS policy, reviewed annually | GV.OC-01 | A.5.1 | ✅ Implemented | — |
| **Risk Management Program** | ISO 27001-aligned risk program, executive review | GV.RM-01 | A.5.3, A.6.1.1 | ✅ Implemented | — |
| **Security Roles & Responsibilities** | CISO + 4-person security team | GV.RR-01 | A.5.2 | ✅ Implemented | — |
| **Third-Party Risk Management** | Annual vendor assessments, DPAs in place | GV.SC-06 | A.5.19, A.5.20 | ⚠️ Partial | FIND-005 |
| **Multi-Factor Authentication** | MFA required for admins; optional for standard users | PR.AA-01 | A.8.5 | ⚠️ Partial | **FIND-001** |
| **Role-Based Access Control** | Granular RBAC with least privilege | PR.AA-05 | A.8.2, A.8.3 | ✅ Implemented | — |
| **Privileged Access Management** | CyberArk PAM with session recording | PR.AA-05 | A.8.2 | ✅ Implemented | — |
| **Access Reviews** | Quarterly access certification | PR.AA-06 | A.8.2 | ✅ Implemented | — |
| **Single Sign-On** | SAML 2.0 and OIDC for customers | PR.AA-01 | A.8.5 | ✅ Implemented | — |
| **Vendor/Support Access Logging** | All support access logged with ticket ref | PR.AA-05 | A.8.15 | ✅ Implemented | — |
| **Data Classification** | Data classified per internal policy | PR.DS-01 | A.5.9, A.5.12 | ✅ Implemented | — |
| **Encryption at Rest** | AES-256 for all customer data | PR.DS-01 | A.8.24 | ✅ Implemented | — |
| **Encryption in Transit** | TLS 1.2+ for all data in transit | PR.DS-02 | A.8.24 | ✅ Implemented | — |
| **Key Management** | AWS KMS with annual key rotation | PR.DS-01 | A.8.24 | ✅ Implemented | — |
| **Tenant Isolation** | Per-tenant DB schemas + row-level security | PR.DS-01 | A.8.10 | 🔍 Unverified | — |
| **Data Masking — Production** | SSNs tokenized in production | PR.DS-01 | A.8.11 | ✅ Implemented | — |
| **Data Masking — Non-Production** | PII not masked in dev/test environments | PR.DS-01 | A.8.11 | ❌ Not Implemented | **FIND-002** |
| **Data Retention and Disposal** | 7-year retention; certified secure deletion | PR.DS-04 | A.8.10 | ✅ Implemented | — |
| **Data Loss Prevention (DLP)** | DLP on email only; no endpoint or API DLP | PR.DS-05 | A.8.12 | ⚠️ Partial | FIND-003 |
| **Environment Separation** | Prod/non-prod in separate AWS accounts | PR.DS-07 | A.8.31 | ✅ Implemented | — |
| **Vulnerability Management** | Monthly scans + annual pen test | PR.PS-02 | A.8.8 | ✅ Implemented | — |
| **Patch Management** | Critical patches within 72 hours | PR.PS-02 | A.8.8 | ✅ Implemented | — |
| **Network Segmentation** | AWS Security Groups and NACLs | PR.IR-01 | A.8.20 | ✅ Implemented | — |
| **Intrusion Detection** | AWS GuardDuty | DE.CM-01 | A.8.16 | ✅ Implemented | — |
| **Security Monitoring / SIEM** | CloudTrail + GuardDuty | DE.CM-01 | A.8.15, A.8.16 | ✅ Implemented | — |
| **Incident Response Plan** | Documented IR plan; annual tabletop | RS.MA-01 | A.5.24 | ✅ Implemented | — |
| **Breach Notification** | 48-hour customer notification SLA | RS.CO-02 | A.5.24 | ✅ Implemented | — |
| **Incident Logging** | Ticketing system with SLA tracking | RS.MA-03 | A.5.26 | ✅ Implemented | — |
| **Business Continuity Plan** | Annual BCP test | RC.RP-01 | A.5.29 | ✅ Implemented | — |
| **Backup and Recovery** | Daily backups; quarterly restore tests | RC.RP-01 | A.8.13 | ✅ Implemented | — |
| **Geographic Redundancy** | Active-passive multi-region AWS | RC.RP-01 | A.8.13 | ✅ Implemented | — |
| **SOC 2 Type II Audit** | Clean SOC 2 opinion — active | GV.OC-05 | A.5.35 | ✅ Implemented | — |
| **ISO 27001 Certification** | Active certification | GV.OC-05 | A.5.35 | ✅ Implemented | — |
| **HIPAA BAA** | Available and included in contract template | GV.OC-05 | A.5.31 | ✅ Implemented | — |
| **Customer Audit Rights** | SOC 2 review only; no direct audit | GV.OC-05 | A.5.20 | ⚠️ Partial | FIND-004 |
| **Penetration Testing** | Annual third-party pen test | ID.RA-01 | A.8.8 | ✅ Implemented | — |
| **Sub-Processor Management** | DPAs in place; published sub-processor list | GV.SC-06 | A.5.19 | 🔍 Unverified | FIND-005 |
| **Security Awareness Training** | Annual mandatory training | PR.AT-01 | A.6.3 | ✅ Implemented | — |

---

## Control Coverage Summary

| NIST CSF Function | Controls Mapped | Implemented | Partial / Gap |
|---|---|---|---|
| GOVERN (GV) | 7 | 5 | 2 |
| IDENTIFY (ID) | 1 | 1 | 0 |
| PROTECT (PR) | 20 | 16 | 4 |
| DETECT (DE) | 2 | 2 | 0 |
| RESPOND (RS) | 3 | 3 | 0 |
| RECOVER (RC) | 3 | 3 | 0 |
| **Total** | **36** | **30 (83%)** | **6 (17%)** |

---

## ISO 27001 Coverage Summary

| Annex A Clause | Controls Mapped | Status |
|---|---|---|
| A.5 — Organizational Controls | 11 | Mostly implemented; gaps in A.5.19, A.5.20 |
| A.6 — People Controls | 1 | Implemented |
| A.8 — Technological Controls | 18 | Mostly implemented; gaps in A.8.5, A.8.11, A.8.12 |

---

## Key Gaps by Framework

| Gap | NIST CSF | ISO 27001 | Severity |
|---|---|---|---|
| MFA not universal | PR.AA-01 | A.8.5 | High |
| Non-prod data masking absent | PR.DS-01 | A.8.11 | High |
| Limited DLP | PR.DS-05 | A.8.12 | Medium |
| Limited audit rights | GV.OC-05 | A.5.20 | Low |
| Sub-processor unverified | GV.SC-06 | A.5.19 | Low |
