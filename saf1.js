let music = new Audio("safSONG.MP3")
var obstaclecar = document.getElementById("obstaclecar");
var playercar = document.getElementById("playercar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")

obstaclecar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    obstaclecar.style.left = random + "px";
    counter++
})

window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var playercarLeft = parseInt(window.getComputedStyle(playercar).getPropertyValue("left"))
    if(playercarLeft < 260){playercar.style.left = (playercarLeft + 130) + "px"}
    jumpsound.play()
};

    if(e.keyCode == "37"){
        var playercarLeft = parseInt(window.getComputedStyle(playercar).getPropertyValue("left"))
        if(playercarLeft > 0){playercar.style.left = (playercarLeft - 130) + "px"
        jumpsound.play()
    }

    }
})

setInterval(function Gameover (){
    music.play();
    var obstaclecarTop = parseInt(window.getComputedStyle(obstaclecar).getPropertyValue("top"))
    var obstaclecarLeft = parseInt(window.getComputedStyle(obstaclecar).getPropertyValue("left"));
    var playercarLeft = parseInt(window.getComputedStyle(playercar).getPropertyValue("left"));
        if((obstaclecarLeft === playercarLeft) && (obstaclecarTop > 250) && (obstaclecarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
    },10)