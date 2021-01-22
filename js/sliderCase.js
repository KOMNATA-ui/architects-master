$(document).ready(function(){
    var time = 4;
    var $bar,
        $slick,
        $slickNav,
        slickNavNum = 1,
        isPause,
        tick,
        percentTime;

    $slick = $('.slider-for');
    $slick.slick({
        draggable: true,
        adaptiveHeight: false,
        dots: false,
        mobileFirst: true,
        pauseOnDotsHover: true,
    });

    $slickNav = $('.slider-nav');
    $slickNav.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });

    $bar = $('.slider-progress .progress');

    $('.slider-wrapper').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                $slickNav.slick('slickNext')
                slickNavNum = $slick.slick('slickCurrentSlide');
                $('.numStart').html(slickNavNum+1);
                $('.numEnd').html(slickNavNum+2);
                console.log(slickNavNum)
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

});