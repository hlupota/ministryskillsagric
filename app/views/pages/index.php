<?php require APPROOT . '/views/inc/header.php'; ?>

<main class="flex-grow-1">
  <section class="py-5 bg-success text-white text-center position-relative">
    <div class="container py-5">
      <h1 class="display-4 fw-bold"> Skills Audit in the <br><span class="text-warning">Agricultural Sector</span></h1>
      <p class="lead mb-4">Building a skilled and sustainable agricultural sector.</p>
      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <a href="<?php echo URLROOT; ?>/questionnaire" class="btn btn-light btn-lg fw-bold">Click here to start 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>

  <section class="py-5 bg-white">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 text-center shadow-sm">
            <div class="card-body">
              <div class="mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded bg-light" style="width:48px;height:48px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 class="h5 fw-bold">Comprehensive Mapping</h3>
              <p class="text-muted">Documenting skills across all directorates to understand our current workforce capabilities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 text-center shadow-sm">
            <div class="card-body">
              <div class="mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded bg-light" style="width:48px;height:48px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
              </div>
              <h3 class="h5 fw-bold">Gap Analysis</h3>
              <p class="text-muted">Identifying critical shortages in technical and digital skills to inform training programs.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 text-center shadow-sm">
            <div class="card-body">
              <div class="mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded bg-light" style="width:48px;height:48px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 class="h5 fw-bold">Future Readiness</h3>
              <p class="text-muted">Preparing for climate change and technological advancements with targeted development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php require APPROOT . '/views/inc/footer.php'; ?>
