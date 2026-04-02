# TPRM Vendor Risk Dashboard

**Live SIG Lite intake form → auto-generated risk report and POA&M**

An interactive vendor risk portal built on top of the [Third-Party Vendor Risk Assessment Lab](../README.md). Vendors fill out a SIG Lite questionnaire at a shareable link, and the dashboard auto-generates a scored risk report, domain-level compliance breakdown, findings table, and POA&M — no backend required.

> **Live Demo (GitHub Pages):**
> `https://ldenis001.github.io/third-party-vendor-risk-assessment-lab/dashboard/`

---

## What's New vs. The Base Lab

| Feature | Base Lab | Dashboard Module |
|---|---|---|
| Vendor assessment | Static CSV/docs | Live intake form |
| Risk scoring | Manual | Automated (weighted SIG Lite) |
| POA&M generation | Manual | Auto-generated from findings |
| Framework mapping | NIST CSF 2.0, ISO 27001 | + SIG Lite domains A-L |
| Shareable link | No | Yes (GitHub Pages) |
| Export | No | CSV findings export |

---

## Files

```
dashboard/
├── index.html        # SIG Lite vendor intake form (shareable link)
├── dashboard.html    # Risk results dashboard
├── sig-lite-map.js   # Question bank + scoring engine
└── README.md
```

---

## How It Works

```
1. Share index.html link with vendor
2. Vendor answers 38 SIG Lite questions (Yes / Partial / No / N/A)
3. Click "Generate Risk Report"
4. dashboard.html auto-scores:
   - Weighted score per domain (A-L)
   - Overall compliance %
   - Risk rating: LOW / MEDIUM / HIGH
   - Outcome: APPROVE / CONDITIONAL APPROVAL / DO NOT APPROVE
   - Auto-generated POA&M for HIGH severity findings
   - Exportable findings CSV
```

---

## SIG Lite Domains Covered

| Domain | NIST CSF 2.0 | ISO 27001:2022 |
|---|---|---|
| A - Risk Management | GV.RM | 6.1 |
| B - Security Policy | GV.PO | 5.1 |
| C - Access Control | PR.AA | 8.2 |
| D - HR Security | GV.RR | 6.1/6.3 |
| E - Asset Management | ID.AM | 8.1 |
| F - Physical Security | PR.AA | 7.1/7.2 |
| G - Operations | PR.PS | 8.19/8.32 |
| H - Vulnerability Mgmt | ID.RA/PR.PS | 8.8 |
| I - Incident Response | RS/RC | 5.24/5.26 |
| J - BCP / DR | RC.RP | 5.29/5.30 |
| K - Data Protection | PR.DS | 8.24 |
| L - Compliance & Audit | GV.OV | 5.31/5.36 |

---

## Scoring Logic

| Answer | Score |
|---|---|
| Yes | 100% of weight |
| Partial | 50% of weight |
| No | 0% + generates finding |
| N/A | Excluded from scoring |

| Score | Rating | Outcome |
|---|---|---|
| >= 80%, 0 HIGH | LOW | APPROVE |
| >= 60%, <= 2 HIGH | MEDIUM | CONDITIONAL APPROVAL |
| < 60% or > 2 HIGH | HIGH | DO NOT APPROVE |

---

## Deploy on GitHub Pages

1. Go to repo Settings → Pages
2. Source: Deploy from branch `main`
3. Live at: `https://ldenis001.github.io/third-party-vendor-risk-assessment-lab/dashboard/`

---

## Skills Demonstrated

- SIG Lite framework mapping and vendor questionnaire design
- Weighted risk scoring and automated findings generation
- POA&M lifecycle management
- NIST CSF 2.0 + ISO 27001:2022 dual-framework mapping
- HTML/CSS/JS self-contained single-file web app
- GitHub Pages deployment for shareable GRC tooling

---

*Data and vendor responses are simulated for demonstration purposes only.*
*Author: [ldenis001](https://github.com/ldenis001) | LazCyber*