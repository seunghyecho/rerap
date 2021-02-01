$(document).ready(function(){
    console.log('header');

    var $headerIconSearch = $('.header_icon .searchBtn');
    var $headerIconMenu = $('.header_icon .gnbBtn');
    var $overlay = $('.overlay');
    var $overlaySearch = $('.overlay.search');
    var $overlayGnb = $('.overlay.gnb');
    var $closeBtn = $('.closeBtn');
    console.log($closeBtn)

    $($overlay).hide();

    $headerIconSearch.on('click', function(e){
        e.preventDefault();
        $($overlaySearch).fadeIn();
        $('html,body').css({'overflow': 'hidden'});
    });

    $headerIconMenu.on('click', function(e){
        e.preventDefault();
        $($overlayGnb).fadeIn();
        $('html,body').css({'overflow': 'hidden'});
    });
    $closeBtn.on('click', function(){
        $($overlay).fadeOut();
        $('html,body').css({'overflow': 'visible'});
    });


})