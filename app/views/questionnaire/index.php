<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="container py-4">
    <div class="mb-4">
        <!-- Header -->
        <div class="text-center mb-3">
            <h1 class="h2 fw-bold text-primary">Agricultural Skills Audit</h1>
            <p class="text-muted mx-auto" style="max-width: 720px;">
                Your input is vital for shaping the future of Zimbabwe's agricultural sector. 
                Please complete this assessment accurately.
            </p>
        </div>

        <!-- Progress Bar -->
        <div id="stepIndicator" class="d-flex justify-content-start justify-content-sm-center align-items-center gap-2 mb-4 overflow-auto pb-2 px-2 w-100 no-scrollbar">
            <!-- Steps will be injected here by JS -->
        </div>

        <!-- Form -->
        <form id="questionnaireForm" method="POST" action="<?php echo URLROOT; ?>/questionnaire/submit">
            <input type="hidden" name="responses" id="responsesInput">
            
            <!-- Step 1: Personal Information -->
            <div id="step-1" class="step-content">
                <!-- Consent -->
                <div class="card border-success bg-light mb-3">
                    <div class="card-body">
                        <h3 class="h5 fw-semibold text-success mb-3">CONSENT</h3>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="consent" name="consent" required>
                          <label class="form-check-label" for="consent">
                            I confirm that I am voluntarily participating in the Agricultural Skills Audit and consent to the collection, secure processing, and use of my personal and professional information for skills mapping, workforce planning, and agricultural sector development. I understand that my information may be shared only with authorised Government institutions strictly for skills development purposes and not for commercial use. I acknowledge my right to request access to, correction, or deletion of my data in accordance with applicable data protection laws, and I confirm that the information provided is accurate and truthful.
                          </label>
                        </div>
                    </div>
                </div>

                <div class="mb-3">
                    <h2 class="h4 fw-bold mb-3">Section 1: Personal & Employment Details</h2>
                    
                    <!-- Personal Info Card -->
                    <div class="card border-primary mb-3">
                        <div class="card-body">
                            <h3 class="h5 fw-semibold mb-1">Personal Information</h3>
                            <p class="text-muted small mb-3">Please provide your personal details and location.</p>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="firstName" class="form-label">1. First Name</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                                        <input type="text" id="firstName" name="firstName" placeholder="e.g. Tendai" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="lastName" class="form-label">2. Last Name</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                                        <input type="text" id="lastName" name="lastName" placeholder="e.g. Moyo" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="gender" class="form-label">3. Gender</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                                        <select id="gender" name="gender" required class="form-select">
                                            <option value="" disabled selected>Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="dateOfBirth" class="form-label">4. Date of Birth</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
                                        <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder="YYYY-MM-DD" pattern="\d{4}-\d{2}-\d{2}" inputmode="numeric" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="email" class="form-label">5. Email Address</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg></span>
                                        <input type="email" id="email" name="email" placeholder="e.g. name@domain.com" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="phone" class="form-label">6. Phone Number</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.57 2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.6-.75a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.57A2 2 0 0 1 22 16.92z"/></svg></span>
                                        <input type="tel" id="phone" name="phone" placeholder="e.g. +263 77 123 4567" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="educationLevel" class="form-label">7. Highest Education Level</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 1.5 9 1.5 12 0v-5"/></svg></span>
                                        <select id="educationLevel" name="educationLevel" required class="form-select">
                                            <option value="" disabled selected>Select Level</option>
                                            <option value="Certificate">Certificate</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Higher National Diploma">Higher National Diploma</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="PhD">PhD</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="qualificationYear" class="form-label">8. Year of Qualification</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
                                        <input type="number" id="qualificationYear" name="qualificationYear" placeholder="e.g. 2015" min="1950" max="2026" required class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <label for="areaOfSpecialisation" class="form-label">9. Area of Specialisation</label>
                                    <div class="field-wrap">
                                        <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="3"/></svg></span>
                                        <input type="text" id="areaOfSpecialisation" name="areaOfSpecialisation" placeholder="e.g. Agronomy" required class="form-control">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <!-- Employment Info Card -->
                    <div class="card border-primary mb-3">
                        <div class="card-body">
                            <h3 class="h5 fw-semibold mb-1">Employment Details</h3>
                            <p class="text-muted small mb-3">Select your department and position.</p>
                            <!-- Cluster Finder Modal -->
                            <div id="clusterFinderModal" class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 d-none px-3" style="z-index:1050;">
                                <div class="bg-white rounded shadow w-100" style="max-width:520px; max-height:90vh; overflow-y:auto;">
                                    <div class="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <h3 class="h6 m-0">Find Your Cluster</h3>
                                        <button type="button" id="closeFinderBtn" class="btn btn-sm btn-outline-secondary">Close</button>
                                    </div>
                                    <div class="p-3">
                                        <p class="text-muted small">Search for your department below and we will select the correct cluster for you, or browse the clusters and their departments.</p>
                                        <input type="text" id="deptSearchInput" placeholder="Type your department name..." class="form-control mb-3">
                                        <div id="deptSearchResults" class="border rounded p-2 bg-light mb-3" style="max-height:240px; overflow-y:auto;">
                                            <p class="text-muted small text-center py-3 m-0">Start typing to search...</p>
                                        </div>
                                        <div class="small fw-semibold mb-2">Browse clusters and departments</div>
                                        <div id="clusterBrowseList" class="border rounded p-2" style="max-height:300px; overflow-y:auto;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col-12 mb-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label for="cluster" class="form-label mb-0">10. Cluster</label>
                                            <button type="button" id="findClusterBtn" class="btn btn-link btn-sm p-0">Not sure which cluster I belong to?</button>
                                        </div>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg></span>
                                            <select id="cluster" name="cluster" required class="form-select">
                                                <option value="" disabled selected>Select Cluster</option>
                                                <?php foreach ($data['clusters'] as $cluster => $depts): ?>
                                                    <option value="<?php echo $cluster; ?>"><?php echo $cluster; ?></option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-3">
                                        <label for="department" class="form-label">11. Department</label>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h10"/></svg></span>
                                            <select id="department" name="department" required disabled class="form-select">
                                                <option value="" disabled selected>Select Department</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-3">
                                        <label for="position" class="form-label">12. Position</label>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/></svg></span>
                                            <select id="position" name="position" required disabled class="form-select">
                                                <option value="" disabled selected>Select Position</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-3">
                                        <label for="province" class="form-label">13. Province</label>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 10.61a8 8 0 1 0-13.49 5.3L12 22l4.65-6.09a8 8 0 0 0 4.19-5.3Z"/><circle cx="12" cy="10" r="3"/></svg></span>
                                            <select id="province" name="province" required class="form-select">
                                                <option value="" disabled selected>Select Province</option>
                                                <?php foreach ($data['locations'] as $province => $districts): ?>
                                                    <option value="<?php echo $province; ?>"><?php echo $province; ?></option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-3">
                                        <label for="district" class="form-label">14. District</label>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 10.61a8 8 0 1 0-13.49 5.3L12 22l4.65-6.09a8 8 0 0 0 4.19-5.3Z"/><circle cx="12" cy="10" r="3"/></svg></span>
                                            <select id="district" name="district" required disabled class="form-select">
                                                <option value="" disabled selected>Select District</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="experienceYears" class="form-label">15. Years of Experience in Current Role</label>
                                        <div class="field-wrap">
                                            <span class="field-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
                                            <select id="experienceYears" name="experienceYears" required class="form-select">
                                                <option value="" disabled selected>Select Experience</option>
                                                <option value="Less than 1 year">Less than 1 year</option>
                                                <option value="1-2 years">1-2 years</option>
                                                <option value="3-5 years">3-5 years</option>
                                                <option value="6-10 years">6-10 years</option>
                                                <option value="Over 10 years">Over 10 years</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dynamic Steps Container -->
            <div id="dynamic-steps-container">
                <!-- Content will be injected by JS -->
            </div>

            <!-- Navigation Buttons -->
            <div class="d-flex justify-content-between pt-4 border-top gap-2">
                <input type="hidden" id="responsesInput" name="responses">
                <input type="hidden" id="gradeInput" name="grade">
                <button type="button" id="prevBtn" class="btn btn-outline-secondary d-none">Previous</button>
                <div class="ms-auto">
                  <button type="button" id="nextBtn" class="btn btn-primary">Next</button>
                  <button type="submit" id="submitBtn" class="btn btn-success d-none">Submit Assessment</button>
                </div>
            </div>
        </form>
    </div>
</div>

<?php $qdataPath = dirname(APPROOT) . '/public/js/questionnaire-data.js'; $qdataVer = file_exists($qdataPath) ? filemtime($qdataPath) : time(); ?>
<script src="<?php echo URLROOT; ?>/js/questionnaire-data.js?v=<?php echo $qdataVer; ?>"></script>
<script>
    // Pass PHP data to JS
    const locations = <?php echo json_encode($data['locations']); ?>;
    const clusters = <?php echo json_encode($data['clusters']); ?>;
    const departments = <?php echo json_encode($data['departments']); ?>;
    const URLROOT = "<?php echo URLROOT; ?>";
</script>
<?php $qlogicPath = dirname(APPROOT) . '/public/js/questionnaire-logic.js'; $qlogicVer = file_exists($qlogicPath) ? filemtime($qlogicPath) : time(); ?>
<script src="<?php echo URLROOT; ?>/js/questionnaire-logic.js?v=<?php echo $qlogicVer; ?>"></script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
