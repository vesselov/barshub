$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".contain, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

});