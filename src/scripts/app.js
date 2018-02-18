$(document).ready(function(){
    $('#tabbedPanels').tab({
        show : 'fadeIn',
        hide : 'fadeOut'
    });
   var hash = location.hash;
   if(hash){
       $('#tabbedPanels').tabs('load',hash)}
   

});
$(document).ready(function(){
  
    $(".fa-search").click(function(){
      $(".container, .input").toggleClass("active");
      $("input[type='text']").focus();
    });
    
  });