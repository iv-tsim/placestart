$(document).ready(function(){
  $('.hero-slider').slick({
    arrows: true,
    dots: true,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<div class="hero-slider__arrow hero-slider__arrow_left"></div>',
    nextArrow: '<div class="hero-slider__arrow hero-slider__arrow_right"></div>',
    appendDots: $('.hero-slider__dots')
  });
  const goodsWrap = document.querySelector('.goods');
  const feedbackWrap = document.querySelector('.feedback');
  document.addEventListener('click', (event) => {
    const {target} = event;
    const overlay = document.querySelector('.overlay');
    const modals = document.querySelectorAll('.modal');
    
    if(target.closest('.feedback-item')) {
      document.querySelector(`.modal#${target.closest('.feedback-item').dataset.modal}`).classList.add('modal_active');
      overlay.classList.add('overlay_active');
      window.scrollTo(0, 0);
      document.body.style.overflowY = 'hidden';
    }
    if (target.matches('.modal-close') || target.matches('.overlay')) {
      modals.forEach(item => {item.classList.remove('modal_active')});
      overlay.classList.remove('overlay_active');
      document.body.style.overflowY = 'auto';
    }
  });
  const images = (event) => {
    const {target} = event;
    if(target.matches('a.goods-items__block-text')) {
        const goodsPhoto = target.closest('.goods-items__block').children[0];
        const source = goodsPhoto.getAttribute('src');
        goodsPhoto.src = goodsPhoto.dataset.img;
        goodsPhoto.dataset.img = source;
    }
    if(target.matches('div.feedback-item__text') || target.matches('img.feedback-item__img')) {
      const goodsPhoto = target.closest('.feedback-item').children[0];
      const source = goodsPhoto.getAttribute('src');
      goodsPhoto.src = goodsPhoto.dataset.img;
      goodsPhoto.dataset.img = source;
  }
  };
  goodsWrap.addEventListener('mouseenter', (event) => {
    images(event);
  }, true);
  goodsWrap.addEventListener('mouseleave', (event) => {
    images(event);
  }, true);
  feedbackWrap.addEventListener('mouseenter', (event) => {
    images(event);
  }, true);
  feedbackWrap.addEventListener('mouseleave', (event) => {
    images(event);
  }, true);
});