<?php
/*
 * Base Controller
 * Loads the models and views
 */
class Controller {
    // Load model
    public function model($model) {
        $path = APPROOT . '/models/' . $model . '.php';
        if (!file_exists($path)) {
            die('Model file not found: ' . $path);
        }
        require_once $path;

        if (!class_exists($model, false)) {
            die('Model class not found: ' . $model . ' in ' . $path);
        }

        return new $model();
    }

    // Load view
    public function view($view, $data = []) {
        if (file_exists(APPROOT . '/views/' . $view . '.php')) {
            require_once APPROOT . '/views/' . $view . '.php';
        } else {
            die('View does not exist');
        }
    }
}
