const game = {


    ennemy: [],
    ship: [],

    init: function(){
        console.log("Jeu correctement lancé");
        // C'est ici qu'on commence à coder notre jeu.
        document.addEventListener('keyup', game.moveTheShip);
        god.createElement("ship", 450, 50);
    },
    moveTheShip: function(e) {
        let unitWrapper = document.getElementsByClassName('unitWrapper')[0];
        let posUnitWrapper = unitWrapper.style.cssText;
        console.log(posUnitWrapper);
        if(e.keyCode === 37) {
            unitWrapper.style.right -= 5;
            console.log('gauche pressée');
        }
        if(e.keyCode === 39) {
            unitWrapper.style.right += 5;
            console.log('droite pressée');
        }
    }
};