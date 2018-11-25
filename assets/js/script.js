(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            console.log('Href: ', window.location)
            if ($(this).scrollTop() > 350 || window.location.href == 'blog') {
                $('#navbar').fadeIn(200);
            } else {
                $('#navbar').fadeOut(200);
            }
        });
    });
})(jQuery);
