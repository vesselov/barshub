$(document).ready(function() {
    $('#tabContainer').tabs({
        beforeActivate : function(evt) {
            location.hash=$(evt.currentTarget).attr('href');
        },
          show: 'fadeIn',
        hide: 'fadeOut'
    });
    var hash = location.hash; 
      if (hash) { 
          $('#tabContainer').tabs("load", hash) 
      } 
      
  });