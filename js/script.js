document.addEventListener("DOMContentLoaded", () => {
  // Menu Hamburguesa
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  const navLinks = document.querySelectorAll(".nav-list li a");

  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
  });

  // Agregar un evento de clic a cada enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Cerrar el menú
      const nav = document.querySelector(".nav");
      nav.classList.remove("visible");
    });
  });
});

// Modal Cards
// Obtener el modal y elementos
let modal = document.getElementById("productModal");
let modalImage = document.getElementById("modalImage");
let currentImageIndex = 0;
let currentProductName = ""; // Variable global para el nombre del producto

// Lista de imágenes por producto
let productImages = {
  "FLOR DE LOTO": [
    "/img/img-fotosVF/floto.jpg",
    "/img/img-fotosVF/floto1.jpg",
    "/img/img-fotosVF/floto2.jpg",
    "/img/img-fotosVF/floto3.jpg",
    "/img/img-fotosVF/floto4.jpg",
    "/img/img-fotosVF/floto5.jpg",
  ],
  "MANO DE FATIMA": [
    "/img/img-fotosVF/fatima.jpg",
    "/img/img-fotosVF/fatima1.jpg",
    "/img/img-fotosVF/fatima2.jpg",
    "/img/img-fotosVF/fatima3.jpg",
    "/img/img-fotosVF/fatima4.jpg",
    "/img/img-fotosVF/fatima5.jpg",
    "/img/img-fotosVF/fatima6.jpg",
  ],
  "FLORES COLORES": [
    "/img/img-fotosVF/flores1.jpg",
    "/img/img-fotosVF/flores2.jpg",
    "/img/img-fotosVF/flores3.jpg",
    "/img/img-fotosVF/flores4.jpg",
    "/img/img-fotosVF/flores5.jpg",
    "/img/img-fotosVF/flores6.jpg",
    "/img/img-fotosVF/flores7.jpg",
    "/img/img-fotosVF/flores8.jpg",
    "/img/img-fotosVF/flores9.jpg",
  ],
  MANDALA: [
    "/img/img-fotosVF/mandala.jpg",
    "/img/img-fotosVF/mandala1.jpg",
    "/img/img-fotosVF/mandala2.jpg",
    "/img/img-fotosVF/mandala3.jpg",
  ],
  FRIDA: [
    "/img/img-fotosVF/frida.jpg",
    "/img/img-fotosVF/frida1.jpg",
    "/img/img-fotosVF/frida2.jpg",
  ],
  "ROSA PEONIA": [
    "/img/img-fotosVF/peonia.jpg",
    "/img/img-fotosVF/peonia1.jpg",
  ],
};

// Función para mostrar la imagen en el modal
function showImage(images, index) {
  modalImage.src = images[index];
}

// Obtener todas las cards
let cards = document.querySelectorAll(".card-item");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    let productName = card.querySelector("h3").textContent;
    let images = productImages[productName];
    currentImageIndex = 0; // Reiniciar índice de imagen
    currentProductName = productName; // Asignar el nombre del producto seleccionado

    // Mostrar la primera imagen del producto
    showImage(images, currentImageIndex);

    // Mostrar el modal
    modal.style.display = "block";
  });
});

// Botones de navegación
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", function () {
  let images = productImages[currentProductName]; // Obtener las imágenes del producto actual
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  showImage(images, currentImageIndex);
});

next.addEventListener("click", function () {
  let images = productImages[currentProductName]; // Obtener las imágenes del producto actual
  currentImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  showImage(images, currentImageIndex);
});

// Cerrar el modal con el botón "X"
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Cerrar el modal haciendo clic fuera del modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Cerrar el modal presionando la tecla "Escape"
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
