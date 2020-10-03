(function(){

    'use strict';


    var $projects = $('.gallery');

    $projects.isotope({
        itemSelector: '.img-1',
        
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    // $('.card').mouseenter(function(){

    //     $(this).find('.card-overlay').css({'top': '-100%'});
    //     $(this).find('.card-hover').css({'top':'0'});

    // }).mouseleave(function(){

    //     $(this).find('.card-overlay').css({'top': '0'});
    //     $(this).find('.card-hover').css({'top':'100%'});

    // });

})(jQuery);