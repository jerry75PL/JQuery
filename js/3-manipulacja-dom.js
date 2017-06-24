'use strict';

$(function () {
    
//    pobranie paragrafu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
//dodanie tekstu
    
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    $('.paragrafnext').html('to jest <strong>paragraf</strong> z dodanym <br> HTML');
    
    $('.paragrafnext').append('treść na końcu selektora');
    
    $('.paragrafnext').after("treść za selektorem");
    
    $('strong').remove(); //usuwanie elementu
    
    $('.paragraf').empty(); //usuwanie zawartości
    
    $('.paragrafnext').css({'font-size': '3em', 'color': 'red'});
    
    $('h1').addClass('blue');
    
    $('h1').attr("imie", "Marcin");
    
    
});
