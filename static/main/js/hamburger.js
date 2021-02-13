const $hamburgerButton = document.querySelector('.header .header__hamburger');
const $headerControls = document.querySelector('.header .header__controls');

$hamburgerButton.addEventListener('click', () => {
    $headerControls.classList.toggle('header__controls-active');
    $hamburgerButton.classList.toggle('header__hamburger-active');
});