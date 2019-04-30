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
    setTimeout(shuffle, 500);
    
}

function startgame2(){
  gm = 2;
  game.style.backgroundImage = "url(../static/basketball/background.jpg)";
  cont.style.transform = "rotateY(180deg)";
  setTimeout(shuffle, 500);
  
  
}


const cards = document.querySelectorAll('.cardd');
const set1 = new Set([]);


function shuffle(){

    let x;
    let i;
    if(gm == 1){
    for(let i=0;i<cards.length;i++){
        do x = Math.ceil(Math.random() * 16);
        while(set1.has(x));
        set1.add(x);
        cards[i].innerHTML = `<div class="back"><img class="default-image" src="../static/football/default.jpg"></div>
        <div class="front"><img class="card-image" src="../static/football/${x}.jpg" ></div>`;
        cards[i].id = x;
        
    }
  }
  else if(gm == 2){
    for(i=0;i<cards.length;i++){
        do x = Math.ceil(Math.random() * 16);
        while(set1.has(x));
        set1.add(x);
        cards[i].innerHTML = `<div class="back"><img class="default-image" src="../static/basketball/default.jpg"></div>
        <div class="front"><img class="card-image" src="../static/basketball/${x}.jpg" ></div>`;
        cards[i].id = x;
        
    }
  }
}

cards.forEach(card => card.addEventListener("click",flip));

function flip() {
    
  
    this.classList.add('flip');
  
   
  
  
  }