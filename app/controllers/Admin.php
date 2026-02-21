<?php
require_once APPROOT . '/helpers/DataHelper.php';
class Admin extends Controller {
    private $employeeModel;
    private $userModel;
    public function __construct() {
        if (!isset($_SESSION['user_id'])) {
            header('location: ' . URLROOT . '/users/login');
            exit;
        }

        $this->employeeModel = $this->model('Employee');
        $this->userModel = $this->model('User');
    }

    public function index() {
        // Allow all authenticated roles to access the main dashboard
        $employees = $this->employeeModel->getEmployees();

        // Calculate Stats
        $departments = [];
        $clusters = [];
        $positions = [];
        $sexCounts = ['Male' => 0, 'Female' => 0, 'Other' => 0];
        $accessedCount = 0;

        foreach ($employees as $emp) {
            if ($emp->department) $departments[] = $emp->department;
            if ($emp->cluster) $clusters[] = $emp->cluster;
            if ($emp->position) $positions[] = $emp->position;
            // Sex summary
            $sexVal = !empty($emp->sex) ? $emp->sex : (!empty($emp->gender) ? $emp->gender : '');
            if (!empty($sexVal)) {
                $g = ucfirst(strtolower($sexVal));
                if (!isset($sexCounts[$g])) { $sexCounts[$g] = 0; }
                $sexCounts[$g]++;
            }
            // Accessed Site: has captured responses
            if (!empty($emp->responses)) {
                $decoded = json_decode($emp->responses, true);
                if (is_array($decoded) && count($decoded) > 0) { $accessedCount++; }
            }
        }

        $uniqueDepartments = count(array_unique($departments));
        $uniqueClusters = count(array_unique($clusters));
        $uniquePositions = count(array_unique($positions));

        // Build master lists for filters (independent of captured data)
        $clustersMap = DataHelper::getClusters();
        $clusterNames = array_keys($clustersMap);
        $deptNames = [];
        foreach ($clustersMap as $c => $depts) { foreach ($depts as $d) { $deptNames[$d] = true; } }
        $deptNames = array_keys($deptNames);
        $deptPositionsMap = DataHelper::getDepartments();
        $positionNames = [];
        foreach ($deptPositionsMap as $d => $positions) { foreach ($positions as $p) { $positionNames[$p] = true; } }
        $positionNames = array_keys($positionNames);
        $locationsMap = DataHelper::getLocations();
        $provinceNames = array_keys($locationsMap);

        $data = [
            'employees' => $employees,
            'stats' => [
                'responses' => count($employees),
                'departments' => $uniqueDepartments,
                'clusters' => $uniqueClusters,
                'positions' => $uniquePositions,
                'sex' => $sexCounts,
                'accessed' => $accessedCount
            ],
            'filters' => [
                'clusters' => $clusterNames,
                'departments' => $deptNames,
                'positions' => $positionNames,
                'provinces' => $provinceNames
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
        $sexCounts = ['Male' => 0, 'Female' => 0, 'Other' => 0];
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
            $sexVal = !empty($emp->sex) ? $emp->sex : (!empty($emp->gender) ? $emp->gender : '');
            if (!empty($sexVal)) {
                $g = ucfirst(strtolower($sexVal));
                if (!isset($sexCounts[$g])) $sexCounts[$g] = 0;
                $sexCounts[$g]++;
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
            'sex_counts' => $sexCounts,
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
        
        // 2. Get Employees with optional filters
        $filters = [
            'cluster' => isset($_GET['cluster']) ? trim($_GET['cluster']) : '',
            'department' => isset($_GET['department']) ? trim($_GET['department']) : '',
            'position' => isset($_GET['position']) ? trim($_GET['position']) : '',
            'province' => isset($_GET['province']) ? trim($_GET['province']) : ''
        ];
        $employees = $this->employeeModel->getEmployeesFiltered($filters);

        // 3. Set Headers for Excel (XLS via HTML table)
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment; filename="skills_audit_export_' . date('Y-m-d') . '.xls"');

        // 4. Define Standard Headers per requested layout
        $headers = [
            'No', 'Location', 'Province', 'District', 'Cluster', 'Department', 'Position',
            'First Name', 'Middle Name', 'Last Name', 'Sex',
            'Date of Birth', 'Age', 'Education Level', 'Qualification Year', 'Area Of Specialisation', 'Age Range', 'Email', 'Phone',
            'Grade', 'Experience Years', 'Created At'
        ];

        // 6. Collect unique question IDs present in filtered employee responses
        $presentKeys = [];
        foreach ($employees as $emp) {
            $responses = json_decode($emp->responses ?? '{}', true);
            if (is_array($responses)) {
                foreach ($responses as $k => $v) { $presentKeys[$k] = true; }
            }
        }

        // Order keys by the mapping order when available, include any unmapped keys at the end
        $orderedMapKeys = array_keys($questionMap);
        $questionKeys = [];
        foreach ($orderedMapKeys as $mk) { if (isset($presentKeys[$mk])) { $questionKeys[] = $mk; unset($presentKeys[$mk]); } }
        if (!empty($presentKeys)) { $questionKeys = array_merge($questionKeys, array_keys($presentKeys)); }

        // Add Question Text to Headers (only for keys present)
        foreach ($questionKeys as $key) {
            $headers[] = isset($questionMap[$key]) ? $questionMap[$key] : $key;
        }

        // Helper to escape
        $esc = function($v) {
            return htmlspecialchars((string)$v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        };

        // Begin HTML table
        echo '<table border="1">';
        echo '<thead><tr>';
        foreach ($headers as $h) {
            echo '<th>' . $esc($h) . '</th>';
        }
        echo '</tr></thead><tbody>';

        // 7. Loop Employees
        $rowNum = 1;
        foreach ($employees as $emp) {
            $age = '';
            if (!empty($emp->dateOfBirth)) {
                try {
                    $dob = new \DateTime($emp->dateOfBirth);
                    $now = new \DateTime();
                    $age = (int)$now->format('Y') - (int)$dob->format('Y');
                } catch (\Exception $e) { $age = ''; }
            }

            $locationType = (!empty($emp->province) && $emp->province === 'Head Office') || (!empty($emp->district) && $emp->district === 'Head Office') ? 'Head Office' : 'Province';
            $row = [
                $rowNum,
                $locationType,
                $emp->province,
                $emp->district,
                $emp->cluster,
                $emp->department,
                $emp->position,
                $emp->firstName,
                $emp->middleName,
                $emp->lastName,
                (!empty($emp->sex) ? $emp->sex : $emp->gender),
                $emp->dateOfBirth,
                $age,
                $emp->educationLevel,
                $emp->qualificationYear,
                $emp->areaOfSpecialisation,
                $emp->ageRange,
                $emp->email,
                $emp->phone,
                $emp->grade,
                $emp->experienceYears,
                $emp->createdAt
            ];

            // Parse Responses
            $responses = json_decode($emp->responses ?? '{}', true);
            if (!is_array($responses)) $responses = [];

            // Add Response Values matching the headers (only keys present in filtered results)
            foreach ($questionKeys as $key) {
                $row[] = isset($responses[$key]) ? $responses[$key] : '';
            }

            echo '<tr>';
            foreach ($row as $cell) {
                echo '<td>' . $esc($cell) . '</td>';
            }
            echo '</tr>';
            $rowNum++;
        }
        echo '</tbody></table>';
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
        $ensureColumn('employee', 'middleName', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'lastName', 'VARCHAR(100) NULL');
        $ensureColumn('employee', 'gender', 'VARCHAR(20) NULL');
        $ensureColumn('employee', 'sex', 'VARCHAR(20) NULL');
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
