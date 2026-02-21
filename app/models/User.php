<?php
class User {
    private $db;

    public function __construct() {
    }

    private function getDb() {
        if (!$this->db) {
            $this->db = new Database;
        }
        return $this->db;
    }

    // Login User
    public function login($username, $password) {
        $db = $this->getDb();
        $db->query('SELECT * FROM users WHERE username = :username');
        $db->bind(':username', $username);

        $row = $db->single();
        if (!$row) {
            return false;
        }

        $hashed_password = $row->password;
        if (password_verify($password, $hashed_password)) {
            return $row;
        } else {
            return false;
        }
    }

    // Find user by email
    public function findUserByUsername($username) {
        $db = $this->getDb();
        $db->query('SELECT * FROM users WHERE username = :username');
        $db->bind(':username', $username);

        $row = $db->single();

        // Check row
        if ($row && $db->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    // Get all users
    public function getUsers() {
        $db = $this->getDb();
        $db->query('SELECT * FROM users');
        return $db->resultSet();
    }

    public function getUserById($id) {
        $db = $this->getDb();
        $db->query('SELECT * FROM users WHERE id = :id');
        $db->bind(':id', $id);
        return $db->single();
    }

    public function createUser($username, $password, $role) {
        $db = $this->getDb();
        $db->query('INSERT INTO users (username, password, role) VALUES (:username, :password, :role)');
        $db->bind(':username', $username);
        $db->bind(':password', password_hash($password, PASSWORD_DEFAULT));
        $db->bind(':role', strtoupper($role));
        return $db->execute();
    }

    public function updateUser($id, $username, $role, $password = null) {
        $db = $this->getDb();
        if ($password && strlen(trim($password)) > 0) {
            $db->query('UPDATE users SET username = :username, role = :role, password = :password WHERE id = :id');
            $db->bind(':password', password_hash($password, PASSWORD_DEFAULT));
        } else {
            $db->query('UPDATE users SET username = :username, role = :role WHERE id = :id');
        }
        $db->bind(':username', $username);
        $db->bind(':role', strtoupper($role));
        $db->bind(':id', $id);
        return $db->execute();
    }

    public function deleteUser($id) {
        $db = $this->getDb();
        $db->query('DELETE FROM users WHERE id = :id');
        $db->bind(':id', $id);
        return $db->execute();
    }
}
