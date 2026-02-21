<?php
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js|ico)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
} else {
    // Populate $_GET['url']
    $url = ltrim($_SERVER['REQUEST_URI'], '/');
    // Remove query string if present (it's in $_GET already)
    if (($pos = strpos($url, '?')) !== false) {
        $url = substr($url, 0, $pos);
    }
    $_GET['url'] = $url;
    
    // Check if index.php exists before including
    $indexFile = __DIR__ . '/index.php';
    if (file_exists($indexFile)) {
        // Ensure we are in the correct directory for relative includes in index.php
        chdir(__DIR__);
        include $indexFile;
    } else {
        // Fallback or error
        echo "Error: index.php not found in " . __DIR__;
    }
}
?>
