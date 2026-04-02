/**
 * sig-lite-map.js - SIG Lite Question Bank + Scoring Engine
 * Mapped to: NIST CSF 2.0 | ISO 27001:2022 | SIG Lite Framework
 * Author: Lazaro Denis | github.com/ldenis001
 */
const SIG_LITE_DOMAINS=[
  {id:'A',name:'Risk Management',description:'Enterprise risk governance and vendor risk program maturity',nistRef:'GV.RM',isoRef:'ISO 6.1',questions:[
    {id:'A.1',text:'Does your organization have a documented Information Security Risk Management program reviewed at least annually?',weight:3,finding:'No formal risk management program - HIGH risk to supply chain posture.'},
    {id:'A.2',text:'Are third-party vendors assessed for security risk prior to onboarding?',weight:3,finding:'No third-party risk assessment process - supply chain exposure.'},
    {id:'A.3',text:'Does your organization have a designated Information Security Officer or equivalent role?',weight:2,finding:'No CISO/ISO role identified - governance gap.'},
    {id:'A.4',text:'Is risk appetite formally defined and approved by executive leadership?',weight:2,finding:'Risk appetite undefined - decision-making without risk context.'}
  ]},
  {id:'B',name:'Security Policy',description:'Documented policies governing information security practices',nistRef:'GV.PO',isoRef:'ISO 5.1',questions:[
    {id:'B.1',text:'Does your organization maintain a formal Information Security Policy approved by management?',weight:3,finding:'No formal information security policy - foundational control missing.'},
    {id:'B.2',text:'Are security policies reviewed and updated at least annually or upon significant change?',weight:2,finding:'Policies not regularly reviewed - may not reflect current threat landscape.'},
    {id:'B.3',text:'Are all employees required to acknowledge security policies upon hire and annually?',weight:2,finding:'No policy acknowledgment requirement - accountability gap.'}
  ]},
  {id:'C',name:'Access Control',description:'Identity, authentication, and authorization controls',nistRef:'PR.AA',isoRef:'ISO 8.2',questions:[
    {id:'C.1',text:'Is Multi-Factor Authentication (MFA) enforced for all user access to systems handling sensitive data?',weight:3,finding:'MFA not enforced - critical authentication gap, HIGH severity finding.'},
    {id:'C.2',text:'Is the principle of least privilege applied to user and service account access rights?',weight:3,finding:'Least privilege not enforced - over-privileged accounts increase breach risk.'},
    {id:'C.3',text:'Are access rights formally reviewed and recertified at least semi-annually?',weight:2,finding:'No periodic access review - orphaned accounts and privilege creep risk.'},
    {id:'C.4',text:'Is privileged access managed via a Privileged Access Management (PAM) solution?',weight:2,finding:'No PAM solution - privileged credentials inadequately protected.'},
    {id:'C.5',text:'Is remote access restricted to VPN or zero-trust network access (ZTNA)?',weight:2,finding:'Remote access controls insufficient - potential unauthorized entry point.'}
  ]},
  {id:'D',name:'Human Resources Security',description:'Security awareness, training, and personnel controls',nistRef:'GV.RR',isoRef:'ISO 6.1/6.3',questions:[
    {id:'D.1',text:'Are background checks conducted for employees in sensitive roles prior to employment?',weight:2,finding:'No background screening - insider threat risk elevated.'},
    {id:'D.2',text:'Is security awareness training provided to all employees at least annually?',weight:2,finding:'No security awareness training - human risk factor unaddressed.'},
    {id:'D.3',text:'Is phishing simulation or social engineering training conducted?',weight:1,finding:'No phishing training - susceptibility to social engineering attacks.'}
  ]},
  {id:'E',name:'Asset Management',description:'Inventory, classification, and lifecycle management of assets',nistRef:'ID.AM',isoRef:'ISO 8.1',questions:[
    {id:'E.1',text:'Does your organization maintain a complete up-to-date inventory of hardware and software assets?',weight:2,finding:'No asset inventory - cannot secure what you cannot see.'},
    {id:'E.2',text:'Are data assets classified according to sensitivity (Public, Internal, Confidential, Restricted)?',weight:3,finding:'No data classification - data handling inconsistent and potentially non-compliant.'},
    {id:'E.3',text:'Is an approved software allowlist maintained to prevent unauthorized software installation?',weight:1,finding:'No approved software list - unauthorized/malicious software risk.'}
  ]},
  {id:'F',name:'Physical Security',description:'Controls protecting physical access to systems and facilities',nistRef:'PR.AA',isoRef:'ISO 7.1/7.2',questions:[
    {id:'F.1',text:'Are data centers and server rooms protected by physical access controls (badges, biometrics)?',weight:2,finding:'Inadequate physical access controls - unauthorized physical entry risk.'},
    {id:'F.2',text:'Are visitor access and physical security logs maintained and reviewed?',weight:1,finding:'No visitor log review - physical security audit trail missing.'}
  ]},
  {id:'G',name:'Operations Management',description:'Change management, capacity, and operational security controls',nistRef:'PR.PS',isoRef:'ISO 8.19/8.32',questions:[
    {id:'G.1',text:'Is a formal change management process in place for production system changes?',weight:2,finding:'No formal change management - unauthorized changes and instability risk.'},
    {id:'G.2',text:'Are system configurations managed against a secure baseline and deviations tracked?',weight:2,finding:'No baseline configuration management - drift and misconfiguration risk.'},
    {id:'G.3',text:'Are logs from critical systems collected, retained, and reviewed for anomalies?',weight:3,finding:'Insufficient logging - incident detection and forensic capability impaired.'}
  ]},
  {id:'H',name:'Vulnerability Management',description:'Identification, prioritization, and remediation of vulnerabilities',nistRef:'ID.RA/PR.PS',isoRef:'ISO 8.8',questions:[
    {id:'H.1',text:'Are vulnerability scans conducted on internal systems and applications at least quarterly?',weight:3,finding:'Infrequent vulnerability scanning - known vulnerabilities may persist undetected.'},
    {id:'H.2',text:'Are critical/high vulnerabilities remediated within defined SLAs (e.g. 30 days for critical)?',weight:3,finding:'No vulnerability SLAs - critical exposures left open for extended periods.'},
    {id:'H.3',text:'Is penetration testing conducted at least annually by an independent party?',weight:2,finding:'No third-party pen testing - attack surface not independently validated.'}
  ]},
  {id:'I',name:'Incident Response',description:'Preparation, detection, response, and recovery from security incidents',nistRef:'RS/RC',isoRef:'ISO 5.24/5.26',questions:[
    {id:'I.1',text:'Does your organization have a documented Incident Response Plan (IRP) tested at least annually?',weight:3,finding:'No tested IRP - breach response will be reactive and uncoordinated.'},
    {id:'I.2',text:'Is there a defined process for notifying affected customers/partners in the event of a data breach?',weight:3,finding:'No breach notification process - regulatory notification obligations at risk.'},
    {id:'I.3',text:'Are security incidents tracked, categorized, and reviewed for root cause?',weight:2,finding:'No incident tracking - recurring issues not identified or resolved.'}
  ]},
  {id:'J',name:'Business Continuity & DR',description:'Resilience and recovery capabilities for critical business functions',nistRef:'RC.RP',isoRef:'ISO 5.29/5.30',questions:[
    {id:'J.1',text:'Is a Business Continuity Plan (BCP) documented and tested at least annually?',weight:2,finding:'No tested BCP - business disruption risk during incidents or disasters.'},
    {id:'J.2',text:'Are critical system backups performed regularly and recovery tested at defined intervals?',weight:3,finding:'Backups not tested - data recovery capability unverified.'},
    {id:'J.3',text:'Are Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) defined and met?',weight:2,finding:'RTO/RPO not defined - recovery expectations unmanaged.'}
  ]},
  {id:'K',name:'Data Protection & Encryption',description:'Controls protecting data at rest, in transit, and in use',nistRef:'PR.DS',isoRef:'ISO 8.24',questions:[
    {id:'K.1',text:'Is sensitive data encrypted at rest using AES-256 or equivalent?',weight:3,finding:'Sensitive data not encrypted at rest - data exposure risk if media compromised.'},
    {id:'K.2',text:'Is all data transmitted over public networks encrypted using TLS 1.2 or higher?',weight:3,finding:'Data in transit not encrypted - interception risk on public networks.'},
    {id:'K.3',text:'Is there a formal process for secure data disposal/destruction when no longer needed?',weight:2,finding:'No secure data disposal process - residual data exposure risk.'}
  ]},
  {id:'L',name:'Compliance & Audit',description:'Regulatory compliance posture and audit readiness',nistRef:'GV.OV',isoRef:'ISO 5.31/5.36',questions:[
    {id:'L.1',text:'Has your organization obtained relevant security certifications (SOC 2, ISO 27001, PCI-DSS)?',weight:3,finding:'No third-party security certification - security posture unvalidated by independent audit.'},
    {id:'L.2',text:'Are internal security audits conducted at least annually?',weight:2,finding:'No internal audits - compliance gaps may go undetected.'},
    {id:'L.3',text:'Is there a documented process for managing regulatory and legal compliance obligations?',weight:2,finding:'No compliance management process - regulatory exposure risk.'}
  ]}
];

function scoreAssessment(answers){
  const domainScores=[],findings=[];
  let twp=0,tpp=0;
  SIG_LITE_DOMAINS.forEach(domain=>{
    let dp=0,dpos=0;const df=[];
    domain.questions.forEach(q=>{
      const ans=answers[q.id];
      if(!ans||ans.value==='na')return;
      let earned=0;
      if(ans.value==='yes')earned=q.weight;
      else if(ans.value==='partial')earned=q.weight*0.5;
      else df.push({id:q.id,question:q.text,finding:q.finding,severity:q.weight===3?'HIGH':q.weight===2?'MEDIUM':'LOW'});
      dp+=earned;dpos+=q.weight;
    });
    const score=dpos>0?Math.round((dp/dpos)*100):null;
    domainScores.push({id:domain.id,name:domain.name,nistRef:domain.nistRef,isoRef:domain.isoRef,score,findings:df});
    if(score!==null){twp+=dp;tpp+=dpos;findings.push(...df);}
  });
  const overallScore=tpp>0?Math.round((twp/tpp)*100):0;
  const riskRating=overallScore>=80?'LOW':overallScore>=60?'MEDIUM':'HIGH';
  const riskColor=overallScore>=80?'green':overallScore>=60?'yellow':'red';
  const hf=findings.filter(f=>f.severity==='HIGH').length;
  const mf=findings.filter(f=>f.severity==='MEDIUM').length;
  const lf=findings.filter(f=>f.severity==='LOW').length;
  const recommendation=overallScore>=80&&hf===0?'APPROVE':overallScore>=60&&hf<=2?'CONDITIONAL APPROVAL':'DO NOT APPROVE';
  return{overallScore,riskRating,riskColor,recommendation,domainScores,findings,highFindings:hf,medFindings:mf,lowFindings:lf,totalFindings:findings.length,answeredCount:Object.keys(answers).length,totalQuestions:SIG_LITE_DOMAINS.reduce((a,d)=>a+d.questions.length,0)};
}