console.log("Script loaded");
const menueToggle = document.getElementById("nav-toggle");
const navRightside = document.getElementById("nav-rightside");
const navItems = document.getElementById("nav-items");
const homeBtn = document.getElementById("home-btn");

menueToggle.addEventListener("click", () => {
  menueToggle.classList.toggle("active");
  navRightside.classList.toggle("active");
  navItems.classList.toggle("active");
  homeBtn.classList.toggle("active");

  
});
