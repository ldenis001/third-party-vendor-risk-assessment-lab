# Final Risk-Based Recommendation

**Assessment ID:** TPRM-2025-007  
**Vendor:** CloudSync Solutions  
**Prepared By:** Lazaro Denis, GRC Analyst  
**Date:** March 21, 2025  

---

## Recommendation

### ✅ CONDITIONAL APPROVAL

CloudSync Solutions is approved for onboarding as a third-party vendor for Meridian Financial Group's HR and workforce management function, subject to the conditions documented below.

---

## Rationale

CloudSync demonstrates a credible baseline security posture: active SOC 2 Type II and ISO 27001 certifications, strong encryption, mature access management infrastructure, and a tested incident response capability. The 2023 S3 misconfiguration was disclosed transparently and resolved promptly with no data exfiltration confirmed.

However, two high-severity gaps were identified that present unacceptable residual risk without mitigation:

1. **MFA is not universally enforced** for all users with access to Meridian's Confidential data. This is the most significant gap — credential-based attacks are among the highest-probability threat vectors and the data in scope (SSNs, payroll, benefits) is highly sensitive.

2. **Employee PII is not masked in non-production environments.** If real Meridian employee data is ever included in a CloudSync development or QA dataset, it would be processed in an environment with weaker controls and potentially broader staff access.

These gaps do not warrant rejection because (a) compensating controls can be implemented by Meridian before go-live, (b) CloudSync has committed to remediation timelines, and (c) the vendor's overall security maturity is appropriate for the service type.

---

## Conditions of Approval

The following conditions must be satisfied for the approval to remain in effect:

### Pre-Go-Live (Before April 1, 2025)

| Condition | Owner | Evidence Required |
|---|---|---|
| MFA enforced for all Meridian users via Azure AD Conditional Access before CloudSync SSO | Meridian IT | Screenshot of Conditional Access policy; confirmation of enforcement |
| HIPAA BAA executed with CloudSync | Meridian Legal | Signed BAA document |
| No Meridian production data shared with CloudSync for testing or dev purposes | Meridian GRC / HR | Written confirmation to HR and IT |

### Contract Conditions (By April 30, 2025)

| Condition | Owner | Evidence Required |
|---|---|---|
| Contract amended to include annual questionnaire re-assessment right | Meridian Legal | Signed contract amendment |
| Sub-processor change-notification clause added to contract | Meridian Legal | Signed contract clause |
| Sub-processor list obtained and DPAs confirmed | Meridian GRC | Sub-processor list; DPA confirmation from CloudSync |

### Post-Go-Live Remediation (Per POA&M)

| POA&M ID | Condition | Target Date |
|---|---|---|
| POA&M-001 | CloudSync mandates MFA platform-wide for all users | June 30, 2025 |
| POA&M-002 | CloudSync implements data masking policy for non-production environments | August 31, 2025 |
| POA&M-003 | CloudSync expands DLP to cover API exports and bulk downloads | December 31, 2025 |

---

## Escalation Triggers

The following events will trigger escalation to the CISO and potential contract suspension:

- CloudSync fails to meet the June 30, 2025 MFA deadline without a formal extension
- Meridian data is found in CloudSync's non-production environments
- CloudSync experiences a breach affecting Meridian data
- Notification of a material change in sub-processors not aligned with contract terms
- SOC 2 or ISO 27001 certification lapses without renewal evidence

---

## Ongoing Monitoring

| Activity | Frequency | Owner |
|---|---|---|
| POA&M progress review | Quarterly | Lazaro Denis, GRC |
| Access review (Meridian side) | Quarterly | Meridian IT |
| Annual vendor reassessment questionnaire | Annual | GRC Team |
| SOC 2 bridge letter / renewal review | Annual | GRC Team |
| Sub-processor list review | Annual | GRC Team |

---

## Approval Sign-Off

| Role | Name | Decision | Date |
|---|---|---|---|
| GRC Analyst | Lazaro Denis | Recommend Conditional Approval | March 21, 2025 |
| CISO | Maria Chen | _Pending_ | _—_ |
| VP of HR (Business Owner) | James Holloway | _Pending_ | _—_ |
| Legal / Privacy Counsel | Sarah Okafor | _Pending_ | _—_ |

---

*This recommendation is valid for 12 months from the date of issue, subject to material changes in the vendor's security posture, certifications, or data handling practices.*
