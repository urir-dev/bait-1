$(document).ready(function () {
    console.log("$document ready")

    $(document).keypress(function() {
        console.log( "Handler for .keypress() called." );
        if(e.keyCode==13){

            alert("E was pressed");

        }
      });

    // $('.window').click(function (e) { 

    //     e.preventDefault();
    //     console.log(getAttr(this,'data-tile'))
    //     curTile = $(this).attr('data-tile');
    //     txt = $(this).html();
    //     if (txt == ""){

    //         markStep(this);
    //         tieChk++;

    //         let winmark = calcVictory();            
    //         if (winmark == 0) 
    //         {
    //             swithcTurn();
    //             setNextTitle();
    //         }
    //         else
    //         {
    //             if (winmark == 3) 

    //                 setTie();

    //             else{
    //                 setVictory();
    //             }
                
    //             location.reload();

    //         }
            

    //     }
    // });


    // alert(id);
});