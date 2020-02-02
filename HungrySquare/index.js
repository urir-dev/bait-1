
// set 

var appleLocations = [];
var tid = setInterval(popApple, 8000),
appleIds = 0;
appleCount = 1;

function abortTimer() { // to be called when you want to stop the timer
  clearInterval(tid);
}


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

});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function popApple() {

    
    let appleX = getRndInteger(borderPos.left + 50,borderPos.left - 50);
    let appleY = getRndInteger(borderPos.top + 50,borderPos.top - 50);
    let appleArray = [appleX,appleY,'apple' + appleIds ++];

    appleLocations.push([appleArray]);

    appleCount ++;

  // do some stuff...
  // no need to recall the function (it's an interval, it'll loop forever)
  setInterval(popApple, 8000);

  return;

  }