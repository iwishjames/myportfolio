console.log("It's Alive!");

(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".lander").height();
    var viewPortSize = $(window).height();

    var triggerAt = 10;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.project_imgCards').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});
