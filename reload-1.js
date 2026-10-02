(function () {  
    'use strict';  

function addReloadButton() {  
        var btn = '<div id="RELOAD" class="head__action selector reload-screen">' +  
            '<svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +  
            '<path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,0,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z"/>' +  
            '</svg></div>';  
        $('#app > div.head > div > div.head__actions').append(btn);  
  
        $('#RELOAD').on('hover:enter hover:click hover:touch', function() {  
            location.reload();  
        });  
    }


 
  
    if (window.appready) {  
addReloadButton();
    } else {  
        Lampa.Listener.follow('app', function (e) {  
            if (e.type === 'ready') {  
addReloadButton();
            }  
        });  
    }  
})();