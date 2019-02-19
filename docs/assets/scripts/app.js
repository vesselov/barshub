function up() {
    var button = $('.c1');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 150) {
            button.fadeIn();

        } else {
            button.fadeOut();
        }

    });
    button.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000)
    })
}
up();
// create pager list items
var sliderImage = $('.slider__images-image');

sliderImage.each(function (index) {
    $('.js__slider__pagers').append('<li>' + (index + 1) + '</li>');
});

// set up vars
var sliderPagers = 'ol.js__slider__pagers li',
    sliderPagersActive = '.js__slider__pagers li.active',
    sliderImages = '.js__slider__images',
    sliderImagesItem = '.slider__images-item',
    sliderControlNext = '.slider__control--next',
    sliderControlPrev = '.slider__control--prev',
    sliderSpeed = 5000,
    lastElem = $(sliderPagers).length - 1,
    sliderTarget;

// add css heigt to slider images list
function checkImageHeight() {
    var sliderHeight = $('.slider__images-image:visible').height();
    $(sliderImages).css('height', sliderHeight + 'px');
};

sliderImage.on('load', function () {
    checkImageHeight();
    $(sliderImages).addClass('loaded')
});
$(window).resize(function () {
    checkImageHeight();
});

// set up first slide
$(sliderPagers).first().addClass('active');
$(sliderImagesItem).hide().first().show();

// transition function
function sliderResponse(sliderTarget) {
    $(sliderImagesItem).fadeOut(300).eq(sliderTarget).fadeIn(300);
    $(sliderPagers).removeClass('active').eq(sliderTarget).addClass('active');
}

// pager controls
$(sliderPagers).on('click', function () {
    if (!$(this).hasClass('active')) {
        sliderTarget = $(this).index();
        sliderResponse(sliderTarget);
        resetTiming();
    }
});
//search
$(document).ready(function () {

    $(".fa-search").click(function () {
        $(".container__search , .container__input").toggleClass("active");
        $("input[type='text']").focus();
    });

});

// next/prev controls
$(sliderControlNext).on('click', function () {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
    sliderResponse(sliderTarget);
    resetTiming();
});
$(sliderControlPrev).on('click', function () {
    sliderTarget = $(sliderPagersActive).index();
    lastElem = $(sliderPagers).length - 1;
    sliderTarget === 0 ? sliderTarget = lastElem : sliderTarget = sliderTarget - 1;
    sliderResponse(sliderTarget);
    resetTiming();
});

// slider timing
function sliderTiming() {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
    sliderResponse(sliderTarget);
}

// slider autoplay
var timingRun = setInterval(function () {
    sliderTiming();
}, sliderSpeed);

function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function () {
        sliderTiming();
    }, sliderSpeed);
}

$(document).ready(function () {
    var button = $('.menu-box')
    var menu = $('.list__link')
    var Blockmenu = $('.menu-block')


    button.click(function () {
        if (button) {
            Blockmenu.toggleClass('active')
            menu.toggleClass('active_link')
        }
    })
    if ($(window).width() >= 480) {
        Blockmenu.removeClass('active')
        menu.removeClass('active_link')

        console.log('страница больше 480')
    }
});
//стрелки на слайдере
$(document).ready(function () {
    var nav = $('.slider__control ');
    var elem = $('.slider');
    elem.hover(() => {
            nav.css('display', 'block');

        },
        () => {
            nav.css('display', 'none');

        })
});
//на странице карта. переход в магазин
$(document).ready(function () {
    $('.card__button').click(() => {
        window.location = 'buy.html'
    })
})
$(document).ready(function () {
    $(".menu__container").on('click', function () {
        $(this).find(".hambergerIcon").toggleClass("open");
    });
})
///////////// form
var submitForm = function (ev) {
    ev.preventDefault();
   

    var form = $(ev.target);
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
}