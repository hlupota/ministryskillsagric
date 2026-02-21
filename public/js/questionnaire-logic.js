
document.addEventListener('DOMContentLoaded', function() {
    // ==========================================
    // STATE & CONFIGURATION
    // ==========================================
    
    let currentStep = 1;
    let formData = {
        consent: false,
        firstName: '',
        middleName: '',
        lastName: '',
        sex: '',
        dateOfBirth: '',
        educationLevel: '',
        qualificationYear: '',
        areaOfSpecialisation: '',
        email: '',
        phone: '',
        cluster: '',
        department: '',
        position: '',
        locationType: '',
        province: '',
        district: '',
        ageRange: '',
        technicalSkills: {} // To store dynamic skill ratings
    };

    // DOM Elements
    const stepIndicator = document.getElementById('stepIndicator');
    const dynamicStepsContainer = document.getElementById('dynamic-steps-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('questionnaireForm');
    const responsesInput = document.getElementById('responsesInput');

    // Step 1 Inputs
    const clusterSelect = document.getElementById('cluster');
    const departmentSelect = document.getElementById('department');
    const positionSelect = document.getElementById('position');
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const locationTypeSelect = document.getElementById('locationType');
    const locationTypeGroup = document.getElementById('locationTypeGroup');
    const provinceGroup = document.getElementById('provinceGroup');
    const districtGroup = document.getElementById('districtGroup');
    const experienceGroup = document.getElementById('experienceGroup');

    // Initial dependency: Province/District depend on Location selection
    if (provinceSelect) { provinceSelect.disabled = true; provinceSelect.required = false; }
    if (districtSelect) { districtSelect.disabled = true; districtSelect.required = false; }

    // Helpers to apply location modes deterministically
    function applyHeadOfficeMode() {
        formData.locationType = 'Head Office';
        if (locationTypeSelect) {
            locationTypeSelect.value = 'Head Office';
            locationTypeSelect.disabled = true;
        }
        if (provinceSelect) {
            let hoOpt = Array.from(provinceSelect.options).find(o => o.value === 'Head Office');
            if (!hoOpt) {
                hoOpt = document.createElement('option');
                hoOpt.value = 'Head Office';
                hoOpt.textContent = 'Head Office';
                provinceSelect.appendChild(hoOpt);
            }
            provinceSelect.value = 'Head Office';
            provinceSelect.disabled = false;
            provinceSelect.required = false;
        }
        if (districtSelect) {
            let hoOptD = Array.from(districtSelect.options).find(o => o.value === 'Head Office');
            if (!hoOptD) {
                hoOptD = document.createElement('option');
                hoOptD.value = 'Head Office';
                hoOptD.textContent = 'Head Office';
                districtSelect.appendChild(hoOptD);
            }
            districtSelect.value = 'Head Office';
            districtSelect.disabled = false;
            districtSelect.required = false;
        }
        if (provinceGroup) provinceGroup.classList.add('d-none');
        if (districtGroup) districtGroup.classList.add('d-none');
        if (experienceGroup) experienceGroup.classList.add('col-sm-8');
    }

    function applyProvinceMode() {
        formData.locationType = 'Province';
        if (locationTypeSelect) {
            locationTypeSelect.value = 'Province';
            locationTypeSelect.disabled = false;
        }
        if (provinceSelect) {
            provinceSelect.disabled = false;
            provinceSelect.required = true;
            Array.from(provinceSelect.options).forEach(opt => { if (opt.value === 'Head Office') opt.remove(); });
            provinceSelect.value = '';
        }
        if (districtSelect) {
            districtSelect.disabled = true;
            districtSelect.required = true;
            districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';
            Array.from(districtSelect.options).forEach(opt => { if (opt.value === 'Head Office') opt.remove(); });
        }
        if (provinceGroup) provinceGroup.classList.remove('d-none');
        if (districtGroup) districtGroup.classList.remove('d-none');
        if (experienceGroup) experienceGroup.classList.remove('col-sm-8');
    }

    // Cluster Step Configuration
    // Maps cluster name -> step ranges -> sections
    const clusterConfig = {
        "Extension & Advisory Services": {
            steps: [4, 5, 6, 7],
            data: extensionTechnicalSkills,
            sections: {
                4: ['sectionA', 'sectionB'],
                5: ['sectionC', 'sectionD'],
                6: ['sectionE', 'sectionF'],
                7: ['sectionG', 'sectionH', 'sectionR']
            }
        },
        "Research, Innovation & Education": {
            steps: [8, 9, 10, 11, 12],
            data: researchTechnicalSkills,
            sections: {
                8: ['sectionA', 'sectionB'],
                9: ['sectionC', 'sectionD'],
                10: ['sectionE', 'sectionF'], 
                11: ['sectionG', 'sectionH'],
                12: ['sectionR']
            }
        },
        "Veterinary & Animal Health Services": {
            steps: [13, 14, 15, 16, 17],
            data: veterinaryTechnicalSkills,
            sections: {
                13: ['sectionA', 'sectionB'],
                14: ['sectionC', 'sectionD'],
                15: ['sectionE', 'sectionF'],
                16: ['sectionG', 'sectionH'],
                17: ['sectionR']
            }
        },
        "Engineering, Infrastructure & Technical Services": {
            steps: [18, 19, 20, 21, 22],
            data: engineeringTechnicalSkills,
            sections: {
                18: ['sectionA', 'sectionB'],
                19: ['sectionC', 'sectionD'],
                20: ['sectionE', 'sectionF'],
                21: ['sectionG', 'sectionH'],
                22: ['sectionR']
            }
        },
        "Business Development, Markets & Value Chains": {
            steps: [23, 24, 25, 26, 27],
            data: businessTechnicalSkills,
            sections: {
                23: ['sectionA', 'sectionB'],
                24: ['sectionC', 'sectionE'], // D is skipped/missing in source
                25: ['sectionF', 'sectionG'],
                26: ['sectionH'],
                27: ['sectionR']
            }
        },
        "Land Administration, Planning & Mapping": {
            steps: [28, 29, 30, 31],
            data: landTechnicalSkills,
            sections: {
                28: ['sectionA', 'sectionB'],
                29: ['sectionC', 'sectionD'],
                30: ['sectionE', 'sectionH'],
                31: ['sectionR']
            }
        },
        "Corporate, Governance & Support Services": {
            steps: [32, 33, 34, 35],
            data: corporateTechnicalSkills,
            sections: {
                32: ['sectionA', 'sectionB'],
                33: ['sectionC', 'sectionD'],
                34: ['sectionE', 'sectionH'],
                35: ['sectionR']
            }
        }
    };

    // Executive Steps
    const executiveStepsConfig = {
        2: ['sectionA', 'sectionB'],
        3: ['sectionC', 'sectionD'],
        4: ['sectionE'],
        5: ['sectionF'], // May not exist, handle gracefully
        40: ['sectionG'],
        41: ['sectionH'],
        42: ['sectionI'],
        43: ['sectionK', 'sectionR']
    };

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================

    function getExecutiveGrade(position) {
        if (!position) return null;
        const p = position.toLowerCase();
        
        if (p.includes("permanent secretary")) return "Permanent Secretary";
        if (p.includes("chief director")) return "Chief Director";
        // "Deputy Director" contains "Director", so check it first
        if (p.includes("deputy director")) return "Deputy Director";
        if (p.includes("director")) return "Director";
        
        // New Chief positions
        if (p.includes("chief accountant")) return "Chief Accountant";
        if (p.includes("chief internal auditor")) return "Chief Internal Auditor";
        if (p.includes("chief legal adviser")) return "Chief Legal Adviser";

        return null;
    }

    function getSteps() {
        const selectedCluster = clusterSelect.value;
        const selectedPosition = positionSelect.value;
        const execGrade = getExecutiveGrade(selectedPosition);

        if (execGrade) {
            return [1, 2, 3, 4, 5, 40, 41, 42, 43, 50, 51];
        }

        if (selectedPosition === "Driver") {
             return [1, 60, 61, 62, 50, 51];
        }

        if (selectedPosition === "Executive Assistant") {
             return [1, 70, 71, 72, 50, 51];
        }

        if (["Office Orderly", "Security Officer", "Cook", "Laundry Hand"].includes(selectedPosition)) {
             if (formData.department !== "Agricultural Education (Colleges)") {
                 return [1, 63, 64, 65, 50, 51];
             }
             // For Education Colleges, follow cluster mapping to show position-specific content
        }

        if (selectedCluster && clusterConfig[selectedCluster]) {
            return [1, ...clusterConfig[selectedCluster].steps, 50, 51];
        }

        // Default fallback
        return [1, 4, 50, 51]; 
    }

    function getSectionStyle(title) {
        if (!title) return { icon: "ClipboardList", color: "text-secondary", letter: "?" };
        
        // Check for Numbered Sections first (e.g., SECTION 1, SECTION 2...)
        const numberMatch = title.match(/SECTION\s+(\d+)/i);
        if (numberMatch) {
             return { icon: "ClipboardList", color: "text-secondary", letter: numberMatch[1] };
        }

        if (title.includes("SECTION A")) return { icon: "BookOpen", color: "text-primary", letter: "A" };
        if (title.includes("SECTION B")) return { icon: "Briefcase", color: "text-success", letter: "B" };
        if (title.includes("SECTION C")) return { icon: "Lightbulb", color: "text-warning", letter: "C" };
        if (title.includes("SECTION D")) return { icon: "TrendingUp", color: "text-info", letter: "D" };
        if (title.includes("SECTION E")) return { icon: "Leaf", color: "text-success", letter: "E" };
        if (title.includes("SECTION F")) return { icon: "BarChart", color: "text-primary", letter: "F" };
        if (title.includes("SECTION G")) return { icon: "Shield", color: "text-danger", letter: "G" };
        if (title.includes("SECTION H")) return { icon: "Users", color: "text-warning", letter: "H" };
        if (title.includes("SECTION I")) return { icon: "Laptop", color: "text-info", letter: "I" };
        if (title.includes("SECTION K")) return { icon: "Target", color: "text-primary", letter: "K" };
        if (title.includes("FINAL REFLECTION") || title.includes("SECTION R")) return { icon: "FileText", color: "text-secondary", letter: "R" };
        return { icon: "ClipboardList", color: "text-secondary", letter: "?" };
    }

    function getSpecificQuestions(section, grade) {
        if (!grade || !section.roleSpecific) return [];
        
        let questions = [];
        
        const isDirectorLevel = ["Director", "Chief Director", "Permanent Secretary"].includes(grade);
        const isChiefDirectorLevel = ["Chief Director", "Permanent Secretary"].includes(grade);
        const isPermSecLevel = grade === "Permanent Secretary";
        
        if (isDirectorLevel && section.roleSpecific["Director"]) {
            questions = [...questions, ...section.roleSpecific["Director"]];
        }
        
        if (isChiefDirectorLevel && section.roleSpecific["Chief Director"]) {
            questions = [...questions, ...section.roleSpecific["Chief Director"]];
        }
        
        if (isPermSecLevel && section.roleSpecific["Permanent Secretary"]) {
            questions = [...questions, ...section.roleSpecific["Permanent Secretary"]];
        }
        
        return questions;
    }

    // ==========================================
    // RENDER FUNCTIONS
    // ==========================================

    function renderIcon(iconName, className) {
        // SVG paths for Lucide icons
        const icons = {
            BookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
            Briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
            Lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
            TrendingUp: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
            Leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
            BarChart: '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
            Shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
            Users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
            Laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
            Target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
            FileText: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>',
            ClipboardList: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
            Award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
            CheckSquare: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
        };

        const path = icons[iconName] || icons.ClipboardList;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}">${path}</svg>`;
    }

    function renderRatingQuestion(q, questionNumber, iconName, iconColor, labels = generalSkillLabels) {
        const val = formData.technicalSkills[q.id] || "";
        let optionsHtml = labels.map(l => `
            <option value="${l.val}" ${String(val) === String(l.val) ? 'selected' : ''}>${l.val}. ${l.label}</option>
        `).join('');

        return `
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between gap-3 flex-column flex-md-row">
              <div class="flex-fill">
                <div class="d-flex align-items-center gap-2 mb-1">
                  ${renderIcon(iconName, 'me-2')}
                  <div class="fw-bold">${questionNumber}</div>
                </div>
                <div class="text-muted small">${q.text}</div>
              </div>
              <div style="min-width:280px;">
                <select name="${q.id}" class="form-select" onchange="updateTechnicalSkill('${q.id}', this.value)">
                  <option value="" disabled ${!val ? 'selected' : ''}>Select level...</option>
                  ${optionsHtml}
                </select>
              </div>
            </div>
          </div>
        </div>`;
    }

    function renderTextQuestion(q, questionNumber, iconName, iconColor) {
        const val = formData.technicalSkills[q.id] || "";

        return `
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-2">
              ${renderIcon(iconName, 'me-2')}
              <div class="fw-bold">${questionNumber}</div>
            </div>
            <div class="text-muted small mb-2">${q.text}</div>
            <textarea name="${q.id}" class="form-control" rows="3" placeholder="Type your answer here..." onchange="updateTechnicalSkill('${q.id}', this.value)">${val}</textarea>
          </div>
        </div>`;
    }

    function renderMultiSelectQuestion(q, questionNumber, iconName, iconColor) {
        const val = formData.technicalSkills[q.id] || "";
        const selected = val ? val.split(',') : [];

        let optionsHtml = q.options.map(opt => `
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" id="${q.id}-${opt.replace(/\s+/g, '')}" value="${opt}" ${selected.includes(opt) ? 'checked' : ''} onchange="updateMultiSelect('${q.id}', this)">
              <label class="form-check-label" for="${q.id}-${opt.replace(/\s+/g, '')}">${opt}</label>
            </div>
        `).join('');

        return `
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-2">
              ${renderIcon(iconName, 'me-2')}
              <div class="fw-bold">${questionNumber}</div>
            </div>
            <div class="text-muted small mb-2">${q.text}</div>
            <div>${optionsHtml}</div>
          </div>
        </div>`;
    }
    
    function renderSelectQuestion(q, questionNumber, iconName, iconColor) {
        const val = formData.technicalSkills[q.id] || "";
        let optionsHtml = q.options.map(opt => `
            <option value="${opt}" ${val === opt ? 'selected' : ''}>${opt}</option>
        `).join('');

        return `
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-2">
              ${renderIcon(iconName, 'me-2')}
              <div class="fw-bold">${questionNumber}</div>
            </div>
            <div class="text-muted small mb-2">${q.text}</div>
            <select name="${q.id}" class="form-select" onchange="updateTechnicalSkill('${q.id}', this.value)">
              <option value="" disabled ${!val ? 'selected' : ''}>Select an option</option>
              ${optionsHtml}
            </select>
          </div>
        </div>`;
    }

    window.updateTechnicalSkill = function(id, value) {
        formData.technicalSkills[id] = value;
    };

    window.updateMultiSelect = function(id, checkbox) {
        let currentVal = formData.technicalSkills[id] || "";
        let selected = currentVal ? currentVal.split(',').filter(Boolean) : [];
        
        if (checkbox.checked) {
            selected.push(checkbox.value);
        } else {
            selected = selected.filter(s => s !== checkbox.value);
        }
        
        formData.technicalSkills[id] = selected.join(',');
    };

    function renderSection(section, sectionKey, labels = generalSkillLabels) {
        if (!section) return '';
        const { icon, color, letter } = getSectionStyle(section.title);
        
        // Handle role specific questions for Exec
        let questions = [...section.questions];
        const execGrade = getExecutiveGrade(formData.position);
        if (execGrade && section.roleSpecific) {
            const roleQuestions = getSpecificQuestions(section, execGrade);
            questions = [...questions, ...roleQuestions];
        }

        if (!execGrade && section.positionSpecific) {
            const pos = (formData.position || '').toLowerCase();
            let matched = null;
            if (pos.includes('principal')) matched = 'Principal';
            else if (pos.includes('vice principal')) matched = 'Vice Principal';
            else if (pos.includes('lecturer')) matched = 'Lecturer';
            else if (pos.includes('educational officer')) matched = 'Lecturer';
            else if (pos.includes('farm manager')) matched = 'Farm Manager';
            else if (pos.includes('agricultural assistant')) matched = 'Agriculture Assistant';
            else if (pos.includes('laboratory technician')) matched = 'Laboratory Technician';
            else if (pos.includes('librarian assistant')) matched = 'Librarian Assistant';
            else if (pos.includes('librarian')) matched = 'Librarian';
            else if (pos.includes('agriculture officer')) matched = 'Agriculture Officer';
            else if (pos.includes('artisan')) matched = 'Artisan';
            else if (pos.includes('foreman')) matched = 'Foreman';
            else if (pos.includes('warden')) matched = 'Warden';
            else if (pos.includes('matron')) matched = 'Matron';
            else if (pos.includes('cook')) matched = 'Cook';
            else if (pos.includes('kitchen hand')) matched = 'Kitchen Hand';
            else if (pos.includes('waiter')) matched = 'Waiter';
            else if (pos.includes('watchman')) matched = 'Watchman';
            else if (pos.includes('general hand')) matched = 'General Hand';
            if (matched && section.positionSpecific[matched]) {
                questions = [...questions, ...section.positionSpecific[matched]];
            }
        }

        let questionsHtml = questions.map((q, idx) => {
            let qNum;
            if (/^\d+$/.test(letter)) {
                // For numbered sections (e.g. Section 5), use 5A, 5B...
                const subLetter = String.fromCharCode(65 + idx);
                qNum = `${letter}${subLetter}`;
            } else {
                // For lettered sections (e.g. Section A), use A1, A2...
                qNum = `${letter}${idx + 1}`;
            }
            
            if (section.type === "text" || q.type === "text") {
                return renderTextQuestion(q, qNum, icon, color);
            } else if (q.type === "checkbox") {
                return renderMultiSelectQuestion(q, qNum, icon, color);
            } else if (q.type === "select") {
                return renderSelectQuestion(q, qNum, icon, color);
            } else {
                return renderRatingQuestion(q, qNum, icon, color, labels);
            }
        }).join('');

        return `
        <div class="mb-4">
          <h3 class="h6 fw-semibold mb-3">${section.title}</h3>
          ${questionsHtml}
          <hr class="my-4" />
        </div>`;
    }

    function renderRatingScaleGuide(labels) {
        const isGeneral = labels === generalSkillLabels;
        if (isGeneral) {
            return `
            <div class="alert alert-info mb-3">
              <h6 class="alert-heading mb-2">Rating Scale</h6>
              <ol class="mb-0 small ps-3">
                <li class="mb-1"><span class="fw-semibold">Do not have these skills:</span> <span>This skill is completely new to me.</span></li>
                <li class="mb-1"><span class="fw-semibold">Somewhat familiar:</span> <span>I have slight knowledge relating to elements of this skill.</span></li>
                <li class="mb-1"><span class="fw-semibold">Basic level:</span> <span>My skills correspond to the skills needed.</span></li>
                <li class="mb-1"><span class="fw-semibold">Intermediate level:</span> <span>My skills need to be further developed to cope with some of the tasks and duties of my job/business.</span></li>
                <li><span class="fw-semibold">Advanced level:</span> <span>I have the skills to carry out more complex tasks and duties.</span></li>
              </ol>
            </div>`;
        }
        const items = (labels || executiveSkillLabels).map(l => `<li class="mb-1"><span class="fw-semibold">${l.label}</span></li>`).join('');
        return `
        <div class="alert alert-info mb-3">
          <h6 class="alert-heading mb-2">Rating Scale</h6>
          <ol class="mb-0 small ps-3">${items}</ol>
        </div>`;
    }

    function renderAuthenticBanner() {
        return `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border bg-light">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and extension effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
    }

    function renderStepContent() {
        dynamicStepsContainer.innerHTML = '';
        window.scrollTo(0, 0);

        const execGrade = getExecutiveGrade(formData.position);
        let html = '';

        if (currentStep === 2) {
            // General Skills or Exec A/B
            if (execGrade) {
                html += renderAuthenticBanner();
                html += renderRatingScaleGuide(executiveSkillLabels);
                html += renderExecCard(['sectionA', 'sectionB'], "Executive Leadership Skills Audit");
            } else {
                html += renderAuthenticBanner();
                html += renderRatingScaleGuide(generalSkillLabels);
                html += renderGenericCard(generalSkills, "blue-500", generalSkillLabels);
            }
        } else if (currentStep === 3) {
            // Digital Skills or Exec C/D
            if (execGrade) {
                html += renderAuthenticBanner();
                html += renderRatingScaleGuide(executiveSkillLabels);
                html += renderExecCard(['sectionC', 'sectionD'], "Executive Leadership Skills Audit");
            } else {
                html += renderAuthenticBanner();
                html += renderRatingScaleGuide(generalSkillLabels);
                html += renderGenericCard(digitalSkills, "indigo-500", generalSkillLabels);
            }
        } else if (currentStep === 50) {
            // Training
            html += renderAuthenticBanner();
            html += renderGenericCard(trainingData, "teal-500", null, true);
        } else if (currentStep === 51) {
            // Challenges
            html += renderAuthenticBanner();
            html += renderGenericCard(challengesData, "rose-500", null, true);
        } else if (currentStep >= 70 && currentStep <= 72) {
            const map = { 70: ['sectionA', 'sectionB'], 71: ['sectionC', 'sectionD'], 72: ['sectionE'] };
            const sections = map[currentStep];
            if (sections) {
                const dataObj = executiveAssistantTechnicalSkills;
                const title = 'Executive Assistant Competence';
                html += renderAuthenticBanner();
                html += renderRatingScaleGuide(generalSkillLabels);
                html += renderClusterCard(dataObj, sections, title);
            }
        } else if (currentStep >= 63 && currentStep <= 65) {
            // Support Staff (Office Orderly and similar) Steps
            const supportSections = {
                63: ['sectionA', 'sectionB'],
                64: ['sectionC', 'sectionD'],
                65: ['sectionE']
            };
            const sections = supportSections[currentStep];
            if (sections) {
                 html += renderAuthenticBanner();
                 html += renderRatingScaleGuide(generalSkillLabels);
                 html += renderClusterCard(officeOrderlyTechnicalSkills, sections, "Office Orderly Competence");
            }
        } else {
            // Technical Steps
            if (execGrade) {
                const sections = executiveStepsConfig[currentStep];
                if (sections) {
                    html += renderAuthenticBanner();
                    html += renderRatingScaleGuide(executiveSkillLabels);
                    html += renderExecCard(sections, "Executive Leadership Skills Audit");
                }
            } else {
                const cluster = clusterConfig[formData.cluster];
                if (cluster && cluster.sections[currentStep]) {
                    const sectionKeys = cluster.sections[currentStep];
                    let dataObj = cluster.data;
                    if (formData.cluster === 'Research, Innovation & Education' && formData.department === 'Agricultural Education (Colleges)') {
                        dataObj = educationDepartmentSkills;
                    }
                    html += renderAuthenticBanner();
                    html += renderRatingScaleGuide(generalSkillLabels);
                    html += renderClusterCard(dataObj, sectionKeys, formData.cluster);
                } else if (!cluster && !execGrade && !["Driver", "Office Orderly", "Executive Assistant", "Security Officer", "Cook", "Laundry Hand"].includes(formData.position)) {
                    // Fallback message if no cluster selected
                    html += `
                    <div class="alert alert-warning text-center" role="alert">
                      <h6 class="mb-2">Selection Required</h6>
                      <p class="mb-3 small">Please select a Cluster and Position in Step 1 to view the specific technical skills for your role.</p>
                      <button onclick="jumpToStep(1)" class="btn btn-outline-warning btn-sm">Return to Step 1</button>
                    </div>`;
                }
            }
        }

        dynamicStepsContainer.innerHTML = html;
    }

    function renderGenericCard(dataObj, colorClass, labels, isMixed = false) {
        // dataObj has title, questions
        // If isMixed is true, it might have mix of question types (Training/Challenges)
        // If labels provided, use them for rating questions
        
        let contentHtml = '';
        if (isMixed) {
             // For Training/Challenges which are flat objects with questions array
             // But my renderSection expects a section object.
             // I'll wrap it in a mock section if needed or just iterate questions.
             // Actually `trainingData` IS a section-like object { title, questions }.
             contentHtml = renderSection(dataObj, 'generic', labels); 
        } else {
             contentHtml = renderSection(dataObj, 'generic', labels);
        }

        return `
        <div class="card border-primary mb-3">
          <div class="card-body">
            <h3 class="h5 fw-semibold">${dataObj.title}</h3>
            <p class="text-muted small">Please complete the following section.</p>
            <div class="mt-3">${contentHtml}</div>
          </div>
        </div>`;
    }

    function renderExecCard(sectionKeys, title) {
        let contentHtml = sectionKeys.map(key => {
            return renderSection(executiveTechnicalSkills[key], key, executiveSkillLabels);
        }).join('');

        const banner = `
        <div class="alert alert-info mb-3">
          <p class="mb-2"><span class="fw-bold">Purpose:</span> This questionnaire assesses skills and competencies (not performance appraisal) of senior leadership to determine institutional readiness to deliver AFSRTS II and Vision 2030 outcomes.</p>
          <h6 class="alert-heading mb-2">Authentic Response Appeal</h6>
          <p class="mb-1 small">This is a developmental and diagnostic instrument. Authentic responses are essential to ensure that capacity-building, institutional reform, and policy support interventions are legitimate, targeted, and effective.</p>
          <p class="mb-0 small">Responses will be aggregated and anonymised.</p>
        </div>`;

        return `
        <div class="card border-danger mb-3">
          <div class="card-body">
            <h3 class="h5 fw-semibold">${title}</h3>
            <p class="text-muted small">Role: ${getExecutiveGrade(formData.position)}</p>
            <div class="mt-3">${banner + contentHtml}</div>
          </div>
        </div>`;
    }

    function renderClusterCard(dataObj, sectionKeys, clusterName) {
        let contentHtml = '';
        if (clusterName === "Extension & Advisory Services") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f8fafc,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and extension effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Research, Innovation & Education") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f8fafc,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and research effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Veterinary & Animal Health Services") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#fffbea,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and animal health effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Engineering, Infrastructure & Technical Services") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f0f7ff,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and infrastructure effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Business Development, Markets & Value Chains") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f8fafc,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and market effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Land Administration, Planning & Mapping") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f3faf3,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and land administration effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else if (clusterName === "Corporate, Governance & Support Services") {
            const banner = `
            <div class="d-flex align-items-start p-3 rounded-3 mb-3 border" style="background:linear-gradient(90deg,#f8fafc,#ffffff)">
              <div class="me-3" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div class="fw-semibold mb-1">Authentic Response Appeal</div><div class="small text-muted">This assessment supports legitimate capacity development and corporate/support services effectiveness. Authentic responses ensure credible and useful interventions.</div></div>
            </div>`;
            const parts = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            });
            contentHtml = banner + parts.join('');
        } else {
            contentHtml = sectionKeys.map(key => {
                return renderSection(dataObj[key], key, generalSkillLabels);
            }).join('');
        }

        const colorMap = {
            "Extension & Advisory Services": "orange-500",
            "Research, Innovation & Education": "purple-500",
            "Veterinary & Animal Health Services": "emerald-500",
            "Engineering, Infrastructure & Technical Services": "blue-600",
            "Business Development, Markets & Value Chains": "yellow-500",
            "Land Administration, Planning & Mapping": "green-600",
            "Corporate, Governance & Support Services": "slate-600",
            "Office Orderly Competence": "teal-600"
        };
        const color = colorMap[clusterName] || "primary";

        return `
        <div class="card shadow-sm mb-4 border-0">
          <div class="card-header bg-white border-0">
            <div class="d-flex align-items-center justify-content-between">
              <h3 class="h5 fw-semibold m-0">Technical Skills</h3>
              <span class="badge bg-secondary">${clusterName}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="mt-2">${contentHtml}</div>
          </div>
        </div>`;
    }

    function updateProgressBar(activeSteps) {
        const currentIndex = activeSteps.indexOf(currentStep);
        let html = '';
        activeSteps.forEach((s, index) => {
            const isCompleted = currentIndex > index;
            const isCurrent = currentStep === s;
            html += `
            <div class="d-flex align-items-center flex-shrink-0">
              <button type="button" onclick="window.jumpToStep(${s})" class="btn btn-sm ${isCurrent || isCompleted ? 'btn-primary' : 'btn-outline-secondary'} rounded-circle d-inline-flex align-items-center justify-content-center" style="width:2.25rem;height:2.25rem;">
                ${isCompleted ? '✓' : (index + 1)}
              </button>
              ${index < activeSteps.length - 1 ? `<div class="mx-2" style="width:2rem;height:2px;background:${isCompleted ? '#0d6efd' : '#dee2e6'}"></div>` : ''}
            </div>`;
        });
        stepIndicator.innerHTML = html;
    }
    
    // Make jumpToStep global but safe
    window.jumpToStep = function(step) {
        // Allow navigation to any valid step in the current path
        const activeSteps = getSteps();
        if (activeSteps.includes(step)) {
            currentStep = step;
            updateUI();
            window.scrollTo(0, 0);
        }
    };

    function validateStep() {
        if (currentStep === 1) {
            const firstMissing = findFirstMissingField();
            if (firstMissing) {
                alert(`Please enter ${firstMissing.label}.`);
                if (firstMissing.el) {
                    firstMissing.el.focus();
                    firstMissing.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return false;
            }
            const dobEl = document.getElementById('dateOfBirth');
            const dobVal = dobEl ? String(dobEl.value || '').trim() : '';
            if (!/^\d{4}-\d{2}-\d{2}$/.test(dobVal)) {
                alert('Validation Error: Invalid date of birth format (use YYYY-MM-DD)');
                if (dobEl) { dobEl.focus(); dobEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                return false;
            }
            const parts = dobVal.split('-');
            const y = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10);
            const d = parseInt(parts[2], 10);
            const nowY = new Date().getFullYear();
            const dt = new Date(dobVal);
            const validDate = dt instanceof Date && !isNaN(dt) && dt.getFullYear() === y && dt.getMonth() + 1 === m && dt.getDate() === d && y >= 1900 && y <= nowY;
            if (!validDate || dt > new Date()) {
                alert('Validation Error: Invalid date of birth format (use YYYY-MM-DD)');
                if (dobEl) { dobEl.focus(); dobEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                return false;
            }
            const emailEl = document.getElementById('email');
            const emailVal = emailEl ? String(emailEl.value || '').trim() : '';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
                alert('Validation Error: Invalid email address.');
                if (emailEl) { emailEl.focus(); emailEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                return false;
            }
            const phoneEl = document.getElementById('phone');
            const phoneVal = phoneEl ? String(phoneEl.value || '').trim() : '';
            const digits = phoneVal.replace(/\D/g, '');
            if (digits.length < 7) {
                alert('Validation Error: Invalid phone number.');
                if (phoneEl) { phoneEl.focus(); phoneEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                return false;
            }
            const qYearEl = document.getElementById('qualificationYear');
            const qYearVal = qYearEl ? parseInt(String(qYearEl.value || '').trim(), 10) : NaN;
            if (isNaN(qYearVal) || qYearVal < 1950 || qYearVal > nowY) {
                alert('Validation Error: Invalid year of qualification.');
                if (qYearEl) { qYearEl.focus(); qYearEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                return false;
            }
            
            const expEl = document.getElementById('experienceYears');
            const expVal = expEl ? expEl.value : '';
            if (expVal) {
                const nums = (expVal.match(/\d+/g) || []).map(n => parseInt(n, 10));
                if (nums.length) {
                    const maxNum = Math.max.apply(null, nums);
                    if (maxNum > 50) {
                        alert('Years of Experience must not exceed 50 years.');
                        expEl.focus();
                        return false;
                    }
                } else if (/More than\s*(\d+)/i.test(expVal)) {
                    const m = expVal.match(/More than\s*(\d+)/i);
                    const base = parseInt(m[1], 10);
                    if (base >= 50) {
                        alert('Years of Experience must not exceed 50 years.');
                        expEl.focus();
                        return false;
                    }
                }
            }
            return true;
        }
        return true; // Dynamic steps validation (optional for now, can iterate inputs)
    }

    function navigate(direction) {
        const activeSteps = getSteps();
        const currentIndex = activeSteps.indexOf(currentStep);
        
        if (direction === 'next') {
            if (!validateStep()) return;
            
            if (currentIndex < activeSteps.length - 1) {
                currentStep = activeSteps[currentIndex + 1];
                updateUI();
            } else {
                // Submit
                responsesInput.value = JSON.stringify(formData.technicalSkills);
                form.submit();
            }
        } else {
            if (currentIndex > 0) {
                currentStep = activeSteps[currentIndex - 1];
                updateUI();
            }
        }
    }

    function updateUI() {
        const activeSteps = getSteps();
        updateProgressBar(activeSteps);

        if (currentStep === 1) {
            document.getElementById('step-1').style.display = 'block';
            dynamicStepsContainer.style.display = 'none';
            prevBtn.classList.add('d-none');
        } else {
            document.getElementById('step-1').style.display = 'none';
            dynamicStepsContainer.style.display = 'block';
            renderStepContent();
            prevBtn.classList.remove('d-none');
        }

        const isLastStep = activeSteps.indexOf(currentStep) === activeSteps.length - 1;
        if (isLastStep) {
            nextBtn.classList.add('d-none');
            submitBtn.classList.remove('d-none');
        } else {
            nextBtn.classList.remove('d-none');
            submitBtn.classList.add('d-none');
        }
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================

    nextBtn.addEventListener('click', () => navigate('next'));
    prevBtn.addEventListener('click', () => navigate('prev'));
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const firstMissing = findFirstMissingField();
        if (firstMissing) {
            alert(`Please enter ${firstMissing.label}.`);
            if (firstMissing.el) {
                const targetId = firstMissing.el.id;
                window.jumpToStep(1);
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.focus();
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 50);
            }
            return;
        }

        responsesInput.value = JSON.stringify(formData.technicalSkills);
        form.submit();
    });

    // Step 1 Interactions
    clusterSelect.addEventListener('change', function() {
        formData.cluster = this.value;
        formData.department = "";
        formData.position = "";
        
        // Populate Departments
        departmentSelect.innerHTML = '<option value="" disabled selected>Select Department</option>';
        departmentSelect.disabled = false;
        
        const clusterDepts = clusters[this.value] || [];
        clusterDepts.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = dept;
            departmentSelect.appendChild(option);
        });

        // Reset Position
        positionSelect.innerHTML = '<option value="" disabled selected>Select Position</option>';
        positionSelect.disabled = true;
    });

    departmentSelect.addEventListener('change', function() {
        formData.department = this.value;
        formData.position = "";
        
        // Populate Positions
        positionSelect.innerHTML = '<option value="" disabled selected>Select Position</option>';
        positionSelect.disabled = false;
        
        const deptPositions = departments[this.value] || [];
        deptPositions.forEach(pos => {
            const option = document.createElement('option');
            option.value = pos;
            option.textContent = pos;
            positionSelect.appendChild(option);
        });
        
        // Update UI to reflect potentially reset steps
        updateUI();

        // Special rule: Agricultural Education (Colleges) must use Province/District only
        if (this.value === 'Agricultural Education (Colleges)') {
            applyProvinceMode();
            if (locationTypeGroup) locationTypeGroup.classList.add('d-none');

            // Ensure province/district visible and required
            if (provinceGroup) provinceGroup.classList.remove('d-none');
            if (districtGroup) districtGroup.classList.remove('d-none');
            if (provinceSelect) {
                provinceSelect.disabled = false;
                provinceSelect.required = true;
                // Remove any injected Head Office option
                Array.from(provinceSelect.options).forEach(opt => { if (opt.value === 'Head Office') opt.remove(); });
                provinceSelect.value = '';
            }
            if (districtSelect) {
                districtSelect.disabled = true; // until province is chosen
                districtSelect.required = true;
                districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';
                Array.from(districtSelect.options).forEach(opt => { if (opt.value === 'Head Office') opt.remove(); });
            }
        } else if (this.value === 'Office of the Permanent Secretary') {
            // Special rule: Office of the Permanent Secretary automatically uses Head Office
            applyHeadOfficeMode();
            if (locationTypeGroup) locationTypeGroup.classList.add('d-none');
        } else {
            // Restore Location selection for other departments
            if (locationTypeSelect) {
                locationTypeSelect.disabled = false;
                if (!locationTypeSelect.value) {
                    // leave as-is for user to choose
                }
            }
            if (locationTypeGroup) locationTypeGroup.classList.remove('d-none');
        }
    });

    positionSelect.addEventListener('change', function() {
        formData.position = this.value;
        const grade = getExecutiveGrade(this.value);
        if (gradeInput) {
             gradeInput.value = grade || '';
        }
        // Populate all multi-level steps without changing the current step
        updateUI();
    });

    // Location Type toggle: Head Office vs Province
    if (locationTypeSelect) {
        locationTypeSelect.addEventListener('change', function() {
            if (this.value === 'Head Office') {
                applyHeadOfficeMode();
            } else {
                applyProvinceMode();
            }
        });
    }

    provinceSelect.addEventListener('change', function() {
        formData.province = this.value;
        
        // Populate Districts
        districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';
        districtSelect.disabled = false;
        
        const provDistricts = locations[this.value] || [];
        provDistricts.forEach(dist => {
            const option = document.createElement('option');
            option.value = dist;
            option.textContent = dist;
            districtSelect.appendChild(option);
        });
    });

    districtSelect.addEventListener('change', function() {
        formData.district = this.value;
    });
    
    // Bind other static inputs to formData
    ['firstName', 'middleName', 'lastName', 'sex', 'dateOfBirth', 'educationLevel', 'qualificationYear', 'areaOfSpecialisation', 'email', 'phone', 'experienceYears'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', function() {
                formData[id] = this.value;
            });
        }
    });

    // Checkbox Consent
    const consent = document.getElementById('consent');
    if(consent) {
        consent.addEventListener('change', function() {
            formData.consent = this.checked;
        });
    }

    // ==========================================
    // CLUSTER FINDER LOGIC
    // ==========================================

    const findClusterBtn = document.getElementById('findClusterBtn');
    const clusterFinderModal = document.getElementById('clusterFinderModal');
    const closeFinderBtn = document.getElementById('closeFinderBtn');
    const deptSearchInput = document.getElementById('deptSearchInput');
    const deptSearchResults = document.getElementById('deptSearchResults');
    const clusterBrowseList = document.getElementById('clusterBrowseList');

        if (findClusterBtn && clusterFinderModal) {
            findClusterBtn.addEventListener('click', () => {
            clusterFinderModal.classList.remove('d-none');
            renderClusterBrowseList();
            deptSearchInput.focus();
            });

            closeFinderBtn.addEventListener('click', () => {
            clusterFinderModal.classList.add('d-none');
            });

            // Close on click outside
            clusterFinderModal.addEventListener('click', (e) => {
            if (e.target === clusterFinderModal) {
                clusterFinderModal.classList.add('d-none');
            }
            });

        deptSearchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            deptSearchResults.innerHTML = '';

            if (query.length < 2) {
                deptSearchResults.innerHTML = '<p class="text-muted small text-center py-3 m-0">Start typing to search...</p>';
                return;
            }

            const allDepts = Object.keys(departments); // keys are Department Names
            const matches = allDepts.filter(dept => dept.toLowerCase().includes(query));

            if (matches.length === 0) {
                deptSearchResults.innerHTML = '<p class="text-muted small text-center py-3 m-0">No departments found matching your search.</p>';
                return;
            }

            matches.forEach(dept => {
                const div = document.createElement('div');
                div.className = 'p-2 rounded cursor-pointer small border-bottom';
                div.textContent = dept;
                div.addEventListener('click', () => {
                    selectDepartmentFromFinder(dept);
                });
                deptSearchResults.appendChild(div);
            });
        });

        // Event delegation for browse list
        if (clusterBrowseList) {
            clusterBrowseList.addEventListener('click', function(e){
                const btn = e.target.closest('[data-dept]');
                if (!btn) return;
                const dept = btn.getAttribute('data-dept');
                if (dept) selectDepartmentFromFinder(dept);
            });
        }
    }

    function renderClusterBrowseList() {
        if (!clusterBrowseList) return;
        let html = '';
        for (const [clusterName, clusterDepts] of Object.entries(clusters)) {
            const chips = (clusterDepts || []).map(d => `<button type="button" class="btn btn-sm btn-outline-secondary me-1 mb-1" data-dept="${d.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}">${d}</button>`).join('');
            html += `
            <div class="mb-3">
              <div class="fw-semibold small text-primary mb-1">${clusterName}</div>
              <div class="d-flex flex-wrap">${chips}</div>
            </div>`;
        }
        clusterBrowseList.innerHTML = html || '<p class="text-muted small m-0">No clusters available.</p>';
    }

    function selectDepartmentFromFinder(deptName) {
        // Find cluster for this department
        let foundCluster = null;
        for (const [clusterName, clusterDepts] of Object.entries(clusters)) {
            if (clusterDepts.includes(deptName)) {
                foundCluster = clusterName;
                break;
            }
        }

        if (foundCluster) {
            // Set Cluster
            clusterSelect.value = foundCluster;
            // Trigger change to populate departments
            clusterSelect.dispatchEvent(new Event('change'));

            // Set Department
            // We need to wait for the department options to be populated. 
            // Since the change handler is synchronous in this file, it should be fine.
            // But let's verify if the option exists just in case.
            const deptOption = Array.from(departmentSelect.options).find(opt => opt.value === deptName);
            if (deptOption) {
                departmentSelect.value = deptName;
                departmentSelect.dispatchEvent(new Event('change'));
            }
            
            // Close modal
            clusterFinderModal.classList.add('d-none');
            
            // Clear search
            deptSearchInput.value = '';
            deptSearchResults.innerHTML = '<p class="text-muted small text-center py-3 m-0">Start typing to search...</p>';
        } else {
            alert("Could not find the cluster for this department.");
        }
    }

    // Initial UI Update
    updateUI();

});
    function findFirstMissingField() {
        const locTypeEl = document.getElementById('locationType');
        const order = [
            { id: 'firstName', label: 'First Name', required: true },
            { id: 'middleName', label: 'Middle Name', required: false },
            { id: 'lastName', label: 'Last Name', required: true },
            { id: 'sex', label: 'Sex', required: true },
            { id: 'dateOfBirth', label: 'Date of Birth', required: true },
            { id: 'email', label: 'Email Address', required: true },
            { id: 'phone', label: 'Phone Number', required: true },
            { id: 'educationLevel', label: 'Highest Education Level', required: true },
            { id: 'qualificationYear', label: 'Year of Qualification', required: true },
            { id: 'areaOfSpecialisation', label: 'Area of Specialisation', required: true },
            { id: 'cluster', label: 'Cluster', required: true },
            { id: 'department', label: 'Department', required: true },
            { id: 'position', label: 'Position', required: true },
            { id: 'locationType', label: 'Location', required: true },
            { id: 'province', label: 'Province', required: function() { return (locTypeEl && locTypeEl.value === 'Province'); } },
            { id: 'district', label: 'District', required: function() { return (locTypeEl && locTypeEl.value === 'Province'); } },
            { id: 'experienceYears', label: 'Years of Experience in Current Role', required: true }
        ];
        for (let f of order) {
            const el = document.getElementById(f.id);
            const isReq = typeof f.required === 'function' ? f.required() : f.required;
            if (!el) continue;
            const val = (el.value || '').trim();
            if (isReq && !val) {
                return { el, label: f.label };
            }
        }
        return null;
    }

    function findFirstMissingFieldForNavigation() {
        const locTypeEl = document.getElementById('locationType');
        const order = [
            { id: 'firstName', label: 'First Name', required: true },
            { id: 'middleName', label: 'Middle Name', required: false },
            { id: 'lastName', label: 'Last Name', required: true },
            { id: 'sex', label: 'Sex', required: true },
            { id: 'dateOfBirth', label: 'Date of Birth', required: true },
            { id: 'email', label: 'Email Address', required: true },
            { id: 'phone', label: 'Phone Number', required: true },
            { id: 'educationLevel', label: 'Highest Education Level', required: true },
            { id: 'qualificationYear', label: 'Year of Qualification', required: true },
            { id: 'areaOfSpecialisation', label: 'Area of Specialisation', required: true },
            { id: 'cluster', label: 'Cluster', required: true },
            { id: 'department', label: 'Department', required: false },
            { id: 'position', label: 'Position', required: false },
            { id: 'locationType', label: 'Location', required: true },
            { id: 'province', label: 'Province', required: function() { return (locTypeEl && locTypeEl.value === 'Province'); } },
            { id: 'district', label: 'District', required: function() { return (locTypeEl && locTypeEl.value === 'Province'); } },
            { id: 'experienceYears', label: 'Years of Experience in Current Role', required: true }
        ];
        for (let f of order) {
            const el = document.getElementById(f.id);
            const isReq = typeof f.required === 'function' ? f.required() : f.required;
            if (!el) continue;
            const val = (el.value || '').trim();
            if (isReq && !val) {
                return { el, label: f.label };
            }
        }
        return null;
    }
