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
	$banner.fadeOut();
	sessionStorage.setItem("active", "yes")

});

$navBtn.on('click', function () {
	console.log('clocked nav-btn');
	$menu.toggleClass('js-menu-open');
	$main.toggleClass('js-blur');
});

if(sessionStorage.getItem("active")){
	$banner.addClass('entered');
	$banner.hide();
}
