smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 600, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  callback: function () {
  } // Function to run after scrolling
});

// MODAL
let modalFlex = document.getElementById('modal-flex');

const openModal = (idModal) => {
  let myModal = document.getElementById(idModal);
  myModal.style.display = 'block';
}

const closeModal = (idModal) => {
  let myModal = document.getElementById(idModal);
  myModal.style.display = 'none';
}

// EVENTO DEL MENU RESPONSIVE
document.getElementById("icon-menu").addEventListener("click", () => {
  document.getElementById("show-menu").classList.toggle("show");
});


