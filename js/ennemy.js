const ennemy = {

    createLigne: function(numLigne, unit, nbrElement){

        let posX = 40;
        let posY = 10;
        posY += 55 * numLigne;

        for (var i = 0; i < nbrElement; i += 1){
            god.createElement(unit, posX, posY);

            posX += 85;
        }

    },

}