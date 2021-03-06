var $enter = $('.enter');
var $banner = $('.banner');
var $navBtn = $('.nav-btn');
var $menu = $('.menu');
var $main = $('.main');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');
var $lbHeading = $('.lightbox-heading');

$enter.on('click', function (e) {
	e.preventDefault();
	$banner.addClass('entered');
	$banner.fadeOut();
	sessionStorage.setItem("active", "yes")
});

$navBtn.on('click', function () {
	$menu.toggleClass('js-menu-open');
	$main.toggleClass('js-blur');
	$('body').toggleClass('js-no-scroll')
});

$menu.on('click', 'a', function (e) {
	$menu.removeClass('js-menu-open');
	$main.removeClass('js-blur');
});

$thumbs.on('click', 'a', function (e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
	$lbHeading.html($(this).attr('data-title'));
	$main.toggleClass('js-blur');
});

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');
	$main.removeClass('js-blur');
});
