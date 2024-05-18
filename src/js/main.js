import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

window.Bootstrap = bootstrap;

import Swal from "sweetalert2";
window.Swal = Swal;

window.Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

window.addEventListener("load", function () {
  var load_screen = document.getElementById("load_screen");
  if (load_screen) {
    load_screen.style.opacity = 1;
    var fadeEffect = setInterval(function () {
      if (load_screen.style.opacity < 0.1) {
        clearInterval(fadeEffect);
        load_screen.style.display = "none";
      } else {
        load_screen.style.opacity -= 0.1;
      }
    }, 30);
  }
});

document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const backdropNav = document.querySelector('.backdrop-nav');

  toggleBtn.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    backdropNav.classList.toggle('active'); // Mostrar u ocultar el backdrop
  });
  backdropNav.addEventListener('click', function () {
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    backdropNav.classList.remove('active');
  });

  const headerHeight = document.querySelector('.header').offsetHeight;
  const scrollOffset = headerHeight;

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const targetOffset = targetSection.offsetTop - scrollOffset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
        history.pushState(null, null, `#${targetId}`);
        if (navMenu) {
          navMenu.classList.remove('active');
        }
        if (backdropNav) {
          backdropNav.classList.remove('active');
        }
      }
    });
  });
});