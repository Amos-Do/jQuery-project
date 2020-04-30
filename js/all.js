$(document).ready(function () {
    //下拉選單
    $('.nav-dropdown').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('.dropdown-open').slideToggle();
    });

    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // scroll-top
    $('.scroll-top a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: 0},700);
    });
    // scrollTop to window-251 block
    $(window).scroll(function () { 
        var scrollTop = $(window).scrollTop();
        console.log($(window).scrollTop());
        if (scrollTop > 250) {
            $('.scroll-top').addClass('active-block');
        } else {
            $('.scroll-top').removeClass('active-block');
        }
    });
});