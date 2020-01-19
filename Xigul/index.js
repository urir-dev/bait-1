var nexTurn = 'X',
xTurn = 'x',
oTurn = 'O';

score = ['','','','','','','','',''];

$(document).ready(function () {
    console.log("$document ready")

    $('.square').click(function (e) { 
        e.preventDefault();
        console.log(getAttr(this,'data-tile'))
        if ($(this).attr('text') != ""){

            setAttr(this,'text',turn)

        }
    });


    // alert(id);
});

function setNextTitle() {

    $setAttr('#nextturn').text(nextTurn);

}

function markturn(element) {
    if (!$(element).text()){

        

    }
}

function getAttr(tagname,attr){

    // console.group(tagname + ' ' + attr)
    console.log($(tagname).attr(attr));
    // console.groupEnd;

}

function setAttr(tagname,attr,value){

    $(tagname).attr(attr,value);

}

function calcvictory(){

    console.log(score)


}