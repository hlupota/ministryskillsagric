<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="bg-white border-bottom">
  <div class="container py-3 d-flex justify-content-between align-items-center">
    <a href="<?php echo URLROOT; ?>/admin" class="text-secondary text-decoration-none d-inline-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><path d="m15 18-6-6 6-6"/></svg>
      Back to Dashboard
    </a>
    <div class="fw-semibold">Analytics Dashboard</div>
    <div style="width:20px"></div>
  </div>
</div>

<div class="container my-4">
  <div class="row g-3 mb-3">
    <div class="col-6 col-md-3">
      <div class="card shadow-sm h-100"><div class="card-body">
        <div class="text-muted small">Total Responses</div>
        <div class="fs-3 fw-bold"><?php echo $data['total_responses']; ?></div>
      </div></div>
    </div>
    <div class="col-6 col-md-3">
      <div class="card shadow-sm h-100"><div class="card-body">
        <div class="text-muted small">Departments</div>
        <div class="fs-3 fw-bold"><?php echo $data['unique_departments']; ?></div>
      </div></div>
    </div>
    <div class="col-6 col-md-3">
      <div class="card shadow-sm h-100"><div class="card-body">
        <div class="text-muted small">Clusters</div>
        <div class="fs-3 fw-bold"><?php echo $data['unique_clusters']; ?></div>
      </div></div>
    </div>
    <div class="col-6 col-md-3">
      <div class="card shadow-sm h-100"><div class="card-body">
        <div class="text-muted small">Unique Positions</div>
        <div class="fs-3 fw-bold"><?php echo $data['unique_positions']; ?></div>
      </div></div>
    </div>
  </div>

  <div class="row g-3">
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Age Distribution</div><div class="card-body"><canvas id="ageChart"></canvas></div></div>
    </div>
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Experience Levels</div><div class="card-body"><canvas id="experienceChart"></canvas></div></div>
    </div>
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Gender</div><div class="card-body"><canvas id="genderChart"></canvas></div></div>
    </div>
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Education Levels</div><div class="card-body"><canvas id="educationChart"></canvas></div></div>
    </div>
    <div class="col-12">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Responses by Cluster</div><div class="card-body"><canvas id="clusterChart" height="100"></canvas></div></div>
    </div>
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Top Departments</div><div class="card-body"><canvas id="deptChart"></canvas></div></div>
    </div>
    <div class="col-lg-6">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Top Positions</div><div class="card-body"><canvas id="positionChart"></canvas></div></div>
    </div>
    <div class="col-12">
      <div class="card shadow-sm"><div class="card-header bg-white fw-semibold">Responses by Province</div><div class="card-body"><canvas id="provinceChart" height="100"></canvas></div></div>
    </div>
  </div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var palette=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#14b8a6","#f97316","#6366f1","#84cc16","#06b6d4"]
    new Chart(document.getElementById('ageChart'), {
        type: 'doughnut',
        data: {
            labels: <?php echo json_encode(array_keys($data['age_ranges'])); ?>,
            datasets: [{
                data: <?php echo json_encode(array_values($data['age_ranges'])); ?>,
                backgroundColor: palette
            }]
        }
    });

    new Chart(document.getElementById('experienceChart'), {
        type: 'bar',
        data: {
            labels: <?php echo json_encode(array_keys($data['experience'])); ?>,
            datasets: [{
                label: 'Employees',
                data: <?php echo json_encode(array_values($data['experience'])); ?>,
                backgroundColor: '#10b981'
            }]
        },
        options: {
            indexAxis: 'y'
        }
    });

    new Chart(document.getElementById('clusterChart'), {
        type: 'bar',
        data: {
            labels: <?php echo json_encode(array_keys($data['cluster_counts'])); ?>,
            datasets: [{
                label: 'Employees',
                data: <?php echo json_encode(array_values($data['cluster_counts'])); ?>,
                backgroundColor: '#3b82f6'
            }]
        }
    });

    new Chart(document.getElementById('genderChart'), {
        type: 'doughnut',
        data: {
            labels: <?php echo json_encode(array_keys($data['gender_counts'])); ?>,
            datasets: [{
                data: <?php echo json_encode(array_values($data['gender_counts'])); ?>,
                backgroundColor: ['#60a5fa','#f472b6','#facc15']
            }]
        }
    });

    new Chart(document.getElementById('educationChart'), {
        type: 'doughnut',
        data: {
            labels: <?php echo json_encode(array_keys($data['education_counts'])); ?>,
            datasets: [{
                data: <?php echo json_encode(array_values($data['education_counts'])); ?>,
                backgroundColor: palette
            }]
        }
    });

    new Chart(document.getElementById('deptChart'), {
        type: 'bar',
        data: {
            labels: <?php echo json_encode(array_keys($data['top_departments'])); ?>,
            datasets: [{
                label: 'Employees',
                data: <?php echo json_encode(array_values($data['top_departments'])); ?>,
                backgroundColor: '#8b5cf6'
            }]
        },
        options: {indexAxis:'y'}
    });

    new Chart(document.getElementById('positionChart'), {
        type: 'bar',
        data: {
            labels: <?php echo json_encode(array_keys($data['top_positions'])); ?>,
            datasets: [{
                label: 'Employees',
                data: <?php echo json_encode(array_values($data['top_positions'])); ?>,
                backgroundColor: '#f97316'
            }]
        },
        options: {indexAxis:'y'}
    });

    new Chart(document.getElementById('provinceChart'), {
        type: 'bar',
        data: {
            labels: <?php echo json_encode(array_keys($data['province_counts'])); ?>,
            datasets: [{
                label: 'Employees',
                data: <?php echo json_encode(array_values($data['province_counts'])); ?>,
                backgroundColor: '#14b8a6'
            }]
        }
    });
});
</script>

<?php require APPROOT . '/views/inc/footer.php'; ?>
