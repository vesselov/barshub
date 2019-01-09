$(document).ready(function() {
	// open external links in new window
	$('a[href^="http://"]').attr('target','_blank');
	
	//position resources panel on screen
	$('#resources').show().delay(500).animate({ left : '-25em' }, 250).animate({left:'-29em'},250);
	
	// resources panel
	var panel=false;
	$('.open').click(function() {
		if (!panel) {
			$(this).text('-');
			$('#resources').animate({
				left : 0
			}, 250); // end animate
			panel=true;
		} else {
			$(this).text('+');
			$('#resources').animate({
				left : '-29em'
			}, 250); // end animate
			panel=false;
		}
	});
}); // end ready
function menu (){
	let collomn = document.getElementsByName('.list__hide');
	let menuHide = document.getElementsByClassName('.list__item');
	collomn.addEventListener(click, () =>{
		alert("sdfsdfs")
	})
}