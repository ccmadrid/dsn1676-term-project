var $scroll = $('.main').scrollTop();
var $mid = $('.middle');
var $back = $('.back');

$('.main').scroll(function(){
	console.log($(this).scrollTop());
	$mid.css('filter', 'blur(' + $(this).scrollTop() / 40 + 'px)');
	$back.css('filter', 'blur(' + $(this).scrollTop() / 150 + 'px)');
});
