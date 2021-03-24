'use strict';

import burgerMenu from './modules/burgerMenu.js';
import clubsSelect from './modules/clubsSelect.js';
import present from './modules/present.js';
import calculator from './modules/calculator.js'; 
import mainSlider from './modules/mainSlider.js';
import gallerySlider from './modules/gallerySlider.js';
import SliderCarousel from './modules/SliderCarousel.js';
import headerModals from './modules/headerModals.js';
import sendFooterForm from './modules/sendFooterForm.js';
import validateInputs from './modules/validateInputs.js';


burgerMenu();
clubsSelect();
present();
calculator();
mainSlider();
gallerySlider();
headerModals();
sendFooterForm();
validateInputs();


const carousel = new SliderCarousel({
  main: '.slider-carousel-wrapper',
  wrap: '.services-slider',
  prev: '.carousel-arrow-prev',
  next: '.carousel-arrow-next',
  slidesToShow: 4,
  infinity: true,
});

carousel.init();