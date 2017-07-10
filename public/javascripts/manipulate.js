

$( document ).ready(function() {  
    
       $('.textillate').textillate({ 
        in: { effect: 'bounceIn', delayScale: .8 } , 
        callback: function (callbackFunc) {},
        initialDelay: 450
    });
    
    function callbackFunc(){
         $('.word6').click(function(){
         alert();
        });
    }
});

