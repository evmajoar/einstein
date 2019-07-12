var $phone = $( '#phone' ),
    $time = $( '#time' );

if ( $phone.length ) {
    $phone.inputmask(
        {
            "mask": "+7 (999) 999-99-99",
            showMaskOnHover: false
        }
    );
}

if ( $time.length ) {
    $time.inputmask("hh:mm",
        {
            placeholder: "__:__",
            insertMode: false,
            showMaskOnHover: false,
            hourFormat: "24",
            alias: 'hh:mm'
        }
    );
}



