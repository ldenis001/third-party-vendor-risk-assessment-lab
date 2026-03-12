# Plan of Action and Milestones (POA&M)

**Vendor:** CloudSync Solutions  
**Assessment ID:** TPRM-2025-007  
**Date Issued:** March 19, 2025  
**Analyst:** Lazaro Denis, GRC Analyst  
**Review Cycle:** Quarterly progress review; Annual reassessment

---

## Purpose

This Plan of Action and Milestones (POA&M) documents the identified security gaps from the CloudSync Solutions vendor assessment, the remediation actions required, responsible parties, and target completion dates. Meridian Financial Group requires CloudSync to acknowledge and commit to this POA&M as a condition of vendor approval.

---

## POA&M Status Key

| Status | Meaning |
|---|---|
| 🔴 Not Started | No action taken |
| 🟡 In Progress | Remediation underway |
| 🟢 Completed | Control implemented and verified |
| ⚪ Accepted | Risk accepted; no remediation required |
| 🔵 Monitoring | Ongoing monitoring in place |

---

## POA&M Table

| POA&M ID | Finding ID | Risk ID | Gap Description | Required Action | Owner | Priority | Target Date | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| POA&M-001 | FIND-001 | RISK-001 | MFA not required for all users accessing Meridian data | Mandate MFA for all CloudSync users with access to Meridian tenant. Enforce at SSO/SAML layer or platform-wide. Provide written confirmation and evidence of enforcement. | CloudSync Security Team | High | June 30, 2025 | 🔴 Not Started | Interim: Meridian to enforce MFA via Azure AD SSO before onboarding |
| POA&M-002 | FIND-002 | RISK-002 | PII present in non-production environments | Implement formal data masking policy. Use synthetic data in all dev/test environments. Provide written policy and implementation evidence. | CloudSync Security Team | High | August 31, 2025 | 🔴 Not Started | No Meridian data to flow to CloudSync until POA&M-001 is closed or mitigated |
| POA&M-003 | FIND-003 | RISK-003 | Limited DLP coverage (email only) | Expand DLP to cover API exports and cloud storage. Implement alerting for anomalous data egress. Provide roadmap with committed dates. | CloudSync Security Team | Medium | December 31, 2025 | 🔴 Not Started | Interim: Scope Meridian admin export permissions to minimum necessary |
| POA&M-004 | FIND-004 | RISK-005 | Restricted customer audit rights | Negotiate contract amendment to allow annual questionnaire re-assessment and right to request supplemental evidence. | Meridian Legal / GRC | Low | April 30, 2025 | 🔴 Not Started | CloudSync expressed openness to questionnaire clause |
| POA&M-005 | FIND-005 | RISK-006 | Sub-processor list not independently reviewed | Obtain CloudSync's sub-processor list. Confirm DPAs in place. Add change-notification clause to contract. | Meridian GRC / Legal | Low | April 30, 2025 | 🔴 Not Started | Sub-processor list available at CloudSync website per vendor |

---

## Milestone Timeline

```
March 2025      April 2025          June 2025       Aug 2025    Dec 2025
    │                │                   │               │           │
    ▼                ▼                   ▼               ▼           ▼
[Assessment]  [Contract items       [POA&M-001      [POA&M-002  [POA&M-003
[Completed]    POA&M-004, 005]      MFA mandate]    Data mask]  DLP expand]
```

---

## Interim Compensating Controls

While POA&M items are being remediated, the following compensating controls are in place to reduce residual risk:

| POA&M ID | Compensating Control | Implemented By | Effective Date |
|---|---|---|---|
| POA&M-001 | Enforce MFA for all Meridian users via Azure AD Conditional Access policy before SSO to CloudSync | Meridian IT | Before Go-Live |
| POA&M-001 | Limit CloudSync access to HR staff on a need-to-know basis; review access list monthly during initial 90 days | Meridian HR / IT | Before Go-Live |
| POA&M-002 | No Meridian production data to be shared with CloudSync for testing or development purposes | Meridian GRC / HR | Before Go-Live |
| POA&M-003 | Restrict Meridian admin export permissions to minimum necessary fields and volume limits | Meridian IT | Before Go-Live |

---

## Progress Review Schedule

| Review Date | POA&M Items to Review | Reviewer |
|---|---|---|
| April 30, 2025 | POA&M-004, POA&M-005 (contract items) | Lazaro Denis, GRC; Meridian Legal |
| July 15, 2025 | POA&M-001 (MFA — verify evidence) | Lazaro Denis, GRC |
| September 15, 2025 | POA&M-002 (data masking — verify policy and evidence) | Lazaro Denis, GRC |
| January 15, 2026 | POA&M-003 (DLP — verify roadmap progress) | Lazaro Denis, GRC |
| March 2026 | Full annual reassessment | GRC Team |

---

## POA&M Acceptance

By proceeding with the vendor contract, CloudSync Solutions agrees to the remediation commitments documented in this POA&M. Failure to meet committed dates will trigger escalation to Meridian's CISO and may result in contract suspension.

| Role | Name | Date |
|---|---|---|
| GRC Analyst (Meridian) | Lazaro Denis | March 19, 2025 |
| CISO (Meridian) | Maria Chen | _Pending_ |
| Security Contact (CloudSync) | _CloudSync Security Team_ | _Pending_ |
