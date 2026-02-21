<?php
class Questionnaire extends Controller {
    private $employeeModel;
    public function __construct() {
        require_once '../app/helpers/DataHelper.php';
        $this->employeeModel = $this->model('Employee');
    }

    public function index() {
        $data = [
            'clusters' => DataHelper::getClusters(),
            'locations' => DataHelper::getLocations(),
            'departments' => DataHelper::getDepartments(),
            'allSkills' => DataHelper::getAllTechnicalSkills(),
            'skillLabels' => DataHelper::getSkillLabels()
        ];
        
        $this->view('questionnaire/index', $data);
    }

    public function submit() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            // Process form
            $data = $_POST;
            
            // Validate required fields
            $requiredFields = ['firstName', 'lastName', 'sex', 'dateOfBirth', 'educationLevel', 'province', 'district', 'cluster', 'department', 'position', 'experienceYears'];
            $errors = [];
            
            foreach ($requiredFields as $field) {
                if (empty($data[$field])) {
                    $errors[] = $field . ' is required';
                }
            }

            if (!empty($data['dateOfBirth'])) {
                $dob = \DateTime::createFromFormat('Y-m-d', $data['dateOfBirth']);
                $dobErrors = \DateTime::getLastErrors();
                $hasDobErrors = is_array($dobErrors) && ((int)$dobErrors['warning_count'] > 0 || (int)$dobErrors['error_count'] > 0);
                if (!$dob || $hasDobErrors) {
                    $errors[] = 'Invalid date of birth format (use YYYY-MM-DD)';
                } else {
                    $now = new \DateTime();
                    if ($dob > $now) {
                        $errors[] = 'Date of birth cannot be in the future';
                    } else {
                        $age = $now->diff($dob)->y;
                        if ($age < 18) {
                            $errors[] = 'Employee must be at least 18 years old';
                        }
                    }
                }
            }
            
            if (!empty($errors)) {
                // If there are errors, stop and show them (or redirect with error)
                // For now, let's die with a message to make it clear what's missing
                die('Validation Error: ' . implode(', ', $errors));
            }
            
            if ($this->employeeModel->addEmployee($data)) {
                // Redirect to success page
                header('location: ' . URLROOT . '/questionnaire/success');
            } else {
                die('Something went wrong');
            }
        } else {
            $this->index();
        }
    }

    public function success() {
        $data = [];
        $this->view('questionnaire/success', $data);
    }
}
