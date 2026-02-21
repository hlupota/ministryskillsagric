
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
      { id: "ext_A1", text: "Demonstrated competence in applying agricultural knowledge within one’s area of specialisation." },
      { id: "ext_A2", text: "Demonstrated competence in advisory support for crop, livestock, or farming systems." },
      { id: "ext_A3", text: "Demonstrated competence in applying technical standards, safety, and best practices." },
      { id: "ext_A4", text: "Demonstrated competence in diagnosing farm-level production or performance issues." },
      { id: "ext_A5", text: "Demonstrated competence in integrating technical advice with farmer production needs." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "ext_B1", text: "Demonstrated competence in providing timely and practical advisory support to farmers." },
      { id: "ext_B2", text: "Demonstrated competence in coordinating field activities with other services (intra-/inter-Ministry, parastatals, non-state actors)." },
      { id: "ext_B3", text: "Demonstrated competence in managing farmer groups, demonstrations, or field teams." },
      { id: "ext_B4", text: "Demonstrated competence in documenting advisory visits, trainings, and outcomes." },
      { id: "ext_B5", text: "Demonstrated competence in responding to farm risks and emergencies." },
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "ext_C1", text: "Demonstrated competence in adopting or adapting appropriate farming technologies." },
      { id: "ext_C2", text: "Demonstrated competence in promoting mechanisation, inputs, or automation where relevant." },
      { id: "ext_C3", text: "Demonstrated competence in collaborating with research and innovation partners." },
      { id: "ext_C4", text: "Demonstrated competence in integrating digital tools into extension workflows." },
      { id: "ext_C5", text: "Demonstrated competence in aligning innovation with farmer productivity and business needs." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & FARMER ENTERPRISE SUPPORT",
    questions: [
      { id: "ext_D1", text: "Demonstrated competence in cost estimation and value-for-money advice for farmers." },
      { id: "ext_D2", text: "Demonstrated competence in lifecycle management of farm enterprises and practices." },
      { id: "ext_D3", text: "Demonstrated competence in linking advisory services to farm viability and markets." },
      { id: "ext_D4", text: "Demonstrated competence in advising on sustainable farm operation and maintenance." },
      { id: "ext_D5", text: "Demonstrated competence in applying business consciousness in day-to-day advisory duties." },
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "ext_E1", text: "Demonstrated competence in using digital tools for advisory, monitoring, or reporting." },
      { id: "ext_E2", text: "Demonstrated competence in applying institutional information systems." },
      { id: "ext_E3", text: "Demonstrated competence in accurate, secure, and responsible data management." },
      { id: "ext_E4", text: "Demonstrated competence in digital coordination and communication with farmers." },
      { id: "ext_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART EXTENSION & SUSTAINABILITY",
    questions: [
      { id: "ext_F1", text: "Demonstrated competence in climate-resilient farming advisory planning." },
      { id: "ext_F2", text: "Demonstrated competence in resource efficiency and sustainability practices." },
      { id: "ext_F3", text: "Demonstrated competence in risk mitigation for climate-related shocks." },
      { id: "ext_F4", text: "Demonstrated competence in environmental safeguards for farming." },
      { id: "ext_F5", text: "Demonstrated competence in aligning extension with national sustainability goals." },
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "ext_G1", text: "Demonstrated competence in planning and managing extension programmes." },
      { id: "ext_G2", text: "Demonstrated competence in coordination with stakeholders across sectors." },
      { id: "ext_G3", text: "Demonstrated competence in adherence to standards, ethics, and accountability." },
      { id: "ext_G4", text: "Demonstrated competence in time, meeting, and workload management." },
      { id: "ext_G5", text: "Demonstrated competence in continuous professional improvement." },
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
      { id: "res_A1", text: "Demonstrated competence in applying scientific or research knowledge within one’s area of specialisation." },
      { id: "res_A2", text: "Demonstrated competence in designing, conducting, or analysing agricultural research trials." },
      { id: "res_A3", text: "Demonstrated competence in applying research standards, ethics, and quality assurance." },
      { id: "res_A4", text: "Demonstrated competence in diagnosing research gaps or experimental issues." },
      { id: "res_A5", text: "Demonstrated competence in integrating research findings with agricultural needs." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & KNOWLEDGE TRANSFER",
    questions: [
      { id: "res_B1", text: "Demonstrated competence in providing timely and practical research-based support to users." },
      { id: "res_B2", text: "Demonstrated competence in coordinating research activities with extension and other services (intra-/inter-Ministry, parastatals, non-state actors)." },
      { id: "res_B3", text: "Demonstrated competence in managing research teams, trials, or collaborations." },
      { id: "res_B4", text: "Demonstrated competence in documenting research processes, results, and publications." },
      { id: "res_B5", text: "Demonstrated competence in responding to research risks and emerging challenges." },
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "res_C1", text: "Demonstrated competence in developing or adapting innovative agricultural technologies." },
      { id: "res_C2", text: "Demonstrated competence in advancing mechanisation, biotech, or automation through research." },
      { id: "res_C3", text: "Demonstrated competence in collaborating with innovation partners and stakeholders." },
      { id: "res_C4", text: "Demonstrated competence in integrating digital tools into research and education workflows." },
      { id: "res_C5", text: "Demonstrated competence in aligning innovations with productivity and business needs." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & IMPACT MANAGEMENT",
    questions: [
      { id: "res_D1", text: "Demonstrated competence in cost estimation and value-for-money in research projects." },
      { id: "res_D2", text: "Demonstrated competence in lifecycle management of research outputs and innovations." },
      { id: "res_D3", text: "Demonstrated competence in linking research to enterprise viability and scalability." },
      { id: "res_D4", text: "Demonstrated competence in advising on sustainable adoption of research findings." },
      { id: "res_D5", text: "Demonstrated competence in applying business consciousness in research duties." },
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "res_E1", text: "Demonstrated competence in using digital tools for research, analysis, or reporting." },
      { id: "res_E2", text: "Demonstrated competence in applying institutional information systems." },
      { id: "res_E3", text: "Demonstrated competence in accurate, secure, and responsible data management." },
      { id: "res_E4", text: "Demonstrated competence in digital coordination and communication." },
      { id: "res_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART RESEARCH & SUSTAINABILITY",
    questions: [
      { id: "res_F1", text: "Demonstrated competence in climate-resilient research and innovation planning." },
      { id: "res_F2", text: "Demonstrated competence in resource efficiency and sustainability in experiments." },
      { id: "res_F3", text: "Demonstrated competence in risk mitigation for climate-related research shocks." },
      { id: "res_F4", text: "Demonstrated competence in environmental safeguards in research practices." },
      { id: "res_F5", text: "Demonstrated competence in aligning research with national sustainability goals." },
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "res_G1", text: "Demonstrated competence in planning and managing research or education programmes." },
      { id: "res_G2", text: "Demonstrated competence in coordination with stakeholders across sectors." },
      { id: "res_G3", text: "Demonstrated competence in adherence to standards, ethics, and accountability." },
      { id: "res_G4", text: "Demonstrated competence in time, meeting, and workload management." },
      { id: "res_G5", text: "Demonstrated competence in continuous professional improvement." },
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
      { id: "vet_A1", text: "Demonstrated competence in applying veterinary or animal health knowledge within one’s area of specialisation." },
      { id: "vet_A2", text: "Demonstrated competence in diagnosis, treatment, or prevention of animal diseases." },
      { id: "vet_A3", text: "Demonstrated competence in applying veterinary standards, safety, and biosecurity." },
      { id: "vet_A4", text: "Demonstrated competence in diagnosing animal health or production issues." },
      { id: "vet_A5", text: "Demonstrated competence in integrating veterinary solutions with livestock production needs." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "vet_B1", text: "Demonstrated competence in providing timely and practical veterinary support to farmers." },
      { id: "vet_B2", text: "Demonstrated competence in coordinating field activities with extension and other services (intra-/inter-Ministry, parastatals, non-state actors)." },
      { id: "vet_B3", text: "Demonstrated competence in managing vaccination campaigns, quarantines, or field teams." },
      { id: "vet_B4", text: "Demonstrated competence in documenting treatments, inspections, and outbreaks." },
      { id: "vet_B5", text: "Demonstrated competence in responding to animal health risks and emergencies." },
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "vet_C1", text: "Demonstrated competence in adopting or adapting veterinary technologies." },
      { id: "vet_C2", text: "Demonstrated competence in animal health mechanisation, diagnostics, or automation where relevant." },
      { id: "vet_C3", text: "Demonstrated competence in collaborating with research and innovation partners." },
      { id: "vet_C4", text: "Demonstrated competence in integrating digital tools into veterinary workflows." },
      { id: "vet_C5", text: "Demonstrated competence in aligning innovations with livestock productivity and business needs." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & LIVESTOCK MANAGEMENT",
    questions: [
      { id: "vet_D1", text: "Demonstrated competence in cost estimation and value-for-money in animal health services." },
      { id: "vet_D2", text: "Demonstrated competence in lifecycle management of livestock health and herds." },
      { id: "vet_D3", text: "Demonstrated competence in linking services to livestock enterprise viability." },
      { id: "vet_D4", text: "Demonstrated competence in advising on sustainable animal management and welfare." },
      { id: "vet_D5", text: "Demonstrated competence in applying business consciousness in day-to-day duties." },
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "vet_E1", text: "Demonstrated competence in using digital tools for diagnostics, monitoring, or reporting." },
      { id: "vet_E2", text: "Demonstrated competence in applying institutional information systems." },
      { id: "vet_E3", text: "Demonstrated competence in accurate, secure, and responsible data management." },
      { id: "vet_E4", text: "Demonstrated competence in digital coordination and communication." },
      { id: "vet_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART ANIMAL HEALTH & SUSTAINABILITY",
    questions: [
      { id: "vet_F1", text: "Demonstrated competence in climate-resilient livestock health planning." },
      { id: "vet_F2", text: "Demonstrated competence in resource efficiency and sustainability in animal husbandry." },
      { id: "vet_F3", text: "Demonstrated competence in risk mitigation for climate-related animal health shocks." },
      { id: "vet_F4", text: "Demonstrated competence in zoonotic and environmental safeguards." },
      { id: "vet_F5", text: "Demonstrated competence in aligning services with national sustainability goals." },
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "vet_G1", text: "Demonstrated competence in planning and managing veterinary programmes." },
      { id: "vet_G2", text: "Demonstrated competence in coordination with stakeholders across sectors." },
      { id: "vet_G3", text: "Demonstrated competence in adherence to standards, ethics, and accountability." },
      { id: "vet_G4", text: "Demonstrated competence in time, meeting, and workload management." },
      { id: "vet_G5", text: "Demonstrated competence in continuous professional improvement." },
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
      { id: "eng_A1", text: "Demonstrated competence in applying engineering or technical knowledge within one’s area of specialisation." },
      { id: "eng_A2", text: "Demonstrated competence in design, supervision, or maintenance of agricultural infrastructure." },
      { id: "eng_A3", text: "Demonstrated competence in applying technical standards, safety, and quality assurance." },
      { id: "eng_A4", text: "Demonstrated competence in diagnosing infrastructure or equipment performance issues." },
      { id: "eng_A5", text: "Demonstrated competence in integrating engineering solutions with agricultural production needs." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & FIELD SUPPORT",
    questions: [
      { id: "eng_B1", text: "Demonstrated competence in providing timely and practical technical support to users." },
      { id: "eng_B2", text: "Demonstrated competence in coordinating field activities with extension and other services (intra-/inter-Ministry, parastatals, non-state actors)." },
      { id: "eng_B3", text: "Demonstrated competence in managing contractors, artisans, or field teams." },
      { id: "eng_B4", text: "Demonstrated competence in documenting works, inspections, and maintenance." },
      { id: "eng_B5", text: "Demonstrated competence in responding to operational risks and emergencies." },
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "eng_C1", text: "Demonstrated competence in adopting or adapting appropriate technologies." },
      { id: "eng_C2", text: "Demonstrated competence in energy efficiency, mechanisation, or automation where relevant." },
      { id: "eng_C3", text: "Demonstrated competence in collaborating with research and innovation partners." },
      { id: "eng_C4", text: "Demonstrated competence in integrating digital tools into engineering workflows." },
      { id: "eng_C5", text: "Demonstrated competence in aligning technical innovation with productivity and business needs." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & ASSET MANAGEMENT",
    questions: [
      { id: "eng_D1", text: "Demonstrated competence in cost estimation and value-for-money considerations." },
      { id: "eng_D2", text: "Demonstrated competence in lifecycle management of infrastructure and equipment." },
      { id: "eng_D3", text: "Demonstrated competence in linking infrastructure services to enterprise viability." },
      { id: "eng_D4", text: "Demonstrated competence in advising users on sustainable operation and maintenance." },
      { id: "eng_D5", text: "Demonstrated competence in applying business consciousness in day-to-day duties." },
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "eng_E1", text: "Demonstrated competence in using digital tools for design, monitoring, or reporting." },
      { id: "eng_E2", text: "Demonstrated competence in applying institutional information systems." },
      { id: "eng_E3", text: "Demonstrated competence in accurate, secure, and responsible data management." },
      { id: "eng_E4", text: "Demonstrated competence in digital coordination and communication." },
      { id: "eng_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART INFRASTRUCTURE & SUSTAINABILITY",
    questions: [
      { id: "eng_F1", text: "Demonstrated competence in climate-resilient infrastructure planning." },
      { id: "eng_F2", text: "Demonstrated competence in water-use efficiency and resource sustainability." },
      { id: "eng_F3", text: "Demonstrated competence in risk mitigation for climate-related shocks." },
      { id: "eng_F4", text: "Demonstrated competence in environmental safeguards." },
      { id: "eng_F5", text: "Demonstrated competence in aligning infrastructure with national sustainability goals." },
    ]
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE & PROFESSIONAL PRACTICE",
    questions: [
      { id: "eng_G1", text: "Demonstrated competence in planning and managing technical programmes." },
      { id: "eng_G2", text: "Demonstrated competence in coordination with stakeholders across sectors." },
      { id: "eng_G3", text: "Demonstrated competence in adherence to standards, ethics, and accountability." },
      { id: "eng_G4", text: "Demonstrated competence in time, meeting, and workload management." },
      { id: "eng_G5", text: "Demonstrated competence in continuous professional improvement." },
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
    title: "SECTION A: TECHNICAL & BUSINESS COMPETENCE",
    questions: [
      { id: "biz_A1", text: "Demonstrated competence in applying business or market knowledge within one’s area of specialisation." },
      { id: "biz_A2", text: "Demonstrated competence in market analysis, value chain development, or enterprise support." },
      { id: "biz_A3", text: "Demonstrated competence in applying market standards, trade regulations, and quality assurance." },
      { id: "biz_A4", text: "Demonstrated competence in diagnosing market access or value chain performance issues." },
      { id: "biz_A5", text: "Demonstrated competence in integrating business solutions with agricultural production needs." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & MARKET SUPPORT",
    questions: [
      { id: "biz_B1", text: "Demonstrated competence in providing timely and practical business support to clients/farmers." },
      { id: "biz_B2", text: "Demonstrated competence in coordinating market activities with other services (intra-/inter-Ministry, parastatals, non-state actors)." },
      { id: "biz_B3", text: "Demonstrated competence in managing business groups, cooperatives, or trade teams." },
      { id: "biz_B4", text: "Demonstrated competence in documenting market trends, transactions, and linkages." },
      { id: "biz_B5", text: "Demonstrated competence in responding to market risks and shocks." },
    ]
  },
  sectionC: {
    title: "SECTION C: INNOVATION, TECHNOLOGY & MODERNISATION",
    questions: [
      { id: "biz_C1", text: "Demonstrated competence in adopting or adapting appropriate market technologies/platforms." },
      { id: "biz_C2", text: "Demonstrated competence in promoting e-commerce, fintech, or automation where relevant." },
      { id: "biz_C3", text: "Demonstrated competence in collaborating with private sector and innovation partners." },
      { id: "biz_C4", text: "Demonstrated competence in integrating digital tools into business workflows." },
      { id: "biz_C5", text: "Demonstrated competence in aligning innovation with market demand and profitability." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, COSTING & VALUE CHAIN MANAGEMENT",
    questions: [
      { id: "biz_D1", text: "Demonstrated competence in cost estimation and profit margin analysis." },
      { id: "biz_D2", text: "Demonstrated competence in lifecycle management of business enterprises and products." },
      { id: "biz_D3", text: "Demonstrated competence in linking production to markets and finance." },
      { id: "biz_D4", text: "Demonstrated competence in advising on sustainable business models and operations." },
      { id: "biz_D5", text: "Demonstrated competence in applying business consciousness in day-to-day duties." },
    ]
  },
  sectionE: {
    title: "SECTION E: DIGITAL PROFICIENCY & INFORMATION MANAGEMENT",
    questions: [
      { id: "biz_E1", text: "Demonstrated competence in using digital tools for market analysis, monitoring, or reporting." },
      { id: "biz_E2", text: "Demonstrated competence in applying institutional information systems." },
      { id: "biz_E3", text: "Demonstrated competence in accurate, secure, and responsible data management." },
      { id: "biz_E4", text: "Demonstrated competence in digital coordination and communication." },
      { id: "biz_E5", text: "Consistent adherence to data security, confidentiality, and integrity requirements." },
    ]
  },
  sectionF: {
    title: "SECTION F: CLIMATE-SMART MARKETS & SUSTAINABILITY",
    questions: [
      { id: "biz_F1", text: "Demonstrated competence in climate-resilient market planning." },
      { id: "biz_F2", text: "Demonstrated competence in resource efficiency and sustainability in value chains." },
      { id: "biz_F3", text: "Demonstrated competence in risk mitigation for climate-related market shocks." },
      { id: "biz_F4", text: "Demonstrated competence in environmental safeguards in business practices." },
      { id: "biz_F5", text: "Demonstrated competence in aligning business goals with national sustainability goals." },
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
      { id: "land_A1", text: "Demonstrated competence in land administration, planning, or mapping within one’s specialisation." },
      { id: "land_A2", text: "Demonstrated competence in applying land laws, policies, and regulations." },
      { id: "land_A3", text: "Demonstrated competence in land-use planning or spatial analysis." },
      { id: "land_A4", text: "Demonstrated competence in tenure security processes." },
      { id: "land_A5", text: "Demonstrated competence in quality assurance of land records and data." },
    ]
  },
  sectionB: {
    title: "SECTION B: SERVICE DELIVERY & COORDINATION",
    questions: [
      { id: "land_B1", text: "Demonstrated competence in land-related service delivery to stakeholders." },
      { id: "land_B2", text: "Demonstrated competence in coordination across Ministries, parastatals, and non-state actors." },
      { id: "land_B3", text: "Demonstrated competence in managing stakeholder expectations and disputes." },
      { id: "land_B4", text: "Demonstrated competence in field verification and documentation." },
      { id: "land_B5", text: "Demonstrated competence in feedback loops to inform policy and planning." },
    ]
  },
  sectionC: {
    title: "SECTION C: DIGITAL & GEOSPATIAL SKILLS",
    questions: [
      { id: "land_C1", text: "Demonstrated competence in GIS, mapping, or spatial tools (where relevant)." },
      { id: "land_C2", text: "Demonstrated competence in land information systems." },
      { id: "land_C3", text: "Demonstrated competence in data integrity and security." },
      { id: "land_C4", text: "Demonstrated competence in digital coordination and reporting." },
      { id: "land_C5", text: "Demonstrated competence in applying technology to improve land services." },
    ]
  },
  sectionD: {
    title: "SECTION D: BUSINESS, PLANNING & VALUE CREATION",
    questions: [
      { id: "land_D1", text: "Demonstrated competence in linking land use to productivity and investment." },
      { id: "land_D2", text: "Demonstrated competence in planning for rural industrialisation." },
      { id: "land_D3", text: "Demonstrated competence in advising on land-use efficiency." },
      { id: "land_D4", text: "Demonstrated competence in balancing development and sustainability." },
      { id: "land_D5", text: "Demonstrated competence in applying business consciousness to land services." },
    ]
  },
  sectionE: {
    title: "SECTION E: CLIMATE & SUSTAINABILITY",
    questions: [
      { id: "land_E1", text: "Demonstrated competence in climate-informed land-use planning." },
      { id: "land_E2", text: "Demonstrated competence in environmental safeguards." },
      { id: "land_E3", text: "Demonstrated competence in resilience planning." },
      { id: "land_E4", text: "Demonstrated competence in sustainable land management." },
      { id: "land_E5", text: "Demonstrated competence in aligning land services with national goals." },
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
      { id: "corp_A1", text: "Demonstrated competence in applying professional knowledge within one’s support function." },
      { id: "corp_A2", text: "Demonstrated competence in policy, administrative, or financial systems relevant to the role." },
      { id: "corp_A3", text: "Demonstrated competence in records, procurement, HR, finance, or ICT practices (as applicable)." },
      { id: "corp_A4", text: "Demonstrated competence in service quality and compliance." },
      { id: "corp_A5", text: "Demonstrated competence in continuous functional improvement." },
    ]
  },
  sectionB: {
    title: "SECTION B: STRATEGY, OVERSIGHT & ACCOUNTABILITY",
    questions: [
      { id: "corp_B1", text: "Demonstrated competence in supporting strategic planning and execution." },
      { id: "corp_B2", text: "Demonstrated competence in oversight, controls, and risk management." },
      { id: "corp_B3", text: "Demonstrated competence in performance support (not appraisal)." },
      { id: "corp_B4", text: "Demonstrated competence in audit responsiveness and integrity." },
      { id: "corp_B5", text: "Demonstrated competence in resource optimisation." },
    ]
  },
  sectionC: {
    title: "SECTION C: DIGITAL SYSTEMS & PROCESS EFFICIENCY",
    questions: [
      { id: "corp_C1", text: "Demonstrated competence in using digital ERP or administrative systems." },
      { id: "corp_C2", text: "Demonstrated competence in process automation or digital reporting." },
      { id: "corp_C3", text: "Demonstrated competence in data analytics for decision support." },
      { id: "corp_C4", text: "Demonstrated competence in information security and confidentiality." },
      { id: "corp_C5", text: "Demonstrated competence in driving digital adoption in the Ministry." },
    ]
  },
  sectionD: {
    title: "SECTION D: SERVICE EXCELLENCE & BUSINESS PARTNERING",
    questions: [
      { id: "corp_D1", text: "Demonstrated competence in client-centric service delivery." },
      { id: "corp_D2", text: "Demonstrated competence in understanding the core business of the Ministry." },
      { id: "corp_D3", text: "Demonstrated competence in providing value-adding advice to technical departments." },
      { id: "corp_D4", text: "Demonstrated competence in cross-functional collaboration." },
      { id: "corp_D5", text: "Demonstrated competence in managing service level agreements or standards." },
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
      { id: "exec_A1", text: "Demonstrated competence in aligning mandates and priorities to AFSRTS II and Vision 2030." },
      { id: "exec_A2", text: "Demonstrated competence in translating national policy into implementable strategies and programmes." },
      { id: "exec_A3", text: "Demonstrated competence in long-term planning under uncertainty and risk." },
      { id: "exec_A4", text: "Demonstrated competence in ensuring policy coherence across departments, directorates, and sectors." },
      { id: "exec_A5", text: "Demonstrated competence in balancing political, technical, and institutional considerations in decision-making." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_A6D", text: "Demonstrated competence in aligning departmental strategies and resources to directorate and national priorities." }
      ],
      "Chief Director": [
        { id: "exec_A6C", text: "Demonstrated competence in steering multi-departmental strategy and portfolio coherence." }
      ],
      "Permanent Secretary": [
        { id: "exec_A6P", text: "Demonstrated competence in shaping national or sector-wide agricultural policy direction." },
        { id: "exec_A7P", text: "Demonstrated competence in anticipating future policy and system demands beyond the current planning cycle." }
      ]
    }
  },
  sectionB: {
    title: "SECTION B: INSTITUTIONAL PERFORMANCE & RESULTS MANAGEMENT",
    questions: [
      { id: "exec_B1", text: "Demonstrated competence in defining clear, measurable high-level performance indicators." },
      { id: "exec_B2", text: "Demonstrated competence in driving a performance culture across the institution." },
      { id: "exec_B3", text: "Demonstrated competence in accountability for public resources and results." },
      { id: "exec_B4", text: "Demonstrated competence in overseeing complex projects and programmes." },
      { id: "exec_B5", text: "Demonstrated competence in unblocking systemic implementation bottlenecks." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_B6D", text: "Demonstrated competence in ensuring operational delivery and output quality within the department." }
      ]
    }
  },
  sectionC: {
    title: "SECTION C: FINANCIAL STEWARDSHIP & RESOURCE MOBILISATION",
    questions: [
      { id: "exec_C1", text: "Demonstrated competence in strategic budgeting and financial planning." },
      { id: "exec_C2", text: "Demonstrated competence in ensuring value for money and cost-effectiveness." },
      { id: "exec_C3", text: "Demonstrated competence in engaging Treasury and development partners for resources." },
      { id: "exec_C4", text: "Demonstrated competence in fiduciary oversight and audit responsiveness." },
      { id: "exec_C5", text: "Demonstrated competence in innovative financing models for agricultural development." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_C6D", text: "Demonstrated competence in managing departmental budgets and expenditure efficiently." }
      ]
    }
  },
  sectionD: {
    title: "SECTION D: HUMAN CAPITAL & TALENT MANAGEMENT",
    questions: [
      { id: "exec_D1", text: "Demonstrated competence in strategic workforce planning." },
      { id: "exec_D2", text: "Demonstrated competence in mentoring, coaching, and succession planning." },
      { id: "exec_D3", text: "Demonstrated competence in managing diversity, equity, and inclusion." },
      { id: "exec_D4", text: "Demonstrated competence in conflict resolution and staff motivation." },
      { id: "exec_D5", text: "Demonstrated competence in creating a learning organisation." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_D6D", text: "Demonstrated competence in developing technical capacity and team cohesion." }
      ]
    }
  },
  sectionE: {
    title: "SECTION E: INNOVATION, DIGITAL TRANSFORMATION & CHANGE MANAGEMENT",
    questions: [
      { id: "exec_E1", text: "Demonstrated competence in championing digital transformation." },
      { id: "exec_E2", text: "Demonstrated competence in fostering a culture of innovation." },
      { id: "exec_E3", text: "Demonstrated competence in change management and adaptability." },
      { id: "exec_E4", text: "Demonstrated competence in leveraging data for strategic decision-making." },
      { id: "exec_E5", text: "Demonstrated competence in managing resistance to change." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_E6D", text: "Demonstrated competence in modernising departmental processes and systems." }
      ]
    }
  },
  sectionF: {
    title: "SECTION F: RISK MANAGEMENT, COMPLIANCE & OVERSIGHT",
    questions: [
      { id: "exec_F1", text: "Demonstrated competence in identifying strategic and operational risks and mitigation plans." },
      { id: "exec_F2", text: "Demonstrated competence in ensuring compliance with laws, regulations and policies." },
      { id: "exec_F3", text: "Demonstrated competence in internal control systems and audit follow-through." },
      { id: "exec_F4", text: "Demonstrated competence in safeguarding public resources and ethical standards." },
      { id: "exec_F5", text: "Demonstrated competence in business continuity and crisis response planning." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_F6D", text: "Demonstrated competence in implementing departmental risk registers and compliance checks." }
      ]
    }
  },
  sectionG: {
    title: "SECTION G: GOVERNANCE, INSTITUTIONS & STAKEHOLDER MANAGEMENT",
    questions: [
      { id: "exec_G1", text: "Demonstrated competence in public-sector governance and accountability." },
      { id: "exec_G2", text: "Demonstrated competence in decentralisation and provincial coordination." },
      { id: "exec_G3", text: "Demonstrated competence in stakeholder engagement (state and non-state actors)." },
      { id: "exec_G4", text: "Demonstrated competence in inter-ministerial and whole-of-government coordination." },
      { id: "exec_G5", text: "Demonstrated competence in clarifying mandates, roles, and institutional interfaces." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_G6D", text: "Demonstrated competence in coordinating stakeholders at departmental level." }
      ]
    }
  },
  sectionH: {
    title: "SECTION H: PEOPLE, CULTURE & 21ST-CENTURY LEADERSHIP",
    questions: [
      { id: "exec_H1", text: "Demonstrated competence in mobilising and aligning subordinate leaders." },
      { id: "exec_H2", text: "Demonstrated competence in coaching, mentoring, and talent development." },
      { id: "exec_H3", text: "Demonstrated competence in diversity and inclusion management." },
      { id: "exec_H4", text: "Demonstrated competence in driving organisational and cultural transformation." },
      { id: "exec_H5", text: "Demonstrated competence in adaptability, problem-solving, and learning agility." }
    ],
    roleSpecific: {
      "Director": [
        { id: "exec_H6D", text: "Demonstrated competence in building a high-performance departmental culture." }
      ]
    }
  },
  sectionI: {
    title: "SECTION I: PERSONAL ATTRIBUTES & ETHICAL LEADERSHIP",
    questions: [
      { id: "exec_I1", text: "Demonstrated competence in integrity, transparency, and ethical conduct." },
      { id: "exec_I2", text: "Demonstrated competence in resilience and stress management." },
      { id: "exec_I3", text: "Demonstrated competence in emotional intelligence and empathy." },
      { id: "exec_I4", text: "Demonstrated competence in decisiveness and judgment." },
      { id: "exec_I5", text: "Demonstrated competence in visionary thinking and inspiration." }
    ]
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

const executiveSecretaryTechnicalSkills = {
  sectionA: {
    title: "SECTION A: PROFESSIONAL & FUNCTIONAL COMPETENCE",
    questions: [
      { id: "sec_A1", text: "Demonstrated competence in executive diary and schedule management." },
      { id: "sec_A2", text: "Demonstrated competence in records management and document control." },
      { id: "sec_A3", text: "Demonstrated competence in drafting official correspondence and reports." },
      { id: "sec_A4", text: "Demonstrated competence in procurement and administrative procedures." },
      { id: "sec_A5", text: "Demonstrated competence in ensuring confidentiality and information integrity." }
    ]
  },
  sectionB: {
    title: "SECTION B: STRATEGY, GOVERNANCE & OVERSIGHT SUPPORT",
    questions: [
      { id: "sec_B1", text: "Demonstrated competence in supporting strategic meetings and executive decision processes." },
      { id: "sec_B2", text: "Demonstrated competence in preparing briefs, minutes, and action trackers." },
      { id: "sec_B3", text: "Demonstrated competence in monitoring follow-ups and accountability systems." },
      { id: "sec_B4", text: "Demonstrated competence in governance reporting support." },
      { id: "sec_B5", text: "Demonstrated competence in coordination across departments and external stakeholders." }
    ]
  },
  sectionC: {
    title: "SECTION C: DIGITAL & INFORMATION MANAGEMENT",
    questions: [
      { id: "sec_C1", text: "Demonstrated competence in Microsoft Office and related productivity tools." },
      { id: "sec_C2", text: "Demonstrated competence in digital records and document management systems." },
      { id: "sec_C3", text: "Demonstrated competence in virtual meeting platforms and digital collaboration tools." },
      { id: "sec_C4", text: "Demonstrated competence in data handling and confidentiality protocols." },
      { id: "sec_C5", text: "Demonstrated competence in adapting to new digital administrative systems." }
    ]
  },
  sectionD: {
    title: "SECTION D: ORGANISATIONAL CULTURE & 21ST-CENTURY SKILLS",
    questions: [
      { id: "sec_D1", text: "Demonstrated competence in communication and professional etiquette." },
      { id: "sec_D2", text: "Demonstrated competence in stakeholder engagement and coordination." },
      { id: "sec_D3", text: "Demonstrated competence in multitasking and priority management." },
      { id: "sec_D4", text: "Demonstrated competence in problem-solving and initiative." },
      { id: "sec_D5", text: "Demonstrated competence in supporting leadership effectiveness." }
    ]
  },
  sectionE: {
    title: "SECTION E: FUTURE SKILLS",
    type: "text",
    questions: [
      { id: "sec_E1", text: "What future skills do you anticipate needing to strengthen executive and administrative support services?" }
    ]
  }
};

const officeOrderlyTechnicalSkills = {
  sectionA: {
    title: "SECTION A: CORE SUPPORT SERVICES",
    questions: [
      { id: "ord_A1", text: "Demonstrated competence in office cleaning and maintenance standards." },
      { id: "ord_A2", text: "Demonstrated competence in handling documents and internal deliveries." },
      { id: "ord_A3", text: "Demonstrated competence in meeting room preparation and logistical support." },
      { id: "ord_A4", text: "Demonstrated competence in inventory handling (stationery, supplies)." },
      { id: "ord_A5", text: "Demonstrated competence in maintaining organised workspaces." }
    ]
  },
  sectionB: {
    title: "SECTION B: SAFETY, COMPLIANCE & ACCOUNTABILITY",
    questions: [
      { id: "ord_B1", text: "Demonstrated competence in workplace health and safety procedures." },
      { id: "ord_B2", text: "Demonstrated competence in proper handling of cleaning materials and equipment." },
      { id: "ord_B3", text: "Demonstrated competence in safeguarding documents and office property." },
      { id: "ord_B4", text: "Demonstrated competence in time management and reliability." },
      { id: "ord_B5", text: "Demonstrated competence in reporting maintenance or safety issues." }
    ]
  },
  sectionC: {
    title: "SECTION C: COORDINATION & PROFESSIONAL CONDUCT",
    questions: [
      { id: "ord_C1", text: "Demonstrated competence in communication with staff and supervisors." },
      { id: "ord_C2", text: "Demonstrated competence in teamwork and cooperation." },
      { id: "ord_C3", text: "Demonstrated competence in customer service and professionalism." },
      { id: "ord_C4", text: "Demonstrated competence in confidentiality and discretion." },
      { id: "ord_C5", text: "Demonstrated competence in adaptability to changing tasks and assignments." }
    ]
  },
  sectionD: {
    title: "SECTION D: DIGITAL & ADAPTIVE CAPACITY",
    questions: [
      { id: "ord_D1", text: "Demonstrated competence in basic use of mobile communication tools." },
      { id: "ord_D2", text: "Demonstrated competence in adapting to digital requisition or reporting systems (if applicable)." },
      { id: "ord_D3", text: "Demonstrated competence in following digital or written instructions." },
      { id: "ord_D4", text: "Demonstrated competence in learning new procedures." },
      { id: "ord_D5", text: "Demonstrated competence in supporting modern office environments." }
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
