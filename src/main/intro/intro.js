$(document).ready(function () {
    console.log('main intro');

    // section7,9 -------------------------------------------------------------
    var swiper = new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Responsive breakpoints   
        breakpoints: {

            // when window width is <= 320px     
            320: {
                slidesPerView: 2,
            },
            // when window width is <= 480px     
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