var $bcSection = $('.bc-section');
var $items = $('.bc g');

$bcSection.waypoint(function () {
	$bcSection.toggleClass('js-go');

}, { offset: '60%', context:'.main' });

$items.each(function () {
	var numRand = Math.floor(Math.random() * 1000);
	var numRand2 = Math.floor(Math.random() * 200) +100;
	$(this).css('animation-delay', numRand + 'ms');
	$(this).css('animation-duration', numRand2 + 'ms');
})
