let body = document.body;
let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = function() {
   profile.classList.toggle('active');
   searchForm.classList.remove('active');
}
let searchForm = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = function() {
   searchForm.classList.toggle('active');
   profile.classList.remove('active');
}
let slideBar = document.querySelector('.slide-bar');
document.querySelector('#menu-btn').onclick = function() {
   slideBar.classList.toggle('active');
   body.classList.toggle('active');
}
document.querySelector('.slide-bar .close-bar').onclick = function() {
   slideBar.classList.remove('active');
   body.classList.remove('active');  
}
window.onscroll = function() {
   profile.classList.remove('active');
   searchForm.classList.remove('active');
   if(window.innerWidth > 1200){
      slideBar.classList.remove('active');
      body.classList.remove('active'); 
   }
}
let toggleBtn = document.getElementById('toggle-btn'); 
let darkMode = localStorage.getItem('dark-mode');
const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}
const disableDarkMode = function () {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}
if (darkMode === 'enabled') {
   enableDarkMode();
}
toggleBtn.onclick = function (e) {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'enabled') {
      disableDarkMode();
   } else {
      enableDarkMode();
   }
}

