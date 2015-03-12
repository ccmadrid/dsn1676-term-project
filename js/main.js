var $enter = $('.enter');
var $banner = $('.banner');
var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');

console.log('loaded js');

$enter.on('click', function (e) {
	e.preventDefault();
$banner.addClass('entered');
	console.log('clicked enter');
	$banner.addClass('js-hide');

});

$navBtn.on('click', function () {
	console.log('clocked nav-btn');
	$menu.toggleClass('js-menu-open');
	$main.toggleClass('js-blur');
});
