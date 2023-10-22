const toggleButton = document.querySelector('.js-toggle-button');
const menu = document.querySelector('.navigation');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('navigation--closed');
  toggleButton.classList.toggle('js-toggle-button--opened');
  document.body.classList.toggle('menu-open')
})
