
let audioTurn = new Audio("ting.mp3")
let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");

const result_div=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

const action_p=document.getElementById("action-message");

function getcompchoice(){
const choice=['r','p','s'];

const randomnum=Math.floor(Math.random()*3)
return choice[randomnum];
}
function convert(letter){
audioTurn.play();
if(letter=='r')
return "ROCK";
if(letter=='p')
return "PAPER";
else
return "SCISSORS";

}
function win(userchoice,computerchoice){
userscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML="UserChoice "+ convert(userchoice) +"beats " + "ComputerChoice "+ convert(computerchoice)+".";
action_p.innerHTML="YOU WIN!🎉🤠";
}
function lose(userchoice,computerchoice){
compscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML="ComputerChoice"+ convert(computerchoice) +" beats " + "UserChoice"+ convert(userchoice)+".";
action_p.innerHTML="YOU LOSE!😞";
}
function draw(userchoice,computerchoice){
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
result_div.innerHTML="UserChoice "+ convert(userchoice) +"is same as the " + "ComputerChoice"+ convert(computerchoice)+".";
action_p.innerHTML="IT'S A DRAW!🙌";
}
function game(userchoice){
const computerchoice=getcompchoice();
switch(userchoice+computerchoice)
{
case "rs":
case "pr":
case "sp":
win(userchoice,computerchoice);
break;
case "rp":
case "ps":
case "sr":
lose(userchoice,computerchoice);
break;
case "ss":
case "rr":
case "pp":
draw(userchoice,computerchoice);
break;
}
}
function main(){
rock_div.addEventListener('click',function(){game('r');
})
paper_div.addEventListener('click',function(){game('p');
})
scissors_div.addEventListener('click',function(){game('s');
})
}
main();