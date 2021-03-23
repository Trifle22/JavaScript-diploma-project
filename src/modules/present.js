const present = function() {
  const presentGift = document.querySelector('.fixed-gift');
  const popupGift  = document.getElementById('gift');
  const handlerGiftPopup = function() {
    popupGift.classList.toggle('active');
  }
  document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.closest('.fixed-gift')) {
      target.style.display = 'none';
      handlerGiftPopup();
    } else if (target.closest('.close_icon') || 
    target.closest('.close-btn') || 
    !target.closest('.form-content')) {
      handlerGiftPopup();
    }
  });
}

export default present;