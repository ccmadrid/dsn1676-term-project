var $scroll = $('.main').scrollTop();
var $mid = $('.middle');
var $back = $('.back');

$('.main').scroll(function(){
	// console.log($(this).scrollTop());
	$mid.css('-webkit-filter', 'blur(' + $(this).scrollTop() / 100 + 'px)');
	$back.css('-webkit-filter', 'blur(' + $(this).scrollTop() / 150 + 'px)');
	$mid.css('filter', 'blur(' + $(this).scrollTop() / 100 + 'px)');
	$back.css('filter', 'blur(' + $(this).scrollTop() / 150 + 'px)');
	$back.css('opacity', 1 / ($(this).scrollTop() / 100));
});

$('.nav-list').localScroll({
	target: '.main'
});

$('.footer').localScroll({
	target: '.main'
});
