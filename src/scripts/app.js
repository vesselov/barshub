
function up(){
    var button = $('.c1');
     $(window).on('scroll', () =>{
         if($(this).scrollTop() >= 50){
             button.fadeIn();

         }else{
             button.fadeOut();
         }
         console.log(scroll)
   });
   button.click(function(){
       $('body,html').animate({scrollTop:0},2000)
   })
}
up();