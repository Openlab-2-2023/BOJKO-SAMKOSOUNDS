let navButton = document.querySelector('.hamburger-button');
let mainPage = document.querySelector('.main');
let navPage = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
  mainPage.style.display = mainPage.style.display === 'none' ? 'block' : 'none';
  navPage.style.display = navPage.style.display === 'block' ? 'none' : 'block';
})