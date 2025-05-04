function abrirModal(titulo, descripcion, enlace) {
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal-link").href = enlace;
    document.getElementById("modal").style.display = "flex";
  }
  
  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  window.addEventListener("click", e => {
    if (e.target.id === "modal") cerrarModal();
  });
  
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarModal();
  });
  