
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

  
}







const typed = new Typed('.multiple-text',{
   strings: ['Frontend Developer', 'Backend Developer','Web Developer'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});




    // Email

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'template_ti2cuba';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });


window.onscroll = () => {

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

}

 