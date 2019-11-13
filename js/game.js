const game = {


    ennemy: [], //ennemy[0][0] => posX de l'ennemi 1 


    ship: [], //ship[0][0] posX   ship[0][1] posY

    gauche: false,
    droite: false,
    vitesse: 10,

    init: function(){
        // C'est ici qu'on commence à coder notre jeu.
        document.addEventListener('keyup', game.handleKeyUp);
        document.addEventListener('keydown', game.handleKeydown);
        game.ship = god.createElement("ship", 450, 555);
        //Créer ici les éléments
        ennemy.createLigne(0, 'myth', 11);
        ennemy.createLigne(1, 'squid', 11);
        ennemy.createLigne(2, 'crab', 11);
        ennemy.createLigne(3, 'space', 11);
        setInterval(game.handleTime, 20);
    },

    handleTime:function(){
        //Coeur de notre jeux
        game.moveTheShip();
        game.moveEnnemy();
        game.missileShip();

    },

    missileShip: function() {
        god.createElement('missile', game.ship[0] + 25, game.ship[1]-20);
    },

    moveTheShip: function() {
        let unitWrapper = document.getElementsByClassName('ship')[0];
        if(game.droite && game.ship[0] >= 10){
            app.panel.removeChild(unitWrapper);
            game.ship[0] -= this.vitesse;
            god.createElement("ship", game.ship[0], 555);
        }
        if(game.gauche && game.ship[0] <= 830){
            app.panel.removeChild(unitWrapper);
            game.ship[0] += this.vitesse;
            god.createElement("ship", game.ship[0], 555);
        }
        
    },

    moveEnnemy:function(){

        // for(var i = 1; i < game.ennemy.length +1; i+=1){
        //      let unit = document.getElementById(i);
        //      app.panel.removeChild(unit);
        // }
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