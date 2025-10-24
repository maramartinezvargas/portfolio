// Función para modificar el tamaño de la img según se hace scroll y se llega a la sección.
document.addEventListener("scroll", () => {
    const image = document.getElementById("scroll-effect-img");
    const rect = image.getBoundingClientRect();
  
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      image.classList.add("scrolled");
    } else {
      image.classList.remove("scrolled");
    }
  });