import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

window.Bootstrap = bootstrap;

import Swal from "sweetalert2";
window.Swal = Swal;


window.addEventListener("load", function () {
    var load_screen = document.getElementById("load_screen");
    if (load_screen) {
        load_screen.style.opacity = 1;
        var fadeEffect = setInterval(function() {
          if (load_screen.style.opacity < 0.1) {
            clearInterval(fadeEffect);
            load_screen.style.display = "none";
          } else {
            load_screen.style.opacity -= 0.1;
          }
        }, 30);
      }
});


document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('themeSwitch');
  
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
      currentTheme = 'light';
  }
  document.documentElement.setAttribute('data-bs-theme', currentTheme);
  
  function toggleTheme() {
      if (currentTheme === 'light') {
          currentTheme = 'dark';
      } else {
          currentTheme = 'light';
      }
      document.documentElement.setAttribute('data-bs-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
  }
  
  themeSwitch.addEventListener('change', toggleTheme);
});


document.addEventListener("DOMContentLoaded", function() {

  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', function() {
    console.log("DSasd");
      navMenu.classList.toggle('active');
  });
});

