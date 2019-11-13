const god = {


    createElement: function(unit, posX, posY){
        //Créer un élément et renvoi un array avec sa posX, posY, width et height

        let element = [posX, posY, unit];

        for (model in map.models){
            if (model === unit){
                let unitWrapper = document.createElement('div');
                unitWrapper.className = "unitWrapper " + unit; 
                unitWrapper.style.width = god.modelWidth(unit)* app.pixel + "px";
                unitWrapper.style.height = god.modelHeight(unit)* app.pixel + "px";
                unitWrapper.style.right = posX + "px";
                unitWrapper.style.top = posY + "px ";

                for(var i = 0; i < map.models[unit].length; i += 1){

                    let rowSplit = map.models[unit][i].split("");
        
                    for (var j = 0; j < rowSplit.length; j+=1){
                        let pixelUnit = document.createElement("div");
                        pixelUnit.className = "pixel " + map.types[rowSplit[j]];
                        pixelUnit.style.width = app.pixel + 'px';
                        pixelUnit.style.height = app.pixel + 'px';
                        
                        unitWrapper.appendChild(pixelUnit);
                    }
                }

                if (unit !== "ship" && unit !== "missile"){
                    game.ennemy.push(element);
                    unitWrapper.id = game.ennemy.length-1;
                }

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