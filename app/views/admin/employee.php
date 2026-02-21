<?php require APPROOT . '/views/inc/header.php'; ?>
<style>
  @media print {
    @page { size: A4; margin: 12mm; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    nav, .navbar, footer, .no-print, .bg-light.border-bottom, .btn { display: none !important; }
    .card, .border, .rounded, .accordion-item { box-shadow: none !important; }
    .container { max-width: 100% !important; width: 100% !important; }
    .row.g-3 > [class*='col-'] { flex: 0 0 100% !important; max-width: 100% !important; }
    a[href]:after { content: "" !important; }
  }
  .print-actions .btn { white-space: nowrap; }
</style>

<div class="bg-light border-bottom py-2">
  <div class="container d-flex align-items-center justify-content-between">
    <a href="<?php echo URLROOT; ?>/admin" class="text-secondary text-decoration-none d-inline-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><path d="m15 18-6-6 6-6"/></svg>
      Back to Dashboard
    </a>
    <div class="fw-semibold">Employee Profile</div>
    <div class="print-actions d-flex align-items-center gap-2">
      <button type="button" class="btn btn-sm btn-primary" onclick="window.print()">
        Print / Save PDF
      </button>
      <?php if(isset($_SESSION['user_role']) && $_SESSION['user_role'] === 'ADMIN') : ?>
        <form action="<?php echo URLROOT; ?>/admin/delete/<?php echo $data['employee']->id; ?>" method="post" onsubmit="return confirm('Are you sure you want to delete this record?');" class="mb-0">
          <button type="submit" class="btn btn-sm btn-outline-danger">Delete Record</button>
        </form>
      <?php endif; ?>
    </div>
  </div>
  </div>

<div class="container my-4">
  <div class="card shadow-sm mb-3">
    <div class="card-body d-flex align-items-center gap-3">
      <div class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center" style="width:64px;height:64px;">
        <div class="fw-bold text-primary">
          <?php echo substr($data['employee']->firstName, 0, 1) . substr($data['employee']->lastName, 0, 1); ?>
        </div>
      </div>
      <div>
        <h1 class="h4 mb-1"><?php echo $data['employee']->firstName . ' ' . $data['employee']->lastName; ?></h1>
        <div class="text-muted"><?php echo $data['employee']->position; ?></div>
      </div>
    </div>
    <div class="card-body pt-0">
      <?php $e = $data['employee']; $created = isset($e->createdAt) && $e->createdAt ? date('Y-m-d', strtotime($e->createdAt)) : '-'; ?>

      <div class="mb-3">
        <h6 class="text-uppercase text-muted small mb-2">Personal Information</h6>
        <div class="row g-3">
          <?php $pf=[
            'First Name'=> $e->firstName ?? '',
            'Last Name'=> $e->lastName ?? '',
            'Gender'=> $e->gender ?: '-',
            'Date of Birth'=> $e->dateOfBirth ?: '-',
            'Age'=> ($e->age !== null && $e->age !== '' ? $e->age : '-'),
            'Age Range'=> $e->ageRange ?: '-',
          ]; $i=0; foreach($pf as $label=>$val): $i++; ?>
          <div class="col-12 col-md-6">
            <div class="border rounded p-2 d-flex justify-content-between align-items-center">
              <div class="small text-uppercase text-muted"><?php echo $i.'. '.$label; ?></div>
              <div class="fw-semibold text-end"><?php echo htmlspecialchars((string)$val, ENT_QUOTES); ?></div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="mb-3">
        <h6 class="text-uppercase text-muted small mb-2">Contact & Location</h6>
        <div class="row g-3">
          <?php 
          $email = !empty($e->email) ? '<a href="mailto:'.htmlspecialchars($e->email, ENT_QUOTES).'">'.htmlspecialchars($e->email, ENT_QUOTES).'</a>' : '-';
          $phone = !empty($e->phone) ? '<a href="tel:'.preg_replace('/\s+/', '', $e->phone).'">'.htmlspecialchars($e->phone, ENT_QUOTES).'</a>' : '-';
          $cf=[
            'Email'=> $email,
            'Phone'=> $phone,
            'Province'=> $e->province ?: '-',
            'District'=> $e->district ?: '-',
          ]; $i=0; foreach($cf as $label=>$val): $i++; ?>
          <div class="col-12 col-md-6">
            <div class="border rounded p-2 d-flex justify-content-between align-items-center">
              <div class="small text-uppercase text-muted"><?php echo $i.'. '.$label; ?></div>
              <div class="fw-semibold text-end"><?php echo $val; ?></div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="mb-3">
        <h6 class="text-uppercase text-muted small mb-2">Education</h6>
        <div class="row g-3">
          <?php $ed=[
            'Education Level'=> $e->educationLevel ?: '-',
            'Qualification Year'=> $e->qualificationYear ?: '-',
            'Area of Specialisation'=> $e->areaOfSpecialisation ?: '-',
          ]; $i=0; foreach($ed as $label=>$val): $i++; ?>
          <div class="col-12 col-md-6">
            <div class="border rounded p-2 d-flex justify-content-between align-items-center">
              <div class="small text-uppercase text-muted"><?php echo $i.'. '.$label; ?></div>
              <div class="fw-semibold text-end"><?php echo htmlspecialchars((string)$val, ENT_QUOTES); ?></div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <div class="mb-0">
        <h6 class="text-uppercase text-muted small mb-2">Employment Details</h6>
        <div class="row g-3">
          <?php $em=[
            'Cluster'=> $e->cluster ?: '-',
            'Department'=> $e->department ?: '-',
            'Position'=> $e->position ?: '-',
            'Grade'=> ($e->grade !== null && $e->grade !== '' ? $e->grade : '-'),
            'Experience Years'=> ($e->experienceYears !== null && $e->experienceYears !== '' ? $e->experienceYears : '-'),
            'ID'=> (int)$e->id,
            'Created'=> $created,
          ]; $i=0; foreach($em as $label=>$val): $i++; ?>
          <div class="col-12 col-md-6">
            <div class="border rounded p-2 d-flex justify-content-between align-items-center">
              <div class="small text-uppercase text-muted"><?php echo $i.'. '.$label; ?></div>
              <div class="fw-semibold text-end"><?php echo htmlspecialchars((string)$val, ENT_QUOTES); ?></div>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>

  <div class="card shadow-sm">
    <div class="card-header bg-white">
      <div class="h6 mb-0">Questionnaire Responses</div>
    </div>
    <div class="card-body">
      <?php 
      $responses = json_decode($data['employee']->responses, true);
      if ($responses) : 
      ?>
      <div class="accordion" id="responsesAccordion">
        <?php $i=0; foreach ($responses as $key => $value) : $i++; ?>
          <?php 
            $title = (strpos($key, 'res_') === 0) ? ('Question ' . substr($key, 4)) : ucwords(str_replace('_', ' ', $key));
            $collapseId = 'resp'.$i; 
          ?>
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-<?php echo $collapseId; ?>">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?php echo $collapseId; ?>" aria-expanded="false" aria-controls="collapse-<?php echo $collapseId; ?>">
                <?php echo $title; ?>
              </button>
            </h2>
            <div id="collapse-<?php echo $collapseId; ?>" class="accordion-collapse collapse" aria-labelledby="heading-<?php echo $collapseId; ?>" data-bs-parent="#responsesAccordion">
              <div class="accordion-body">
                <?php echo htmlspecialchars((string)$value, ENT_QUOTES); ?>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
      <?php else : ?>
        <div class="text-muted fst-italic">No detailed responses recorded.</div>
      <?php endif; ?>
    </div>
  </div>
</div>
<script>
(function(){
  function openAll(){
    document.querySelectorAll('.accordion-collapse').forEach(function(el){ el.classList.add('show'); });
    document.querySelectorAll('.accordion-button').forEach(function(btn){ btn.classList.remove('collapsed'); btn.setAttribute('aria-expanded','true'); });
  }
  if (window.matchMedia) {
    var mq = window.matchMedia('print');
    try { mq.addEventListener('change', function(e){ if(e.matches){ openAll(); }}); } catch(_) {}
  }
  window.addEventListener('beforeprint', openAll);
})();
</script>
<?php require APPROOT . '/views/inc/footer.php'; ?>
