$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".container__find, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

});

var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function() {
    $('.tabs').tabs();
});

var h_hght = 150; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна

$(function() {

    var elem = $('.menu-block');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', h_mrg);
    }

    $(window).scroll(function() {
        top = $(this).scrollTop();

        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });

});