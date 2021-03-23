const present = function() {
  const presentGift = document.querySelector('.fixed-gift');
  const popupGift  = document.getElementById('gift');
  const handlerGiftPopup = function() {
    popupGift.classList.toggle('active');
  }

  document.addEventListener('click', function(event) {
    const target = event.target;
    console.log(target);

    if (target.closest('.fixed-gift')) {
      target.style.display = 'none';
      handlerGiftPopup();
    // 
  } else if ((target.classList.contains('close_icon') || 
  target.closest('.close-btn') || 
  !target.closest('.form-content')) && popupGift.classList.contains('active')) {
    handlerGiftPopup();
  }
})
}

export default present;