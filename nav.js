$(document).ready(function(){
	var nav = $('nav');
	var navFixed = 'nav-fixed';
	var header = $('header').height();

	$(window).scroll(function(){
		if ($(this).scrollTop() > header) {
			nav.addClass(navFixed);
		}
		else{
			nav.removeClass(navFixed);
		};
	});
});