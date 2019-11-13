const ennemy = {

    createLigne: function(numLigne, unit, nbrElement){

        console.log("test");

        let posX = 80;
        let posY = 50;
        posY += 55 * numLigne;

        for (var i = 0; i < nbrElement; i += 1){
            god.createElement(unit, posX, posY);

            posX += 70;
        }

    },

}