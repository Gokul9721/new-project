/*Slider function [It is recommended to place a function in a separate JS file, such as "functions.js"]*/
function stepSlider() {
    $('#steps').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // appendDots: $('.slider-dots'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, 
    
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

        $(".prev-btn").click(function () {
            $(".slider").slick("slickPrev");
        });

        $(".next-btn").click(function () {
            $(".slider").slick("slickNext");
        });
        $(".prev-btn").addClass("slick-disabled");
        $(".slider").on("afterChange", function () {
            if ($(".slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn").addClass("slick-disabled");
            } else {
                $(".prev-btn").removeClass("slick-disabled");
            }
            if ($(".slick-next").hasClass("slick-disabled")) {
                $(".next-btn").addClass("slick-disabled");
            } else {
                $(".next-btn").removeClass("slick-disabled");
            }
        });
}
/*End of Slider function*/

function smoothScroll() {
    // Select all links with hashes
    var headerHeight = $(".header").height();
    $("a[href*=\"#\"]")
        // Remove links that don't actually link to anything
        .not("[href=\"#\"]")
        .not("[href=\"#0\"]")
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
}

$(document).ready(function() {
/*Calling the function [It is recommended to call a function in a separate JS file, such as "scripts.js"]*/
stepSlider();
smoothScroll();

/*.................End of call*/
});




