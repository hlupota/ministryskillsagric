<?php
/*
 * PDO Database Class
 * Connect to database
 * Create prepared statements
 * Bind values
 * Return rows and results
 */
class Database {
    private $host = DB_HOST;
    private $user = DB_USER;
    private $pass = DB_PASS;
    private $dbname = DB_NAME;

    private $dbh;
    private $stmt;
    private $error;

    public function __construct() {
        $host = $this->host;
        $port = null;
        if (strpos($host, ';') !== false) {
            $parts = explode(';', $host);
            $host = array_shift($parts);
            foreach ($parts as $p) {
                $kv = explode('=', $p, 2);
                if (count($kv) === 2 && strtolower(trim($kv[0])) === 'port') {
                    $port = trim($kv[1]);
                }
            }
        }

        $dsn = 'mysql:host=' . $host;
        if (!empty($port)) {
            $dsn .= ';port=' . $port;
        }
        $dsn .= ';dbname=' . $this->dbname . ';charset=utf8mb4';

        $isLocal = isset($_SERVER['HTTP_HOST']) && (stripos($_SERVER['HTTP_HOST'], 'localhost') !== false || stripos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false);

        $options = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_PERSISTENT => $isLocal ? true : false
        );

        try {
            $this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
        } catch(PDOException $e) {
            $this->error = $e->getMessage();
            if ($isLocal) {
                die('Database Connection Error: ' . $this->error);
            }
            if (defined('DEBUG_DB') && DEBUG_DB) {
                $code = $e->getCode();
                die('Database Connection Error [' . $code . ']');
            }
            $logFile = dirname(__DIR__) . '/app/logs/db_errors.log';
            if (!is_dir(dirname($logFile))) {
                @mkdir(dirname($logFile), 0775, true);
            }
            @file_put_contents($logFile, '[' . date('Y-m-d H:i:s') . "] PDOException: " . $this->error . "\n", FILE_APPEND);
            die('Database Connection Error');
        }
    }

    // Prepare statement with query
    public function query($sql) {
        $this->stmt = $this->dbh->prepare($sql);
    }

    // Bind values
    public function bind($param, $value, $type = null) {
        if (is_null($type)) {
            switch(true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }
        }

        $this->stmt->bindValue($param, $value, $type);
    }

    // Execute the prepared statement
    public function execute() {
        return $this->stmt->execute();
    }

    // Get result set as array of objects
    public function resultSet() {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    // Get single record as object
    public function single() {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    // Get row count
    public function rowCount() {
        return $this->stmt->rowCount();
    }
}
