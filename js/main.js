// FUNCION DE TABS

$('[data-tab]').click(function() {
	var showTab = $(this).attr('data-tab');
	$('#' + showTab).siblings('.tab-content').fadeOut(300);
	$('#' + showTab).fadeIn(300);
	$(this).parent().siblings().removeClass('current');
	$(this).parent().addClass('current');

});

// MENU RESPONSIVE

$('.open-nav').click(function() {
	$(this).toggleClass('close-nav');
	$('.toggle-menu').slideToggle(300);
	$('body').toggleClass('no-scroll');
});

$('.open-search button').click(function() {
	$(this).parent().toggleClass('close-search',300);
	$('.header-nav ul').animate({'opacity': 'toggle'},100);
	$('.nav-mobile-header a .burger, .nav-mobile-header .logo-header').animate({'opacity': 'toggle'},100);
});

$('.nav-mobile-header .open-search button').click(function() {	
	$('body').toggleClass('no-scroll-overlay');
})


// AGREGO CLASE AL HEADER CUANDO SCROLLEO

$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	if (windscroll >= 120) {
		$('header').addClass('header-scroll');	
		$('.nav-mobile-header').addClass('header-scroll');	
	} else {
		$('header').removeClass('header-scroll');	
		$('.nav-mobile-header').removeClass('header-scroll');		
	}
}).scroll();


