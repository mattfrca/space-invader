const game = {


    ennemy: [], //ennemy[0][0] => posX de l'ennemi 1 


    ship: [], //ship[0][0] posX   ship[0][1] posY

    missile: [],

    gauche: false,
    droite: false,
    espace: false,
    vitesse: 12,
    vitesseEnnemy: 2,
    vitesseMissile: 12,


    init: function(){
        // C'est ici qu'on commence à coder notre jeu.
        document.addEventListener('keyup', game.handleKeyUp);
        document.addEventListener('keydown', game.handleKeydown);
        game.ship = god.createElement("ship", 450, 555);
        //Créer ici les éléments

        ennemy.createLigne(0, "ghost", 1);

        // ennemy.createLigne(0, 'myth', 11);
        // ennemy.createLigne(1, 'squid', 11);
        // ennemy.createLigne(2, 'crab', 11);
        // ennemy.createLigne(3, 'space', 11);
        setInterval(game.handleTime, 20);
        
    },

    handleTime:function(){
        //Coeur de notre jeux
        game.moveTheShip();
        game.moveEnnemy();
        game.missileShip();
        game.handleColision();
    },

    handleColision(){
        let posX = game.missile[0];
        let posY = game.missile[1];
        let ePosX = 0;
        let ePosY = 0;

        for ( let i = 0; i < game.ennemy.length; i += 1){
            ePosX = game.ennemy[i-1][0];
            ePosY = game.ennemy[i-1][1];

            if (ePosY ){

            }
        }
        

    },


    missileShip: function() {

        let missile = document.getElementsByClassName('missile')[0];
        
        if(missile == undefined) {
           
            game.missile[0] = game.ship[0] + 30;
            game.missile[1] = game.ship[1] - 20;
           god.createElement('missile', game.missile[0], game.missile[1]);
       } else {
        
            game.missile[1] -= game.vitesseMissile;
            missile.style.top = game.missile[1] + "px";
           if(game.missile[1] < 0){
            game.missile[0] = game.ship[0] + 30;
            game.missile[1] = game.ship[1] - 20;
            missile.style.right = game.missile[0] + "px";
           }
           
       }
    },

    moveTheShip: function() {
        let unitWrapper = document.getElementsByClassName('ship')[0];
        if(game.droite && game.ship[0] >= 10){
            game.ship[0] -= game.vitesse;
            unitWrapper.style.right = game.ship[0]+ "px";
        }
        if(game.gauche && game.ship[0] <= 830){
            game.ship[0] += game.vitesse;
            unitWrapper.style.right = game.ship[0] + "px";

        }
        
    },

    moveEnnemy:function(){
        let posXMax = 0;
        let posXMin = 900;

        for(var i = 1; i < game.ennemy.length +1; i+=1){
              let unit = document.getElementById(i);
              game.ennemy[i-1][0] += game.vitesseEnnemy;
              unit.style.right = game.ennemy[i-1][0] + "px";

              if(posXMax < game.ennemy[i-1][0]){
                  posXMax = game.ennemy[i-1][0];
              }

              if(posXMin > game.ennemy[i-1][0]){
                  posXMin = game.ennemy[i-1][0];
              }
        }

        if(posXMin < 15){
            game.vitesseEnnemy *=-1;

            for(var i = 1; i < game.ennemy.length +1; i+=1){
                    let unit = document.getElementById(i);
                    game.ennemy[i-1][1] += 10;
                    unit.style.top = game.ennemy[i-1][1] + "px";
            }
          }

          if(posXMax > 820){
            game.vitesseEnnemy *=-1;
            for(var i = 1; i < game.ennemy.length +1; i+=1){
                let unit = document.getElementById(i);
                game.ennemy[i-1][1] += 10;
                unit.style.top = game.ennemy[i-1][1] + "px";
            }
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

            case 32:
            game.espace = true;
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


            case 32:
            game.espace = false;
        }
    }
};