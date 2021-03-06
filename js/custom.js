$(document).ready(function(){ 
var width_el = Number(document.documentElement.clientWidth);
    


//Отключить выделение
    window.oncontextmenu = function() {
        return false;
    } 

    document.addEventListener('mousemove',function(e){
      if( e.target.getAttribute('unselectable')=='on' )
        e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
    },false);
    

//Меню топ моб.
    $(".button_mobi_menu").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_menu').removeClass("active");
            $('.leftbar_js').removeClass("active");
            $("#mobi-menu-zona").remove();
            return;
        }
        $('.button_mobi_menu').addClass("active");
        $('.leftbar_js').addClass("active");
        $(".all").append('<div id="mobi-menu-zona"><div>');
    }); 

    $(document).on('click','#mobi-menu-zona', function (e) {
        $(".button_mobi_menu").trigger('click');
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


//Клик edit
    $(document).on('click','.clicker_js', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).next(".clicker-iner_js").removeClass("active");
            $(this).next(".clicker-iner_js").fadeOut(500);
            return;
        }
        $(this).addClass('active');
        $(this).next(".clicker-iner_js").fadeIn(500);
        $(this).next(".clicker-iner_js").addClass('active');
        $(this).next(".clicker-iner_js").append('<div id="clicker-zona"><div>');
    });

    $(document).on('click','.clicker-iner_js a, .clicker-iner_js button, .clicker-iner_js #clicker-zona', function (e) {
        e.preventDefault();
        if ($(this).closest('.clicker-iner_js').hasClass('active')) {
            $(this).closest('.clicker-iner_js').removeClass("active");
            $(this).closest('.clicker-iner_js').prev('.clicker_js').removeClass("active");
            $(this).closest('.clicker-iner_js').fadeOut(500);
            $("#clicker-zona").remove();
            return;
        }
        $(this).closest('.clicker-iner_js').addClass('active');
        $(this).closest('.clicker-iner_js').fadeIn(500);
        $(this).closest('.clicker-iner_js').prev('.clicker_js').addClass('active');
    });

//Level
$(document).on('click','#level_close', function (e) {
    $(".header_level_div").fadeOut(500);
});
$(document).on('click','#level_open', function (e) {
    $(".header_level_div").fadeIn(500);
});

//open
    $(document).on('click','.open_js', function (e) {
        e.preventDefault();
        var class_open = $(this).attr('data-open');
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $('.' + class_open).fadeOut(500);
            return;
        }
        $(this).addClass('active');
        $('.' + class_open).fadeIn(500);
    });

//gellary (active clicker)
    $(document).on('click','.black_check, .active_clicker_js', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            return;
        }
        $(this).addClass('active');
    });


//all_comments
$('.view_comments_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass("active");
        $(".all_comments_js").removeClass("active");
        $(this).find('a').text('Показать все комментарии');
        return;
    }
    $(this).addClass('active');
    $(".all_comments_js").addClass('active');
    $(this).find('a').text('Скрыть все комментарии');
});



//Menu notifications
$(".notifications_iner_js." + $('.notifications_js li.active a').attr('href')).fadeIn(200);
$('.notifications_js').on('click', 'li', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).find('a').attr('href');

    $(".notifications_js li").removeClass('active');
    $(".notifications_iner_js").css('display','none');

    $(".notifications_iner_js." + class_tab).fadeIn(200);
    $(this).addClass('active');
});

$('.notifications_selected_js ul').on('click', 'li', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).index() + 1;
    
    $(".notifications_selected_js li").removeClass('active');
    $(".notifications_iner_js").css('display','none');

    $(".notifications_iner_js.not" + class_tab).fadeIn(200);
    $(this).addClass('active');
});

//Message
$(".message_iner_js." + $('.message_js a.active').attr('href')).fadeIn(200);
$('.message_js').on('click', 'a', function (e) {
    e.preventDefault();

    if(width_el <= 768){
        if( !($(".message_page_right_col").hasClass('active')) ){
            $(".message_page_right_col").addClass('active');
            $(".message_page_left_col").css('display','none');
        }
    }

    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('href');

    $(".message_js a").removeClass('active');
    $(".message_iner_js").css('display','none');

    $(".message_iner_js." + class_tab).fadeIn(200);
    $(this).addClass('active');
});
$('.header_message_mobi').on('click', 'a.arr', function (e) {
    e.preventDefault();

    $(".message_page_right_col").removeClass('active');
    $(".message_page_left_col").css('display','block');
});


//Acardion
$(".acardion_iner_js." + $('.acardion_js a.acardion_top.active').attr('href')).fadeIn(200);
$('.acardion_js').on('click', 'a.acardion_top', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(".acardion_js a.acardion_top").removeClass('active');
        $(".acardion_iner_js").css('display','none');
        return;
    }

    var class_tab = $(this).attr('href');

    $(".acardion_js a.acardion_top").removeClass('active');
    $(".acardion_iner_js").css('display','none');

    $(".acardion_iner_js." + class_tab).fadeIn(200);
    $(this).addClass('active');
});

//Settings
$(".settings_iner_js." + $('.settings_js a.edit_a.active').attr('href')).fadeIn(200);
$('.settings_js').on('click', 'a.edit_a', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('href');

    $(".settings_js a.edit_a").removeClass('active');
    $(".settings_iner_js").css('display','none');

    $(".settings_iner_js." + class_tab).fadeIn(200);
    $(this).addClass('active');
});

//Tabs
$(".tab_js." + $('.tabs_js.active').attr('data-tab')).fadeIn(200);
$('.tabs_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-tab');

    $(".tabs_js").removeClass('active');
    $(".tab_js").css('display','none');

    $(".tab_js." + class_tab).fadeIn(200);
    $(this).addClass('active');
});

//Tabs_iner
$(".tab_iner_js." + $('.tabs_iner_js.active').attr('data-tab')).fadeIn(200);
$('.tabs_iner_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-tab');

    $(".tabs_iner_js").removeClass('active');
    $(".tab_iner_js").css('display','none');

    $(".tab_iner_js." + class_tab).fadeIn();
    $(this).addClass('active');
});

//Achievements ver
$('#button_card_block_v_js').on('click', function (e) {
    e.preventDefault();

    $(".card_block_v1").css('display','none');
    $(".card_block_v2").fadeIn();
});
$('#card_block_back').on('click', function (e) {
    e.preventDefault();

    $(".card_block_v2").css('display','none');
    $(".card_block_v1").fadeIn();
});

//Progres bar Level Iner 
$("#rank_level_progres_bar").change(function(event) {
    setTimeout(function run() {
        var value = parseInt($("#rank_level_progres_bar").val());
        var min = parseInt($("#rank_level_progres_bar").attr('min'));
        var max = parseInt($("#rank_level_progres_bar").attr('max'));

        if(value > max)
        {
            value = max;
        } 
        else if (value < min ) 
        {
            value = min;
        }

        $(".rank_level_progres_bar_iner span").css('width', (value * 100 / max) + "%");
      

        setTimeout(run, 0);
    }, 0);
}).change();

//Reg Click
$('.reg_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('href');

    $(".form_reg").removeClass('active');
    $(".reg_js").removeClass('active');

    $(".form_reg." + class_tab).addClass('active');
    $(this).addClass('active');
});



//Меню топ скрол
    var h = $(window).height();
 
    // if ( ($(this).scrollTop()) > 0 ) {
    //     $(".menu_div").addClass('scroll');
    // } 
    $(window).scroll(function(){
        // if ( ($(this).scrollTop()) > 0 ) {
        //     $(".menu_div").addClass('scroll');
        // } 
        // if ( $(this).scrollTop() == 0 ) {
        //     $(".menu_div").removeClass('scroll');
        // }


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