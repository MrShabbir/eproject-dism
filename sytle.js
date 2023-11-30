jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
$(document).ready(function() {
    $('.card-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });