var delay = 500; //milliseconds
var timeoutId;
var animationIsFinished = false;

new fullpage('#fullpage', {
    sectionsColor: ['#fff0', '#fff0', '#fff0', '#fff0'],
    autoScrolling:true,
    fadingEffect:true,
    dragAndMove: false,


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

//Открытие меню в шапке




// Страница проектов

var fixedElem = document.getElementsByClassName('main__pageProgect--block__item'),
    fixedElemLength = fixedElem.length,
    i;

window.addEventListener('scroll', function() {

    for (i = 0; i < fixedElemLength; i++) {

        var imgTop = -566 + pageYOffset
        fixedElem[i].style.transform = `translate3d(0,${imgTop}px, 0)`;

        fixedElem[i].classList.add('i' + i);
    }

});

