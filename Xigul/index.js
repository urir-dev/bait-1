var Turn = '<img src=https://images-na.ssl-images-amazon.com/images/I/61WxR%2B65g9L.jpg size=auto>',
whosTurn = ''
xTurn = 'Pokémon',
oTurn = 'Pizza',
firsPlayer = 1,
secondPlayer = 2;
currentPlayer = 1;
victory = false;
curTile = 0;
tieChk = 0;


srcOfPizza = '<img src=https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg size=auto>'
srcOfPokemon = '<img src=https://images-na.ssl-images-amazon.com/images/I/61WxR%2B65g9L.jpg size=auto>'

score = [0,0,0,0,0,0,0,0,0];

$(document).ready(function () {
    console.log("$document ready")

    $('.square').click(function (e) { 

        e.preventDefault();
        console.log(getAttr(this,'data-tile'))
        curTile = getAttr(this,'data-tile');
        if ($(this).attr('text') != ""){

            markStep(this);
            tieChk++;

            let winmark = calcvictory(this);            
            if (winmark == 0) 
            {
                setNextTitle();
                swithcTurn();
            }
            else
            {
                if (winmark == 3) 

                    setTie();

                else{
                    setVictory();
                }
                
                resetGame();

            }
            

        }
    });


    // alert(id);
});

function setNextTitle() {

    $setAttr('#nextturn').text(whosTurn + ' Turn.');
    currentPlayer ++;
    if (currentPlayer = 3){currentPlayer = 1};

}

function markStep(tile) {
    if (!$(tile).text()){

        $(tile).html(Turn);
        score[curTile] = currentPlayer;

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

function calcVictory(){ 

    calcvictory = 0

    isvictor(victory);

    if (victory)
        { 

            calcVictory = currentPlayer;

        } 
        else if(tieChk >= 9){
        
            calcVictory = 3;           
        }
}

function isvictor(v){

    for (let i = 0; i < 9; i += 3) { //WIN BY LINE
        
        if (score[i] == currentPlayer && score[i + 1] == currentPlayer && score[i + 2] == currentPlayer) {    
                
            v = true;break;return v;
        } 

    }

    for (let i = 0; i < 3; i++) {   //WIN BY ROW
 
        if (score[i] == currentPlayer && score[i + 3] == currentPlayer && score[i + 6] == currentPlayer) {

            v = true;break;return v;
            
        }

    }

    if (score[4] == currentPlayer) //WIN BY SLASH
    {   
        if ((score[0] == currentPlayer && score[8] == currentPlayer) || (score[2] == currentPlayer && score[6] == currentPlayer))
        {
            v = true;break;return v;
        }
    }

}


function setturn(tagname,value){

    $(tagname).html = value;
}

function setVictory(){




}