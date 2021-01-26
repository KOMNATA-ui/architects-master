
var scrollbar = Scrollbar.init(document.getElementById('container'), {
    damping: 0.08,
});

var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');
var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');
var select5 = document.getElementById('select5');
var select6 = document.getElementById('select6');
var select7 = document.getElementById('select7');
var select8 = document.getElementById('select8');

scrollbar.addListener(function(status) {
    var offset = status.offset;
    var scale = 140

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
    {

    }else {
        select1.style.top = offset.y + 'px';
        // select1.style.backgroundSize = scale + (offset.y/100) +`%`;

        select2.style.top = offset.y + 'px';
        // select2.style.backgroundSize = scale + (offset.y/100) +`%`;

        select3.style.top = offset.y + 'px';
        // select3.style.backgroundSize = scale + (offset.y/100) +`%`;

        select4.style.top = offset.y + 'px';
        // select4.style.backgroundSize = scale + (offset.y/100) +`%`;

        select5.style.top = offset.y + 'px';
        // select1.style.backgroundSize = scale + (offset.y/100) +`%`;

        select6.style.top = offset.y + 'px';
        // select2.style.backgroundSize = scale + (offset.y/100) +`%`;

        select7.style.top = offset.y + 'px';
        // select3.style.backgroundSize = scale + (offset.y/100) +`%`;

        select8.style.top = offset.y + 'px';
        // select4.style.backgroundSize = scale + (offset.y/100) +`%`;

    }


    if(offset.y < (window.innerHeight*85/100)) {
        select1.style.backgroundSize = scale - (offset.y/100) +`%` ;
    }
    else if (offset.y < (window.innerHeight*85/100) *2) {
        select2.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100))/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *3) {
        select3.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100)*2)/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *4) {
        select4.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100)*3)/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *5) {
        select5.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100))/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *6) {
        select6.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100)*5)/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *7) {
        select7.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100)*6)/100) +`%`;
    }
    else if (offset.y < (window.innerHeight*85/100) *8) {
        select8.style.backgroundSize = scale - ((offset.y - (window.innerHeight*85/100)*7)/100) +`%`;
    }
});

