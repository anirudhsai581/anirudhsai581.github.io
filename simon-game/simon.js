let gameSeq =[];
let userSeq =[];
let started = false;
let level =0;

let highScore = 0; 

let h3 = document.getElementById('highscore'); 

let btns =["yellow","red","purple","green"];

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
   
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
    
    
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText =`level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
   // console.log(gameSeq);
    //console.log(randIdx,randColor,randBtn);
    gameFlash(randBtn);
}


function checkAns(idx){
    //console.log(`current level is ${level}`);
  
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length== gameSeq.length){
           setTimeout(levelUp,1000) ;
        }
       
    }else{
        h2.innerHTML=`Game over! your score was <b> ${level}</b> <br> press any key to start.`
        document.querySelector('body').style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor ="white";
        },180);
        if (level > highScore) {
            highScore = level;
            h3.innerText = `High Score: ${highScore}`;
        }
        reset();
    }
}

function btnPress(){
    if(!started)  return;
    
   let btn= this;
  // console.log(this);
    userFlash(btn);
     userColor=btn.getAttribute("id");
    // console.log(userColor);
     userSeq.push(userColor);
     checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}


function reset(){
 started = false;
 gameSeq =[];
 userSeq =[];
 level=0;
};