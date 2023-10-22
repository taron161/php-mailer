const mailButton = document.querySelector('.mail-button');

const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.modal__close-button');

mailButton.addEventListener('click', () => {
  modal.classList.add('modal--opened');
  document.body.classList.add('modal-open');
})


closeButton.onclick = () => {
  modal.classList.remove('modal--opened');
  document.body.classList.remove('modal-open');
}
