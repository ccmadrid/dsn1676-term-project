var $enter = $('.enter');
var $banner = $('.banner');
var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

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

$thumbs.on('click', 'a', function (e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');
});
