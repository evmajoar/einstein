if (typeof $.fn.owlCarousel === 'function') {

    var $menu = $( '.menu__list' ),
        $event = $( '.event' );

    $menu.on('initialized.owl.carousel changed.owl.carousel', function(event) {
        var $menuCounterThis = $('.menu__counter-this'),
            $menuCounterTotal = $('.menu__counter-total'),
            menuCloned = $( this ).find( '.cloned' ).length,
            menuIndex = event.item.index,
            menuCount = event.item.count;

        if ( menuIndex > menuCount ) {
            $menuCounterThis.text( menuIndex - menuCloned + ( menuCloned - menuCount ) );
        } else {
            $menuCounterThis.text( menuIndex );
        }

        $menuCounterTotal.text( menuCount );

    }).owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
    }).siblings( '.menu__controls' ).find( '.menu__button' ).each(function() {
        var $that = $( this ),
            $menuItem = $( '.owl-item', $menu ),
            $firstItem = $menuItem.first(),
            $lastItem = $menuItem.last();

        var disabledButton = function () {
            if ( $firstItem.is('.active') ) {
                $('.menu__button--prev').attr('disabled', 'true').siblings('.menu__button--next').removeAttr('disabled');
            } else if( $lastItem.is('.active') ) {
                $('.menu__button--next').attr('disabled', 'true').siblings('.menu__button--prev').removeAttr('disabled');
            } else {
                $('.menu__button--prev').removeAttr('disabled').siblings('.menu__button--next').removeAttr('disabled');
            }
        };

        if ( $that.is( '.menu__button--prev' ) ) {
            $that.click(function() {
                $('.owl-prev', $menu).trigger( 'click' );
            });
        } else if ( $that.is( '.menu__button--next' ) ) {
            $that.click(function() {
                $('.owl-next', $menu).trigger( 'click' );
            });
        }
    });


    $event.each(function() {
        $(this).on('initialized.owl.carousel changed.owl.carousel', function(event) {

            var $eventCounterThis = $( this ).siblings('.events__controls').find( '.events__counter-this' ),
                $eventCounterTotal = $( this ).siblings('.events__controls').find( '.events__counter-total' ),
                eventCloned = $( this ).find( '.cloned' ).length,
                eventIndex = event.item.index,
                eventCount = event.item.count;

            if ( eventIndex > eventCount ) {
                $eventCounterThis.text( eventIndex - eventCloned + ( eventCloned - eventCount ) );
            } else {
                $eventCounterThis.text( eventIndex );
            }

            $eventCounterTotal.text( eventCount );

        }).owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            center: true,
            autoplay: true,
            lazyLoad: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1
                },
                768: {
                    items:3
                }
            }
        }).siblings( '.events__controls' ).find( '.events__button' ).each(function() {
            var $that = $( this );

            if ( $that.is( '.events__button--prev' ) ) {
                $that.click(function() {
                    $(this).parent().siblings($event).find('.owl-prev').trigger( 'click' );
                });
            } else if ( $that.is( '.events__button--next' ) ) {
                $that.click(function() {
                    $(this).parent().siblings($event).find('.owl-next').trigger( 'click' );
                });
            }
        });
    });

}