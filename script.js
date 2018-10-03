(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 350) {
                $('#navbar').fadeIn(200);
            } else {
                $('#navbar').fadeOut(200);
            }
        });
    });
})(jQuery);

var sdegree = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
  
    sdegree = st / 300 * -1;
    s1degree = st / 50;
    s2degree = st / 200;

    var srotate = "skew(" + sdegree + "deg)";
    var s1rotate = "skew(" + s1degree + "deg)";
    var s2rotate = "skew(" + s2degree + "deg)";

    $("#stuck").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    $("#stuck1").css({"-moz-transform" : s1rotate, "-webkit-transform" : s1rotate});
    $("#stuck2").css({"-moz-transform" : s2rotate, "-webkit-transform" : s2rotate});


});