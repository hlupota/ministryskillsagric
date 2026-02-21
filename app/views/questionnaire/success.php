<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="py-20 bg-slate-50 min-h-screen flex items-center justify-center">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
    <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-green-700"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
    </div>
    <h1 class="text-2xl font-bold text-gray-900 mb-2">Submission Successful</h1>
    <p class="text-gray-600 mb-8">Thank you for completing the Skills Audit Assessment. Your response has been recorded.</p>
    <a href="<?php echo URLROOT; ?>" class="inline-block bg-green-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-800 transition-colors">
      Return Home
    </a>
  </div>
</div>

<?php require APPROOT . '/views/inc/footer.php'; ?>
