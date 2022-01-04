(function ($, window, undefined) {
    //jQuery goes here

    //remove bootstrap-helper-class from Swift Page Builder
    $('.icon-box-ergo').removeClass('col-sm-2');

    //add helper-class to icon-box-container
    $('.icon-box-ergo').parent('div').addClass('icon-box-ergo__wrapper')

	/*			parse menu					*/
	$('a[href*=#]:not([href=#])').each(function(){
		$(this).attr('href', $(this)[0].href.replace(location.href.replace(location.hash, ''), ''));
	});


})(jQuery, window);