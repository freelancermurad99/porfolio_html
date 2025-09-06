
// Simple client-side validation
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(el=>{
      if(!el.value || (el.type==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))){
        el.classList.add('is-invalid'); valid = false;
      } else {
        el.classList.remove('is-invalid');
      }
    });
    if(valid){
      alert('Thanks! Your message is ready to be sent. For demo purposes this form does not submit to a server.');
    }
  });
})();
