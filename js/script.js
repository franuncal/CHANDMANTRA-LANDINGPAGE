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
    "/img/img-fotosVF/floto_24_11zon.webp",
    "/img/img-fotosVF/floto1_25_11zon.webp",
    "/img/img-fotosVF/floto2_26_11zon.webp",
    "/img/img-fotosVF/floto3_27_11zon.webp",
    "/img/img-fotosVF/floto4_28_11zon.webp",
    "/img/img-fotosVF/floto5_29_11zon.webp",
  ],
  "MANO DE FATIMA": [
    "/img/img-fotosVF/fatima_8_11zon.webp",
    "/img/img-fotosVF/fatima1_9_11zon.webp",
    "/img/img-fotosVF/fatima2_10_11zon.webp",
    "/img/img-fotosVF/fatima3_11_11zon.webp",
    "/img/img-fotosVF/fatima4_12_11zon.webp",
    "/img/img-fotosVF/fatima5_13_11zon.webp",
    "/img/img-fotosVF/fatima6_14_11zon.webp",
  ],
  "CUADRO TRÍPTICO DE MULATAS": [
    "/img/img-fotosVF/flores3_17_11zon.webp",
    "/img/img-fotosVF/flores4_18_11zon.webp",
    "/img/img-fotosVF/flores5_19_11zon.webp",
    "/img/img-fotosVF/flores6_20_11zon.webp",
    "/img/img-fotosVF/flores7_21_11zon.webp",
    "/img/img-fotosVF/flores8_22_11zon.webp",
    "/img/img-fotosVF/flores9_23_11zon.webp",
  ],
  MANDALA: [
    "/img/img-fotosVF/mandala_36_11zon.webp",
    "/img/img-fotosVF/mandala1_37_11zon.webp",
    "/img/img-fotosVF/mandala2_38_11zon.webp",
    "/img/img-fotosVF/mandala3_39_11zon.webp",
  ],
  FRIDA: [
    "/img/img-fotosVF/frida_30_11zon.webp",
    "/img/img-fotosVF/frida1_31_11zon.webp",
    "/img/img-fotosVF/frida2_32_11zon.webp",
  ],
  BUDA: [
    "/img/img-fotosVF/buda_1_11zon.webp",
    "/img/img-fotosVF/buda2_2_11zon.webp",
    "/img/img-fotosVF/buda3_3_11zon.webp",
    "/img/img-fotosVF/buda4_4_11zon.webp",
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

// Cerrar el modal haciendo clic fuera de la imagen
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Cerrar el modal presionando la tecla "Escape"
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
