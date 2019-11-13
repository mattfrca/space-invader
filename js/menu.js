const menu = {

    startTitleSize: 2,

    interval: false,

    startTitle: "",

    fullScreen: "",

    init: function(){
        
        document.addEventListener("keyup", menu.fullSreenMode);
        document.addEventListener("keyup", menu.handleStartMenu);
        menu.creationPressEnter();
        menu.creationFullScreen();

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
        }
    },

    creationFullScreen:function(){
        menu.fullScreen = document.createElement('p');
        menu.fullScreen.textContent = "press -f- for full-screen mode";
        menu.fullScreen.className = "fullScreen";
        let panel = document.querySelector("#panel");

        panel.appendChild(menu.fullScreen);
    },

    fullSreenMode: function(evt){
        if(evt.keyCode === 70){
            let wrapper = document.querySelector("#wrapper");
            wrapper.requestFullscreen();
            document.querySelector('#panel').removeChild(document.querySelector(".fullScreen"));
        }
    }

}