
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 100 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
  }
  window.addEventListener('scroll', scrollHeader)
  
  
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
    duration: 2000,
    delay: 100,
    resert:true
  })
  
  sr.reveal('.content,.box-container',{origin: 'top'})
  sr.reveal('.title',{origin: 'top'})
  sr.reveal('.des, .bottom',{interval: 100})
  sr.reveal('.video',{origin: 'left'})
  sr.reveal('.content',{origin: 'right'})
  