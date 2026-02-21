<?php
if (isset($_SERVER['HTTP_HOST']) && (stripos($_SERVER['HTTP_HOST'], 'localhost') !== false || stripos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false)) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    ini_set('log_errors', 1);
    error_reporting(E_ALL);
    require_once '../config/config.php';
} else {
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    ini_set('log_errors', 1);
    error_reporting(E_ALL & ~E_DEPRECATED & ~E_NOTICE & ~E_WARNING);
    $prodConfigPrimary = realpath(__DIR__ . '/../config/prod_config.php');
    $prodConfigFallback = realpath(__DIR__ . '/../exam/prod_config.php');
    if ($prodConfigPrimary && file_exists($prodConfigPrimary)) {
        require_once $prodConfigPrimary;
    } elseif ($prodConfigFallback && file_exists($prodConfigFallback)) {
        require_once $prodConfigFallback;
    } else {
        require_once '../config/config.php';
    }
}

// Autoload Core Libraries
spl_autoload_register(function($className) {
    $corePath = dirname(APPROOT) . '/core/' . $className . '.php';
    if (file_exists($corePath)) {
        require_once $corePath;
    }
});

// Ensure base Controller is available before loading controllers
$baseController = dirname(APPROOT) . '/core/Controller.php';
if (file_exists($baseController)) {
    require_once $baseController;
}

// Init Core Library
$init = new Core();
