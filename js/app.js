const app = {

    panel: document.querySelector('#panel'),
    pixel: 5,

    init: function(){
        //On lance le menu
        //menu.init();

        //A SUPRIMER:
        app.startGame();
    },

    startGame:function(){
        console.log("Lancement du jeu");
        game.init();
    }

};

document.addEventListener("DOMContentLoaded", app.init);