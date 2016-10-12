$(document).ready(function () {

    if ($('input.data-inputmask, .inputmask-phone').length > 0) {
        $('input.data-inputmask, .inputmask-phone').mask("+7 (999) 999-99-99");
    }

    /*$(document).on("click", '.burger', function(e) {
     $(".header-nav-mobile").toggleClass('hidden');
     e.preventDefault();
     });*/

    $(document).on("click", '.sliding-panel-link', function (e) {
        $('.sliding-panel').removeClass('active');
        $('body').removeClass('ovh');
        e.preventDefault();
    });

    $(document).on("click", '.burger', function (e) {
        $('.sliding-panel').addClass('active');
        $('body').addClass('ovh');
        e.preventDefault();
    });
    setTimeout(function () {
        what_youll_get();
    }, 100);

    var timeout;
    $(window).resize(function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            what_youll_get();
        }, 200);
    });

    $(document).on("click", '.popup-trigger', function (e) {
        $('.popup').fadeIn(400);
        e.preventDefault();
    });

    $(document).on("click", '.notif', function (e) {
        $('.popup').fadeIn(400);
        e.preventDefault();
    });

    $(document).on("click", '.spc', function (e) {
        $('.sliding-panel').toggleClass('active');
        $('body').removeClass('ovh');
        e.preventDefault();
    });

    $(document).on("click", '.proj', function (e) {
        $('.popup').find('.popup-form').find('.popup-form-title').text('Заказать проект');
        e.preventDefault();
    });

    $(document).on("click", '.call', function (e) {
        $('.popup').find('.popup-form').find('.popup-form-title').text('Заказать звонок');
        e.preventDefault();
    });

    $(document).on("click", '.sliding-panel__close', function (e) {
        $('.sliding-panel').toggleClass('active');
        $('body').removeClass('ovh');
        e.preventDefault();
    });

    $(document).on("click", '.popup-form__close', function (e) {
        $('.popup').fadeOut(400);
        e.preventDefault();
    });

    /*$(document).on("click", '.burger', function(e) {
     $(this).closest(".sliding-panel-item").toggleClass('active');
     $(this).closest(".sliding-panel-item").find('.sliding-panel-dd').stop().slideToggle(400);
     $(this).closest(".sliding-panel-link").toggleClass('active');
     e.preventDefault();
     });
     */


});

$(function () {
    $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
        if ($(this).hasClass('sliding-panel-link')) {
            $('body').removeClass('ovh');
            $('.sliding-panel').removeClass('active');
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


function what_youll_get() {
    $('.you-get-list').each(function (e) {
        var h = 0;
        var bl = $(this);
        // bl.find('.b-you-get').removeClass('h100p');
        bl.find('.b-you-get__inner').each(function () {
            var hh = $(this).outerHeight();
            if (h < hh) {
                h = hh;
            }
        });
        setTimeout(function () {
            bl.find('.b-you-get').css({height: h});
            // bl.find('b-you-get').addClass('h100p');
        }, 100);
    });
}