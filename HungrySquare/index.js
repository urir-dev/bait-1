

$(document).ready(function () {
    console.log("$document ready")

    $(document).keypress(function(event) {
        console.log( "Handler for .keypress() called." );
        
            {

                if(event.key=='a'){

                    moveLeft('squarey',10);
                    squash('squarey');
                }
                if(event.key=='d'){ 

                    moveRight('squarey',10);
                    squash('squarey');

                }
                if(event.key=='w'){ 


                    moveUp('squarey',10);

                }
                if(event.key=='s'){ 

                    moveDown('squarey',10);

                }

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