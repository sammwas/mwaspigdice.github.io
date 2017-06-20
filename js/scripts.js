//business logic
// var total1 = 0;
// var total2 = 0;
// var player1 = "tom";
// var player2 = "hardy";
// var agg1 = 0;
// var agg2 = 0;
// var subtotal=0;
// var winPoints=100;
//
//
// for(var x=0;x<5;x++)
// paint = Math.floor(Math.random() * 6 + 1);
//   {
//    // total2=0;
//   if (paint === 1) {
//     total2 = 0;
//     // alert("You are up player 2");
//     subtotal=total2;
//
//   } else {
//     // alert(total2 += paint);
//     subtotal+=total2;
//     agg1+=subtotal
//   }
// };

// console.log(agg1);
function Player(name,points) {
    this.name = name;
    this.points = points;
}

var player1 = new Player();
var player2 = new Player();

var score1 = 0;
var score2 = 0;

Player.prototype.checkWin1 = function () {
    var diceRoll1 = Math.floor(Math.random() * 6 + 1);

    if (diceRoll1 == 1) {
        alert('player 2 you are up!');
        score1 = 0;
    } else {
        if (score1 >= 100) {
            alert('game over, Player 1 wins')
        } else {
            console.log('game continues');
            player1.points = diceRoll1;
            score1 += diceRoll1;
            console.log(score1);
            console.log('You rolled a die of: ' + diceRoll1 + ' for a score of: ' + score1);
        }
    }
}



Player.prototype.checkWin2 = function () {
    var diceRoll2 = Math.floor(Math.random() * 6 + 1);

    if (diceRoll2 === 1) {
        alert('its Players 1 turn');
        score2 = 0;
    } else {
        if (diceRoll2 >= 100) {
            alert('player 2 wins the game');
        } else {
            console.log('game continues');
            player2.points = diceRoll2;
            score2 += diceRoll2;
            console.log(score2);
            console.log('You rolled a die of: ' + diceRoll2 + ' for a score of: ' + score2);
        }
    }


    console.log(player1);
    console.log(player2);


    //user interface.
    $(document).ready(function () {
        $('form#player1').click(function () {
            // event.preventDefault();
            // var name1Display = ($('input#game1').val());
            // console.log(name1Display);
            // $('#player1NameDisplay').text(name1Display);
            $('#score1').text(score1);
            $('#roll1').player1.checkWin1();
        });
        $('form#player2').click(function () {
            // event.preventDefault();
            // var name2Display = ($('input#game2').val());
            // console.log(name2Display);
            // $('#player2NameDisplay').text(name2Display);
            $('#score2').text(score2);
            $('#roll2').player2.checkWin2();
        });

    });
