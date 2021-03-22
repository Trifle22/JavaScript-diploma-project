const clubsSelect = function() {
  const clubsSelectElement = document.querySelector('.clubs-list');
  const dropdownElement = document.querySelector('.dropdown-header');

  const handlerDropdown = () => {
    dropdownElement.classList.toggle('club-list-active');    
  };

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.clubs-list')) {
      handlerDropdown();
    } else if (!target.closest('.club-list-active') && 
                dropdownElement.classList.contains('club-list-active')) {
      handlerDropdown();
    } else if (target.classList.contains('club-list-active')) {
      console.log(1);
    }
  })
}

export default clubsSelect;
