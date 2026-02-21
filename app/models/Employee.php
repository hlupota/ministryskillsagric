<?php
class Employee {
    private $db;

    public function __construct() {
        
    }

    private function getDb() {
        if (!$this->db) {
            $this->db = new Database;
        }
        return $this->db;
    }

    // Get all employees
    public function getEmployees() {
        $db = $this->getDb();
        $db->query('SELECT * FROM employee ORDER BY createdAt DESC');
        return $db->resultSet();
    }

    // Get employees filtered by cluster, department, position, province
    public function getEmployeesFiltered($filters = []) {
        $db = $this->getDb();
        $sql = 'SELECT * FROM employee WHERE 1=1';
        $params = [];
        if (!empty($filters['cluster'])) {
            $sql .= ' AND cluster = :cluster';
            $params[':cluster'] = $filters['cluster'];
        }
        if (!empty($filters['department'])) {
            $sql .= ' AND department = :department';
            $params[':department'] = $filters['department'];
        }
        if (!empty($filters['position'])) {
            $sql .= ' AND position = :position';
            $params[':position'] = $filters['position'];
        }
        if (!empty($filters['province'])) {
            $sql .= ' AND province = :province';
            $params[':province'] = $filters['province'];
        }
        $sql .= ' ORDER BY createdAt DESC';
        $db->query($sql);
        foreach ($params as $k => $v) { $db->bind($k, $v); }
        return $db->resultSet();
    }

    public function addEmployee($data) {
        $db = $this->getDb();
        $db->query('INSERT INTO employee (id, firstName, middleName, lastName, sex, dateOfBirth, age, educationLevel, qualificationYear, areaOfSpecialisation, ageRange, email, phone, locationType, province, district, cluster, department, position, grade, experienceYears, responses) VALUES (:id, :firstName, :middleName, :lastName, :sex, :dateOfBirth, :age, :educationLevel, :qualificationYear, :areaOfSpecialisation, :ageRange, :email, :phone, :locationType, :province, :district, :cluster, :department, :position, :grade, :experienceYears, :responses)');

        $generatedId = null;
        try {
            $generatedId = bin2hex(random_bytes(16));
        } catch (\Exception $e) {
            $generatedId = uniqid('', true);
        }
        $db->bind(':id', $generatedId);

        // Bind values
        $db->bind(':firstName', $data['firstName'] ?? '');
        $db->bind(':middleName', $data['middleName'] ?? '');
        $db->bind(':lastName', $data['lastName'] ?? '');
        $db->bind(':sex', $data['sex'] ?? '');
        $db->bind(':dateOfBirth', $data['dateOfBirth'] ?? null);
        // Calculate age or use provided
        $age = null;
        if (!empty($data['dateOfBirth'])) {
            $dob = new DateTime($data['dateOfBirth']);
            $now = new DateTime();
            $age = $now->format('Y') - $dob->format('Y');
        }
        $db->bind(':age', $age);
        $db->bind(':educationLevel', $data['educationLevel'] ?? '');
        $db->bind(':qualificationYear', $data['qualificationYear'] ?? null);
        $db->bind(':areaOfSpecialisation', $data['areaOfSpecialisation'] ?? '');
        $db->bind(':ageRange', $data['ageRange'] ?? null);
        $db->bind(':email', $data['email'] ?? '');
        $db->bind(':phone', $data['phone'] ?? '');
        $db->bind(':locationType', $data['locationType'] ?? null);
        $db->bind(':province', $data['province'] ?? '');
        $db->bind(':district', $data['district'] ?? '');
        $db->bind(':cluster', $data['cluster'] ?? '');
        $db->bind(':department', $data['department'] ?? '');
        $db->bind(':position', $data['position'] ?? '');
        $db->bind(':grade', $data['grade'] ?? null);
        $db->bind(':experienceYears', $data['experienceYears'] ?? 0);
        
        // Handle responses
        $responsesJson = '';
        if (isset($data['responses']) && !empty($data['responses'])) {
             $responsesJson = $data['responses'];
        } else {
             $responses = [];
        foreach ($data as $key => $value) {
            // Allow standard technical/soft/digital skills prefixes
            // Added: gen_, dig_, ord_, sec_, train_, chall_, biz_, land_
            // Kept: res_, ext_, vet_, eng_
            if (preg_match('/^(gen|dig|res|ext|vet|eng|ord|sec|train|chall|biz|land|soft|digital)_/', $key)) {
                $responses[$key] = $value;
            }
        }
        $responsesJson = json_encode($responses);
        }
        $db->bind(':responses', $responsesJson);

        // Execute
        if ($db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getEmployeeById($id) {
        $db = $this->getDb();
        $db->query('SELECT * FROM employee WHERE id = :id');
        $db->bind(':id', $id);
        return $db->single();
    }

    public function deleteEmployee($id) {
        $db = $this->getDb();
        $db->query('DELETE FROM employee WHERE id = :id');
        $db->bind(':id', $id);
        
        if($db->execute()){
            return true;
        } else {
            return false;
        }
    }
}
