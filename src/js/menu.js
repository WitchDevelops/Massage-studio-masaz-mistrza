// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
  
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }

const burgerButton = document.querySelector('.burger-menu');

burgerButton.addEventListener('click', () => {
  const isOpened = burgerButton.getAttribute('aria-expanded');
  if (isOpened == 'false') {
    burgerButton.setAttribute('aria-expanded', 'true');
  } else {
    burgerButton.setAttribute('aria-expanded', 'false');
  }
})