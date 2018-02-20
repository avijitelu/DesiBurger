$(document).ready(function(){

    /*-------- Sticky Navigation ---------*/
    $(window).on('scroll', function(){
        if($(window).scrollTop()>100){
            $('.header-area').addClass('scroll-active');
        } else {
            $('.header-area').removeClass('scroll-active');
        }
    });

    /*-------- Smooth Scroll Plugins ---------*/
    $('.header-area .navbar ul.navbar-nav').onePageNav({
        scrollThreshold: 0.2
    });

    /*-------- Magnific-Popup Plugins ---------*/
    $('.image-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });
});
