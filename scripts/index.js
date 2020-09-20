$(window).scroll(function() {
    var scrollPosBottom = $(document).scrollTop() + $(window).height();
    var scrollPos = $(document).scrollTop();
    var mapScrollPos = $('#mapid').offset().top + $('#mapid').height();
    var mapScrollPosTop = $('#mapid').offset().top;
    console.log('Map: ' + scrollPos, scrollPosBottom, mapScrollPos, mapScrollPosTop);
    
    if (scrollPos > mapScrollPos) {
        $('#mapid').stop().fadeTo(10, 0);
    }
    else if (scrollPosBottom < mapScrollPosTop) {
        $('#mapid').stop().fadeTo(10, 0);
    }
    else {
        $('#mapid').stop().fadeTo(500, 1);
    }
});

$(window).scroll(function() {
    var scrollPosBottom = $(document).scrollTop() + $(window).height();
    var scrollPos = $(document).scrollTop();
    var imgsScrollPos = $('.header-imgs').offset().top + $('.header-imgs').height();
    var imgsScrollPosTop = $('.header-imgs').offset().top;
    console.log('Imgs: ' + scrollPos, scrollPosBottom, imgsScrollPos, imgsScrollPosTop);


    if (scrollPos > imgsScrollPos && $(window).width() > 1300) {
        $('.header-imgs').stop().fadeTo(10, 0);
    }
    else if ($(window).width() > 1300) {
        $('.header-imgs').stop().fadeTo(500, 1);
    }
});