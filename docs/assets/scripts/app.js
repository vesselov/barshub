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

function menuOpen() {
    var elem = document.getElementById('menu');
    var hidden = document.getElementsByClassName('list__link')

    if (elem) {
        elem = hidden.classList.add('active');
        console.log(elem)
    }

}