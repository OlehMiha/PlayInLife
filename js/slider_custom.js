$(document).ready(function(){ 
    
//Слайдер

    $('.slider_sert').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        speed: 500,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
   

    $('.slide_sponsor').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        speed: 500,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 750,
              settings: {
                arrows: false,
              }
            },
        ]
    });

});
