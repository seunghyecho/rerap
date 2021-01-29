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