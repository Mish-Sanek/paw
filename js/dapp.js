const modalWindow = document.querySelector('.modal-window');
const modalWindowClose = modalWindow.querySelector('.modal-window__close');
const selectCoinButtons = document.querySelectorAll('.swap__form-coin-select');

selectCoinButtons.forEach((button) => button.addEventListener('click', () => modalWindow.classList.add('active')));
modalWindowClose.addEventListener('click', () => modalWindow.classList.remove('active'));

const detailsButton = document.querySelector('.transaction-details__button');

detailsButton.addEventListener('click', () => detailsButton.classList.toggle('active'));
