$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});

   	function parallaxScroll(){
   		var scrolledY = $('html').scrollTop();
   		   	console.log($('html').scrollTop());
			// $('.parallax-group').css('background-position','center -'+((scrolledY*0.2))+'px');
			$('.front').css('top','-'+((scrolledY*0.3) / 4)+'px');
			$('.back').css('top','-'+((scrolledY*0.4) / 4)+'px');
   	}
   	console.log('scroll loaded');

});

