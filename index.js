document.cookie = "cookieName=cookieValue; SameSite=None; Secure";

// slider vide
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const content = document.querySelectorAll(".home-content");
var sliderNav = function(manual){

  btns.forEach((btn) => {
    btn.classList.remove("active")
  });
  slides.forEach((slide) => {
    slide.classList.remove("active")
  });
  content.forEach((content) => {
    content.classList.remove("active")
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  content[manual].classList.add("active");
}
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav (i);
    });
  });
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 100 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () =>{
  const up = document.getElementById('up')
  this.scrollY >= 150 ? up.classList.add('bg-up') 
                     : up.classList.remove('bg-up')
}
window.addEventListener('scroll', scrollUp)

const navMenu = document.getElementById('nav-bar');
const navToggle = document.getElementById('menu-btn');
let count = 0;

/*===== TOGGLE MENU =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
      count++;
      if (count % 2 !== 0) {
          navMenu.classList.add('show-menu');
      } else {
          navMenu.classList.remove('show-menu');
      }
  });
}
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const login_container = document.querySelector(".login-container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  login_container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  login_container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  login_container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  login_container.classList.remove("sign-up-mode2");
});
let loginForm = document.querySelector('.login-form');

document.querySelector('#btn-user').onclick = () =>{
    loginForm.classList.toggle('active');
}

const btnCall = document.querySelector("#btn-call");
const call_container = document.querySelector(".sport-call");

btnCall.addEventListener("click", () => {
  call_container.classList.add("show-call");
});
window.onclick = function(event) {
  if (!event.target.matches('#btn-call')) {
    var dropdowns = document.getElementsByClassName("sport-call");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var call_container = dropdowns[i];
      if (call_container.classList.contains('show-call')) {
        call_container.classList.remove('show-call');
      }
    }
  }
}
document.addEventListener('touchstart', function(event) {
  var dropdowns = document.getElementsByClassName('sport-call');
  for (var i = 0; i < dropdowns.length; i++) {
    var call_container = dropdowns[i];
    if (call_container.classList.contains('show-call')) {
      call_container.classList.remove('show-call');
    }
  }
});
// scroll reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 100,
  resert:true
})

sr.reveal('.content,.box-container',{origin: 'top'})
sr.reveal('.title',{origin: 'top'})
sr.reveal('.box, .bottom',{interval: 100})
sr.reveal('.video',{origin: 'left'})
sr.reveal('.content',{origin: 'right'})
