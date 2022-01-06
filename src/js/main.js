(function ($, window, undefined) {
    //jQuery goes here

    //remove bootstrap-helper-class from Swift Page Builder
    $('.icon-box-ergo').removeClass('col-sm-2');

    //add helper-class to icon-box-container
    $('.icon-box-ergo').parent('div').addClass('icon-box-ergo__wrapper');

    //add some jq to modify exactly-gdpr-map
    //$('.exggmap-wrapper iframe').attr('data-src', '');
    $('.exggmap-caption').html('<p>Hier klicken, um Google Map zu laden.</p><a href="https://policies.google.com/privacy?hl=de" target="_blanc">Google-Datenschutzerklärung</a>');
    // $('.exggmap-caption a').click(function(e){
    //     e.stopPropagation();
    // });

})(jQuery, window);