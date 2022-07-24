$(function() {
	
	window.setTimeout(function() {
		$('.slider').css('opacity', '1');
	}, 2000);

	$('.slider-content').addClass('default');
	
		$('.slider-content').on('click', function() {
	
	  	var e = $('.slider > .slider-content');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})

$(document).ready(function(){
    // Aos Js
    AOS.init({
      offset: 120,
      duration: 1000,
    });


});

