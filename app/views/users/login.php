<?php require APPROOT . '/views/inc/header.php'; ?>
<div class="container d-flex align-items-center justify-content-center flex-grow-1 py-5">
  <div class="col-12 col-sm-10 col-md-6 col-lg-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="text-center mb-4">
          <h1 class="h4 fw-bold text-dark">Sign in to your account</h1>
          <p class="text-muted small">Enter your credentials to access the admin panel</p>
        </div>
        <form action="<?php echo URLROOT; ?>/users/login" method="POST">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <div class="field-wrap">
              <span class="field-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input id="username" name="username" type="text" required class="form-control <?php echo (!empty($data['username_err'])) ? 'is-invalid' : ''; ?>" placeholder="Username" value="<?php echo htmlspecialchars($data['username']); ?>">
            </div>
            <div class="invalid-feedback"><?php echo $data['username_err']; ?></div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="field-wrap">
              <span class="field-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input id="password" name="password" type="password" required class="form-control <?php echo (!empty($data['password_err'])) ? 'is-invalid' : ''; ?>" placeholder="Password" value="<?php echo htmlspecialchars($data['password']); ?>">
            </div>
            <div class="invalid-feedback"><?php echo $data['password_err']; ?></div>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-success">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<?php require APPROOT . '/views/inc/footer.php'; ?>
