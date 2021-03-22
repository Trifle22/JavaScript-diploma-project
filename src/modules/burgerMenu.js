const burgerMenu = function() {
  const burgerMenuBtn = document.querySelector('.menu-button');
  const menu = document.querySelector('.popup-menu');
  burgerMenuBtn.addEventListener('click', (event) => {
    const target = event.target;
    menu.style.cssText = "display: flex; animation: fade 0.4s ease-in-out;";

    menu.addEventListener('click', function(event) {
      const target = event.target;
      if (target.closest('.close-menu-btn')) {
        this.style.display = 'none';
      } else if (target.matches('a')) {
        this.style.display = 'none';
      }
    })
  })

}

export default burgerMenu;