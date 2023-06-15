
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

const btn_promotion = document.querySelector("#promotion");
const promotion_close = document.querySelector(".promotion-close");
const promotion = document.querySelector(".promotion");

btn_promotion.addEventListener("click", () => {
  promotion.classList.add("promotion-active");
});

promotion_close.addEventListener("click", () => {
  promotion.classList.remove("promotion-active");
});
window.onclick = function(event) {
  if (!event.target.matches('#promotion')) {
    var dropdowns = document.getElementsByClassName("promotion");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('promotion-active')) {
        openDropdown.classList.remove('promotion-active');
      }
    }
  }
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#btn-user').onclick = () =>{
    loginForm.classList.toggle('active');
}
let shop = document.querySelector('.shop');

document.querySelector('#shop').onclick = () =>{
  shop.classList.toggle('active-shop');
}


const btns = document.querySelectorAll(".box");
const container = document.querySelectorAll(".container");
var listproduct = function(manual){

  btns.forEach((btn) => {
    btn.classList.remove("active")
  });
  container.forEach((container) => {
    container.classList.remove("active")
  });

  btns[manual].classList.add("active");
  container[manual].classList.add("active");
}
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      listproduct (i);
    });
  });



const button = document.querySelectorAll(".name");
const shop_container = document.querySelectorAll(".shop-container");
var list_shop = function(manual){

  button.forEach((btn) => {
    btn.classList.remove("active_shop")
  });
  shop_container.forEach((container) => {
    container.classList.remove("active_shop")
  });

  button[manual].classList.add("active_shop");
  shop_container[manual].classList.add("active_shop");
}
  button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      list_shop (i);
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

  
  // slide
  let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let image = document.querySelector('.images');
    let items = document.querySelectorAll('.images .item');
    let contents = document.querySelectorAll('.content .item');
    
    let rotate = 0;
    let active = 0;
    let countItem = items.length;
    let rotateAdd = 360 / countItem;
    
    function nextSlider(){
        active = active + 1 > countItem - 1 ? 0 : active + 1;
        rotate = rotate + rotateAdd; 
        show();
    }
    function prevSlider(){
        active = active - 1 < 0 ? countItem - 1 : active - 1;
        rotate = rotate - rotateAdd; 
        show();     
         
    }
    function show(){
        image.style.setProperty("--rotate", rotate + 'deg');
        image.style.setProperty("--rotate", rotate + 'deg');
        contents.forEach((content, key) => {
            if(key == active){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        })
    }
    next.onclick = nextSlider;
    prev.onclick = prevSlider;
    const autoNext = setInterval(nextSlider, 6000);
  


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
    duration: 800,
    delay: 100,
    resert:true
  })
  
  sr.reveal('.content,.box-container',{origin: 'top'})
  sr.reveal('.title',{origin: 'top'})
  sr.reveal('.box, .bottom',{interval: 100})
  sr.reveal('.video',{origin: 'left'})
  sr.reveal('.content',{origin: 'right'})
  





//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    alert("Payment success");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var card = button.parentElement;
    var titulo = card.getElementsByClassName('titulo-item')[0].innerText;
    var precio = card.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = card.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}
const btn_Shop = document.querySelector("#btn-shop");
let count_shop = 0;

if(btn_Shop){
  btn_Shop.addEventListener('click', () =>{
      count_shop++;
      var carrito = document.getElementsByClassName('carrito')[0];
      if (count_shop % 2 !== 0) {   
        carrito.style.marginRight = '0';
        carrito.style.opacity = '1';
      } else {
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
      }
  });
}
//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    count_shop = 1;
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var card = document.createElement('div');
    card.classList.add = ('card');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("The product has been added to the cart before");
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" height="100px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-circle-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-circle-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
              <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    card.innerHTML = itemCarritoContenido;
    itemsCarrito.append(card);

    //Agregamos la funcionalidad eliminar al nuevo item
    card.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    var botonRestarCantidad = card.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    var botonSumarCantidad = card.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('container')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var card = carritoItems[i];
        var precioElemento = card.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = card.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}

