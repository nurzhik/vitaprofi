/**
 * Created by Jacob on 03.11.2016.
 */
jQuery(document).ready(function($) {
    $(".owl-carousel").owlCarousel({
        // Most important owl features
        items: 6,
        itemsCustom: false,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [768, 3],
        itemsTabletSmall: true,
        itemsMobile: [479, 2],
        singleItem: false,
        itemsScaleUp: false,

        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        // Navigation
        navigation: false,
        navigationText: [ "<i class='glyphicon glyphicon-chevron-left'></i>",
            "<i class='glyphicon glyphicon-chevron-right'></i>"],
        rewindNav: true,
        scrollPerPage: false,

        //Pagination
        pagination: false,
        paginationNumbers: false

    });
});