/**
 ********************************************************************
 *              Controlador para la flecha de arriba                *
 *                      by miguel moreno pastor                     *
 ********************************************************************
 */

$(document).ready(() => {
    
    $('.go-up ').click(() => {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(() => {
        if ($(this).scrollTop() > 0) {
            $('.go-up').slideDown(500);
        } else {
            $('.go-up').slideUp();
        }
    });

});