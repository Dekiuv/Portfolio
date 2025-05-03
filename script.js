// Marca el enlace activo al hacer scroll (opcional)
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
