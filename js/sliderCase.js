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
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
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
                $('.numStart').html('0' + (slickNavNum + 1));
                $('.numEnd').html('0' + (slickNavNum + 2));
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


window.addEventListener('scroll', function() {
    document.getElementById('scrollImgCase').style.top = -pageYOffset/30 + 'px';
    document.getElementById('scrollImgCase').style.backgroundSize = 100 + pageYOffset/40 +`%`;
});