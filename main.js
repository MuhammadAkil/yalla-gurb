 const navToggle = document.querySelector(".mobile-nav-toggle");
 const primaryNav = document.querySelector(".primary-navigation");
 const primaryHead = document.querySelector(".primary-header");

 navToggle.addEventListener('click', () => {
     primaryNav.hasAttribute('data-visible') ?
         navToggle.setAttribute("aria-expanded", false) //Turnry operator
         :
         navToggle.setAttribute("aria-expanded", true);
     primaryNav.toggleAttribute('data-visible'); //primaryNav.classList.toggle('className'); Then called it in css and apply given properties position:fixed;display:block;
     primaryHead.toggleAttribute("data-overlay");
 });