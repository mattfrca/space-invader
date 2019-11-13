const stars = {

    compteur : 0,

    starArray : [],

    handleStars: function(){
        stars.randomStars();
        stars.compteur +=1;

        stars.move();

    },

    randomStars: function(){
        
            stars.compteur = 0;
            let starElm = document.createElement("div");
            
            let color ="";
            switch(Math.floor(Math.random() * 5))
            {
                case 1:
                color = "starYellow";
                break;

                case 2:
                color = "starWhite";
                break;

                case 3:
                color = "starBlue";
                break;

                case 4:
                color = "starRed";
                break;
            }
            
            starElm.className = color;
            let posX = Math.floor(Math.random() * 900);
            starElm.style.right = posX + "px";
            starElm.style.top = 0 + "px";
            starElm.id = "star" + stars.starArray.length;
            stars.starArray.push([starElm, 0]);
            app.panel.appendChild(starElm);

        
        
    },

    move: function(){
        for(var i = 0; i < stars.starArray.length; i +=1){

            star = document.getElementById("star"+i);

            if(star){

                stars.starArray[i][1] += 15;
                if(stars.starArray[i][1] >= 600){
                    app.panel.removeChild(stars.starArray[i][0])
                }else{
                    stars.starArray[i][0].style.top = stars.starArray[i][1] + "px";
                }

            }
        }
    }

};