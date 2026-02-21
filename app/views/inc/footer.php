  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    (function(){
      var btn=document.getElementById('backToTop');
      if(btn){btn.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});}
    })();
  </script>
  <script src="<?php echo URLROOT; ?>/js/main.js"></script>
</body>
</html>
