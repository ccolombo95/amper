// Función para alternar el menú
function toggleMenu() {
  const navBarList = document.querySelector(".navbar-list");
  const lines = document.querySelectorAll(".navbar-icon span");

  // Alternar la clase 'show' en la lista del menú
  navBarList.classList.toggle("show");

  // Alternar clases activas en las líneas del menú
  lines[0].classList.toggle("active");
  lines[1].classList.toggle("active");
  lines[2].classList.toggle("active");
}

// Asignar el evento de clic al botón de menú
document.querySelector(".navbar-icon").addEventListener("click", toggleMenu);
