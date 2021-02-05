var _FOCUS = 1;

$(document).ready(function () {
    console.log('header');

    //headerTop fixed
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 80) {
            $('#header').addClass('sticky');
        }else{
            $('#header').removeClass('sticky');
        }
    });


    // Smooth Anchor Scroll
    var $gnb = $('#gnb');
    $gnb.on('click', function (e) {

        //방법01----------------------------------------------------------
        // var targetId = e.target.getAttribute("href");
        // window.scrollTo({
        //     top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
        //     behavior: "smooth"
        // });

        //방법02----------------------------------------------------------
        var _this = e.target;
        var _focusId = _this.getAttribute("href");
        var _focusNo = _focusId.replace('#section', ' ');

        console.log(_focusId, _focusNo);
        //#section01, 1
        //#section03, 3
        //#section05, 5
        //#section09, 9
        //#section11, 11

        var _heigth = $(_focusId).offset();

        if (!$('body').is(':animated')) {
            var _time = 500;
            var _timer = _time * (_focusNo - _FOCUS);
            console.log(_focusNo, _FOCUS, _timer)

            //_timer
            //500 * (1 - 1) = 0
            //500 * (3 - 1) = 1000
            //500 * (5 - 3) = 1000
            //500 * (9 - 5) = 2000
            //500 * (11 - 9) = 1000
            //500 * (11 - 11) = 0
            //500 * (9 - 11) = -1000
            //500 * (5 - 9) = -2000
            //500 * (3 - 5) = -1000
            //500 * (1 - 3) = -1000
            //500 * (1 - 1) = 0

            if (_timer < 0) {
                _timer = _time * (_FOCUS - _focusNo);
            }

            $('body').animate({ scrollTop: _heigth.top }, _timer);
            _FOCUS = _focusNo;

        }


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