// Week 4 Crystal Game_JM
// You need this (line #4)

$(document).ready(function(){

// Selects a random number between 19--120 to be revealed upon game start
  var random=Math.floor(Math.random()*101+19);
  
  // Appends the random number from above to the randomNumber id in the html doc
  //
  
  $("#randomNum-displayed").text(random);
  
  // Selects a random numbers for each crystal/gem between 1-12
  // 
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  // Variables needed to show scorecard
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$("#gameWins").text(wins);
$("#gameLosses").text(losses);

//resets the game without having to reload the page
function reset(){
      random=Math.floor(Math.random()*101+19);
      console.log(random)
      $("#randomNum-displayed").text(random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      playerTotal= 0;
      $("#playerTotal").text(playerTotal);
} 

//adds the wins to the playerTotal and resets the game without having to reload the page
function win(){
alert("You won! Try to beat me again?");
  wins++; 
  $("#gameWins").text(wins);
  reset();
}

//adds the losses to the playerTotal and resets the game without having to relload the page
function lose(){
alert ("You lose! Try again?");
  losses++;
  $("#gameLosses").text(losses);
  reset();
}

//click for crystals and sets win/loss condition
  $("#blue").on ("click", function(){
    playerTotal = playerTotal + num1;
    console.log("updated playerTotal= " + playerTotal);
    $("#total").text(playerTotal); 
        if (playerTotal == random){
          win();
        }
        else if (playerTotal > random){
          lose();
        }   
  })  
  $("#yellow").on ("click", function(){
    playerTotal = playerTotal + num2;
    console.log("updated playerTotal= " + playerTotal);
    $("#total").text(playerTotal); 
        if (playerTotal == random){
          win();
        }
        else if (playerTotal > random){
          lose();
        } 
  })  
  $("#pink").on ("click", function(){
    playerTotal = playerTotal + num3;
    console.log("updated playerTotal= " + playerTotal);
    $("#total").text(playerTotal);

          if (playerTotal == random){
          win();
        }
        else if (playerTotal > random){
          lose();
        } 
  })  
  $("#green").on ("click", function(){
    playerTotal = playerTotal + num4;
    console.log("updated playerTotal= " + playerTotal);
    $("#total").text(playerTotal); 
      
          if (playerTotal == random){
          win();
        }
        else if (playerTotal > random){
          lose();
        }
  });   
})