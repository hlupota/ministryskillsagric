
const generalSkillLabels = [
  { val: 1, label: "Do not have these skills" },
  { val: 2, label: "Somewhat familiar" },
  { val: 3, label: "Basic level" },
  { val: 4, label: "Intermediate level" },
  { val: 5, label: "Advanced level" }
];

const executiveSkillLabels = [
  { val: 1, label: "Awareness" },
  { val: 2, label: "Basic" },
  { val: 3, label: "Competent" },
  { val: 4, label: "Advanced" },
  { val: 5, label: "Strategic" }
];

const extensionTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & AGRICULTURAL COMPETENCE",
    questions: [
      { id: "ext_A1", text: "How competent are you in applying agricultural knowledge within one’s area of specialisation." },
      { id: "ext_A2", text: "How competent are you in advisory support for crop, livestock, or farming systems." },
      { id: "ext_A3", text: "How competent are you in applying best practices for example in crop rotation" },
      { id: "ext_A4", text: "Are you able to detect problems that affect farm production" },
      { id: "ext_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "ext_B1", text: "Are you able to provide timely and practical advisory support to farmers." },
      { id: "ext_B2", text: "Are you able to organise community activities in agriculture eg field day, farmer groups" },
      { id: "ext_B3", text: "Are you able to generate reports after activities." },
      { id: "ext_B4", text: "How well do you respond to farm risks and emergencies." },
      { id: "ext_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "ext_C1", text: "Are you familiar with new farming technologies for example drones, automated irrigation systems, sensors, and automated milking machines." },
      { id: "ext_C2", text: "Have you participated in any agricultural research." },
      { id: "ext_C3", text: "Are you able to apply innovative practises that increase farm productivity" },
      { id: "ext_C4", text: "Are you able to provide advisory services to farmers." },
      { id: "ext_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & FARMER ENTERPRISE SUPPORT",
    questions: [
      { id: "ext_D1", text: "How competent are you in cost estimation and value-for-money advice for farmers." },
      { id: "ext_D2", text: "How competent are you in lifecycle management of farm enterprises and practices." },
      { id: "ext_D3", text: "Are you able to provide advisory services to farmers." },
      { id: "ext_D4", text: "How competent are you in advising on sustainable farm operation and maintenance." },
      { id: "ext_D5", text: "How competent are you in applying business consciousness in day-to-day advisory duties." },
      { id: "ext_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "ext_E1", text: "How competent are you in using digital tools for advisory, monitoring, or reporting." },
      { id: "ext_E2", text: "How competent are you in applying institutional information systems eg dashboard, data-base." },
      { id: "ext_E3", text: "How competent are you in digital coordination and communication with farmers." },
      { id: "ext_E4", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
      { id: "ext_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART EXTENSION & SUSTAINABILITY",
    questions: [
      { id: "ext_F1", text: "How competent are you in climate-resilient farming advisory planning." },
      { id: "ext_F2", text: "How competent are you in resource efficiency and sustainability practices." },
      { id: "ext_F3", text: "How competent are you in risk mitigation for climate-related shocks." },
      { id: "ext_F4", text: "How competent are you in environmental safeguards for farming." },
      { id: "ext_F5", text: "Are you familiar with national plans for climate change." },
      { id: "ext_F_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "ext_G1", text: "How competent are you in planning and managing your extension programmes." },
      { id: "ext_G2", text: "Are you familiar with government integrity pledge." },
      { id: "ext_G3", text: "How competent are you in time, meeting, and workload management." },
      { id: "ext_G4", text: "Do you have opportunities for continuous learning or improvement." },
      { id: "ext_G_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "ext_H1", text: "What future skills do you anticipate needing most to enhance extension services?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "ext_R1", text: "Key constraints affecting effective extension service delivery in your context." },
      { id: "ext_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "ext_R3", text: "Priority capacity investments to improve extension outcomes." },
    ]
  }
};

const researchTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & RESEARCH COMPETENCE",
    questions: [
      { id: "res_A1", text: "How competent are you in applying scientific or research knowledge within your area of specialisation." },
      { id: "res_A2", text: "Are you able to design, conduct, or analyse agricultural research trials." },
      { id: "res_A3", text: "Are you able to apply research standards, ethics, and quality assurance." },
      { id: "res_A4", text: "Are you able to analyse research findings and come up with recommendations that address agricultural needs." },
      { id: "res_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & KNOWLEDGE TRANSFER",
    questions: [
      { id: "res_B1", text: "Are you able to providing timely and practical research-based support to users." },
      { id: "res_B2", text: "How competent are you in coordinating research activities with extension and other agricultural services." },
      { id: "res_B3", text: "How competent are you in managing research teams, trials, or collaborations." },
      { id: "res_B4", text: "How competent are you in documenting research processes, results, and publications." },
      { id: "res_B5", text: "How competent are you in responding to research risks and emerging challenges." },
      { id: "res_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "res_C1", text: "Are you familiar with new farming technologies. (eg, use of drones, gps and sensors)" },
      { id: "res_C2", text: "How competent are you in collaborating with innovation partners and stakeholders." },
      { id: "res_C3", text: "How competent are you in utilising digital tools in research and education workflows." },
      { id: "res_C4", text: "Are you able to apply innovative practises that increase farm productivity" },
      { id: "res_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & IMPACT MANAGEMENT",
    questions: [
      { id: "res_D1", text: "How competent are you in cost estimation and value-for-money in research projects." },
      { id: "res_D2", text: "How competent are you in lifecycle management of research outputs and innovations." },
      { id: "res_D3", text: "Are you able to employ research findings to promote business growth and scalability." },
      { id: "res_D4", text: "How competent are you in advising on the sustainable adoption of agriculture research findings." },
      { id: "res_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "res_E1", text: "How competent are you in using digital tools for data collection e.g (Kobo toolbox, CAPI, CAWI and google forms)." },
      { id: "res_E2", text: "How competent are you in using digital tools for data processing e.g (SPSS, PowerBi and excel)." },
      { id: "res_E3", text: "How competent are you in using digital tools for report writing e.g (MS Word and Powerpoint)." },
      { id: "res_E4", text: "How competent are you in digital coordination and communication." },
      { id: "res_E5", text: "Are you able adhere to data security, confidentiality, and integrity requirements e.g(Cybersecurity and data protection act, Secrecy act and Integrity pledge)." },
      { id: "res_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART RESEARCH & SUSTAINABILITY",
    questions: [
      { id: "res_F1", text: "How competent are you in climate-resilient research and innovation planning." },
      { id: "res_F2", text: "How competent are you in risk mitigation for climate-related research shocks." },
      { id: "res_F3", text: "How competent are you in environmental safeguards in research practices." },
      { id: "res_F4", text: "How competent are you in aligning research with national sustainability goals." },
      { id: "res_F_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "res_G1", text: "How competent are you in planning and managing research or education programmes." },
      { id: "res_G2", text: "How competent are you in coordination with stakeholders across sectors." },
      { id: "res_G3", text: "How competent are you in adherence to standards, ethics, and accountability." },
      { id: "res_G4", text: "How competent are you in time, meeting, and workload management." },
      { id: "res_G_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "res_H1", text: "What future skills do you anticipate needing most to advance research and innovation?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "res_R1", text: "Key constraints affecting effective research and innovation delivery in your context." },
      { id: "res_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "res_R3", text: "Priority capacity investments to improve research and education outcomes." },
    ]
  }
};

const veterinaryTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & VETERINARY COMPETENCE",
    questions: [
      { id: "vet_A1", text: "How competent are you in applying veterinary or animal health knowledge within one’s area of specialisation." },
      { id: "vet_A2", text: "How competent are you in diagnosis, treatment, or prevention of animal diseases." },
      { id: "vet_A3", text: "How competent are you in applying veterinary standards, safety, and biosecurity." },
      { id: "vet_A4", text: "How competent are you in diagnosing animal health or production issues." },
      { id: "vet_A5", text: "How competent are you in integrating veterinary solutions with livestock production needs." },
      { id: "vet_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "vet_B1", text: "How competent are you in providing timely and practical veterinary support to farmers." },
      { id: "vet_B2", text: "How competent are you in coordinating field activities with extension and other agriculture services." },
      { id: "vet_B3", text: "How competent are you in managing vaccination campaigns, quarantines, or field teams." },
      { id: "vet_B4", text: "How competent are you in documenting treatments, inspections, and outbreaks." },
      { id: "vet_B5", text: "How competent are you in responding to animal health risks and emergencies." },
      { id: "vet_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "vet_C1", text: "How competent are you in adopting or adapting veterinary technologies." },
      { id: "vet_C2", text: "How competent are you in animal health mechanisation, diagnostics, or automation where relevant." },
      { id: "vet_C3", text: "Are you able to collaborate with research and innovation partners." },
      { id: "vet_C4", text: "Are you able to integrate digital tools into veterinary workflows." },
      { id: "vet_C5", text: "How competent are you in aligning innovations with livestock productivity and business needs." },
      { id: "vet_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & LIVESTOCK MANAGEMENT",
    questions: [
      { id: "vet_D1", text: "How competent are you in cost estimation and value-for-money in animal health services." },
      { id: "vet_D2", text: "How competent are you in lifecycle management of livestock health and herds." },
      { id: "vet_D3", text: "How competent are you in linking services to livestock enterprise viability." },
      { id: "vet_D4", text: "How competent are you in advising on sustainable animal management and welfare." },
      { id: "vet_D5", text: "How competent are you in applying business consciousness in day-to-day duties." },
      { id: "vet_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "vet_E1", text: "How competent are you in using digital tools for diagnostics, monitoring, or reporting." },
      { id: "vet_E2", text: "How competent are you in applying institutional information systems." },
      { id: "vet_E3", text: "How competent are you in accurate, secure, and responsible data management." },
      { id: "vet_E4", text: "How competent are you in digital coordination and communication." },
      { id: "vet_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
      { id: "vet_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART ANIMAL HEALTH & SUSTAINABILITY",
    questions: [
      { id: "vet_F1", text: "How competent are you in climate-resilient livestock health planning." },
      { id: "vet_F2", text: "How competent are you in resource efficiency and sustainability in animal husbandry." },
      { id: "vet_F3", text: "How competent are you in risk mitigation for climate-related animal health shocks." },
      { id: "vet_F4", text: "How competent are you in zoonotic and environmental safeguards." },
      { id: "vet_F5", text: "How competent are you in aligning services with national sustainability goals." },
      { id: "vet_F_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "vet_G1", text: "How competent are you in planning and managing veterinary programmes." },
      { id: "vet_G2", text: "How competent are you in coordination with stakeholders across sectors." },
      { id: "vet_G3", text: "How competent are you in adherence to standards, ethics, and accountability." },
      { id: "vet_G4", text: "How competent are you in time, meeting, and workload management." },
      { id: "vet_G5", text: "How competent are you in continuous professional improvement." },
      { id: "vet_G_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "vet_H1", text: "What future skills do you anticipate needing most to strengthen animal health services?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "vet_R1", text: "Key constraints affecting effective animal health service delivery in your context." },
      { id: "vet_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "vet_R3", text: "Priority capacity investments to improve veterinary outcomes." },
    ]
  }
};

const engineeringTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & ENGINEERING COMPETENCE",
    questions: [
      { id: "eng_A1", text: "How competent are you in applying engineering or technical knowledge within your area of specialisation." },
      { id: "eng_A2", text: "How competent are you in design, supervision, or maintenance of agricultural infrastructure." },
      { id: "eng_A3", text: "How competent are you in applying technical standards, safety, and quality assurance." },
      { id: "eng_A4", text: "How competent are you  in diagnosing infrastructure or equipment performance issues." },
      { id: "eng_A5", text: "How competent are you  in integrating engineering solutions with agricultural production needs." },
      { id: "eng_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "eng_B1", text: "How competent are you  in providing timely and practical technical support to users." },
      { id: "eng_B2", text: "How competent are you  in coordinating field activities with extension and other agricultural services." },
      { id: "eng_B3", text: "How competent are you  in managing contractors, artisans, or field teams." },
      { id: "eng_B4", text: "How competent are you  in documenting works, inspections, and maintenance." },
      { id: "eng_B5", text: "How competent are you  in responding to operational risks and emergencies." },
      { id: "eng_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "eng_C1", text: "How competent are you in adopting or adapting appropriate technologies." },
      { id: "eng_C2", text: "How competent are you in energy efficiency, mechanisation, or automation where relevant." },
      { id: "eng_C3", text: "How competent are you in collaborating with research and innovation partners." },
      { id: "eng_C4", text: "How competent are you in integrating digital tools into engineering workflows." },
      { id: "eng_C5", text: "How competent are you in applying technical innovation to improve agricultural productivity" },
      { id: "eng_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & ASSET MANAGEMENT",
    questions: [
      { id: "eng_D1", text: "How competent are you in cost estimation and value-for-money considerations." },
      { id: "eng_D2", text: "How competent are you in lifecycle management of infrastructure and equipment." },
      { id: "eng_D3", text: "How competent are you in linking infrastructure services to enterprise viability." },
      { id: "eng_D4", text: "How competent are you in advising users on sustainable operation and maintenance." },
      { id: "eng_D5", text: "How competent are you in applying business consciousness in day-to-day duties." },
      { id: "eng_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "eng_E1", text: "How competent are you in using digital tools for design." },
      { id: "eng_E2", text: "How competent are you in using digital tools for monitoring." },
      { id: "eng_E3", text: "How competent are you in using digital tools for reporting." },
      { id: "eng_E4", text: "How competent are you in digital coordination and communication." },
      { id: "eng_E5", text: "Are you able to adhere to data security, confidentiality, and integrity requirements.", type: "select", options: ["Yes", "No"] },
      { id: "eng_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART INFRASTRUCTURE & SUSTAINABILITY",
    questions: [
      { id: "eng_F1", text: "How competent are you in climate-resilient infrastructure planning." },
      { id: "eng_F2", text: "How competent are you in water-use efficiency and resource sustainability." },
      { id: "eng_F3", text: "How competent are you in risk mitigation for climate-related shocks." },
      { id: "eng_F4", text: "How competent are you in environmental safeguards." },
      { id: "eng_F5", text: "How competent are you in aligning infrastructure with national sustainability goals." },
      { id: "eng_F_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "eng_G1", text: "How competent are you in planning and managing technical programmes." },
      { id: "eng_G2", text: "How competent are you in coordination with stakeholders across sectors." },
      { id: "eng_G3", text: "How competent are you in adherence to standards, ethics, and accountability." },
      { id: "eng_G4", text: "How competent are you in time, meeting, and workload management." },
      { id: "eng_G5", text: "How competent are you in continuous professional improvement." },
      { id: "eng_G_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "eng_H1", text: "What future skills do you anticipate needing most to improve infrastructure?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "eng_R1", text: "Key constraints affecting effective technical service delivery in your context." },
      { id: "eng_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "eng_R3", text: "Priority capacity investments to improve infrastructure outcomes." },
    ]
  }
};

const businessTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & POLICY COMPETENCE",
    questions: [
      { id: "biz_A1", text: "How competent are you in applying market, trade, or agribusiness knowledge." },
      { id: "biz_A2", text: "How competent are you in interpreting policies affecting markets and value chains." },
      { id: "biz_A3", text: "How competent are you in analysing value-chain constraints." },
      { id: "biz_A4", text: "How competent are you in translating policy into actionable market support." },
      { id: "biz_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionB: {
    title: "SECTION B: BUSINESS & ENTREPRENEURSHIP",
    questions: [
      { id: "biz_B1", text: "How competent are you in managing farming as a business." },
      { id: "biz_B2", text: "How competent are you in enterprise development and cost–benefit analysis." },
      { id: "biz_B3", text: "How competent are you in supporting SMEs and cooperatives." },
      { id: "biz_B4", text: "How competent are you in mobilising private sector partnerships." },
      { id: "biz_B5", text: "How competent are you in applying entrepreneurial thinking in agricultural programmes." },
      { id: "biz_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionC: {
    title: "SECTION C: MARKETS & MARKET ACCESS",
    questions: [
      { id: "biz_C1", text: "How competent are you in linking producers to markets." },
      { id: "biz_C2", text: "How competent are you in market intelligence and information systems." },
      { id: "biz_C3", text: "How competent are you in export readiness and trade facilitation (where relevant)." },
      { id: "biz_C4", text: "How competent are you in collective marketing models." },
      { id: "biz_C5", text: "How competent are you in aligning production with market demand." },
      { id: "biz_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionD: {
    title: "SECTION D: FINANCE & RISK MANAGEMENT",
    questions: [
      { id: "biz_D1", text: "How familiar are you with agricultural finance instruments." },
      { id: "biz_D2", text: "How competent are you in utilising de-risking and insurance concepts." },
      { id: "biz_D3", text: "How competent are you in coordinating finance access with partners." },
      { id: "biz_D4", text: "How competent are you in delivering financial literacy support." },
      { id: "biz_D5", text: "How competent are you in integrating finance with value-chain development." },
      { id: "biz_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL & DATA SKILLS",
    questions: [
      { id: "biz_E1", text: "How competent are you in using digital marketing platforms e.g (facebook, whatsapp, Instagram)" },
      { id: "biz_E2", text: "How competent are you in making data-driven decisions." },
      { id: "biz_E3", text: "How competent are you in digital coordination with stakeholders." },
      { id: "biz_E4", text: "Are you able to adhere to data security, confidentiality, and integrity requirements.", type: "select", options: ["Yes", "No"] },
      { id: "biz_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE, SUSTAINABILITY & INCLUSION",
    questions: [
      { id: "biz_F1", text: "How competent are you in developing climate-resilient market." },
      { id: "biz_F2", text: "How competent are you in risk mitigation for shocks." },
      { id: "biz_F3", text: "How competent are you in aligning markets with national priorities." },
      { id: "biz_F_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "biz_G1", text: "Demonstrated competence in planning and managing business development programmes." },
      { id: "biz_G2", text: "Demonstrated competence in coordination with stakeholders across sectors." },
      { id: "biz_G3", text: "Demonstrated competence in adherence to standards, ethics, and accountability." },
      { id: "biz_G4", text: "Demonstrated competence in time, meeting, and workload management." },
      { id: "biz_G5", text: "Demonstrated competence in continuous professional improvement." },
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "biz_H1", text: "What future skills do you anticipate needing most to enhance market access and business development?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "biz_R1", text: "Key constraints affecting effective business service delivery in your context." },
      { id: "biz_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "biz_R3", text: "Priority capacity investments to improve market outcomes." },
    ]
  }
};

const landTechnicalSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & REGULATORY COMPETENCE",
    questions: [
      { id: "land_A1", text: "What is your proficiency level in land administration and mapping within your area of specialisation." },
      { id: "land_A2", text: "How competent are you in applying land laws, policies, and regulations." },
      { id: "land_A3", text: "How competent are you in land-use planning or spatial analysis." },
      { id: "land_A4", text: "How competent are you in tenure security processes." },
      { id: "land_A5", text: "How competent are you in quality assurance of land records and data." },
      { id: "land_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & COORDINATION",
    questions: [
      { id: "land_B1", text: "How competent are you in delivering land-related services to stakeholders." },
      { id: "land_B2", text: "How competent are you in coordinating Ministries, parastatals, and non-state actors." },
      { id: "land_B3", text: "How competent are you in managing stakeholder expectations and disputes." },
      { id: "land_B4", text: "How competent are you in field verification and documentation." },
      { id: "land_B5", text: "How competent are you in giving feedback to inform policy and planning." },
      { id: "land_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionC: {
    title: "SECTION C: DIGITAL & GEOSPATIAL SKILLS",
    questions: [
      { id: "land_C1", text: "How competent are you in GIS, mapping, or spatial tools (where relevant)." },
      { id: "land_C2", text: "How competent are you in data integrity and security." },
      { id: "land_C3", text: "How competent are you in digital coordination and reporting." },
      { id: "land_C4", text: "How competent are you in applying technology to improve land services." },
      { id: "land_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, PLANNING & VALUE CREATION",
    questions: [
      { id: "land_D1", text: "How competent are you in linking land use to productivity and investment." },
      { id: "land_D2", text: "How competent are you in planning for rural industrialisation." },
      { id: "land_D3", text: "How competent are you in advising on land-use efficiency." },
      { id: "land_D4", text: "How competent are you in balancing development and sustainability." },
      { id: "land_D5", text: "How competent are you in applying business knowledge to land services." },
      { id: "land_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionE: {
    title: "SECTION E: CLIMATE & SUSTAINABILITY",
    questions: [
      { id: "land_E1", text: "How competent are you in climate-informed land-use planning." },
      { id: "land_E2", text: "How competent are you in environmental safeguards." },
      { id: "land_E3", text: "How competent are you in resilience planning." },
      { id: "land_E4", text: "How competent are you in sustainable land management." },
      { id: "land_E5", text: "How competent are you in aligning land services with national goals." },
      { id: "land_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "land_H1", text: "What future skills do you anticipate needing most for land administration?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "land_R1", text: "Constraints affecting effective land administration/planning." },
      { id: "land_R2", text: "Education/training relevance to land sector demands." },
      { id: "land_R3", text: "Priority capacity improvements for tenure and productivity." },
    ]
  }
};

const corporateTechnicalSkills = {
  sectionA: {
    title: "SECTION A: PROFESSIONAL & FUNCTIONAL COMPETENCE",
    questions: [
      { id: "corp_A1", text: "How competent are you in applying professional knowledge within your job role" },
      { id: "corp_A2", text: "How competent are you in applying policy, administrative, or financial systems relevant to your role." },
      { id: "corp_A3", text: "How competent are you in interpreting organisational policies and regulations." },
      { id: "corp_A_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionB: {
    title: "SECTION B: STRATEGY, OVERSIGHT & ACCOUNTABILITY",
    questions: [
      { id: "corp_B1", text: "How competent are you in supporting strategic planning and execution." },
      { id: "corp_B2", text: "How competent are you in oversight, controls, and risk management." },
      { id: "corp_B3", text: "How competent are you in governance reporting." },
      { id: "corp_B4", text: "How competent are you in accountability systems." },
      { id: "corp_B_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionC: {
    title: "SECTION C: COORDINATION & STAKEHOLDER MANAGEMENT",
    questions: [
      { id: "corp_C1", text: "How competent are you in coordinating departments, units and institutions." },
      { id: "corp_C2", text: "How competent are you in stakeholder management." },
      { id: "corp_C3", text: "How competent are you in mobilising internal and external stakeholders." },
      { id: "corp_C4", text: "How competent are you in information management." },
      { id: "corp_C_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionD: {
    title: "SECTION D: DIGITAL & INFORMATION MANAGEMENT",
    questions: [
      { id: "corp_D1", text: "How competent are you in using institutional digital systems." },
      { id: "corp_D2", text: "How competent are you in producing quality data." },
      { id: "corp_D3", text: "How competent are you in adhering to data security policies." },
      { id: "corp_D4", text: "How competent are you in adapting to digital evolutions." },
      { id: "corp_D_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionE: {
    title: "SECTION E: ORGANISATIONAL CULTURE & 21ST-CENTURY SKILLS",
    questions: [
      { id: "corp_E1", text: "How competent are you in collaborating teamwork." },
      { id: "corp_E2", text: "How competent are you in coaching and mentoring workmates." },
      { id: "corp_E3", text: "How competent are you in diverse and inclusive management." },
      { id: "corp_E4", text: "How competent are you in adapting to organisational cultural transformation." },
      { id: "corp_E5", text: "How competent are you in solving organisational problems." },
      { id: "corp_E_LQ", text: "What additional skills would you require to make your work more productive?", type: "text" },
    ]
  },
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "corp_H1", text: "What future skills do you anticipate needing most to enhance support services?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "corp_R1", text: "Constraints affecting effective corporate/support service delivery." },
      { id: "corp_R2", text: "Relevance and usability of your education/training for current demands." },
      { id: "corp_R3", text: "Priority capacity investments to improve support functions." },
    ]
  }
};

const executiveTechnicalSkills = {
  sectionA: {
    title: "SECTION A: STRATEGIC LEADERSHIP & POLICY DIRECTION",
    questions: [
      { id: "exec_A1", text: "How competent are you in aligning mandates and priorities to AFSRTS II and Vision 2030." },
      { id: "exec_A2", text: "How competent are you in translating national policy into implementable strategies and programmes." },
      { id: "exec_A3", text: "How competent are you in long-term planning under uncertainty and risk." },
      { id: "exec_A4", text: "How competent are you in ensuring policy coherence across departments, directorates, and sectors." },
      { id: "exec_A5", text: "How competent are you in balancing political, technical, and institutional considerations in decision-making." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_A6D", text: "How competent are you in aligning departmental strategies and resources to directorate and national priorities." }
      ],
      "Chief Director": [
        { id: "exec_A6C", text: "How competent are you in steering multi-departmental strategies and portfolio coherence." }
      ],
      "Permanent Secretary": [
        { id: "exec_A6P", text: "How competent are you in shaping national or sector-wide agricultural policy direction." },
        { id: "exec_A7P", text: "How competent are you in anticipating future policy and system demands beyond the current planning cycle." }
      ]
    }
  },
  sectionB: {
    title: "SECTION B: SYSTEMS OVERSIGHT, DELIVERY & ACCOUNTABILITY",
    questions: [
      { id: "exec_B1", text: "How competent are you in overseeing programme and project delivery." },
      { id: "exec_B2", text: "How competent are you in establishing and using accountability and assurance mechanisms." },
      { id: "exec_B3", text: "How competent are you in supporting performance through systems and processes." },
      { id: "exec_B4", text: "How competent are you in identifying and managing risks." },
      { id: "exec_B5", text: "How competent are you in ensuring efficiency and delivery discipline." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_B6D", text: "How competent are you in coordinating departmental units." }
      ],
      "Chief Director": [
        { id: "exec_B6C", text: "How competent are you in enforcing delivery discipline across multiple departments." }
      ],
      "Permanent Secretary": [
        { id: "exec_B6P", text: "How competent are you in institutionalising a Ministry-wide culture of accountability." },
        { id: "exec_B7P", text: "How competent are you in aligning delivery systems to national reforms and fiscal realities." }
      ]
    }
  },
  sectionC: {
    title: "SECTION C: AGRICULTURAL SYSTEMS, VALUE CHAINS & FARMER RELEVANCE",
    questions: [
      { id: "exec_C1", text: "How competent are you in understanding agricultural production systems." },
      { id: "exec_C2", text: "How competent are you in understanding value-chain and agribusiness dynamics." },
      { id: "exec_C3", text: "How competent are you in comprehending diverse farmer typologies and constraints." },
      { id: "exec_C4", text: "How competent are you in conveying leadership decisions to  farmers." },
      { id: "exec_C5", text: "How competent are you in ensuring programmes create tangible farmer and market value." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_C6D", text: "How competent are you in integrating systems and value-chain considerations at departmental level." }
      ],
      "Chief Director": [
        { id: "exec_C6C", text: "How competent are you in balancing competing system priorities across a directorate." }
      ],
      "Permanent Secretary": [
        { id: "exec_C6P", text: "How competent are you in optimising national agricultural system trade-offs." },
        { id: "exec_C7P", text: "How competent are you in positioning agriculture for long-term national competitiveness." }
      ]
    }
  },
  sectionD: {
    title: "SECTION D: RESEARCH, INNOVATION & MODERNISATION",
    questions: [
      { id: "exec_D1", text: "How competent are you in using research and evidence in decision-making." },
      { id: "exec_D2", text: "How competent are you in promoting innovation, mechanisation, and modernisation." },
      { id: "exec_D3", text: "How competent are you in supporting technology adoption and scaling." },
      { id: "exec_D4", text: "How competent are you in linking research and innovation to productivity and business outcomes." },
      { id: "exec_D5", text: "How competent are you in shaping institutional learning and knowledge use." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_D6D", text: "How competent are you in aligning departmental work with research and innovation outputs." }
      ],
      "Chief Director": [
        { id: "exec_D6C", text: "How competent are you in steering directorate-level innovation agendas." }
      ],
      "Permanent Secretary": [
        { id: "exec_D6P", text: "How competent are you in shaping national research and innovation direction." },
        { id: "exec_D7P", text: "How competent are you in preparing the institution for future technological disruption." }
      ]
    }
  },
  sectionE: {
    title: "SECTION E: CLIMATE, NATURAL RESOURCES & RESILIENCE",
    questions: [
      { id: "exec_E1", text: "How competent are you in developing climate-smart agriculture policies." },
      { id: "exec_E2", text: "How competent are you in planning for drought, flood, pest, and shock preparedness." },
      { id: "exec_E3", text: "How competent are you in implementing sustainable land and natural resource governance." },
      { id: "exec_E4", text: "How competent are you in balancing development and environmental sustainability." },
      { id: "exec_E5", text: "How competent are you in building institutional resilience and adaptive capacity." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_E6D", text: "How competent are you in integrating resilience considerations into departmental planning." }
      ],
      "Chief Director": [
        { id: "exec_E6C", text: "How competent are you in coordinating resilience strategies across departments." }
      ],
      "Permanent Secretary": [
        { id: "exec_E6P", text: "How competent are you in embedding climate and resilience into national policy and investment decisions." },
        { id: "exec_E7P", text: "How competent are you in steering long-term sustainability transitions." }
      ]
    }
  },
  sectionF: {
    title: "SECTION F: MARKETS, FINANCE & RURAL INDUSTRISATION",
    questions: [
      { id: "exec_F1", text: "How competent are you in linking agriculture to rural industrialisation and job creation." },
      { id: "exec_F2", text: "How competent are you in facilitating agro-processing, SMEs, and value addition." },
      { id: "exec_F3", text: "How competent are you in promoting agricultural markets and trade policy." },
      { id: "exec_F4", text: "How competent are you in implementing agricultural finance and risk management frameworks." },
      { id: "exec_F5", text: "How competent are you in promoting agriculture as a business and growth sector." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_F6D", text: "How competent are you in integrating business and market logic into departmental work." }
      ],
      "Chief Director": [
        { id: "exec_F6C", text: "How competent are you in coordinating value-creation strategies across directorates." }
      ],
      "Permanent Secretary": [
        { id: "exec_F6P", text: "How competent are you in positioning agriculture as a national economic driver." },
        { id: "exec_F7P", text: "How competent are you in anticipating future markets and trade dynamics." }
      ]
    }
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE, INSTITUTIONS & STAKEHOLDER MANAGEMENT",
    questions: [
      { id: "exec_G1", text: "How competent are you in accounting for public-sector governance." },
      { id: "exec_G2", text: "How competent are you in promoting decentralisation and provincial coordination." },
      { id: "exec_G3", text: "How competent are you in engaging stakeholders." },
      { id: "exec_G4", text: "How competent are you in coordinating MDAs." },
      { id: "exec_G5", text: "How competent are you in clarifying mandates, roles, and institutional interfaces." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_G6D", text: "How competent are you in coordinating stakeholders at departmental level." }
      ],
      "Chief Director": [
        { id: "exec_G6C", text: "How competent are you in orchestrating cross-departmental and external coordination." }
      ],
      "Permanent Secretary": [
        { id: "exec_G6P", text: "How competent are you in coordinating whole-of-government and whole-of-society approach." },
        { id: "exec_G7P", text: "How competent are you in safeguarding institutional credibility and trust." }
      ]
    }
  },
  sectionH: {
    title: "SECTION H: PEOPLE, CULTURE & 21ST-CENTURY LEADERSHIP",
    questions: [
      { id: "exec_H1", text: "How competent are you in mobilising and aligning subordinate leaders." },
      { id: "exec_H2", text: "How competent are you in coaching, mentoring, and talent development." },
      { id: "exec_H3", text: "How competent are you in executing diverse and inclusive management." },
      { id: "exec_H4", text: "How competent are you in driving organisational cultural transformation." },
      { id: "exec_H5", text: "How competent are you in aligning adaptability, problem-solving, and learning agility." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_H6D", text: "How competent are you in developing leadership capabilities within a department." }
      ],
      "Chief Director": [
        { id: "exec_H6C", text: "How competent are you in shaping leadership culture across directorates." }
      ],
      "Permanent Secretary": [
        { id: "exec_H6P", text: "How competent are you in institutionalising ethical, adaptive leadership culture." },
        { id: "exec_H7P", text: "How competent are you in preparing leaders for future ways of work." }
      ]
    }
  },
  sectionI: {
    title: "SECTION I: DIGITAL, DATA & ADAPTIVE MANAGEMENT",
    questions: [
      { id: "exec_I1", text: "How competent are you in leveraging data for decision-making." },
      { id: "exec_I2", text: "How competent are you in promoting strategic digital fluency." },
      { id: "exec_I3", text: "How competent are you in using monitoring, evaluation, and learning systems." },
      { id: "exec_I4", text: "How competent are you in promoting use of accurate data." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_I5D", text: "How competent are you in integrating data and learning into departmental management." }
      ],
      "Chief Director": [
        { id: "exec_I5C", text: "How competent are you in promoting evidence-driven management across directorates." }
      ],
      "Permanent Secretary": [
        { id: "exec_I5P", text: "How competent are you in institutionalising evidence-based governance." },
        { id: "exec_I6P", text: "How competent are you in leading digital and data transformations." }
      ]
    }
  },
  sectionK: {
    title: "SECTION K: OVERALL ASSESSMENT",
    type: "text",
    questions: [
      { id: "exec_K1", text: "Overall, how would you rate your readiness to lead the agricultural transformation agenda?" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION (R)",
    type: "text",
    questions: [
      { id: "exec_R1", text: "Key constraints affecting your leadership effectiveness." },
      { id: "exec_R2", text: "Priority leadership development needs for yourself." },
      { id: "exec_R3", text: "Recommendations for strengthening institutional leadership capacity." }
    ]
  }
};

const driverTechnicalSkills = {
  sectionA: {
    title: "SECTION A: PROFESSIONAL DRIVING COMPETENCE",
    questions: [
      { id: "drv_A1", text: "Demonstrated competence in safe and defensive driving practices." },
      { id: "drv_A2", text: "Demonstrated competence in compliance with road traffic laws and government transport regulations." },
      { id: "drv_A3", text: "Demonstrated competence in vehicle inspection and basic mechanical checks." },
      { id: "drv_A4", text: "Demonstrated competence in maintaining vehicle cleanliness and service readiness." },
      { id: "drv_A5", text: "Demonstrated competence in fuel management and trip log documentation." }
    ]
  },
  sectionB: {
    title: "SECTION B: SAFETY, RISK & ACCOUNTABILITY",
    questions: [
      { id: "drv_B1", text: "Demonstrated competence in passenger safety protocols." },
      { id: "drv_B2", text: "Demonstrated competence in emergency response procedures (accidents, breakdowns)." },
      { id: "drv_B3", text: "Demonstrated competence in risk awareness and hazard identification." },
      { id: "drv_B4", text: "Demonstrated competence in safeguarding government assets and documentation." },
      { id: "drv_B5", text: "Demonstrated competence in time management and reliability." }
    ]
  },
  sectionC: {
    title: "SECTION C: COORDINATION & PROFESSIONAL CONDUCT",
    questions: [
      { id: "drv_C1", text: "Demonstrated competence in route planning and logistical coordination." },
      { id: "drv_C2", text: "Demonstrated competence in communication with supervisors and passengers." },
      { id: "drv_C3", text: "Demonstrated competence in professional conduct and confidentiality." },
      { id: "drv_C4", text: "Demonstrated competence in stakeholder courtesy and representation of the Ministry." },
      { id: "drv_C5", text: "Demonstrated competence in adaptability to changing schedules and assignments." }
    ]
  },
  sectionD: {
    title: "SECTION D: DIGITAL & ADMINISTRATIVE SUPPORT",
    questions: [
      { id: "drv_D1", text: "Demonstrated competence in using GPS and digital navigation tools." },
      { id: "drv_D2", text: "Demonstrated competence in digital trip reporting systems (if applicable)." },
      { id: "drv_D3", text: "Demonstrated competence in maintaining accurate mileage and fuel records." },
      { id: "drv_D4", text: "Demonstrated competence in basic use of mobile communication tools." },
      { id: "drv_D5", text: "Demonstrated competence in adapting to digital fleet management systems." }
    ]
  },
  sectionE: {
    title: "SECTION E: FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "drv_E1", text: "What future skills do you anticipate needing to enhance transport efficiency and safety?" }
    ]
  }
};


const executiveAssistantTechnicalSkills = {
  sectionA: {
    title: "SECTION A: PROFESSIONAL & FUNCTIONAL COMPETENCE",
    questions: [
      { id: "ea_A1", text: "How competent are you in executive diary and schedule management." },
      { id: "ea_A2", text: "How competent are you in records management and document control." },
      { id: "ea_A3", text: "How competent are you in drafting official correspondence and reports." },
      { id: "ea_A4", text: "How competent are you in procurement and administrative procedures." },
      { id: "ea_A5", text: "How competent are you in ensuring confidentiality and information integrity." }
    ]
  },
  sectionB: {
    title: "SECTION B: STRATEGY, GOVERNANCE & OVERSIGHT SUPPORT",
    questions: [
      { id: "ea_B1", text: "How competent are you in supporting strategic meetings and executive decision processes." },
      { id: "ea_B2", text: "How competent are you in preparing briefs, minutes, and action trackers." },
      { id: "ea_B3", text: "How competent are you in monitoring follow-ups and accountability systems." },
      { id: "ea_B4", text: "How competent are you in governance reporting support." },
      { id: "ea_B5", text: "How competent are you in coordination across departments and external stakeholders." }
    ]
  },
  sectionC: {
    title: "SECTION C: DIGITAL & INFORMATION MANAGEMENT",
    questions: [
      { id: "ea_C1", text: "How competent are you in Microsoft Office and related productivity tools." },
      { id: "ea_C2", text: "How competent are you in digital records and document management systems." },
      { id: "ea_C3", text: "How competent are you in virtual meeting platforms and digital collaboration tools." },
      { id: "ea_C4", text: "How competent are you in data handling and confidentiality protocols." },
      { id: "ea_C5", text: "How competent are you in adapting to new digital administrative systems." }
    ]
  },
  sectionD: {
    title: "SECTION D: ORGANISATIONAL CULTURE & 21ST-CENTURY SKILLS",
    questions: [
      { id: "ea_D1", text: "How competent are you in communication and professional etiquette." },
      { id: "ea_D2", text: "How competent are you in stakeholder engagement and coordination." },
      { id: "ea_D3", text: "How competent are you in multitasking and priority management." },
      { id: "ea_D4", text: "How competent are you in problem-solving and initiative." },
      { id: "ea_D5", text: "How competent are you in supporting leadership effectiveness." }
    ]
  },
  sectionE: {
    title: "SECTION E: FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "ea_E1", text: "What future skills do you anticipate needing to strengthen executive and administrative support services?" }
    ]
  }
};

const officeOrderlyTechnicalSkills = {
  sectionA: {
    title: "SECTION A: CORE SUPPORT SERVICES",
    questions: [
      { id: "ord_A1", text: "How competent are you in office cleaning and maintenance standards." },
      { id: "ord_A2", text: "How competent are you in handling documents and internal deliveries." },
      { id: "ord_A3", text: "How competent are you in meeting room preparation and logistical support." },
      { id: "ord_A4", text: "How competent are you in inventory handling (stationery, supplies)." },
      { id: "ord_A5", text: "How competent are you in maintaining organised workspaces." }
    ]
  },
  sectionB: {
    title: "SECTION B: SAFETY, COMPLIANCE & ACCOUNTABILITY",
    questions: [
      { id: "ord_B1", text: "How competent are you in workplace health and safety procedures." },
      { id: "ord_B2", text: "How competent are you in proper handling of cleaning materials and equipment." },
      { id: "ord_B3", text: "How competent are you in safeguarding documents and office property." },
      { id: "ord_B4", text: "How competent are you in time management and reliability." },
      { id: "ord_B5", text: "How competent are you in reporting maintenance or safety issues." }
    ]
  },
  sectionC: {
    title: "SECTION C: COORDINATION & PROFESSIONAL CONDUCT",
    questions: [
      { id: "ord_C1", text: "How competent are you in communication with staff and supervisors." },
      { id: "ord_C2", text: "How competent are you in teamwork and cooperation." },
      { id: "ord_C3", text: "How competent are you in customer service and professionalism." },
      { id: "ord_C4", text: "How competent are you in confidentiality and discretion." },
      { id: "ord_C5", text: "How competent are you in adaptability to changing tasks and assignments." }
    ]
  },
  sectionD: {
    title: "SECTION D: DIGITAL & ADAPTIVE CAPACITY",
    questions: [
      { id: "ord_D1", text: "How competent are you in basic use of mobile communication tools." },
      { id: "ord_D2", text: "How competent are you in adapting to digital requisition or reporting systems (if applicable)." },
      { id: "ord_D3", text: "How competent are you in following digital or written instructions." },
      { id: "ord_D4", text: "How competent are you in learning new procedures." },
      { id: "ord_D5", text: "How competent are you in supporting modern office environments." }
    ]
  },
  sectionE: {
    title: "SECTION E: FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "ord_E1", text: "What future skills do you anticipate needing to improve office support service delivery?" }
    ]
  }
};

const trainingData = {
  title: "SECTION 5: TRAINING AND DEVELOPMENT",
  questions: [
    {
      id: "train_Q1",
      text: "Which of the following training providers have you participated in for agricultural skills development? (Select all that apply)",
      type: "checkbox",
      options: [
        "Public agricultural colleges",
        "Private agricultural training institutions",
        "Online agricultural training platforms",
        "NGO or community-based training programs",
        "Farmer field schools or extension services",
        "Research institutes or specialized training centres",
        "Other"
      ]
    },
    {
      id: "train_Q1_Other",
      text: "If you selected 'Other' above, please specify:",
      type: "text"
    },
    {
      id: "train_Q2",
      text: "Are you willing to reskill/upskill in your field of work?",
      type: "select",
      options: ["Yes", "No"]
    },
    {
      id: "train_Q3",
      text: "What new skills do you think will be essential for your specific agricultural cluster in the next 5 to 10 years, and why?",
      type: "text"
    },
    {
      id: "train_Q4",
      text: "Which types of training methods do you prefer for learning new skills, reskilling/upskilling?",
      type: "checkbox",
      options: [
        "Lecture room-based training or workshops",
        "On-the-job or practical hands-on training",
        "Online or e-learning courses",
        "Peer-to-peer learning or group discussions"
      ]
    },
    {
      id: "train_Q5",
      text: "What challenges have you encountered that make it difficult to acquire new skills?",
      type: "text"
    },
    {
      id: "train_Q6",
      text: "What recommendations do you have for improving agricultural training policies and curricula to better meet the current and future needs of the Agricultural sector?",
      type: "text"
    }
  ]
};

const challengesData = {
  title: "SECTION 6: CHALLENGES FACED IN EXECUTION OF DUTIES",
  questions: [
    { id: "chall_Q1", text: "What challenges are you facing when performing your duties?", type: "text" },
    { id: "chall_Q2", text: "What future challenges do you foresee impacting your agricultural sub-sector?", type: "text" }
  ]
};

const generalSkills = {
  title: "SECTION 2: REQUIRED KNOWLEDGE & SKILLS",
  questions: [
    { id: "gen_2A", title: "2A Communication", text: "How do you rate yourself in conveying information, instructions and feedback to colleagues, workers and stakeholders through verbal, written and digital means?" },
    { id: "gen_2B", title: "2B Problem-Solving", text: "How capable are you at identifying challenges, analysing situations and developing practical solutions in dynamic work environments?" },
    { id: "gen_2C", title: "2C Adaptability & Flexibility", text: "How effectively do you adjust to changing conditions, new technologies, market demands and unexpected challenges?" },
    { id: "gen_2D", title: "2D Time Management", text: "How well do you prioritize tasks to ensure efficient operations?" },
    { id: "gen_2E", title: "2E Networking", text: "How effectively do you build and maintain professional relationships to access information, resources and opportunities?" }
  ]
};

const digitalSkills = {
  title: "SECTION 3: DIGITAL SKILLS",
  questions: [
    { id: "dig_3A", title: "3A Digital Communication", text: "How do you rate your ability to use digital tools effectively to communicate with colleagues, clients and stakeholders? e.g. email, messaging apps, social media" },
    { id: "dig_3B", title: "3B Data Management and Analysis", text: "How capable are you at collecting, organizing, and analysing digital data to support decision-making and improve business or operational outcomes?" },
    { id: "dig_3C", title: "3C Use of Agricultural Technology", text: "How well can you operate and adapt to digital technologies and automated systems specific to agriculture. e.g. sensors, drones, farm management software?" },
    { id: "dig_3D", title: "3D Cybersecurity Awareness", text: "How knowledgeable are you in recognizing digital security risks and applying basic cybersecurity practices to protect information and systems?" },
    { id: "dig_3E", title: "3E Digital Literacy for Innovation", text: "How confident are you in using digital tools to find new information, learn new skills and implement innovative solutions in your work environment?" }
  ]
};
const educationDepartmentSkills = {
  sectionA: {
    title: "SECTION A: TECHNICAL & PROFESSIONAL COMPETENCE",
    questions: [],
    positionSpecific: {
      "Principal": [
        { id: "edu_P_A1", text: "How competent are you in curriculum implementation and academic programme oversight." },
        { id: "edu_P_A2", text: "How competent are you in agricultural subject matter expertise (crop/livestock/agribusiness)." },
        { id: "edu_P_A3", text: "How competent are you in applying education standards and regulatory requirements." },
        { id: "edu_P_A4", text: "How competent are you in integrating theory with practical agricultural training." },
        { id: "edu_P_A5", text: "How competent are you in assessing and improving student academic performance." }
      ],
      "Vice Principal": [
        { id: "edu_VP_A1", text: "How competent are you in curriculum implementation and academic programme oversight." },
        { id: "edu_VP_A2", text: "How competent are you in agricultural subject matter expertise (crop/livestock/agribusiness)." },
        { id: "edu_VP_A3", text: "How competent are you in applying education standards and regulatory requirements." },
        { id: "edu_VP_A4", text: "How competent are you in integrating theory with practical agricultural training." },
        { id: "edu_VP_A5", text: "How competent are you in assessing and improving student academic performance." }
      ],
      "Lecturer": [
        { id: "edu_L_A1", text: "How competent are you in curriculum implementation and academic programme oversight." },
        { id: "edu_L_A2", text: "How competent are you in agricultural subject matter expertise (crop/livestock/agribusiness)." },
        { id: "edu_L_A3", text: "How competent are you in applying education standards and regulatory requirements." },
        { id: "edu_L_A4", text: "How competent are you in integrating theory with practical agricultural training." },
        { id: "edu_L_A5", text: "How competent are you in assessing and improving student academic performance." }
      ],
      "Farm Manager": [
        { id: "edu_FM_A1", text: "How competent are you in managing crop and/or livestock production systems." },
        { id: "edu_FM_A2", text: "How competent are you in supervising student practical training on the farm." },
        { id: "edu_FM_A3", text: "How competent are you in applying farm safety standards and biosecurity measures." },
        { id: "edu_FM_A4", text: "How competent are you in diagnosing production constraints in institutional farms." },
        { id: "edu_FM_A5", text: "How competent are you in maintaining farm records and performance data." }
      ],
      "Agriculture Assistant": [
        { id: "edu_AA_A1", text: "How competent are you in managing crop and/or livestock production systems." },
        { id: "edu_AA_A2", text: "How competent are you in supervising student practical training on the farm." },
        { id: "edu_AA_A3", text: "How competent are you in applying farm safety standards and biosecurity measures." },
        { id: "edu_AA_A4", text: "How competent are you in diagnosing production constraints in institutional farms." },
        { id: "edu_AA_A5", text: "How competent are you in maintaining farm records and performance data." }
      ],
      "Laboratory Technician": [
        { id: "edu_LT_A1", text: "How competent are you in preparing laboratory materials and practical experiments." },
        { id: "edu_LT_A2", text: "How competent are you in maintaining laboratory equipment and safety standards." },
        { id: "edu_LT_A3", text: "How competent are you in supporting research and student practical sessions." },
        { id: "edu_LT_A4", text: "How competent are you in chemical handling and storage compliance." },
        { id: "edu_LT_A5", text: "How competent are you in documenting laboratory activities and inventory." }
      ],
      "Librarian": [
        { id: "edu_Lib_A1", text: "How competent are you in managing academic and agricultural information resources." },
        { id: "edu_Lib_A2", text: "How competent are you in supporting teaching, research, and extension information needs." },
        { id: "edu_Lib_A3", text: "How competent are you in applying library standards and cataloguing systems." },
        { id: "edu_Lib_A4", text: "How competent are you in integrating digital library systems into institutional operations." },
        { id: "edu_Lib_A5", text: "How competent are you in assessing and improving access to learning resources." }
      ],
      "Librarian Assistant": [
        { id: "edu_LibAs_A1", text: "How competent are you in managing academic and agricultural information resources." },
        { id: "edu_LibAs_A2", text: "How competent are you in supporting teaching, research, and extension information needs." },
        { id: "edu_LibAs_A3", text: "How competent are you in applying library standards and cataloguing systems." },
        { id: "edu_LibAs_A4", text: "How competent are you in integrating digital library systems into institutional operations." },
        { id: "edu_LibAs_A5", text: "How competent are you in assessing and improving access to learning resources." }
      ],
      "Agriculture Officer": [
        { id: "edu_AO_A1", text: "How competent are you in providing agricultural extension and advisory services." },
        { id: "edu_AO_A2", text: "How competent are you in applying subject matter expertise in crop, livestock, or agribusiness systems." },
        { id: "edu_AO_A3", text: "How competent are you in applying national agricultural standards and regulatory requirements." },
        { id: "edu_AO_A4", text: "How competent are you in integrating technical knowledge with practical farmer training." },
        { id: "edu_AO_A5", text: "How competent are you in assessing and improving farmer productivity and performance." }
      ]
      ,
      "Artisan": [
        { id: "edu_ART_A1", text: "How competent are you in performing specialised technical repairs and maintenance (electrical, plumbing, carpentry, mechanical)." },
        { id: "edu_ART_A2", text: "How competent are you in maintaining institutional buildings, workshops, and farm infrastructure." },
        { id: "edu_ART_A3", text: "How competent are you in applying occupational health and safety standards in technical tasks." },
        { id: "edu_ART_A4", text: "How competent are you in diagnosing faults and recommending appropriate corrective action." },
        { id: "edu_ART_A5", text: "How competent are you in maintaining maintenance records and job reports." }
      ],
      "Foreman": [
        { id: "edu_FMN_A1", text: "How competent are you in supervising maintenance, construction, or farm support teams." },
        { id: "edu_FMN_A2", text: "How competent are you in allocating tasks and monitoring work quality." },
        { id: "edu_FMN_A3", text: "How competent are you in applying technical and safety standards." },
        { id: "edu_FMN_A4", text: "How competent are you in diagnosing operational inefficiencies." },
        { id: "edu_FMN_A5", text: "How competent are you in maintaining work schedules and operational records." }
      ],
      "Warden": [
        { id: "edu_WRD_A1", text: "How competent are you in managing student accommodation and welfare services." },
        { id: "edu_WRD_A2", text: "How competent are you in enforcing institutional rules and discipline." },
        { id: "edu_WRD_A3", text: "How competent are you in resolving student conflicts and responding to emergencies." },
        { id: "edu_WRD_A4", text: "How competent are you in maintaining safe and conducive living environments." },
        { id: "edu_WRD_A5", text: "How competent are you in maintaining hostel records and reporting." }
      ],
      "Matron": [
        { id: "edu_MTR_A1", text: "How competent are you in managing student accommodation and welfare services." },
        { id: "edu_MTR_A2", text: "How competent are you in enforcing institutional rules and discipline." },
        { id: "edu_MTR_A3", text: "How competent are you in resolving student conflicts and responding to emergencies." },
        { id: "edu_MTR_A4", text: "How competent are you in maintaining safe and conducive living environments." },
        { id: "edu_MTR_A5", text: "How competent are you in maintaining hostel records and reporting." }
      ]
      ,
      "Cook": [
        { id: "edu_CK_A1", text: "How competent are you in food preparation and hygiene standards." },
        { id: "edu_CK_A2", text: "How competent are you in nutrition management and balanced meal planning." },
        { id: "edu_CK_A3", text: "How competent are you in safe handling and maintenance of kitchen equipment." },
        { id: "edu_CK_A4", text: "How competent are you in inventory management of food supplies." },
        { id: "edu_CK_A5", text: "How competent are you in maintaining kitchen sanitation standards." }
      ],
      "Kitchen Hand": [
        { id: "edu_KH_A1", text: "How competent are you in assisting with food preparation tasks." },
        { id: "edu_KH_A2", text: "How competent are you in maintaining cleanliness of kitchen areas." },
        { id: "edu_KH_A3", text: "How competent are you in safe handling of kitchen utensils and equipment." },
        { id: "edu_KH_A4", text: "How competent are you in supporting stock storage and organisation." },
        { id: "edu_KH_A5", text: "How competent are you in complying with food safety standards." }
      ],
      "Laundry Hand": [
        { id: "edu_LH_A1", text: "How competent are you in operating laundry equipment safely." },
        { id: "edu_LH_A2", text: "How competent are you in sorting, washing, drying, and ironing linen properly." },
        { id: "edu_LH_A3", text: "How competent are you in maintaining hygiene and sanitation standards." },
        { id: "edu_LH_A4", text: "How competent are you in inventory control of linen and cleaning materials." },
        { id: "edu_LH_A5", text: "How competent are you in maintaining laundry records and reporting." }
      ],
      "Waiter": [
        { id: "edu_WTR_A1", text: "How competent are you in food service and customer care standards." },
        { id: "edu_WTR_A2", text: "How competent are you in maintaining hygiene and presentation standards." },
        { id: "edu_WTR_A3", text: "How competent are you in handling dining equipment safely." },
        { id: "edu_WTR_A4", text: "How competent are you in inventory monitoring of dining supplies." },
        { id: "edu_WTR_A5", text: "How competent are you in maintaining cleanliness of dining areas." }
      ],
      "Watchman": [
        { id: "edu_WAT_A1", text: "How competent are you in monitoring institutional premises and assets." },
        { id: "edu_WAT_A2", text: "How competent are you in enforcing security procedures and access control." },
        { id: "edu_WAT_A3", text: "How competent are you in identifying and reporting security risks." },
        { id: "edu_WAT_A4", text: "How competent are you in responding to emergencies and security incidents." },
        { id: "edu_WAT_A5", text: "How competent are you in maintaining security logs and incident reports." }
      ],
      "General Hand": [
        { id: "edu_GH_A1", text: "How competent are you in carrying out general maintenance and support tasks." },
        { id: "edu_GH_A2", text: "How competent are you in assisting technical or farm staff as required." },
        { id: "edu_GH_A3", text: "How competent are you in applying safety standards during assigned duties." },
        { id: "edu_GH_A4", text: "How competent are you in maintaining cleanliness and orderliness of work areas." },
        { id: "edu_GH_A5", text: "How competent are you in following instructions and completing assigned tasks." }
      ]
    }
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & INSTITUTIONAL SUPPORT",
    questions: [
      { id: "edu_B1", text: "How competent are you in timely completion of assigned duties." },
      { id: "edu_B2", text: "How competent are you in teamwork and coordination with colleagues." },
      { id: "edu_B3", text: "How competent are you in managing work schedules and responsibilities." },
      { id: "edu_B4", text: "How competent are you in supporting institutional operations and student welfare (where applicable)." },
      { id: "edu_B5", text: "How competent are you in responding effectively to operational challenges." }
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "edu_C1", text: "How competent are you in using modern tools and equipment relevant to the role." },
      { id: "edu_C2", text: "How competent are you in integrating basic digital tools into work tasks (where applicable)." },
      { id: "edu_C3", text: "How competent are you in maintaining or operating modern equipment safely." },
      { id: "edu_C4", text: "How competent are you in adopting improved systems for efficiency." },
      { id: "edu_C5", text: "How competent are you in supporting institutional modernization initiatives." }
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & RESOURCE MANAGEMENT",
    questions: [
      { id: "edu_D1", text: "How competent are you in responsible use of institutional resources." },
      { id: "edu_D2", text: "How competent are you in efficient material and supply management." },
      { id: "edu_D3", text: "How competent are you in following procurement and accountability procedures." },
      { id: "edu_D4", text: "How competent are you in maintaining accurate records where required." },
      { id: "edu_D5", text: "How competent are you in promoting cost-effectiveness and reducing waste." }
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "edu_E1", text: "How competent are you in using basic digital tools (where applicable)." },
      { id: "edu_E2", text: "How competent are you in following institutional information systems procedures." },
      { id: "edu_E3", text: "How competent are you in accurate and secure handling of information." },
      { id: "edu_E4", text: "How competent are you in communication using institutional platforms (where applicable)." },
      { id: "edu_E5", text: "Adherence to data confidentiality and institutional information policies." }
    ]
  },
  sectionF: {
    title: "SECTION F: SUSTAINABILITY, SAFETY & COMPLIANCE",
    questions: [
      { id: "edu_F1", text: "How competent are you in environmental sustainability practices relevant to the role." },
      { id: "edu_F2", text: "How competent are you in occupational health and safety compliance." },
      { id: "edu_F3", text: "How competent are you in waste management procedures." },
      { id: "edu_F4", text: "How competent are you in risk mitigation and emergency preparedness." },
      { id: "edu_F5", text: "How competent are you in maintaining institutional standards and compliance." }
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "edu_G1", text: "How competent are you in planning and prioritising daily tasks." },
      { id: "edu_G2", text: "How competent are you in cooperating with supervisors and colleagues." },
      { id: "edu_G3", text: "How competent are you in ethical conduct and accountability." },
      { id: "edu_G4", text: "How competent are you in reporting issues and performance matters." },
      { id: "edu_G5", text: "Demonstrated commitment to continuous improvement and learning." }
    ]
  }
  ,
  sectionH: {
    title: "SECTION H: ANTICIPATED FUTURE SKILLS",
    questions: [
      { id: "edu_H1", text: "What future skills will be most important to improve institutional performance in your role? (Open-ended response)", type: "text" }
    ]
  },
  sectionR: {
    title: "FINAL REFLECTION",
    questions: [
      { id: "edu_R1", text: "What are the key constraints affecting effective service delivery in your unit?", type: "text" },
      { id: "edu_R2", text: "How relevant is your current education and training to your job responsibilities?", type: "text" },
      { id: "edu_R3", text: "What priority capacity investments are required to improve institutional performance? (Open-ended response)", type: "text" }
    ]
  }
};
