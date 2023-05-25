/* Custom Script */
/* Add class to navbar */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass("bg-dark");
        } else {
            $('.navbar').removeClass("bg-dark");
        }
    });
});
$(".navbar-toggler").click(function() {
    $('.navbar').addClass("bg-dark");
});
/* Owl Carousel V2 */
$('.owl-carousel-v2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 7
        }
    }
});
/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

/* Animate On Scroll */
AOS.init();

/* light Gallery */
lightGallery(document.getElementById('lightgallery'), {
    subHtmlSelectorRelative: true,
});

/* Scroll Top */
$(document).ready(function() {
    "use strict";
    var offSetTop = 300;
    var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

});