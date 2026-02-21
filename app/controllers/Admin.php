<?php
class Admin extends Controller {
    private $employeeModel;
    private $userModel;
    public function __construct() {
        if (!isset($_SESSION['user_id'])) {
            header('location: ' . URLROOT . '/users/login');
        }

        $this->employeeModel = $this->model('Employee');
        $this->userModel = $this->model('User');
    }

    public function index() {
        if (isset($_SESSION['user_role']) && in_array($_SESSION['user_role'], ['ZIMSTATS','AGRIC'])) {
            header('location: ' . URLROOT . '/admin/analytics');
            exit;
        }
        $employees = $this->employeeModel->getEmployees();

        // Calculate Stats
        $departments = [];
        $clusters = [];
        $positions = [];

        foreach ($employees as $emp) {
            if ($emp->department) $departments[] = $emp->department;
            if ($emp->cluster) $clusters[] = $emp->cluster;
            if ($emp->position) $positions[] = $emp->position;
        }

        $uniqueDepartments = count(array_unique($departments));
        $uniqueClusters = count(array_unique($clusters));
        $uniquePositions = count(array_unique($positions));

        $data = [
            'employees' => $employees,
            'stats' => [
                'responses' => count($employees),
                'departments' => $uniqueDepartments,
                'clusters' => $uniqueClusters,
                'positions' => $uniquePositions
            ]
        ];

        $this->view('admin/index', $data);
    }

    public function users() {
        if ($_SESSION['user_role'] != 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }

        $users = $this->userModel->getUsers();
        $data = [
            'users' => $users
        ];

        $this->view('admin/users', $data);
    }

    public function userAdd() {
        if ($_SESSION['user_role'] != 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = trim($_POST['username'] ?? '');
            $password = trim($_POST['password'] ?? '');
            $role = strtoupper(trim($_POST['role'] ?? 'USER'));
            if ($username !== '' && $password !== '' && in_array($role, ['ADMIN','USER','ZIMSTATS','AGRIC'])) {
                if (!$this->userModel->findUserByUsername($username)) {
                    $this->userModel->createUser($username, $password, $role);
                }
            }
        }
        header('location: ' . URLROOT . '/admin/users');
    }

    public function userEdit($id = null) {
        if ($_SESSION['user_role'] != 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        if ($id === null || !is_numeric($id)) {
            header('location: ' . URLROOT . '/admin/users');
            exit;
        }
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = trim($_POST['username'] ?? '');
            $role = strtoupper(trim($_POST['role'] ?? 'USER'));
            $password = trim($_POST['password'] ?? '');
            if ($username !== '' && in_array($role, ['ADMIN','USER','ZIMSTATS','AGRIC'])) {
                $this->userModel->updateUser($id, $username, $role, $password);
            }
        }
        header('location: ' . URLROOT . '/admin/users');
    }

    public function userDelete($id = null) {
        if ($_SESSION['user_role'] != 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        if ($id === null || !is_numeric($id)) {
            header('location: ' . URLROOT . '/admin/users');
            exit;
        }
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->userModel->deleteUser($id);
        }
        header('location: ' . URLROOT . '/admin/users');
    }

    public function analytics() {
        $employees = $this->employeeModel->getEmployees();

        $clusterCounts = [];
        $deptCounts = [];
        $ageRanges = ['18-24' => 0, '25-34' => 0, '35-44' => 0, '45-54' => 0, '55+' => 0];
        $experience = ['Less than 1 year' => 0, '1-2 years' => 0, '3-5 years' => 0, '6-10 years' => 0, 'Over 10 years' => 0];
        $provinceCounts = [];
        $educationCounts = [];
        $genderCounts = ['Male' => 0, 'Female' => 0, 'Other' => 0];
        $positionCounts = [];

        foreach ($employees as $emp) {
            if (!empty($emp->cluster)) {
                if (!isset($clusterCounts[$emp->cluster])) $clusterCounts[$emp->cluster] = 0;
                $clusterCounts[$emp->cluster]++;
            }
            if (!empty($emp->department)) {
                if (!isset($deptCounts[$emp->department])) $deptCounts[$emp->department] = 0;
                $deptCounts[$emp->department]++;
            }
            if (!empty($emp->ageRange) && isset($ageRanges[$emp->ageRange])) {
                $ageRanges[$emp->ageRange]++;
            }
            if (!empty($emp->experienceYears) && isset($experience[$emp->experienceYears])) {
                $experience[$emp->experienceYears]++;
            }
            if (!empty($emp->province)) {
                if (!isset($provinceCounts[$emp->province])) $provinceCounts[$emp->province] = 0;
                $provinceCounts[$emp->province]++;
            }
            if (!empty($emp->educationLevel)) {
                if (!isset($educationCounts[$emp->educationLevel])) $educationCounts[$emp->educationLevel] = 0;
                $educationCounts[$emp->educationLevel]++;
            }
            if (!empty($emp->gender)) {
                $g = ucfirst(strtolower($emp->gender));
                if (!isset($genderCounts[$g])) $genderCounts[$g] = 0;
                $genderCounts[$g]++;
            }
            if (!empty($emp->position)) {
                if (!isset($positionCounts[$emp->position])) $positionCounts[$emp->position] = 0;
                $positionCounts[$emp->position]++;
            }
        }

        $uniqueDepartments = count($deptCounts);
        $uniqueClusters = count($clusterCounts);
        $uniquePositions = count($positionCounts);

        arsort($deptCounts);
        arsort($positionCounts);
        arsort($provinceCounts);
        arsort($educationCounts);

        $topDepartments = array_slice($deptCounts, 0, 10, true);
        $topPositions = array_slice($positionCounts, 0, 10, true);

        $data = [
            'total_responses' => count($employees),
            'cluster_counts' => $clusterCounts,
            'dept_counts' => $deptCounts,
            'age_ranges' => $ageRanges,
            'experience' => $experience,
            'province_counts' => $provinceCounts,
            'education_counts' => $educationCounts,
            'gender_counts' => $genderCounts,
            'top_departments' => $topDepartments,
            'top_positions' => $topPositions,
            'unique_departments' => $uniqueDepartments,
            'unique_clusters' => $uniqueClusters,
            'unique_positions' => $uniquePositions
        ];

        $this->view('admin/analytics', $data);
    }

    public function employee($id = null) {
        if (isset($_SESSION['user_role']) && in_array($_SESSION['user_role'], ['ZIMSTATS','AGRIC'])) {
            header('location: ' . URLROOT . '/admin/analytics');
            exit;
        }
        if ($id === null || !is_numeric($id)) {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        $employee = $this->employeeModel->getEmployeeById((int)$id);
        if(!$employee) {
            header('location: ' . URLROOT . '/admin');
            exit;
        }

        $data = [
            'employee' => $employee
        ];

        $this->view('admin/employee', $data);
    }

    public function delete($id = null) {
        if ($_SESSION['user_role'] != 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        if ($id === null || !is_numeric($id)) {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if ($this->employeeModel->deleteEmployee($id)) {
                header('location: ' . URLROOT . '/admin');
                exit;
            } else {
                die('Something went wrong');
            }
        } else {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
    }

    public function export() {
        if (!isset($_SESSION['user_role']) || !in_array($_SESSION['user_role'], ['ADMIN','ZIMSTATS','AGRIC'])) {
            header('location: ' . URLROOT . '/admin');
            exit;
        }
        // 1. Get Question Mappings
        $questionMap = $this->getQuestionMappings();
        
        // 2. Get Employees
        $employees = $this->employeeModel->getEmployees();

        // 3. Set Headers
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="skills_audit_export_' . date('Y-m-d') . '.csv"');

        // 4. Open Output Stream
        $output = fopen('php://output', 'w');

        // 5. Define Standard Headers
        $headers = [
            'ID', 'First Name', 'Last Name', 'Gender', 'Date of Birth', 'Age',
            'Education Level', 'Province', 'District', 'Cluster', 
            'Department', 'Position', 'Grade', 'Experience Years', 'Created At'
        ];

        // 6. Collect All Unique Question IDs from Map (and any extra from responses if needed)
        // We will use the map keys as the master list of questions to ensure good ordering/naming
        $questionKeys = array_keys($questionMap);
        
        // Add Question Text to Headers
        foreach ($questionKeys as $key) {
            $headers[] = $questionMap[$key]; // Use the full text
        }

        fputcsv($output, $headers);

        // 7. Loop Employees
        foreach ($employees as $emp) {
            $age = '';
            if (!empty($emp->dateOfBirth)) {
                try {
                    $dob = new \DateTime($emp->dateOfBirth);
                    $now = new \DateTime();
                    $age = (int)$now->format('Y') - (int)$dob->format('Y');
                } catch (\Exception $e) { $age = ''; }
            }

            $row = [
                $emp->id,
                $emp->firstName,
                $emp->lastName,
                $emp->gender,
                $emp->dateOfBirth,
                $age,
                $emp->educationLevel,
                $emp->province,
                $emp->district,
                $emp->cluster,
                $emp->department,
                $emp->position,
                $emp->grade,
                $emp->experienceYears,
                $emp->createdAt
            ];

            // Parse Responses
            $responses = json_decode($emp->responses ?? '{}', true);
            if (!is_array($responses)) $responses = [];

            // Add Response Values matching the headers
            foreach ($questionKeys as $key) {
                // Check if this key exists in user responses
                $val = isset($responses[$key]) ? $responses[$key] : '';
                
                // Map numeric values to labels if possible (optional, but requested "good field name", maybe "good value" too?)
                // For now, let's just output the value (1-5). The user asked for field names.
                $row[] = $val;
            }

            fputcsv($output, $row);
        }

        fclose($output);
    }

    public function migrateSchema() {
        if (!isset($_SESSION['user_role']) || $_SESSION['user_role'] !== 'ADMIN') {
            header('location: ' . URLROOT . '/admin');
            exit;
        }

        $db = new Database();

        $ensureColumn = function($table, $column, $definition) use ($db) {
            $db->query("SHOW COLUMNS FROM `$table` LIKE '$column'");
            $exists = $db->single();
            if (!$exists) {
                $db->query("ALTER TABLE `$table` ADD `$column` $definition");
                try { $db->execute(); } catch (Exception $e) { /* ignore if fails */ }
            }
        };

        // Users table: createdAt timestamp and sufficient role length
        $ensureColumn('users', 'createdAt', 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP');
        // Try widen role column length to accommodate new roles
        try {
            $db->query("ALTER TABLE `users` MODIFY `role` VARCHAR(20) NOT NULL");
            $db->execute();
        } catch (Exception $e) { /* ignore */ }

        // Employee table: ensure optional fields exist
        $ensureColumn('employee', 'age', 'INT NULL');
        $ensureColumn('employee', 'qualificationYear', 'INT NULL');
        $ensureColumn('employee', 'areaOfSpecialisation', 'VARCHAR(255) NULL');
        $ensureColumn('employee', 'ageRange', 'VARCHAR(50) NULL');
        $ensureColumn('employee', 'grade', 'INT NULL');
        $ensureColumn('employee', 'createdAt', 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP');

        // Ensure textual/location/contact fields (idempotent if already exist)
        $ensureColumn('employee', 'firstName', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'lastName', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'gender', 'VARCHAR(20) NULL');
        $ensureColumn('employee', 'dateOfBirth', 'DATE NULL');
        $ensureColumn('employee', 'educationLevel', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'email', 'VARCHAR(190) NULL');
        $ensureColumn('employee', 'phone', 'VARCHAR(50) NULL');
        $ensureColumn('employee', 'province', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'district', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'cluster', 'VARCHAR(150) NULL');
        $ensureColumn('employee', 'department', 'VARCHAR(190) NULL');
        $ensureColumn('employee', 'position', 'VARCHAR(190) NULL');
        $ensureColumn('employee', 'experienceYears', 'VARCHAR(50) NULL');
        $ensureColumn('employee', 'responses', 'LONGTEXT NULL');

        header('location: ' . URLROOT . '/admin');
        exit;
    }

    private function getQuestionMappings() {
        $map = [];
        $jsFile = dirname(APPROOT) . '/public/js/questionnaire-data.js';
        
        if (file_exists($jsFile)) {
            $content = file_get_contents($jsFile);
            
            // Regex to find { id: "KEY", text: "TEXT" } and optionally title
            // Captures: 
            // 1: Quote char for ID
            // 2: ID content
            // 3: Quote char for Title (optional)
            // 4: Title content (optional)
            // 5: Quote char for Text
            // 6: Text content
            
            $pattern = '/id:\s*(["\'])(.*?)\1\s*,\s*(?:title:\s*(["\'])(.*?)\3\s*,\s*)?text:\s*(["\'])(.*?)\5/s';
            
            if (preg_match_all($pattern, $content, $matches, PREG_SET_ORDER)) {
                foreach ($matches as $match) {
                    $id = $match[2];
                    $title = isset($match[4]) && !empty($match[4]) ? trim($match[4]) : '';
                    $text = trim(preg_replace('/\s+/', ' ', $match[6])); // Clean up newlines in text
                    
                    // Prefer Title as header if available (e.g., "2A Communication"), else use Text
                    $map[$id] = !empty($title) ? $title : $text;
                }
            }
        }
        
        return $map;
    }
}
