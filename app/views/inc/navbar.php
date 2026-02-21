<nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="<?php echo URLROOT; ?>">
      <span class="me-2 d-inline-flex align-items-center justify-content-center" style="width:32px;height:22px;border:1px solid #e5e7eb;border-radius:2px;overflow:hidden;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 60 40">
          <rect width="60" height="40" y="0" fill="#00A651"/>
          <rect width="60" height="5.7142857" y="5.7142857" fill="#FFD200"/>
          <rect width="60" height="5.7142857" y="11.4285714" fill="#E4002B"/>
          <rect width="60" height="5.7142857" y="17.1428571" fill="#000000"/>
          <rect width="60" height="5.7142857" y="22.8571428" fill="#E4002B"/>
          <rect width="60" height="5.7142857" y="28.5714285" fill="#FFD200"/>
          <polygon points="0,0 22,20 0,40" fill="#ffffff"/>
          <polygon points="9,14 10.8,18.2 15,18.2 11.5,20.8 13,25 9,22.5 5,25 6.5,20.8 3,18.2 7.2,18.2" fill="#E4002B"/>
          <circle cx="9" cy="20" r="1.6" fill="#FFD200"/>
        </svg>
      </span>
      <span class="bg-success p-2 rounded me-2 d-inline-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1.7-1.3 2.9-1.3 4.9-1.2-2.7.7-4.35 2.38-5.8 5.8"/><path d="M10.2 15.3c.9.8 2.2 1.3 3.6 1.7 1.4.3 2.8.4 4.2.1-1.3-1.3-2.1-3-2.3-4.9-.1-1.2.1-2.4.5-3.5"/></svg>
      </span>
      <span class="fw-bold text-success">AgriSkills</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="<?php echo URLROOT; ?>">Home</a>
        </li>
      </ul>
      <div class="ms-auto d-flex align-items-center gap-3">
        <div class="partner-strip d-none d-lg-flex">
          <span class="chip chip-green">Ministry of Lands, Agriculture, Fisheries, Water and Rural Development</span>
          <span class="entity-sep" aria-hidden="true"></span>
          <span class="chip chip-blue">Ministry of Skills Audit and Development</span>
          <span class="entity-sep" aria-hidden="true"></span>
          <span class="chip chip-amber">ZimStats</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <?php if(isset($_SESSION['user_id'])): ?>
            <a href="<?php echo URLROOT; ?>/admin" class="btn btn-sm btn-primary">Dashboard</a>
            <a href="<?php echo URLROOT; ?>/users/logout" class="btn btn-sm btn-outline-secondary">Logout</a>
          <?php else: ?>
            <a href="<?php echo URLROOT; ?>/users/login" class="btn btn-sm btn-outline-dark">Admin Login</a>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</nav>
