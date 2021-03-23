const gallerySlider = () => {
  const slider = document.querySelector('.gallery-slider');
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.gallery-slider-dot');

  let interval;
  let currentSlide = 0;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlider
}

export default gallerySlider;