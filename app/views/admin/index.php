<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="min-vh-100 bg-light">
    <div class="container py-4">
        <!-- Header Section -->
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3">
            <div>
                <h1 class="h3 fw-bold text-dark mb-1">Dashboard Overview</h1>
                <p class="text-muted mb-0">Welcome back! Here's what's happening today.</p>
            </div>
            <div class="d-flex flex-wrap align-items-center gap-2">
                <div class="d-none d-md-inline small text-secondary">
                    <span>Signed in as</span>
                    <span class="fw-semibold text-dark"><?php echo $_SESSION['user_email']; ?></span>
                    <span class="badge bg-secondary ms-1"><?php echo $_SESSION['user_role']; ?></span>
                </div>
                <?php if($_SESSION['user_role'] == 'ADMIN') : ?>
                <a href="<?php echo URLROOT; ?>/admin/users" class="btn btn-outline-secondary d-inline-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Manage Users
                </a>
                <?php endif; ?>
                <a href="<?php echo URLROOT; ?>/admin/analytics" class="btn btn-primary d-inline-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                    Analytics Dashboard
                </a>
            </div>
        </div>

        <!-- Stats Grid -->
        <div class="row g-3">
            <!-- Total Responses -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-kpi kpi-green shadow-sm h-100 d-flex align-items-center gap-3">
                    <div class="card-body d-flex align-items-center gap-3">
                    <div class="p-3 bg-success-subtle rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                        <p class="small text-secondary">Total Responses</p>
                        <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['responses']; ?></h3>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Departments -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-kpi kpi-blue shadow-sm h-100">
                    <div class="card-body d-flex align-items-center gap-3">
                    <div class="p-3 bg-primary-subtle rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    </div>
                    <div>
                        <p class="small text-secondary">Departments</p>
                        <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['departments']; ?></h3>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Clusters -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-kpi kpi-purple shadow-sm h-100">
                    <div class="card-body d-flex align-items-center gap-3">
                    <div class="p-3 bg-info-subtle rounded-circle">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-info"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                        <p class="small text-secondary">Clusters</p>
                        <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['clusters']; ?></h3>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Unique Positions -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card card-kpi kpi-orange shadow-sm h-100">
                    <div class="card-body d-flex align-items-center gap-3">
                    <div class="p-3 bg-warning-subtle rounded-circle">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-warning"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div>
                        <p class="small text-secondary">Unique Positions</p>
                        <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['positions']; ?></h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Additional KPIs -->
        <div class="row g-3 mt-1">
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card card-kpi kpi-blue shadow-sm h-100 d-flex align-items-center gap-3">
                    <div class="card-body d-flex align-items-center gap-3">
                        <div class="p-3 bg-primary-subtle rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        </div>
                        <div>
                            <p class="small text-secondary">Male</p>
                            <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['sex']['Male'] ?? 0; ?></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card card-kpi kpi-pink shadow-sm h-100 d-flex align-items-center gap-3">
                    <div class="card-body d-flex align-items-center gap-3">
                        <div class="p-3 bg-danger-subtle rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-danger"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                        </div>
                        <div>
                            <p class="small text-secondary">Female</p>
                            <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['sex']['Female'] ?? 0; ?></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card card-kpi kpi-teal shadow-sm h-100 d-flex align-items-center gap-3">
                    <div class="card-body d-flex align-items-center gap-3">
                        <div class="p-3 bg-info-subtle rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-info"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        </div>
                        <div>
                            <p class="small text-secondary">Accessed Site</p>
                            <h3 class="fs-3 fw-bold text-dark"><?php echo $data['stats']['accessed'] ?? 0; ?></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Table Section -->
        <div class="d-flex flex-column gap-3">
            <div class="card card-body d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
                <div class="input-group" style="max-width: 360px;">
                    <span class="input-group-text bg-transparent border-0 ps-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </span>
                    <input type="text" id="searchInput" class="form-control" placeholder="Search employees...">
                </div>

                <div class="d-flex align-items-center gap-2 ms-md-auto w-100 w-md-auto">
                    <select id="clusterFilter" class="form-select" style="min-width: 200px;">
                        <option value="">All Clusters</option>
                        <?php foreach(($data['filters']['clusters'] ?? []) as $c): ?>
                            <option value="<?php echo htmlspecialchars($c); ?>"><?php echo htmlspecialchars($c); ?></option>
                        <?php endforeach; ?>
                    </select>

                    <select id="deptFilter" class="form-select" style="min-width: 200px;">
                        <option value="">All Departments</option>
                        <?php foreach(($data['filters']['departments'] ?? []) as $d): ?>
                            <option value="<?php echo htmlspecialchars($d); ?>"><?php echo htmlspecialchars($d); ?></option>
                        <?php endforeach; ?>
                    </select>

                    <select id="positionFilter" class="form-select" style="min-width: 200px;">
                        <option value="">All Positions</option>
                        <?php foreach(($data['filters']['positions'] ?? []) as $p): ?>
                            <option value="<?php echo htmlspecialchars($p); ?>"><?php echo htmlspecialchars($p); ?></option>
                        <?php endforeach; ?>
                    </select>

                    <select id="provinceFilter" class="form-select" style="min-width: 200px;">
                        <option value="">All Provinces</option>
                        <?php foreach(($data['filters']['provinces'] ?? []) as $pv): ?>
                            <option value="<?php echo htmlspecialchars($pv); ?>"><?php echo htmlspecialchars($pv); ?></option>
                        <?php endforeach; ?>
                    </select>

                    <a id="exportExcelLink" href="<?php echo URLROOT; ?>/admin/export" class="btn btn-outline-success d-inline-flex align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        Export CSV
                    </a>
                </div>
            </div>

            <div class="card overflow-hidden">
                <div class="table-responsive">
                    <table class="table table-hover table-striped align-middle" id="employeesTable">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Department</th>
                                <th>Cluster</th>
                                <th>Province</th>
                                <th>District</th>
                                <th>Phone</th>
                                <th>Education</th>
                                <th>Experience</th>
                                <th>Created</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $counter = 1; foreach($data['employees'] as $employee) : ?>
                            <tr>
                                <td class="text-muted"><?php echo $counter++; ?></td>
                                <td class="fw-semibold">
                                    <?php echo $employee->firstName . ' ' . $employee->lastName; ?>
                                    <?php $sexVal = !empty($employee->sex) ? $employee->sex : $employee->gender; if (!empty($sexVal)) : ?>
                                        <span class="badge rounded-pill text-bg-light border ms-1"><?php echo $sexVal; ?></span>
                                    <?php endif; ?>
                                </td>
                                <td class="text-muted"><?php echo $employee->email; ?></td>
                                <td><span class="badge text-bg-secondary"><?php echo $employee->position; ?></span></td>
                                <td class="text-muted"><?php echo $employee->department; ?></td>
                                <td><span class="badge text-bg-primary-subtle text-primary"><?php echo $employee->cluster; ?></span></td>
                                <td class="text-muted"><?php echo $employee->province; ?></td>
                                <td class="text-muted"><?php echo $employee->district; ?></td>
                                <td>
                                    <?php if (!empty($employee->phone)) : ?>
                                        <a href="tel:<?php echo preg_replace('/\s+/', '', $employee->phone); ?>" class="text-decoration-none">
                                            <?php echo $employee->phone; ?>
                                        </a>
                                    <?php endif; ?>
                                </td>
                                <td><span class="badge text-bg-info-subtle text-info"><?php echo $employee->educationLevel; ?></span></td>
                                <td><span class="badge text-bg-success-subtle text-success"><?php echo $employee->experienceYears; ?></span></td>
                                <td class="text-muted small"><?php echo isset($employee->createdAt) ? date('Y-m-d', strtotime($employee->createdAt)) : ''; ?></td>
                                <td class="text-end">
                                    <a href="<?php echo URLROOT; ?>/admin/employee/<?php echo (int)$employee->id; ?>" class="btn btn-sm btn-outline-primary me-2" title="View profile">
                                        View
                                    </a>
                                    <?php if(isset($_SESSION['user_role']) && $_SESSION['user_role'] === 'ADMIN') : ?>
                                    <form action="<?php echo URLROOT; ?>/admin/delete/<?php echo $employee->id; ?>" method="post" class="d-inline" onsubmit="return confirm('Are you sure you want to delete this record?');">
                                        <button type="submit" class="btn btn-sm btn-link text-danger p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                        </button>
                                    </form>
                                    <?php endif; ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const clusterFilter = document.getElementById('clusterFilter');
    const deptFilter = document.getElementById('deptFilter');
    const table = document.getElementById('employeesTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Filters are server-populated from master lists; only need to bind change handlers
    const positionFilter = document.getElementById('positionFilter');
    const provinceFilter = document.getElementById('provinceFilter');

    function filterTable() {
        const term = searchInput.value.toLowerCase();
        const cluster = clusterFilter.value;
        const dept = deptFilter.value;
        const pos = positionFilter.value;
        const prov = provinceFilter.value;

        rows.forEach(row => {
            const name = row.cells[1].textContent.toLowerCase();
            const email = row.cells[2].textContent.toLowerCase();
            const position = row.cells[3].textContent.toLowerCase();
            const rowDept = row.cells[4].textContent.trim();
            const rowCluster = row.cells[5].textContent.trim();

            const matchesSearch = name.includes(term) || email.includes(term) || position.includes(term);
            const matchesCluster = cluster === '' || rowCluster === cluster;
            const matchesDept = dept === '' || rowDept === dept;
            const matchesPos = pos === '' || row.cells[3].textContent.trim() === pos;
            const matchesProv = prov === '' || row.cells[6].textContent.trim() === prov;

            if (matchesSearch && matchesCluster && matchesDept && matchesPos && matchesProv) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('keyup', filterTable);
    clusterFilter.addEventListener('change', filterTable);
    deptFilter.addEventListener('change', filterTable);
    positionFilter.addEventListener('change', filterTable);
    provinceFilter.addEventListener('change', filterTable);

    // Bind export link to current filters
    const exportLink = document.getElementById('exportExcelLink');
    function updateExportLink() {
        const params = new URLSearchParams();
        if (clusterFilter.value) params.set('cluster', clusterFilter.value);
        if (deptFilter.value) params.set('department', deptFilter.value);
        if (positionFilter.value) params.set('position', positionFilter.value);
        if (provinceFilter.value) params.set('province', provinceFilter.value);
        exportLink.href = '<?php echo URLROOT; ?>/admin/export' + (params.toString() ? ('?' + params.toString()) : '');
    }
    [searchInput, clusterFilter, deptFilter, positionFilter, provinceFilter].forEach(el => el.addEventListener('change', updateExportLink));
    updateExportLink();

    // CSV Export Logic
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            let csv = [];
            
            // Header
            const headerRow = [];
            Array.from(table.querySelectorAll('thead th')).forEach(th => {
                // Skip Action column
                if(th.innerText !== 'Actions') headerRow.push('"' + th.innerText.trim() + '"');
            });
            csv.push(headerRow.join(','));

            // Body
            rows.forEach(row => {
                // Only export visible rows
                if(row.style.display !== 'none') {
                    const rowData = [];
                    Array.from(row.querySelectorAll('td')).forEach((td, index) => {
                        // Skip Action column (last column)
                        if(index < row.cells.length - 1) {
                            rowData.push('"' + td.innerText.trim() + '"');
                        }
                    });
                    csv.push(rowData.join(','));
                }
            });

            // Download
            const csvFile = new Blob([csv.join('\n')], {type: 'text/csv'});
            const downloadLink = document.createElement('a');
            downloadLink.download = 'employees_export.csv';
            downloadLink.href = window.URL.createObjectURL(csvFile);
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
