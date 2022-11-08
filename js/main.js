$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // items: 3,
    // center: true,
    // // autoWidth: true,
    // slideTransition: 'linear',
    // dots: true,
    // autoplay: true,
    // autoplayTimeout: 500,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay: true,
    navContainer: '.reviews__navs',
    autoplayTimeout: 10000,
    responsiveClass:true,
    center: true,
    // autoWidth: true,
    loop:true,
    items: 3,
    nav: false,
    dots: true,
    responsive:{
        0:{
          margin: 150,
          items: 1
        },
        1010:{
          margin: 20
        }
    }
  });
});