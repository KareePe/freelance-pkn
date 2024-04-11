document.addEventListener("DOMContentLoaded", function () {
    const bar = document.querySelector(".bar");
    const barClose = document.querySelector(".bar-close");
    const mobileDrawer = document.querySelector("#mobile-drawer");
    const navMb = document.querySelector("#navMb");
  
    function toggleDrawer() {
      mobileDrawer.classList.toggle("right-0");
      mobileDrawer.classList.toggle("opacity-0");
      navMb.classList.toggle("translate-x-[100%]");
    }
  
    bar.addEventListener("click", toggleDrawer);
    mobileDrawer.addEventListener("click", toggleDrawer);
    barClose.addEventListener("click", toggleDrawer);
  });