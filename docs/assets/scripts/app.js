
function up(){
    var button = $('.c1');
     $(window).on('scroll', () =>{
         if($(this).scrollTop() >= 150){
             button.fadeIn();

         }else{
             button.fadeOut();
         }
        
   });
   button.click(function(){
       $('body,html').animate({scrollTop:0},2000)
   })
}
up();