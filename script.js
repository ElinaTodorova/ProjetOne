const menuElement = document.getElementById('menuEl');

menuElement.addEventListener('click', (e) => {
  e.preventDefault();

  let hiddenList = document.querySelector('.hidden');
  hiddenList.classList.toggle('visible')
});

