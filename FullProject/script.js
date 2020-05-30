// Store the relevant HTML things we are goinf to need
let YouScore=0;
let MeScore=0;

const YouScoreSpan=document.getElementById("YouScore");
const MeScoreSpan=document.getElementById("MeScore");

const ScoreBoxDiv=document.querySelector(".score-box");
const ResultDiv=document.querySelector(".result > p");


const ZeroDiv=document.getElementById("0");
const OneDiv=document.getElementById("1");
const TwoDiv=document.getElementById("2");


// random choice for the computer
const choices=["0","1","2"];
function computer(){
    let mine=choices[Math.floor(Math.random()*3)];
    console.log("I got: ", mine);
    return mine;
}

// your choice
function user(YouChoice){
    console.log("You choose: ",YouChoice)
    return YouChoice;
}


// after TimeOut [in ms] we remove the extra style 
const TimeOut=500;
// call both computer and user to pass to the listener
function  game(YouChoice){
    let c,u,uc;
    c=computer();
    u=user(YouChoice);
    uc=document.getElementById(u)
    // Ok.. the rules are stupid because if you choose 2 you get 1 or 0.
    // You always win on average.  
    if(c>u){
        console.log("I won!!");
        ResultDiv.innerHTML="I WON!!"; 
        MeScoreSpan.innerHTML=++MeScore; 
        // add the extra style
        uc.classList.add("YouLose");
        // remove the extra style after some time
        setTimeout( () => { uc.classList.remove("YouLose") ; }, TimeOut);

    }
    
    if(c<u){
        console.log("You won :("); 
        ResultDiv.innerHTML="you win :("; 
        YouScoreSpan.innerHTML=++YouScore;  
        uc.classList.add("YouWin");
        setTimeout(() => { uc.classList.remove("YouWin") ; }, TimeOut);

    }
    
    if(c==u){
        console.log("It's a draw...");
        ResultDiv.innerHTML="It's a draw..."; 
        uc.classList.add("Draw");
        setTimeout(() => { uc.classList.remove("Draw") ; }, TimeOut);

    }
}



// add a function that adds elements to history
let para ;
let OutcomeDiv = document.getElementById("choises");

function AddHis( choise ){
    para=document.createElement("p");
    para.appendChild(document.createTextNode(choise));
    OutcomeDiv.appendChild(para);
}

function main(){
    // Add listeners. Basically they wait to click on the given element
    ZeroDiv.addEventListener("click",   function(){ game("0"); AddHis(0);} );
    OneDiv.addEventListener("click",   function(){ game("1"); AddHis(1);} );
    TwoDiv.addEventListener("click",   function(){ game("2"); AddHis(2);} );
}
// run main
main();
