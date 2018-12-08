var height;

function calculateHeight() {
    height = $(window).outerHeight() - $('.navegador').outerHeight() - 30;
    if ($(window).width() < 479) {
        console.log("pantalla petitta");
        height = $(window).outerHeight() - $('.navegador').outerHeight() + 300;
    }
}

$(window).resize(calculateHeight);

calculateHeight();

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        $('.navegador').addClass('navegador-fix');
        $('.logo_container').hide();

    } else if ($(this).scrollTop() <= height) {
        $('.navegador').removeClass('navegador-fix');
        $('.logo_container').show();
    }
});
$(window).scroll();

$(document).ready(function() {
    $('nav').localScroll({
        duration: 800
    });
});


jQuery.easing.easeOutQuart = function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};



$('.ipad figure').serialScroll({
    items: 'img', // Selector to the items ( relative to the matched elements, '#sections' in this case )
    axis: 'xy', // The default is 'y' scroll on both ways
    navigation: '.bullet-points div',
    duration: 1000, // Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
    force: true, // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
    interval: 6000, // It's the number of milliseconds to automatically go to the next
    //constant:true, // constant speed

    onBefore: function(e, elem, $pane, $items, pos) {
        e.preventDefault();
        if (this.blur)
            this.blur();
    },
    onAfter: function(elem) {
        //'this' is the element being scrolled ($pane) not jqueryfied
    }
});

$(".contactar").on('submit', enviaMail);
