'use strict';

$(function () {

    //wybieranie elementu z kolekcji za pomocą metody eq()

    $('body').find('p').eq(1).css({
        'color': 'green'
    });

    $('p').each(function (index) {

        $(this).addClass('paragraf-' + index);

        console.log(jQuery(this));
    });
});