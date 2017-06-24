'use strict';

$(function () {

    $('p').hide(3000).show(3000);
    
    $('h1').fadeOut(3000).fadeIn(3000);
    
    $('h2').slideUp(3000).slideDown(3000);


    function animacja(){
        
        console.log('zakończono pierwszą animację. Zaraz startuje druga :)');
        
        $('h3').animate({'font-size' : '1em', 'margin-left' : '0px'}, 2000);
    }
    
    $('h3').animate({'font-size' : '3em', 'margin-left' : '100px'}, 2000, animacja);
   


});

