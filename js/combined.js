$(document).ready(function(){
    console.log('footer');
})
$(document).ready(function(){
    console.log('header');

    var $headerIconSearch = $('.header_icon .searchBtn');
    var $headerIconMenu = $('.header_icon .gnbBtn');
    var $overlay = $('.overlay');
    var $overlaySearch = $('.overlay.search');
    var $overlayGnb = $('.overlay.gnb');
    var $closeBtn = $('.closeBtn');

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
$(document).ready(function () {
    console.log('main intro');

    // section7,9 -------------------------------------------------------------
    var swiper = new Swiper('.section07-slide', {
        loop: false,
        // slidesPerView: 1,
        // spaceBetween: 30,

        // Responsive breakpoints   
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                centeredSlides: true,
                // slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

    var swiper = new Swiper('.section09-slide', {
        loop: false,
        // slidesPerView: 1,
        // spaceBetween: 30,

        // Responsive breakpoints   
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                centeredSlides: true,
                // slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });

    // section2,5,6 -----------------------------------------------------------

    var $sectionList = $('#section02,#section05,#section06');
    var sectionTop = []
    $sectionList.each(function (i, el) {
        sectionTop.push($(el).offset().top)
    })
    // console.log($sectionList[0].classList)
    var rate = 0.4;


    function scrollAppear() {
        var windowHeight = $(window).innerHeight();
        var scrollTop = $(window).scrollTop();

        // console.log(sectionTop, windowHeight, scrollTop)
        for (i = 0; i < sectionTop.length; i++) {
            // console.log(sectionTop[i])
            if (scrollTop + windowHeight * rate > sectionTop[i]) {
                $($sectionList[i]).addClass('intro_appear');
            }
        }


    }

    $(window).on('scroll', scrollAppear);





    var $section08Contents = $('.section08_contents');
    var $section08List = $section08Contents.children('div.list_area');
    var $section08ListItem = $section08List.find('li');


    $section08ListItem.on('click', function (e) {

        if ($(this).hasClass('on')) {
            $section08ListItem.removeClass('on');
        } else {
            $section08ListItem.removeClass('on');
            $(this).addClass('on');
        }

    });


})
$(document).ready(function () {
    console.log('visual');

    var $inner = $('.visual_inner');
    var $innerItem = $inner.children('li');
    var i = 0;
    // console.log($innerItem)

    var $leftBtn = $('button.left');
    var $rightBtn = $('button.right');

    function nextSlide() {
        $($innerItem[i]).removeClass('active');
        i = (i + 1) % $innerItem.length;
        // 1,2,3
        $($innerItem[i]).addClass('active');
    }
    function prevSlide() {
        $($innerItem[i]).removeClass('active');
        i = (i - 1 + $innerItem.length) % $innerItem.length;
        // 2,1,0
        $($innerItem[i]).addClass('active');
    }

    $($rightBtn).on('click', function () {
        nextSlide();
    });

    $($leftBtn).on('click', function () {
        prevSlide();
    });
})
$(document).ready(function(){
    console.log('sub community');
})