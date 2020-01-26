var Turn = '<img src="Pokemon.jpg" size=auto>',
whosTurn = 'Pokémon'
xTurn = 'Pokémon',
oTurn = 'Pizza',
currentPlayer = 1,
victory = false,
curTile = 0,
tieChk = 0,
vict = 0,
txt = '',
// srcOfPizza = '<img src=https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg size=auto>',
// srcOfPokemon = '<img src=https://images-na.ssl-images-amazon.com/images/I/61WxR%2B65g9L.jpg size=auto>',
srcOfPizza = '<img id="(^)(^)" src="Pizza.jpg" size=auto>',
srcOfPokemon = '<img id="(^)(^)" src="Pokemon.jpg" size=auto>',
score = [0,0,0,0,0,0,0,0,0];

$(document).ready(function () {
    console.log("$document ready")

    $('.square').click(function (e) { 

        e.preventDefault();
        console.log(getAttr(this,'data-tile'))
        curTile = $(this).attr('data-tile');
        txt = $(this).html();
        if (txt == ""){

            markStep(this);
            tieChk++;

            let winmark = calcVictory();            
            if (winmark == 0) 
            {
                swithcTurn();
                setNextTitle();
            }
            else
            {
                if (winmark == 3) 

                    setTie();

                else{
                    setVictory();
                }
                
                location.reload();

            }
            

        }
    });


    // alert(id);
});

function setNextTitle() {

    $('#nextturn').html(whosTurn + ' Turn.');

};

function markStep(tile) {

        let idtxt = whosTurn + curTile;
        
        Turn = Turn.replace("(^)(^)",'"' + idtxt + '"');

        $(tile).html(Turn);
        
        idtxt = "#" + idtxt;

        $(idtxt).animate({height: '300px', opacity: '0.1'}, "fast");
        $(idtxt).animate({height: '300px', opacity: '1'}, "slow");


        score[curTile] = currentPlayer;
};

function getAttr(tagname,attr){

    // console.group(tagname + ' ' + attr)
    console.log($(tagname).attr(attr));
    // console.groupEnd;

};

function setAttr(tagname,attr,value){

    $(tagname).attr(attr,value);

};

function calcVictory(){ 

    if (isvictor())
        { 

            return currentPlayer;

        } 
        else if(tieChk >= 9){
        
            return 3;           
        }
        else{

            return 0;

        }
};

function isvictor(){

    for (i = 0; i < 9; i += 3) { //WIN BY LINE
        
        if (score[i] == currentPlayer && score[i + 1] == currentPlayer && score[i + 2] == currentPlayer) {    
                
            return true;
        } 

    }

    for (i = 0; i < 3; i++) {   //WIN BY ROW
 
        if (score[i] == currentPlayer && score[i + 3] == currentPlayer && score[i + 6] == currentPlayer) {

            return true;
            
        }

    }

    if (score[4] == currentPlayer) //WIN BY SLASH
    {   
        if ((score[0] == currentPlayer && score[8] == currentPlayer) || (score[2] == currentPlayer && score[6] == currentPlayer))
        {
            return true;
        }
    }

};


function setturn(tagname,value){

    $(tagname).html = value;
}

function setVictory(){

    alert(whosTurn + ' is a winner!!!');

};

function swithcTurn(){

    currentPlayer ++;
    if (currentPlayer == 3){
        
        whosTurn = xTurn;
        currentPlayer = 1;
        Turn = srcOfPokemon;
    }
    else{

        whosTurn = oTurn;
        currentPlayer = 2;
        Turn = srcOfPizza;
    
    };

};

function setTie(){

    alert('Boooo... No one is the winner!!!');

};