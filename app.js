let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highestScore=0;
let btns = ["red", "blue", "green", "yellow"];
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
        document.querySelector("#highest-score").innerText = `Highest Score: ${highestScore}`;
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function levelUp() {
    userSeq=[];
    level++;
    document.querySelector("h2").innerText = `level ${level}`;
    let btnInd = Math.floor(Math.random() * 3);
    let btnColor = btns[btnInd];
    btnClass = document.querySelector(`.${btnColor}`);
    gameSeq.push(btnColor);
    console.log(gameSeq);
    
    gameFlash(btnClass);


}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash")
    }, 250);
}
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        
        if(userSeq.length===gameSeq.length){
            setTimeout(() => {
                levelUp();
            },500);
        }



    }
    else {
        if(level>highestScore){
            highestScore=level;
            document.querySelector("#highest-score").innerText = `Highest Score: ${highestScore}`;
        }
        document.querySelector("h2").innerHTML = `Game Over!your score was <b>${level}</b> <br> press any key so start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            
        document.querySelector("body").style.backgroundColor="white";
        }, 125);
        
        reset();
    }

}
function btnPress() {
    let btn = this;
    // console.log(btn);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}