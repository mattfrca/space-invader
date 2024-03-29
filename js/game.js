//On y est! Voici le coeur de notre spaceInvader.

const game = {

    //Ici, on a un tableau qui stoque tous les ennemis présent et détruit.
    ennemy: [],
    //ennemy[i][x]
    // i = représente l'id d'un ennemi
    // x est un tableau qui contient 3 valeur:
    // x => 0 = position X
    // x => 1 = position Y
    // x => 2 = type de l'unité 


    ship: [], //ship[0] posX   ship[1] posY 

    missile: [], // missile [0] posX missile [1] posY

    // Gauche/Droite/Espace sont par défaut = false.
    // Il passe à true lorsque le joueur appui sur une touche et retourne à false lorsque le joueur relache la touche.
    gauche: false,
    droite: false,
    espace: false,

    //Vitesse représente la vitesse de notre vaisseau
    vitesse: 10,
    vitesseEnnemy: 2,
    vitesseMissile: 15,

    //MissileOnTravel est false lorsqu'aucun missile n'est à l'écran
    missileOnTravel: false,

    // pause.... bah c'est la pause.
    pause: false,

    // score représente.... euh.... au hasard: le score ?
    score: 0,


    init: function(){
        document.addEventListener('keyup', game.handleKeyUp);
        document.addEventListener('keydown', game.handleKeydown);

        //On créé notre vaisseau
        game.ship = god.createElement("ship", 450, 555);
        
        //On appel la fonction createLigne qui elle même appel la fonction god.createElement qui s'occupe de créer chaque ennemy dans une ligne
        // argument 1 = numéro de la ligne
        // argument 2 = type d'unité qu'on veu créer
        // arguement 3 = nombre d'ennemi qu'on veut dans la ligne
        ennemy.createLigne(0, 'myth', 9);
        ennemy.createLigne(1, 'squid', 9);
        ennemy.createLigne(2, 'crab', 9);
        ennemy.createLigne(3, 'space', 9);

        //Initialisation de l'intervat toute les 20 miliSecondes
        setInterval(game.handleTime, 20);
        
    },

    handleTime:function(){
        //Coeur de notre jeu
        // Cette fonction est lancer toutes les 20 milisecondes.

        //Si le jeux n'est pas en pause:
        // On s'occupe d'abord de la gestion des mouvement de notre vaisseau
        // ensuite on s'occupe de la gestion des mouvement de nos ennemis
        // puis les mouvement de notre missile.
        // Un fois que tout les mouvement on été fait, on regarde si notre missile n'entre pas en collision avec un ennemi
        // En s'occupe de la maj de notre score
        // On vérifie si il existe encore des ennemy vivant
        // On s'occupe de la gestion des étoiles qui file en arrière plan.

        if(!game.pause){
        game.moveTheShip();
        game.moveEnnemy();
        game.missileShip();
        game.handleColision();
        game.handleScore();
        game.allEnnemyKill();
        stars.handleStars();
        }
    },


    handleColision(){
        //Gestion des collision du missile

        //on récupére la position du missile
        let posX = game.missile[0];
        let posY = game.missile[1];

        //on initialise les variables qui accueillerons la position de nos ennemis
        let ePosX = 0;
        let ePosY = 0;
        
        for ( let i = 0; i < game.ennemy.length; i += 1){

           if(document.getElementById(i) != null){
               //Pour chaque ennemis encore vivant:


                //On récupère la position de l'ennemi
                ePosX = game.ennemy[i][0];
                ePosY = game.ennemy[i][1];

                //On récupère la hauteur et la largeur de l'ennemi
                let width = god.modelWidth(game.ennemy[i][2]) * app.pixel;
                let height = god.modelHeight(game.ennemy[i][2]) * app.pixel;

                //Si Y missile < Y ennemy + sa hauteur && Y missile > Y ennemy
                if (posY < ePosY + height && posY > ePosY){
                    
                    //Si X missile + son epaisseur > X ennemy && X missile < X ennemy + sa largeur
                    if(posX + app.pixel > ePosX && posX < ePosX + width){

                        // Si on arrive jusque ici c'est que le missile a toucher un monstre
                        game.score +=50;
                        //On ajoute 50 points au score
                        app.panel.removeChild(document.getElementById(i));
                        app.panel.removeChild(document.getElementsByClassName('missile')[0]);
                        //On suprime alors l'ennemi touché mais également le missile lui même.

                    }
                }
            }
        }
        

    },


    missileShip: function() {

        // Ici on gère la création du missile et son déplacement.

        let missile = document.getElementsByClassName('missile')[0];
        
        //Si le missile n'existe pas, alors on le créé.
        if(missile == undefined ) {
           
            game.missile[0] = game.ship[0] + 30;
            game.missile[1] = game.ship[1] - 20;
            god.createElement('missile', game.missile[0], game.missile[1]);
            game.missileOnTravel = true;
       } else {
        
            if(!game.missileOnTravel){
                missile.style.right = game.missile[0] + "px";
                missile.style.top = game.missile[1] + "px";
                game.missileOnTravel = true;
            
            }else{

                game.missile[1] -= game.vitesseMissile;
                missile.style.top = game.missile[1] + "px";

                if(game.missile[1] < 0){//Si le missile sort du panel
                    game.missile[0] = game.ship[0] + 30;
                    game.missile[1] = game.ship[1] - 20;
                    
                    game.missileOnTravel = false;
                }
            }   
       }
    },

    moveTheShip: function() {

        //Ici on gère le déplacement de notre vaisseau
        //On agit en fonction de game.droite et game.gauche.
        //On veut également empécher le déplacement si le vaisseau est au bord du panel. (D'ou le 10 et 830)

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

        //Gestion des mouvement de l'ennemie

        let posXMax = -100;
        let posXMin = 1000;

        for(var i = 0; i < game.ennemy.length; i+=1){
            //Pour chaque ennemie présent
            let unit = document.getElementById(i);

            if(unit){//Si l'ennemi est encore présent sur le panel

              game.ennemy[i][0] += game.vitesseEnnemy;
              unit.style.right = game.ennemy[i][0] + "px";

              // Ici on récupère la position en X de l'ennemi le plus proche de la droite et la position de celui qui est le plus proche de la gauche
              if(posXMax < game.ennemy[i][0]){
                  posXMax = game.ennemy[i][0];
              }

              if(posXMin > game.ennemy[i][0]){
                  posXMin = game.ennemy[i][0];
              }
            }
        }
    
        //Si le monstre qui est le plus proche de la droite est plus petite que 15
        //On inverse sa vitesse.
        // Du coup si il se déplacais de 10px vers la droite il se déplacera ensuite de -10 pixel vers la droite.
        // Du coup -10 pixel vers la droite, c'est un déplacement de 10 pixel vers la gauche ;)
        if(posXMin < 15){
            game.vitesseEnnemy *=-1;

            for(var i = 0; i < game.ennemy.length; i+=1){
                    let unit = document.getElementById(i);

                    if(unit){
                        game.ennemy[i][1] += 10;
                        unit.style.top = game.ennemy[i][1] + "px";
                    }
            }
          }

          //On fait strictement l'inverse pour l'autre côté
          if(posXMax > 820){
            game.vitesseEnnemy *=-1;
            for(var i = 0; i < game.ennemy.length; i+=1){
                let unit = document.getElementById(i);
                if(unit){
                    game.ennemy[i][1] += 10;
                    unit.style.top = game.ennemy[i][1] + "px";
                }
            }
          }
    },

    allEnnemyKill:function(){
        //On vérifi si il reste des ennemis vivants

        let ennemiCompte = game.ennemy.length;
        for(var i = 0; i < game.ennemy.length; i +=1 ){
            if(!document.getElementById(i)){
                ennemiCompte -=1;
            }
        }

        if(ennemiCompte == 0){
            //Si ils sont tous mort, on met le jeu en pause
            game.pause = true;
        }

    },

    handleScore: function(){
        //Toutes les 20ms le joueur perd 1 point
        game.score -=1;
        if(game.score <0){
            game.score = 0;
        }
        document.querySelector(".score").textContent = game.score;
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
            break;

            case 80:
            if(game.pause){
            game.pause = false;
            }else{
                game.pause = true;
            }
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