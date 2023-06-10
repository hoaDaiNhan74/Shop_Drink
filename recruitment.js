const btnCall = document.querySelector("#btn-call");
const call_container = document.querySelector(".sport-call");

btnCall.addEventListener("click", () => {
  call_container.classList.add("show-call");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 100 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
  }
  window.addEventListener('scroll', scrollHeader)
  
  let containerJob = document.querySelector('.container-job');
  let shopJob = document.querySelector('#shop-job');
  let officeJob = document.querySelector('#office-job');
  let checkResult = document.querySelector('.check-result');
  let checkBtn = document.querySelector('#check-btn');
  let officeJobBtn = document.querySelector('#office-job-btn');
  let shopJobBtn = document.querySelector('#shop-job-btn');
  
  
  document.querySelector('#check-btn').onclick = () =>{
    checkResult.classList.add('active-job');
    shopJob.classList.remove('active-job');
    officeJob.classList.remove('active-job');
    containerJob.classList.add('active-job-container');
    checkBtn.classList.add('active-btn');
    officeJobBtn.classList.remove('active-btn');
    shopJobBtn.classList.remove('active-btn');
  }
  document.querySelector('#shop-job-btn').onclick = () =>{
    checkResult.classList.remove('active-job');
    shopJob.classList.add('active-job');
    officeJob.classList.remove('active-job');
    containerJob.classList.add('active-job-container');
    checkBtn.classList.remove('active-btn');
    officeJobBtn.classList.remove('active-btn');
    shopJobBtn.classList.add('active-btn');
  }
  document.querySelector('#office-job-btn').onclick = () =>{
    checkResult.classList.remove('active-job');
    shopJob.classList.remove('active-job');
    officeJob.classList.add('active-job');
    containerJob.classList.add('active-job-container');
    checkBtn.classList.remove('active-btn');
    officeJobBtn.classList.add('active-btn');
    shopJobBtn.classList.remove('active-btn');
  }
  document.querySelector('#logo-btn').onclick = () =>{
    checkResult.classList.remove('active-job');
    shopJob.classList.remove('active-job');
    officeJob.classList.remove('active-job');
    containerJob.classList.remove('active-job-container');
    checkBtn.classList.remove('active-btn');
    officeJobBtn.classList.remove('active-btn');
    shopJobBtn.classList.remove('active-btn');
  }
  document.querySelector('#shop-btn').onclick = () =>{
    checkResult.classList.remove('active-job');
    shopJob.classList.add('active-job');
    officeJob.classList.remove('active-job');
    containerJob.classList.add('active-job-container');
    checkBtn.classList.remove('active-btn');
    officeJobBtn.classList.remove('active-btn');
    shopJobBtn.classList.add('active-btn');
  }
  document.querySelector('#office-btn').onclick = () =>{
    checkResult.classList.remove('active-job');
    shopJob.classList.remove('active-job');
    officeJob.classList.add('active-job');
    containerJob.classList.add('active-job-container');
    checkBtn.classList.remove('active-btn');
    officeJobBtn.classList.add('active-btn');
    shopJobBtn.classList.remove('active-btn');
  }
const btnJob = document.querySelectorAll(".item-job");
const container = document.querySelectorAll(".describe");
const aboutJob = document.querySelector(".about-job");
btnJob.onclick = () =>{
  aboutJob.classList.add('active-job');
}
var listJob = function(manual){

    btnJob.forEach((btn) => {
        btn.classList.remove("active-item-job")
    });
    container.forEach((container) => {
        container.classList.remove("active-item-job")
        
    });
    btnJob[manual].classList.add("active-item-job");
    container[manual].classList.add("active-item-job");
    }
    btnJob.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            listJob (i);
            aboutJob.classList.add("active-about");
        });
    });
    
 
const btnJob1 = document.querySelectorAll("#item-job-office");
const container1 = document.querySelectorAll("#describe-office");
const aboutJob1 = document.querySelector("#about-job-office");

var listJob1 = function(manual1){

    btnJob1.forEach((btn1) => {
        btn1.classList.remove("active-item-job1")
    });
    container1.forEach((container1) => {
        container1.classList.remove("active-item-job1")
        
    });
    btnJob1[manual1].classList.add("active-item-job1");
    container1[manual1].classList.add("active-item-job1");
    }
    btnJob1.forEach((btn1, i) => {
        btn1.addEventListener("click", () => {
            listJob1 (i);
            aboutJob1.classList.add("active-about1");
        });
    });
    
    window.onclick = function(event) {
      if (!event.target.matches('.item-job')) {
        var dropdowns = document.getElementsByClassName("about-job");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('active-about')) {
            openDropdown.classList.remove('active-about');
          }
        }
      }
      if (!event.target.matches('.item-job')) {
        var dropdowns = document.getElementsByClassName("about-job");
        var j;
        for (j = 0; j < dropdowns.length; j++) {
          var openDropdown = dropdowns[j];
          if (openDropdown.classList.contains('active-about1')) {
            openDropdown.classList.remove('active-about1');
          }
        }
      }
      if (!event.target.matches('#btn-call')) {
        var calls = document.getElementsByClassName("sport-call");
        var x;
        for (x = 0; x < calls.length; x++) {
          var call_container = calls[x];
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
      var dropdowns1 = document.getElementsByClassName('about-job');
      for (var x = 0; x < dropdowns.length; x++) {
        var openDropdown = dropdowns1[x];
        if (openDropdown.classList.contains('active-about')) {
          openDropdown.classList.remove('active-about');
        }
      }
      var dropdowns2 = document.getElementsByClassName('about-job');
      for (var y = 0; y < dropdowns.length; y++) {
        var openDropdown1 = dropdowns2[y];
        if (openDropdown1.classList.contains('active-about1')) {
          openDropdown1.classList.remove('active-about1');
        }
      }
    });
// scroll reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1800,
  delay: 200,
  resert:true
})

sr.reveal('.job,.location',{origin: 'top'})
sr.reveal('.image',{origin: 'top'})
sr.reveal('.item-out, .bottom',{interval: 100})
sr.reveal('.video',{origin: 'left'})
sr.reveal('.container-shop',{origin: 'right'})