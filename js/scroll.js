var $scroll = $('.main').scrollTop();
var $mid = $('.middle');

$('.main').scroll(function(){
	console.log($(this).scrollTop());
	$mid.css('filter', 'blur(' + $(this).scrollTop() / 40 + 'px)');
});
