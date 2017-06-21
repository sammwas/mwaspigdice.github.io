// user interface
var Player=function(numbers,scores){

  this.numbers=numbers;
  this.scores=scores;
}

var score=0;
var score2=0;

// business logic
$(document).ready(function(){

  $("button#rollbutton").click(function(){
    var number =Math.floor((Math.random() * 6) + 1);

    if(number>1){
       score +=number;
       if(score>=100){
         alert("player1 won");
         $("button").prop('disabled',true);
       }
    }
    else{
       score=0;
      alert("PLAYER 2 START");
      $("button#rollbutton2").show();
      $("button#rollbutton").hide();
    }

    /*instance of player object*/
var player1= new Player(number,score);
    $("ul#finalresults").text("you rolled"+" " +player1.numbers);
    $("ul#score").text("your current score is"+" " +player1.scores);

  })
  /*click function for player2 roll*/

  $("button#rollbutton2").click(function(){
    var number2 =Math.floor((Math.random() * 6) + 1);

    if(number2>1){
       score2 +=number2;
       if(score2>=100){
         alert("player1 won");
         $("button").prop('disabled',true);
       }
    }
    else{
       score2=0;
      alert("PLAYER 1 START");
      $("button#rollbutton").show();
      $("button#rollbutton2").hide();

    }
    /*instance of player object*/
var player2= new Player(number2,score2);
    $("ul#finalresults2").text("you rolled"+" " +player2.numbers);
    $("ul#score2").text("your current score is"+" " +player2.scores);

  })
  $("button#holdbutton").click(function(){
    $("button#rollbutton2").show();
    $("button#rollbutton").hide();

  })
  $("button#holdbutton2").click(function(){
    $("button#rollbutton").show();
    $("button#rollbutton2").hide();

  })

});
