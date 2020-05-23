$(document).ready(function(){
    $('.hero-slider').slick({
      arrows: true,
      dots: true,
      infinity: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="hero-slider__arrow hero-slider__arrow_left"></div>',
      nextArrow: '<div class="hero-slider__arrow hero-slider__arrow_right"></div>',
      appendDots: $('.hero-slider__dots')
    });
  });