$(function () {
  $('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: '#does-not-exit',
    prevArrow: '#does-not-exit',
    cssEase: 'linear'
  });

  $('.logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: '#does-not-exit',
    prevArrow: '#does-not-exit',
  });
});
