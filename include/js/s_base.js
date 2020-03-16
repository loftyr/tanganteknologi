// Wait for window load
$(window).on('load', function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function () {
    // accordion
    $('.ui.accordion').accordion();

    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    AOS.init();
});