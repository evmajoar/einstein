var $date = $( '#date' );

if ( $date.length ) {
    $date.datepicker({
        dateFormat: "dd.mm.yy",
        showOtherMonths: true,
        firstDay: 1,
        monthNames:['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        prevText: '<svg width="11" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.809 1.116a.537.537 0 0 1-.035.668L3.828 6.006l3.946 4.222c.165.176.18.475.035.667a.356.356 0 0 1-.563.03l-4.25-4.548a.526.526 0 0 1-.134-.371.526.526 0 0 1 .134-.372l4.25-4.547a.356.356 0 0 1 .563.029z" fill="#000" fill-opacity=".45"/></svg>',
        nextText: '<svg width="11" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.48 1.116a.537.537 0 0 0 .035.668L7.46 6.006l-3.946 4.222a.537.537 0 0 0-.035.667.356.356 0 0 0 .563.03l4.25-4.548a.526.526 0 0 0 .134-.371.526.526 0 0 0-.134-.372l-4.25-4.547a.356.356 0 0 0-.563.029z" fill="#000" fill-opacity=".45"/></svg>'
    });
}