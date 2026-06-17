
lucide.createIcons();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-msg');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    this.reset();
    
    formMessage.classList.remove('hidden');
    
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 3500);
  });
}