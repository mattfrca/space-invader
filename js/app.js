// C'est ici que commence notre programme.

const app = {

    panel: document.querySelector('#panel'), // ici on selectionne la zone dans laquel le jeux s'affichera.
    pixel: 5, //On défini une taille de pixel

    
    init: function(){    
        //ETAPE 1: on lance le menu. RDV dans menu.js!
        menu.init();
    },

    startGame:function(){
        //C'est ici qu'on lance le jeu
        console.log("Lancement du jeu");
        game.init();
        //RDV sur game.js

    }

};

document.addEventListener("DOMContentLoaded", app.init);