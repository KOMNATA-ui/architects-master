var delay = 500; //milliseconds
var timeoutId;
var animationIsFinished = false;

new fullpage('#fullpage', {
    sectionsColor: ['#fff0', '#fff0', '#fff0', '#fff0'],
    autoScrolling:true,
    fadingEffect:true,
    dragAndMove: false,
    menu: '#myMenu',
    responsiveWidth: 1024,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],


    afterLoad: function(origin, destination, direction){
        fullpage_api.setScrollingSpeed(300);
        // -- Анимация animationLeftTranslateX
        var SelectAnimationLeftTranslateX = document.getElementsByClassName('SelectAnimationLeftTranslateX'),
            SelectAnimationLeftTranslateXLength = SelectAnimationLeftTranslateX.length,
            i;

        for (i = 0; i < SelectAnimationLeftTranslateXLength; i++) {
            SelectAnimationLeftTranslateX[i].classList.remove('animationLeftTranslateXOut');
            SelectAnimationLeftTranslateX[i].classList.add('animationLeftTranslateX');
        }

        // -- Анимация animationBottomTranslateY
        var SelectAnimationLeftTranslateY = document.getElementsByClassName('SelectAnimationLeftTranslateY'),
            SelectAnimationLeftTranslateYLength = SelectAnimationLeftTranslateY.length,
            i;

        for (i = 0; i < SelectAnimationLeftTranslateYLength; i++) {
            SelectAnimationLeftTranslateY[i].classList.remove('animationBottomTranslateYOut');
            SelectAnimationLeftTranslateY[i].classList.add('animationBottomTranslateY');
        }

        // -- Анимация animationOpacity
        var SelectAnimationOpacity = document.getElementsByClassName('SelectAnimationOpacity'),
            SelectAnimationOpacityLength = SelectAnimationOpacity.length,
            i;

        for (i = 0; i < SelectAnimationOpacityLength; i++) {
            SelectAnimationOpacity[i].classList.remove('animationOpacityOut');
            SelectAnimationOpacity[i].classList.add('animationOpacity');
        }

        // -- Анимация animationBefore
        var SelectAnimationBefore = document.getElementsByClassName('SelectAnimationBefore'),
            SelectAnimationBeforeLength = SelectAnimationBefore.length,
            i;

        for (i = 0; i < SelectAnimationBeforeLength; i++) {
            SelectAnimationBefore[i].classList.remove('animationBeforeOut');
            SelectAnimationBefore[i].classList.add('animationBefore');
        }

        // -- Анимация animationBefore
        var imgSizeOverfloyClass = document.getElementsByClassName('imgSizeOverfloyClassCont'),
            imgSizeOverfloyClassLength = imgSizeOverfloyClass.length,
            i;

        for (i = 0; i < imgSizeOverfloyClassLength; i++) {
            imgSizeOverfloyClass[i].classList.remove('imgSizeOverfloyClassOut');
            imgSizeOverfloyClass[i].classList.add('imgSizeOverfloyClass');
        }


        var imgScrollOverfloyClass = document.getElementsByClassName('imgScrollOverfloyClassCont'),
            imgScrollOverfloyClassLength = imgScrollOverfloyClass.length,
            i;

        for (i = 0; i < imgScrollOverfloyClassLength; i++) {
            imgScrollOverfloyClass[i].classList.remove('imgScrollOverfloyClassOut');
            imgScrollOverfloyClass[i].classList.add('imgScrollOverfloyClass');
        }


        // if(destination.index == 0){
        //     alert("Переход на 1 закончен");
        // }else if (destination.index == 1) {
        //     alert("Переход на 2 закончен");
        // }else if (destination.index == 2) {
        //     alert("Переход на 3 закончен");
        // }else if (destination.index == 3) {
        //     alert("Переход на 4 закончен");
        // }

    },

    // Уход анимации
    onLeave: function(origin, destination, direction){
        //animating my element
        var SelectAnimationLeftTranslateX = document.getElementsByClassName('SelectAnimationLeftTranslateX'),
            SelectAnimationLeftTranslateXLength = SelectAnimationLeftTranslateX.length,
            i;

        for (i = 0; i < SelectAnimationLeftTranslateXLength; i++) {
            SelectAnimationLeftTranslateX[i].classList.remove('animationLeftTranslateX');
            SelectAnimationLeftTranslateX[i].classList.add('animationLeftTranslateXOut');
        }

        // -- Анимация animationLeftTranslateX
        // var SelectAnimationLeftTranslateX = document.getElementsByClassName('SelectAnimationLeftTranslateX'),
        //     SelectAnimationLeftTranslateXLength = SelectAnimationLeftTranslateX.length,
        //     i;
        //
        // for (i = 0; i < SelectAnimationLeftTranslateXLength; i++) {
        //     SelectAnimationLeftTranslateX[i].classList.remove('animationLeftTranslateX');
        //     SelectAnimationLeftTranslateX[i].classList.add('animationLeftTranslateXOut');
        // }

        // -- Анимация animationBottomTranslateY
        var SelectAnimationLeftTranslateY = document.getElementsByClassName('SelectAnimationLeftTranslateY'),
            SelectAnimationLeftTranslateYLength = SelectAnimationLeftTranslateY.length,
            i;

        for (i = 0; i < SelectAnimationLeftTranslateYLength; i++) {
            SelectAnimationLeftTranslateY[i].classList.remove('animationBottomTranslateY');
            SelectAnimationLeftTranslateY[i].classList.add('animationBottomTranslateYOut');
        }

        // -- Анимация animationOpacity
        var SelectAnimationOpacity = document.getElementsByClassName('SelectAnimationOpacity'),
            SelectAnimationOpacityLength = SelectAnimationOpacity.length,
            i;

        for (i = 0; i < SelectAnimationOpacityLength; i++) {
            SelectAnimationOpacity[i].classList.remove('animationOpacity');
            SelectAnimationOpacity[i].classList.add('animationOpacityOut');
        }

        // -- Анимация animationBefore
        var SelectAnimationBefore = document.getElementsByClassName('SelectAnimationBefore'),
            SelectAnimationBeforeLength = SelectAnimationBefore.length,
            i;

        for (i = 0; i < SelectAnimationBeforeLength; i++) {
            SelectAnimationBefore[i].classList.remove('animationBefore');
            SelectAnimationBefore[i].classList.add('animationBeforeOut');
        }


        // -- Анимация animationBeforeScalle
        var imgSizeOverfloyClass = document.getElementsByClassName('imgSizeOverfloyClassCont'),
            imgSizeOverfloyClassLength = imgSizeOverfloyClass.length,
            i;

        for (i = 0; i < imgSizeOverfloyClassLength; i++) {
            imgSizeOverfloyClass[i].classList.remove('imgSizeOverfloyClass');
            imgSizeOverfloyClass[i].classList.add('imgSizeOverfloyClassOut');
        }



        var imgScrollOverfloyClass = document.getElementsByClassName('imgScrollOverfloyClassCont'),
            imgScrollOverfloyClassLength = imgScrollOverfloyClass.length,
            i;

        for (i = 0; i < imgScrollOverfloyClassLength; i++) {
            imgScrollOverfloyClass[i].classList.remove('imgScrollOverfloyClass');
            imgScrollOverfloyClass[i].classList.add('imgScrollOverfloyClassOut');
        }




        // clearTimeout(timeoutId);
        //
        // timeoutId = setTimeout(function(){
        //     animationIsFinished = true;
        //
        //     fullpage_api.moveTo(destination.index + 1);
        // }, delay);
        //
        // return animationIsFinished;

        //using index
        // if(destination.index == 0){
        //     alert("Уход анимации и переход на 1");
        // }else if (destination.index == 1) {
        //     alert("Уход анимации и переход на 2");
        // }else if (destination.index == 2) {
        //     alert("Уход анимации и переход на 3");
        // }else if (destination.index == 3) {
        //     alert("Уход анимации и переход на 4");
        // }
    }
});

//adding the action to the button
$(document).on('click', '#moveUp', function(){
    fullpage_api.moveSectionUp();
    fullpage_api.responsiveSlides.toSlides();
});


$(document).ready(function() {
    ymaps.ready(init);

    var button = $('.mobile-nav-open'),
        header = $('header'),
        bodi = $('body');

    $('.mobile-nav-open').on('click', function() {
        button.toggleClass('is-active');
        header.toggleClass('is-active');
        bodi.toggleClass('is-activeHead');
    })
})




function init() {
  var myMap = new ymaps.Map("map", {
      center: [55.026867, 82.922079],
      zoom: 15,
      controls: []
    }),

    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.026953, 82.919684], {
      // Свойства.
      // Содержимое хинта.
      hintContent: 'Ул. Максима Горького 54, 3 этаж, офис 207. Мы всегда вам рады'
    }, {
      // Опции
      // Своё изображение иконки метки.
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'map-marker.png',
      // Размеры метки.
      iconImageSize: [24, 36],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-12, -36]
    })
  
    myMap.behaviors.disable('scrollZoom'); // — это отключает зум колёсиком мышки, всё ок.
    myMap.behaviors.disable('multiTouch'); // — это отключает зум щипком, не очень нужно. 

  // Добавляем все метки на карту.
  myMap.controls.remove('routeEditor');
  myMap.geoObjects
    .add(myPlacemark1)

}

$(document).ready(function(){
    $('.js-phone-mask').inputmask("+7 (999) 999 99 99");  //static mask

    $('input').each(function() {
        $(this).on('change', function() {
            console.log($(this).val())
            if ($(this).val() != "") {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        })
    })
});

//Открытие меню в шапке


// Страница проектов

// var fixedElem = document.getElementsByClassName('main__pageProgect--block__item'),
//     fixedElemLength = fixedElem.length,
//     i;

// window.addEventListener('scroll', function() {

//     for (i = 0; i < fixedElemLength; i++) {

//         var imgTop = -566 + pageYOffset
//         fixedElem[i].style.transform = `translate3d(0,${imgTop}px, 0)`;

//         fixedElem[i].classList.add('i' + i);
//     }

// });




function ChangeOver2(x) {
    document.getElementById('pageImgTwo').classList.remove('greenOut');
    document.getElementById('pageImgTwo').classList.add('green');
    document.getElementById('progectHover').classList.add('active_Hover');
    document.getElementById('progectHover').classList.remove('active_HoverOut');
    document.getElementById('progectHoverTwo').classList.add('active_HoverOut');
    document.getElementById('progectHoverTwo').classList.remove('active_Hover');
};

function ChangeOverOut2(x) {
    document.getElementById('pageImgTwo').classList.remove('green');
    document.getElementById('pageImgTwo').classList.add('greenOut');
    document.getElementById('progectHover').classList.add('active_HoverOut');
    document.getElementById('progectHover').classList.remove('active_Hover');
    document.getElementById('progectHoverTwo').classList.add('active_Hover');
    document.getElementById('progectHoverTwo').classList.remove('active_HoverOut');

    console.log("dssd")
};


function ChangeOver(x) {
    document.getElementById('pageImgOne').classList.remove('greenOut');
    document.getElementById('pageImgOne').classList.add('green');
    document.getElementById('progectHover').classList.add('active_Hover');
    document.getElementById('progectHover').classList.remove('active_HoverOut');
    document.getElementById('progectHoverTwo').classList.add('active_HoverOut');
    document.getElementById('progectHoverTwo').classList.remove('active_Hover');
};

function ChangeOverOut(x) {
    document.getElementById('pageImgOne').classList.remove('green');
    document.getElementById('pageImgOne').classList.add('greenOut');
    document.getElementById('progectHover').classList.add('active_HoverOut');
    document.getElementById('progectHover').classList.remove('active_Hover');
    document.getElementById('progectHoverTwo').classList.add('active_Hover');
    document.getElementById('progectHoverTwo').classList.remove('active_HoverOut');

    console.log("dssd")
};

$(document).ready(function() {

    $(".hamburger-menu-button").click(function() {
        $(".main-box").toggleClass("main-box-clicked");
        $(".hamburger-box").toggleClass("hamburger-box-clicked");
    });

    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $("a")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});


$(document).on('ready', function () {
    var $preloader = $('#preloader'),
        $spinner   = $preloader.find('.spin');
    $spinner.fadeOut();
    $preloader.delay(20).fadeOut('slow');


});