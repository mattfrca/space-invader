const game = {


    ennemy: [],
    ship: [],

    gauche: false,
    droite: false,

    init: function(){
        // C'est ici qu'on commence à coder notre jeu.
        document.addEventListener('keyup', game.handleKeyUp);
        document.addEventListener('keydown', game.handleKeydown);
        god.createElement("ship", 450, 150);
        //Créer ici les éléments
        setInterval(game.handleTime, 20);
    },

    handleTime:function(){
        //Coeur de notre jeux
        game.moveTheShip();

    },

    moveTheShip: function() {
        let unitWrapper = document.getElementsByClassName('ship');
        
        if(game.droite){
            console.log("vaisseau droite");
        }
        if(game.gauche){
            console.log("vaisseau gauche");
        }
    },

    handleKeydown: function(evt){
        switch(evt.keyCode){
            case 37:
            game.gauche = true;
            break;

            case 39:
            game.droite = true;
            break;
        }
    },

    handleKeyUp: function(evt){
        switch(evt.keyCode){
            case 37:
            game.gauche = false;
            break;

            case 39:
            game.droite = false;
            break;
        }
    }
};