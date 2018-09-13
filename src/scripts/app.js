var navbar =  $('.wrapper');  // navigation block
var wrapper = $('.menu-block');        // may be: navbar.parent();

$(window).scroll(function(){
    var nsc = $(document).scrollTop();
    var bp1 = wrapper.offset().top;
    var bp2 = bp1 + wrapper.outerHeight()-$(window).height();
    
    if (nsc>bp1) {  navbar.css('position','fixed'); }
    else { navbar.css('position','absolute'); }
    if (nsc>bp2) { navbar.css('top', bp2-nsc); }
    else { navbar.css('top', '0'); }
});