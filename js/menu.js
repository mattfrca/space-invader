//VOici le menu de notre jeux

const menu = {

    startTitleSize: 2,

    interval: false,

    startTitle: "",

    fullScreen: "",

    init: function(){
        //Tout d'abord, on créer les Listener:
        // keyup écoute le moment ou l'utilisateur relache une touche

        document.addEventListener("keyup", menu.handleStartMenu);
        menu.creationPressEnter(); //ici on crée le texte PRESS ENTER
        
        //La gestion de la touche entré se fait dans handleStartMenu.
        //Lorsque l'utilisateur apuis sur entré, on lance une petite annimation dans titleEndAnimation
    },

    creationPressEnter: function(){

        let panel = document.querySelector("#panel");

        menu.startTitle = document.createElement("h3");
        menu.startTitle.className = "start-title"
        menu.startTitle.style.fontSize = menu.startTitleSize + 'em';
        menu.startTitle.textContent = "Press enter";
        panel.appendChild(menu.startTitle);
    },

    handleStartMenu: function(evt){
        if(evt.keyCode === 13){
            document.removeEventListener("keyup", menu.handleStartMenu);

            let panel = document.querySelector("#panel");
            menu.startTitle = document.querySelector(".start-title");

            menu.interval = setInterval(menu.titleEndAnimation, 10);

            // panel.removeChild(menu.startTitle);
        }
    },

    titleEndAnimation:function(){
        let panel = document.querySelector("#panel");
        menu.startTitle = document.querySelector(".start-title");
        menu.startTitleSize -= 0.1;
        menu.startTitle.style.fontSize = menu.startTitleSize + "em";

        if(menu.startTitleSize < 0){
            panel.removeChild(menu.startTitle);
            if(document.querySelector('.fullScreen')){
                panel.removeChild(menu.fullScreen);
            }
            clearInterval(menu.interval);
            app.startGame();
            //Une fois l'animation terminé, on lance app.starGame();
            //RDV sur app.js ligne 14
        }
    },

}