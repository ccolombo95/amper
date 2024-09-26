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

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const wave1 = document.querySelector(".wave.w1");
  const wave2 = document.querySelector(".wave.w2");

  // Configuración del IntersectionObserver
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Activar las animaciones agregando las clases cuando el footer es visible
          wave1.style.animation = "w1 7s linear forwards";
          wave2.style.animation =
            "w2 6s linear -0.125s forwards, desplazamiento 6s ease -0.125s forwards";

          // Deja de observar una vez que las animaciones han empezado
          observer.unobserve(footer);
        }
      });
    },
    { threshold: 0.5 }
  ); // Se activa cuando el footer está al menos al 50% visible

  // Iniciar la observación del footer
  observer.observe(footer);
});
