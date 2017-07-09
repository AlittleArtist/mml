function pageInvoke() {
    $("#footer").load("footer.html");
    $("#header").load("header.html");
    $("#slider").load("slider.html", function () {
        // initialize carousel and marquee
        $(".owl-carousel").owlCarousel({
            items: 1,
            smartSpeed: 900
            /*nav: true*/
        });
        $('.marquee-slide').marquee({
            //speed in milliseconds of the marquee
            duration: 10000
        });
    });
}
$(document).ready(function () {
    // Call Template
    pageInvoke();
});