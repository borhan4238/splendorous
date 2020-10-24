// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('.slider__arrow-left').on('click', function () {
    var active = $(this).closest('.slider_active');
    var inactive = $(this).closest('.slider_active').prev();
    if (inactive.length == 0) {
        inactive = $('.slider-wrapper-main').find('.slider-wrapper').last();
    }
    active.removeClass('slider_active').addClass('slider_inactive');
    inactive.addClass('slider_active').removeClass('slider_inactive');
});
$('.slider__arrow-right').on('click', function () {
    var active = $(this).closest('.slider_active');
    var inactive = $(this).closest('.slider_active').next();
    if (inactive.length == 0) {
        inactive = $('.slider-wrapper-main').find('.slider-wrapper').first();
    }
    active.removeClass('slider_active').addClass('slider_inactive');
    inactive.addClass('slider_active').removeClass('slider_inactive');
});
