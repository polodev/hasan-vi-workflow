(function ($) {
    "use strict";
    
    /*-------------------------------------
    Price range filter
    -------------------------------------*/
    if ($.fn.ionRangeSlider !== undefined) {
        $(".coverage-range").ionRangeSlider({
            type: "double",
            min: 50000,
            max: 100000,
            to: 80000,
            drag_interval: false,
            min_interval: null,
            max_interval: null
        });
        $(".premium-range").ionRangeSlider({
            type: "double",
            min: 1000,
            max: 18000,
            to: 10000,
            drag_interval: false,
            min_interval: null,
            max_interval: null
        });
    }

    /*-------------------------------------
    Price range Select
    -------------------------------------*/

    $('.price-range-list .price-range, .gender-list .gender-select').on('click', function () {
        var $this = $(this);
        $this.addClass('active').removeClass;
        $this.siblings().removeClass('active');
    })


    /*-------------------------------------
        Quantity Button
    -------------------------------------*/
    function quantityButton() {
        $('.prod-qnty').prepend('<span class="increment qnty-btn fa-solid fa-angle-up"></span>');
        $('.prod-qnty').append('<span class="decrement qnty-btn fa-solid fa-angle-down"></span>');
        $('.qnty-btn').on('click', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('increment')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
    }

    quantityButton();

   /*-------------------------------------
        Compare Modal
    -------------------------------------*/

    $('.compare-btn').on('click', function (e) {
        
        var $this = $(this),
            modalWrap = $('.compare-box-wrap');
            
        $this.toggleClass('added');

        if ($this.hasClass('added')) {
            modalWrap.addClass('compare-added');
        }else {
            modalWrap.removeClass('compare-added');
        }

        e.preventDefault();
    })

    $('.compare-all').on('click', function (e) {
        
        var modalWrap = $('.compare-box-wrap');
            
        modalWrap.addClass('compare-opend');
        
        e.preventDefault();
    })



    $(function () {

        /*-------------------------------------
        Carousel slider initiation
        -------------------------------------*/
        $(".bim-carousel").each(function () {
            var carousel = $(this),
                loop = carousel.data("loop"),
                animateout = carousel.data("animateout"),
                animatein = carousel.data("animatein"),
                items = carousel.data("items"),
                margin = carousel.data("margin"),
                stagePadding = carousel.data("stage-padding"),
                autoplay = carousel.data("autoplay"),
                autoplayTimeout = carousel.data("autoplay-timeout"),
                smartSpeed = carousel.data("smart-speed"),
                dots = carousel.data("dots"),
                nav = carousel.data("nav"),
                navSpeed = carousel.data("nav-speed"),
                rXsmall = carousel.data("r-x-small"),
                rXsmallNav = carousel.data("r-x-small-nav"),
                rXsmallDots = carousel.data("r-x-small-dots"),
                rXmedium = carousel.data("r-x-medium"),
                rXmediumNav = carousel.data("r-x-medium-nav"),
                rXmediumDots = carousel.data("r-x-medium-dots"),
                rSmall = carousel.data("r-small"),
                rSmallNav = carousel.data("r-small-nav"),
                rSmallDots = carousel.data("r-small-dots"),
                rMedium = carousel.data("r-medium"),
                rMediumNav = carousel.data("r-medium-nav"),
                rMediumDots = carousel.data("r-medium-dots"),
                rLarge = carousel.data("r-large"),
                rLargeNav = carousel.data("r-large-nav"),
                rLargeDots = carousel.data("r-large-dots"),
                rExtraLarge = carousel.data("r-extra-large"),
                rExtraLargeNav = carousel.data("r-extra-large-nav"),
                rExtraLargeDots = carousel.data("r-extra-large-dots"),
                center = carousel.data("center"),
                custom_nav = carousel.data("custom-nav") || "";
            carousel.addClass('owl-carousel');
            var owl = carousel.owlCarousel({
                loop: loop ? true : false,
                animateOut: animateout,
                animateIn: animatein,
                items: items ? items : 1,
                lazyLoad: true,
                margin: margin ? margin : 0,
                autoplay: autoplay ? true : false,
                autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
                smartSpeed: smartSpeed ? smartSpeed : 250,
                dots: dots ? true : false,
                nav: nav ? true : false,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                navSpeed: navSpeed ? true : false,
                center: center ? true : false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: rXsmall ? rXsmall : 1,
                        nav: rXsmallNav ? true : false,
                        dots: rXsmallDots ? true : false
                    },
                    576: {
                        items: rXmedium ? rXmedium : 2,
                        nav: rXmediumNav ? true : false,
                        dots: rXmediumDots ? true : false
                    },
                    768: {
                        items: rSmall ? rSmall : 3,
                        nav: rSmallNav ? true : false,
                        dots: rSmallDots ? true : false
                    },
                    992: {
                        items: rMedium ? rMedium : 4,
                        nav: rMediumNav ? true : false,
                        dots: rMediumDots ? true : false
                    },
                    1200: {
                        items: rLarge ? rLarge : 5,
                        nav: rLargeNav ? true : false,
                        dots: rLargeDots ? true : false
                    },
                    1240: {
                        items: rExtraLarge ? rExtraLarge : 5,
                        nav: rExtraLargeNav ? true : false,
                        dots: rExtraLargeDots ? true : false
                    }
                },
            });

            if (custom_nav) {
                var nav = $(custom_nav),
                    nav_next = $(".rt-next", nav),
                    nav_prev = $(".rt-prev", nav);

                nav_next.on("click", function (e) {
                    e.preventDefault();
                    owl.trigger('next.owl.carousel');
                    return false;
                });

                nav_prev.on("click", function (e) {
                    e.preventDefault();
                    owl.trigger('prev.owl.carousel');
                    return false;
                });
            }
        });
    });
})(jQuery);