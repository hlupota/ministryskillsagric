<?php
// Load Config
require_once '../config/config.php';

echo "Attempting to create database...\n";

try {
    // Connect to MySQL without database selected
    $dsn = 'mysql:host=' . DB_HOST;
    $pdo = new PDO($dsn, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create Database
    $sql = "CREATE DATABASE IF NOT EXISTS " . DB_NAME;
    $pdo->exec($sql);
    echo "Database '" . DB_NAME . "' created or already exists.\n";

    // Select Database
    $pdo->exec("USE " . DB_NAME);

    // Read SQL file
    $sqlFile = 'database.sql';
    if (file_exists($sqlFile)) {
        $sqlContent = file_get_contents($sqlFile);
        
        // Split SQL into individual queries (basic splitting by semicolon)
        // This is a simple implementation and might fail with complex stored procedures, but fine for table creation
        $queries = explode(';', $sqlContent);

        foreach ($queries as $query) {
            $query = trim($query);
            if (!empty($query)) {
                try {
                    $pdo->exec($query);
                } catch (PDOException $e) {
                    // Ignore "Table already exists" errors or print them
                    echo "Query failed: " . $e->getMessage() . "\n";
                }
            }
        }
        echo "Tables imported successfully.\n";
    } else {
        echo "Error: database.sql not found.\n";
    }

} catch (PDOException $e) {
    echo "DB Error: " . $e->getMessage() . "\n";
    exit(1);
}
