// toggle mobile menu
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.navbar .humbarger-menu');

  const mobileMenu = document.querySelector('.navbar .mobile-menu-item');

  toggle.addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
  });
})

// scroll navbar
 window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 0){
    navbar.classList.add('navbar-scroll');
  }else{
    navbar.classList.remove('navbar-scroll');
  }
 })
