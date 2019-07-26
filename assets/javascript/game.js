var wins = 0;
var loss = 0;
var gem1;
var gem2;
var gem3;
var gem4;
var playerScore;
var randomNumber;
function startGame(){
playerScore=0;
//create random number
    randomNumber = Math.floor(Math.random() * 111) + 19;
console.log(randomNumber);
//display random number
$(".randomNumber").text(randomNumber);
//display wins and lossses
$(".wins").text("Wins: "+ wins);
$(".lose").text("Lose: "+ loss);
//display the players score
$(".scoreBox").text(playerScore);
//create random values for gems
 gem1 = Math.floor(Math.random() * 11) + 1; console.log("Gem1 " + gem1);
 gem2 = Math.floor(Math.random() * 11) + 1; console.log("Gem2 " + gem2);
 gem3 = Math.floor(Math.random() * 11) + 1; console.log("Gem3 " + gem3);
 gem4 = Math.floor(Math.random() * 11) + 1; console.log("Gem4 " + gem4);
}
 $("#gemOne").click(function() { 
        playerScore += gem1;
        $(".scoreBox").text(playerScore);
        checkScore();
    });
    $("#gemTwo").click(function() { 
        playerScore += gem2;
        $(".scoreBox").text(playerScore);
        checkScore();
    });
    $("#gemThree").click(function() { 
        playerScore += gem3;
        $(".scoreBox").text(playerScore);
        checkScore();
    });
    $("#gemFour").click(function() { 
        playerScore += gem4;
        $(".scoreBox").text(playerScore);
        checkScore();
    });
function checkScore() { 
 if(playerScore===randomNumber){
     alert("You Win");
     wins++;
     $(".wins").text("Wins: "+ wins);
     console.log(wins);
     playerScore=0;
     console.log(playerScore);
     startGame();
 }
else if(playerScore>randomNumber){
    alert("You Lose");
    loss++;
    $(".lose").text("Lose: "+ loss);
    console.log(loss);
    playerScore=0; 
    console.log(playerScore);
    startGame();
};
 }
 




startGame();