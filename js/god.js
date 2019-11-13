const god = {


    createElement: function(unit, posX, posY){
        //Créer un élément et renvoi un array avec sa posX, posY, width et height

        let element= [];

        for (model in map.models){
            if (model === unit){
                let unitWrapper = document.createElement('div');
                unitWrapper.className = "unitWrapper"
                unitWrapper.style.width = god.modelWidth(unit)* app.pixel + "px";
                unitWrapper.style.height = god.modelHeight(unit)* app.pixel + "px";
                unitWrapper.style.right = posX + "px";
                unitWrapper.style.top = posY + "px ";

                god.createModel(unit);


               app.panel.appendChild(unitWrapper);
            }
        }



        return element;
    },

    createModel: function(unit){

    },

    modelWidth: function(element){
        return map.models[element][0].length;
    },

    modelHeight: function(element){
        //Retourne la hauteur d'un élément
        return map.models[element].length;
    },

};