var $bcSection = $('.bc-section');
var $items = $('.bc g');

$bcSection.waypoint(function () {
	console.log('check');
	$bcSection.toggleClass('js-go');

}, { offset: '60%', context:'.main' });

$items.each(function () {
	var numRand = Math.floor(Math.random() * 2000);
	$(this).css('animation-delay', numRand + 'ms');
})
