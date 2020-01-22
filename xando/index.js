var nextTurn = '😂',
    xTurn = '😂',
    oTurn = '😎';
score = ['', '', '', '', '', '', '', '', ''];

$(document).ready(function () {
    $(".tile").click(function (e) {
     

        markTurn(this);
        calcVictory();
    });
    setNextTitle();

});
function setNextTitle() {
    $('#nextturn').text(nextTurn);
}
function markTurn(elelment) {
    if (!$(elelment).text()) {

        $(elelment).text(nextTurn);
        score[$(elelment).attr('data-tile')] = nextTurn;
        toggleTurns();

    }
}
function toggleTurns() {
    nextTurn = nextTurn === xTurn ? oTurn : xTurn;
    setNextTitle();
}

function getAttr(tagname, attr) {
    console.group(tagname.toUpperCase() + ' ' + attr.toUpperCase());
    console.log($(tagname).attr(attr));
    console.groupEnd();
}

function setAttr(tagname, attr, value) {
    $(tagname).attr(attr, value);
}
function calcVictory() {
    console.log(score);
    if (score[0] === score[1] && score[1] === score[2]) {
        alert(score[0] + 'is a winner');
    }

}