var $bcSection = $('.bc-section');

$bcSection.waypoint(function () {
	console.log('check');
	$bcSection.toggleClass('js-go');

}, { offset: '60%', context:'.main' });
