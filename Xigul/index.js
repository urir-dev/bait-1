var Turn = '<img src=https://images-na.ssl-images-amazon.com/images/I/61WxR%2B65g9L.jpg size=auto>',
whosTurn = ''
xTurn = 'x',
oTurn = 'O',
firsPlayer = 0,
secondPlayer = 0;

srcOfPizza = '<img src=https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg size=auto>'
srcOfPokemon = '<img src=https://images-na.ssl-images-amazon.com/images/I/61WxR%2B65g9L.jpg size=auto>'

score = ['','','','','','','','',''];

$(document).ready(function () {
    console.log("$document ready")

    $('.square').click(function (e) { 
        e.preventDefault();
        console.log(getAttr(this,'data-tile'))
        if ($(this).attr('text') != ""){

            markStep(this);
            calcvictory(this);

        }
    });


    // alert(id);
});

function setNextTitle() {

    $setAttr('#nextturn').text(nextTurn);

}

function markStep(tile) {
    if (!$(tile).text()){

        $(tile).html(Turn);

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

function calcvictory(tile){

    console.log(score)
    
        if (whosTurn == 'x'){

            firsPlayer =  firsPlayer + (getAttr(this,'vicVal'));

        }
        


}

function setturn(tagname,value){

    $(tagname).html = value;
}