
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

const links = document.querySelectorAll('.content-link');
const showAll = document.querySelector('#hientatca');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const content = document.querySelector(target);
    const siblings = [...content.parentNode.children].filter(el => el !== content && el.matches('.container'));

    siblings.forEach(sibling => sibling.style.display = 'none');
    content.style.display = 'block';
  });
});

showAll.addEventListener('click', (event) => {
  event.preventDefault();
  const contents = document.querySelectorAll('.container');
  contents.forEach(content => content.style.display = 'block');
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// show submenu cua trang menu    
/// Lấy tất cả các dropdown-btn
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Lặp qua từng dropdown-btn và thêm sự kiện click
dropdownBtns.forEach(function(dropdownBtn) {
  dropdownBtn.addEventListener('click', function() {
    // Thêm hoặc xóa lớp "active" để đánh dấu dropdown-btn được kích hoạt
    this.classList.toggle('active');
    // Lấy dropdown-container liền kề
    const dropdownContainer = this.nextElementSibling;
    // Kiểm tra nếu dropdown-container đang hiển thị, ẩn nó đi, ngược lại nếu đang bị ẩn thì hiển thị nó lên
    if (dropdownContainer.style.display === 'block') {
      dropdownContainer.style.display = 'none';
    } else {
      dropdownContainer.style.display = 'block';
    }
    // Lấy tất cả các dropdown-container trong cùng ul
    const dropdownContainers = this.parentNode.querySelectorAll('.dropdown-container');
    // Lặp qua từng dropdown-container và kiểm tra nếu nó khác với dropdown-container hiện tại thì ẩn nó đi
    dropdownContainers.forEach(function(container) {
      if (container !== dropdownContainer) {
        container.style.display = 'none';
      }
    });
  });
});

// Lấy tất cả các phần tử chứa các dropdown-menu
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Lặp qua mỗi dropdown-menu và thêm sự kiện click
dropdownMenus.forEach(function(dropdownMenu) {
  dropdownMenu.addEventListener('click', function(event) {
    // Chỉ định phần tử được nhấp vào
    const clickedElement = event.target;

    // Lấy tất cả các phần tử chứa các dropdown-menu trong cùng ul
    const dropdownItems = dropdownMenu.querySelectorAll('.content-link');

    // Lặp qua mỗi phần tử trong dropdown-menu và xóa lớp "active" và đổi màu sắc về mặc định
    dropdownItems.forEach(function(dropdownItem) {
      dropdownItem.classList.remove('active');
      dropdownItem.style.color = ''; // Đặt màu sắc về mặc định của thẻ a
    });

    // Nếu phần tử được nhấp vào là một mục con của dropdown-menu, thêm lớp "active" cho dropdown-menu cha
    if (clickedElement.classList.contains('content-link')) {
      clickedElement.parentNode.parentNode.previousElementSibling.classList.add('active');
    }

    // Thêm lớp "active" cho phần tử được nhấp vào và đổi màu sắc của nó
    clickedElement.classList.add('active');
    clickedElement.style.color = 'red'; // Đặt màu sắc mới cho thẻ a
  });
});


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
    duration: 100,
    delay: 50,
    resert:true
})

sr.reveal('h3,.content',{origin: 'top'})
sr.reveal('.bottom',{interval: 100})
sr.reveal('p',{origin: 'left'})
sr.reveal('span',{origin: 'right'})
