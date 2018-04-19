$(document).ready(function(){ 
//Отключить выделение
    window.oncontextmenu = function() {
        return false;
    } 

    document.addEventListener('mousemove',function(e){
      if( e.target.getAttribute('unselectable')=='on' )
        e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
    },false);
    

//Меню топ  
var close = false;
    $(".button_mobi_menu").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_menu').removeClass("active");
            close = false;
            $('.menu_div').removeClass("active");
            return;
        }
        $('.button_mobi_menu').addClass("active");
        $('.menu_div').addClass("active");
        close = true;
    }); 

    $(".menu_top li:not(.price_menu_modal)").on('click', function () {
        if(close = true){
            $('.button_mobi_menu').removeClass("active");
            $('.menu_div').removeClass("active");
            close = false;
        
        }
    }); 




//Плавный скрол
    $('.menu_top a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 80
    });

    $('a.go_a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 80
    });


//Меню топ скрол
    var h = $(window).height();
 
    if ( ($(this).scrollTop()) > 0 ) {
        $(".menu_div").addClass('scroll');
    } 
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) > 0 ) {
            $(".menu_div").addClass('scroll');
        } 
        if ( $(this).scrollTop() == 0 ) {
            $(".menu_div").removeClass('scroll');
        }


        $('.mov_next_fadeInUp').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInUp');
            } else {
                $(this).removeClass('animated fadeInUp');
            }
        });


        $('.mov_next_fadeInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('p'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft')
                    }, 0 + (i * 250));

                  });
            } else {
                $(this).find('p').removeClass('animated fadeInLeft');
            }
        });
        $('.mov_next_fadeInRight').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInRight')
                    }, 0 + (i * 150));

                  });
            } else {
                $(this).find('div').removeClass('animated fadeInRight');
            }
        });


        $('.mov_next_fadeIn').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeIn');
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });

        $('.mov_next_fadeIn_timeOut').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                var el = $(this);
                setTimeout(function() {
                        $(el).addClass('animated fadeIn');
                    }, 500);
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });


        $('.mov_slideInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft');
                    }, 0 + (i * 80));

                  });
            } else {
                $(this).find('div').removeClass('animated fadeInLeft');
            }
        });
    });
    

    var width_el = Number(document.documentElement.clientWidth);
    if(width_el <= 768){
        $('.item_block_1').removeClass('active');
    }


	
	

//Формы  
    $("#sps").on("click","div", function () {
            $('#sps').modal('toggle');
     });


    $("#manedj_form").submit(function() {

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "zakaz.php", 
            data: th.serialize()
        }).done(function() {
            
            th.trigger("reset");
            $('#exampleModal_1').modal('toggle');
            setTimeout(function() {
                $('#sps').modal('toggle');
            },250);
        });
        return false;
    });

    
    $("#perezvon_form").submit(function() {

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "zakaz.php", 
            data: th.serialize()
        }).done(function() {
            
            th.trigger("reset");
            $('#exampleModal_2').modal('toggle');
            setTimeout(function() {
                $('#sps').modal('toggle');
            },250);
        });
        return false;
    });

    $("#katalog_form").submit(function() {

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "zakaz.php", 
            data: th.serialize()
        }).done(function() {
            
            th.trigger("reset");
            $('#exampleModal_3').modal('toggle');
            setTimeout(function() {
                $('#sps').modal('toggle');
            },250);
        });
        return false;
    });

    $("#vopros_form").submit(function() {

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "vopros.php", 
            data: th.serialize()
        }).done(function() {
            
            th.trigger("reset");
            $('.button_form_vopros').addClass('good');
            $('.button_form_vopros').text('Вопрос отправлен!');
            $('.button_form_vopros').attr('disabled',true);

        });
        return false;
    });


	
	

});