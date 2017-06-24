'use strict';

$(function () {

    $('p').click(function () {
        $(this).css('color', 'orange');


    });


    $('h1').on({

        'mouseenter': function () {
            $(this).css('color', 'orange');
        },
        'mouseleave': function () {
            $(this).css('color', 'inherit');
        }


    });




});