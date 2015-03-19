$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});

   	function parallaxScroll(){
   		var scrolledY = $('body').scrollTop();
		$('.parallax-group').css('background-position','center -'+((scrolledY*0.2))+'px');
		$('.front').css('top','-'+((scrolledY*0.5))+'px');
		$('.back').css('top','-'+((scrolledY*0.8))+'px');
   	}
   	console.log('scroll loaded');
   	console.log($('html').scrollTop());
});

