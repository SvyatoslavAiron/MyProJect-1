document.addEventListener("DOMContentLoaded", function () {
   const btnMenu = document.querySelector(".header__btn-menu");
   const Menu = document.querySelector(".header__menu");
   const menuInner = document.querySelector(".header__menu-inner");


   document.addEventListener("click", movingMenu)
   document.addEventListener("keydown", movingMenuEsc)
   window.addEventListener("scroll", scroll)
   window.addEventListener("beforeunload", beforeUnLoad);

   function movingMenu(event) {
      // btnMenu.classList.toggle("header__btn-menu_active");
      // Menu.classList.toggle("header__menu_active");
      if (event.target.closest(".header__menu-inner")) {
         btnMenu.classList.toggle("header__btn-menu_active");
         Menu.classList.toggle("header__menu_active");
      }
      if (!event.target.closest(".header__menu-inner")) {
         btnMenu.classList.remove("header__btn-menu_active");
         Menu.classList.remove("header__menu_active");
      }
   }
   function movingMenuEsc(event) {
      if (event.code === 'Escape') {
         btnMenu.classList.remove("header__btn-menu_active");
         Menu.classList.remove("header__menu_active");
      }
   }
   function beforeUnLoad(event) {
      event.preventDefault();
      event.returnValue = '';
   }
   window.onblur = function () {
      document.title = 'Возвращайтесь😊';
   };
   window.onfocus = function () {
      document.title = 'MyProjectS';
   };

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("anim-active")
         } else {
            entry.target.classList.remove("anim-active")
         }
      });
   }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
   });

   const targetElements = document.querySelectorAll('.anim');
   targetElements.forEach(element => {
      observer.observe(element);
   });
})