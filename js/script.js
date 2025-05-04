const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= scrollY + 100 && section.offsetTop + section.offsetHeight > scrollY + 100) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

const typedText = document.querySelector(".typed-text");

const words = ["Especialista IA", "Analista de datos", "Administrador de sistemas", "Programador junior", "Gestor de redes"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 2000; // Tiempo visible antes de borrar

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting && charIndex <= currentWord.length) {
    typedText.textContent = currentWord.substring(0, charIndex++);
    setTimeout(type, typingDelay);
  } else if (isDeleting && charIndex >= 0) {
    typedText.textContent = currentWord.substring(0, charIndex--);
    setTimeout(type, erasingDelay);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      setTimeout(type, newWordDelay); // Espera antes de borrar
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) setTimeout(type, 500);
});

