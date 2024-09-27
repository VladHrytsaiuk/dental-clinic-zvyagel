$(window).resize(function() {
	if ($(window).width() < 767) {
			$('.slider').removeClass('swiper');
	} else {
			$('.slider').addClass('swiper');
	}
}).resize();