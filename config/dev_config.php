<?php
session_start();
// Database Configuration
define('DB_HOST', 'localhost;port=3307');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'skillsaudit');

// App Root
define('APPROOT', dirname(dirname(__FILE__)) . '/app');

// URL Root
define('URLROOT', 'http://localhost:8000');

// Site Name
define('SITENAME', 'Skills Audit System');
