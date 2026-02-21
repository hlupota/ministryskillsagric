<?php
// Load Config
require_once '../config/config.php';
// Load Database
require_once '../core/Database.php';

// Instantiate Database
$db = new Database();

// Default Admin User
$username = 'admin';
$password = 'password123'; // Default password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$role = 'ADMIN';

// Check if admin exists
$db->query('SELECT * FROM users WHERE username = :username');
$db->bind(':username', $username);
$row = $db->single();

if ($db->rowCount() > 0) {
    echo "Admin user already exists.\n";
} else {
    // Insert Admin
    $db->query('INSERT INTO users (username, password, role) VALUES (:username, :password, :role)');
    $db->bind(':username', $username);
    $db->bind(':password', $hashed_password);
    $db->bind(':role', $role);

    if ($db->execute()) {
        echo "Admin user created successfully.\n";
        echo "Username: $username\n";
        echo "Password: $password\n";
    } else {
        echo "Failed to create admin user.\n";
    }
}
