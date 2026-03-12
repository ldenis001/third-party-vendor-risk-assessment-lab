# Third-Party Vendor Risk Assessment Lab

![GRC](https://img.shields.io/badge/Domain-GRC-blue) ![NIST CSF](https://img.shields.io/badge/Framework-NIST%20CSF-green) ![ISO 27001](https://img.shields.io/badge/Framework-ISO%2027001-orange) ![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

## Overview

This project simulates a real-world **Third-Party Vendor Risk Assessment** performed by a Governance, Risk, and Compliance (GRC) analyst. The purpose of the lab is to evaluate the security and compliance posture of a fictional SaaS vendor — **CloudSync Solutions** — that will store and process sensitive business data on behalf of a fictional company, **Meridian Financial Group**.

This lab demonstrates how to:

- Perform a vendor intake and inherent risk review
- Evaluate a vendor's security controls via a security questionnaire
- Map controls to **NIST CSF** and **ISO/IEC 27001**
- Document findings in a **risk register**
- Develop a **Plan of Action and Milestones (POA&M)**
- Provide a final risk-based recommendation to stakeholders

> This project reflects the type of work commonly performed in **third-party risk management (TPRM)**, **vendor risk management**, and **GRC analyst** roles.

---

## Business Scenario

**Meridian Financial Group** is evaluating **CloudSync Solutions**, a cloud-based SaaS HR and operations platform, to support internal workforce management. The vendor would store and process:

- Employee personally identifiable information (PII)
- Payroll and compensation data
- Internal HR records and performance data
- Operational workflow data

Before onboarding, the GRC team must perform a formal risk assessment to determine whether CloudSync meets internal security and compliance expectations.

---

## Vendor Summary

| Field | Details |
|---|---|
| Vendor Name | CloudSync Solutions |
| Service Type | SaaS — HR & Operations Platform |
| Data Classification | Confidential / PII |
| Hosting Environment | AWS (Multi-tenant) |
| Certifications Claimed | SOC 2 Type II, ISO 27001 |
| Assessment Date | March 2025 |
| Assessor | GRC Analyst |

---

## Assessment Outcome

| Category | Result |
|---|---|
| Inherent Risk | **High** |
| Residual Risk | **Medium** |
| Critical Gaps Identified | 3 |
| Recommendation | **Conditional Approval** |

---

## Repository Structure

```text
third-party-vendor-risk-assessment-lab/
├── README.md
├── 01-project-overview/
│   └── project-overview.md           # Lab scope, objectives, methodology
├── 02-risk-intake/
│   ├── vendor-intake-form.md         # Initial vendor profile and data flow info
│   └── inherent-risk-questionnaire.md # Inherent risk scoring before controls
├── 03-security-review/
│   ├── security-questionnaire.md     # Detailed security control questionnaire
│   └── security-review-findings.md   # Analyst findings and observations
├── 04-control-mapping/
│   └── control-mapping-matrix.md     # NIST CSF + ISO 27001 control mapping
├── 05-risk-analysis/
│   ├── risk-register.md              # Full risk register with scores
│   └── risk-scoring-methodology.md   # Scoring rubric and methodology
├── 06-remediation/
│   └── poam.md                       # Plan of Action and Milestones
├── 07-decision-and-reporting/
│   ├── executive-summary.md          # Non-technical executive summary
│   └── final-recommendation.md       # Risk-based vendor recommendation
├── 08-evidence/
│   └── evidence-log.md               # Evidence and artifact tracking log
└── images/
    └── (architecture diagrams, workflow charts)
```

---

## Skills Demonstrated

| Skill Area | Applied In |
|---|---|
| Third-Party Risk Management (TPRM) | Full assessment lifecycle |
| Vendor Security Questionnaire Review | `03-security-review/` |
| Risk Identification and Scoring | `05-risk-analysis/` |
| Control Gap Analysis | `03-security-review/`, `04-control-mapping/` |
| NIST CSF Mapping | `04-control-mapping/` |
| ISO/IEC 27001 Mapping | `04-control-mapping/` |
| POA&M Development | `06-remediation/` |
| Executive Reporting | `07-decision-and-reporting/` |
| Compliance Documentation | Throughout |
| Stakeholder Communication | `07-decision-and-reporting/` |

---

## Frameworks Referenced

- **NIST Cybersecurity Framework (CSF) 2.0**
- **ISO/IEC 27001:2022**
- General vendor governance and third-party risk management practices

---

## How to Navigate This Lab

1. Start with [`01-project-overview/project-overview.md`](01-project-overview/project-overview.md) for scope and methodology
2. Review [`02-risk-intake/`](02-risk-intake/) to see how the vendor was initially profiled
3. Examine [`03-security-review/`](03-security-review/) for the control questionnaire and findings
4. Check [`04-control-mapping/`](04-control-mapping/) for NIST CSF and ISO 27001 alignment
5. See [`05-risk-analysis/`](05-risk-analysis/) for risk scoring and the full risk register
6. Review [`06-remediation/`](06-remediation/) for the POA&M and remediation tracking
7. Read [`07-decision-and-reporting/`](07-decision-and-reporting/) for the executive summary and final recommendation

---

## Author

**Lazaro Denis** | GRC Analyst  
[LinkedIn](https://www.linkedin.com/in/lazaro-denis-cybersecurity/) | [GitHub](https://github.com/ldenis001/LazCyber) | ldenis001@gmail.com
