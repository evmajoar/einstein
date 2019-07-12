var $tabs = $( '.events__tabs' );

if ( $tabs.length ) {
    $tabs.tabs({
        hide: { effect: "fade", duration: 300 },
        show: { effect: "fade", duration: 300 },
        "ui-tabs": "",
        "ui-tabs-nav": "",
        "ui-tabs-tab": "",
        "ui-tabs-panel": "",
    });
}