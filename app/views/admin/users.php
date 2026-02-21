<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="bg-white border-bottom">
  <div class="container py-3 d-flex justify-content-between align-items-center">
    <a href="<?php echo URLROOT; ?>/admin" class="text-secondary text-decoration-none d-inline-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><path d="m15 18-6-6 6-6"/></svg>
      Back to Dashboard
    </a>
    <div class="fw-semibold">System Users</div>
    <div style="width:20px"></div>
  </div>
</div>

<div class="container my-4">
  <div class="card shadow-sm">
    <div class="card-header bg-white d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
      <div>
        <div class="h5 mb-0">Admin Users</div>
        <div class="text-muted small">Manage system administrators and their access levels.</div>
      </div>
      <div class="d-flex gap-2">
        <div class="input-group" style="max-width:260px;">
          <span class="input-group-text bg-transparent border-end-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></span>
          <input id="userSearch" type="text" class="form-control border-start-0" placeholder="Search username..."/>
        </div>
        <select id="roleFilter" class="form-select" style="min-width:160px;">
          <option value="">All Roles</option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
          <option value="ZIMSTATS">ZIMSTATS</option>
          <option value="AGRIC">AGRIC</option>
        </select>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">New User</button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover table-striped align-middle mb-0" id="usersTable">
        <thead class="table-light">
          <tr>
            <th style="width:60px">#</th>
            <th style="width:80px">ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Created</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          <?php $counter = 1; foreach($data['users'] as $user) : ?>
          <tr>
            <td class="text-muted"><?php echo $counter++; ?></td>
            <td class="text-muted"><?php echo (int)$user->id; ?></td>
            <td class="fw-semibold"><?php echo $user->username; ?></td>
            <td>
              <?php $role = strtoupper($user->role); $badge = $role==='ADMIN'?'text-bg-success':'text-bg-secondary'; ?>
              <span class="badge <?php echo $badge; ?>"><?php echo $role; ?></span>
            </td>
            <td class="text-muted small">
              <?php echo (isset($user->createdAt) && $user->createdAt) ? date('Y-m-d', strtotime($user->createdAt)) : '-'; ?>
            </td>
            <td class="text-end">
              <button class="btn btn-sm btn-outline-primary me-2 editUserBtn"
                data-id="<?php echo $user->id; ?>"
                data-username="<?php echo htmlspecialchars($user->username, ENT_QUOTES); ?>"
                data-role="<?php echo strtoupper($user->role); ?>">Edit</button>
              <form action="<?php echo URLROOT; ?>/admin/userDelete/<?php echo $user->id; ?>" method="post" class="d-inline" onsubmit="return confirm('Delete this user?');">
                <button type="submit" class="btn btn-sm btn-outline-danger">Delete</button>
              </form>
            </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- Add User Modal -->
<div class="modal fade" id="addUserModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <form id="addUserForm" class="modal-content" action="<?php echo URLROOT; ?>/admin/userAdd" method="post">
      <div class="modal-header">
        <h5 class="modal-title">Create User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </span>
            <input required name="username" type="text" class="form-control" placeholder="e.g. admin" />
          </div>
          <div class="form-text">Use letters, numbers, underscores, or dashes.</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Role</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 4-4h4"/><circle cx="10" cy="6" r="4"/><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            </span>
            <select name="role" class="form-select">
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="ZIMSTATS">ZIMSTATS</option>
              <option value="AGRIC">AGRIC</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input id="addPassword" required name="password" type="password" class="form-control" placeholder="Enter password" />
          </div>
        </div>
        <div class="mb-0">
          <label class="form-label">Confirm Password</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input id="addPasswordConfirm" required name="confirmPassword" type="password" class="form-control" placeholder="Re-enter password" />
          </div>
          <div class="form-text">Passwords must match.</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
 </div>

<!-- Edit User Modal -->
<div class="modal fade" id="editUserModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <form id="editUserForm" class="modal-content" method="post">
      <div class="modal-header">
        <h5 class="modal-title">Edit User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </span>
            <input required name="username" id="editUsername" type="text" class="form-control" />
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Role</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 4-4h4"/><circle cx="10" cy="6" r="4"/><path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            </span>
            <select name="role" id="editRole" class="form-select">
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="ZIMSTATS">ZIMSTATS</option>
              <option value="AGRIC">AGRIC</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">New Password (optional)</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input id="editPassword" name="password" type="password" class="form-control" placeholder="Leave blank to keep current" />
          </div>
        </div>
        <div class="mb-0">
          <label class="form-label">Confirm New Password</label>
          <div class="input-group">
            <span class="input-group-text bg-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input id="editPasswordConfirm" name="confirmPassword" type="password" class="form-control" placeholder="Re-enter new password" />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
 </div>

<script>
document.addEventListener('DOMContentLoaded', function(){
  const search=document.getElementById('userSearch');
  const role=document.getElementById('roleFilter');
  const rows=[...document.querySelectorAll('#usersTable tbody tr')];
  function apply(){
    const term=(search.value||'').toLowerCase();
    const r=(role.value||'');
    rows.forEach(tr=>{
      const username=tr.cells[2].innerText.toLowerCase();
      const roleText=tr.cells[3].innerText.trim();
      const matches=(username.includes(term)) && (r==='' || roleText===r);
      tr.style.display=matches?'':'none';
    });
  }
  search.addEventListener('input',apply);
  role.addEventListener('change',apply);

  const editButtons=document.querySelectorAll('.editUserBtn');
  const editModal=document.getElementById('editUserModal');
  const editForm=document.getElementById('editUserForm');
  const editUsername=document.getElementById('editUsername');
  const editRole=document.getElementById('editRole');

  editButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.getAttribute('data-id');
      const username=btn.getAttribute('data-username');
      const role=btn.getAttribute('data-role');
      editUsername.value=username;
      editRole.value=role;
      editForm.setAttribute('action', `<?php echo URLROOT; ?>/admin/userEdit/${id}`);
      const modal = new bootstrap.Modal(editModal); modal.show();
    });
  });

  const addForm=document.getElementById('addUserForm');
  if(addForm){
    addForm.addEventListener('submit', function(e){
      const p=addForm.querySelector('#addPassword');
      const c=addForm.querySelector('#addPasswordConfirm');
      if(p && c && p.value !== c.value){
        e.preventDefault();
        alert('Passwords do not match.');
        c.focus();
      }
    });
  }

  if(editForm){
    editForm.addEventListener('submit', function(e){
      const p=document.getElementById('editPassword');
      const c=document.getElementById('editPasswordConfirm');
      if(p && c && p.value.length>0 && p.value !== c.value){
        e.preventDefault();
        alert('New password and confirmation do not match.');
        c.focus();
      }
    });
  }
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
