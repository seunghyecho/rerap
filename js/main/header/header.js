$(document).ready(function () {
    console.log('header');

    // Smooth Anchor Scroll
    var $gnb = $('#gnb');
    $gnb.on('click', function (e) {

        // var targetId = e.target.getAttribute("href");
        // window.scrollTo({
        //     top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
        //     behavior: "smooth"
        // });

        var _this = e.target;
        var _focusId = _this.getAttribute("href");
        var _heigth = $(_focusId).offset();

        $('body').animate({ scrollTop: _heigth.top }, 1000);

    });

    var $headerIconSearch = $('.header_icon .searchBtn');
    var $headerIconMenu = $('.header_icon .gnbBtn');
    var $overlay = $('.overlay');
    var $overlaySearch = $('.overlay.search');
    var $overlayGnb = $('.overlay.gnb');
    var $closeBtn = $('.closeBtn');

    $($overlay).hide();

    $headerIconSearch.on('click', function (e) {
        e.preventDefault();
        $($overlaySearch).fadeIn();
        $('html,body').css({ 'overflow': 'hidden' });
    });

    $headerIconMenu.on('click', function (e) {
        e.preventDefault();
        $($overlayGnb).fadeIn();
        $('html,body').css({ 'overflow': 'hidden' });
    });
    $closeBtn.on('click', function () {
        $($overlay).fadeOut();
        $('html,body').css({ 'overflow': 'visible' });
    });


})