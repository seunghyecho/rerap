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

    var $sectionList = $('#section2,#section5,#section6');
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