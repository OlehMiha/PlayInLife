$(document).ready(function(){ 
    
//Слайдер

     $('#slick_1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#slick_2'
      });
      $('#slick_2').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
                centerMode: true,
        asNavFor: '#slick_1'
      });

  $(document).on('opened', '.remodal', function () {
      $("#slick_2").slick('reinit');
    });
    $('#fancybox').fancybox({
        autoSize: true,
        beforeShow: function() {
          $('#slick_2').slick('setPosition');
        }
    });



});
