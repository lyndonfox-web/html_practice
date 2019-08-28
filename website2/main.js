$(function () {
    $('#minimenu').click(function () {
        $('.nav').slideToggle();
    });

    $(window).bind('resize', function () {
        if ($('#minimenu').css('display') == 'none') {
            $('.nav').show();
        } else {
            $('.nav').hide();
        }
        // console.log('resized');
    });

    $('.nav li a').click(function (event) {
        var targetSection = ($(this).attr('href'));
        var scrTo = $(targetSection).offset().top;
        $('html, body').animate({ scrollTop: scrTo }, 1000)
        // console.log($(targetSection).offset().top);
        console.log($('#minimenu').css('display'));
        if ($('#minimenu').css('display') == 'block') {
            $('.nav').slideUp();
        }

        event.preventDefault();
    });
});

