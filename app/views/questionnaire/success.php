<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
  <div class="card shadow-lg border-0" style="max-width: 480px;">
    <div class="card-body text-center p-4 p-md-5">
      <div class="mx-auto d-flex align-items-center justify-content-center rounded-circle bg-success-subtle mb-4" style="width:64px;height:64px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
      </div>
      <h1 class="fs-3 fw-bold text-dark mb-2">Submission Successful</h1>
      <p class="text-secondary mb-4">Thank you for completing the Skills Audit Assessment. Your response has been recorded.</p>
      <a href="<?php echo URLROOT; ?>" class="btn btn-success">Return Home</a>
    </div>
  </div>
</div>

<?php require APPROOT . '/views/inc/footer.php'; ?>
