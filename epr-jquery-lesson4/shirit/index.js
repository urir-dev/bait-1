var turn = "x";
var score = ['', '', '', '', '', '', '', '', ''];
$(document).ready(function () {
    console.log("ready");

    enableBoard();


});


function checkForWin() {

    let hasValue = !!score[0];
    if (hasValue && score[0] === score[1] && score[1] === score[2]) {
        weHaveAWinner(score[0]);
    }
    else if (score[3] !== '' && score[3] === score[4] && score[4] === score[5]) {
        weHaveAWinner(score[3]);
    }
    else if (score[6] !== '' && score[6] === score[7] && score[7] === score[8]) {
        weHaveAWinner(score[6]);
    }
    else if (score[0] !== '' && score[0] === score[3] && score[3] === score[6]) {
        weHaveAWinner(score[0]);
    }
    else if (score[1] !== '' && score[1] === score[4] && score[4] === score[7]) {
        weHaveAWinner(score[1]);
    }
    else if (score[2] !== '' && score[2] === score[5] && score[5] === score[8]) {
        weHaveAWinner(score[2]);
    }
    else if (score[2] !== '' && score[2] === score[4] && score[4] === score[6]) {
        weHaveAWinner(score[2]);
    }
    else if (score[0] !== '' && score[0] === score[4] && score[4] === score[8]) {
        weHaveAWinner(score[0]);
    }
}
function weHaveAWinner(theWinner) {
    let title = $(".title");
    title.text(theWinner + ' is the winner');
    title.css("font-size", "50px")
    title.css("background-color", "red");

    confetti.start();
    disableBoard();

}
function replaceTurn(thisTurn) {

    if (thisTurn === "x") {
        turn = "o"
    }
    else {
        turn = "x"
    }
    $(".title").text("now is " + turn + " turn")
}

function enableBoard() {
    $(".tile").on("click", function (e) {
        if (!$(this).text()) {
            console.log($(this).attr("data-tile"));
            $(this).text(turn);
            score[$(this).attr('data-tile')] = turn;
            replaceTurn(turn);
            checkForWin();
        }
    });
}
function disableBoard() {
    $(".tile").off("click");
}