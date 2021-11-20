(function ($, window, undefined) {
    //jQuery goes here

    //remove bootstrap-helper-class from Swift Page Builder
    $('.icon-box-ergo').removeClass('col-sm-2');

	/*			parse menu					*/
	// $('a[href*=#]:not([href=#])').each(function(){
	// 	$(this).attr('href', $(this)[0].href.replace(location.href.replace(location.hash,''), ''));
	// });

	// $('a[href="'+location.href.replace(location.hash,'')+'"]').on('click', function(){
	// 	$('html, body').stop().animate({
	// 		scrollTop: 0
	// 	}, 600, 'easeInOutExpo');

	// 	history.pushState('', document.title, window.location.pathname + window.location.search);
	// 	return false;
	// });

})(jQuery, window);