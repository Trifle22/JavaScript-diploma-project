const clubsSelect = function() {
  const clubsSelectElement = document.querySelector('.clubs-list');
  clubsSelectElement.addEventListener('click', (event) => {
    clubsSelectElement.querySelector('ul').classList.toggle('club-list-active');
    
  })
}

export default clubsSelect;
