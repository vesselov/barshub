$(document).ready(function(){
    $('#tabbedPanels').tab({
        show : 'fadeIn',
        hide : 'fadeOut'
    });
   var hash = location.hash;
   if(hash){
       $('#tabbedPanels').tabs('load',hash)}
   

});
