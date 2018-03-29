$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".contain, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

});

var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function() {
    $('.tabs').tabs();
});