<?php
$hosts = ['localhost', '127.0.0.1'];
$ports = [3306, 3307, 8889];
$user = 'root';
$pass = ''; // Default for XAMPP

echo "Diagnostic: Testing MySQL Connection...\n";

$found = false;

foreach ($ports as $port) {
    foreach ($hosts as $host) {
        echo "Testing host: $host, port: $port ... ";
        try {
            $dsn = "mysql:host=$host;port=$port";
            $pdo = new PDO($dsn, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "SUCCESS!\n";
            $found = true;
            break 2; // Break both loops
        } catch (PDOException $e) {
            echo "FAILED. (" . $e->getMessage() . ")\n";
        }
    }
}

if ($found) {
    echo "\nGood news! A working MySQL server was found at host: $host, port: $port.\n";
    echo "Please update your config.php file with these settings.\n";
} else {
    echo "\nERROR: Could not connect to any MySQL server on standard ports.\n";
    echo "Please ensure your MySQL server (XAMPP, WAMP, MAMP, etc.) is running.\n";
}
