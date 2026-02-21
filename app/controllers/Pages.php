<?php
class Pages extends Controller {
    public function __construct() {
       
    }

    public function index() {
        $data = [
            'title' => 'Skills Audit System',
            'description' => 'Welcome to the Skills Audit System'
        ];

        $this->view('pages/index', $data);
    }

    public function about() {
        $data = [
            'title' => 'About Us',
            'description' => 'App to share posts with other users'
        ];

        $this->view('pages/about', $data);
    }
}
