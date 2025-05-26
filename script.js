//  function submitForm(event) {
//       event.preventDefault();
//       alert("Thank you! Your message has been sent.");
//     }

   document.querySelectorAll('.submit').forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert('Submit button clicked!');
    });
});