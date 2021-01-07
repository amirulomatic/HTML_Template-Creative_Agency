(function($){
$(document).ready(function(){



    $('.header .hamburger-menu').click(function(){

       let menuStatus = $('.header .menu').css('display');

       if(menuStatus == 'block'){
           $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
       }else if(menuStatus == 'none'){
        $('.hamburger-menu a').html('<i class="fas fa-times"></i>');
       }

        $('.header .menu').slideToggle();
    });

    $(window).resize(function(){

        let windowWidth = $('body').width();

        if(windowWidth > 985){
            $('.header .menu').show();
            $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
        }else{
            $('.header .menu').hide();
        }

    });




});
})(jQuery);