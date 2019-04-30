const football = document.getElementById("football");
const basketball = document.getElementById("basketball");
const game = document.getElementById("game");
const cont = document.getElementById("containerr");

football.addEventListener('click', startgame1);
basketball.addEventListener('click', startgame2);

let gm;

function startgame1(){
    gm = 1;
    game.style.backgroundImage = "url(../static/football/background.jpg)";
    cont.style.transform = "rotateY(180deg)";
    
    
}

function startgame2(){
  gm = 2;
  game.style.backgroundImage = "url(../static/basketball/background.jpg)";
  cont.style.transform = "rotateY(180deg)";
  
  
  
}