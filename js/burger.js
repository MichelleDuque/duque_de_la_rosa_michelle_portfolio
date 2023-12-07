(() => {
    
const btn_burger = document.querySelector('.hamburger');
const burger_menu = document.querySelector('.burger_menu');
const burger_image = document.querySelector("#hamburger-image");


btn_burger.addEventListener('click', function () {
  btn_burger.classList.toggle('is-active');
  burger_menu.classList.toggle('is-active');
  if (btn_burger.classList.contains("is-active")){
    burger_image.src = "images/close_menu.svg";
  } else{
    burger_image.src = "images/open_menu.svg";
  }
});


burger_menu.addEventListener('click', function () {
  btn_burger.classList.toggle('is-active');
  burger_menu.classList.toggle('is-active');
  if (btn_burger.classList.contains("is-active")){
    burger_image.src = "images/close_menu.svg";
  } else{
    burger_image.src = "images/open_menu.svg";
  }
});


})();