
var borderPos,
borderHeight,
borderWidth;


function moveUp(objectName,amount){

    if (chkborder(objectName,"up") == true) {return;};

    $('.eye').css('visibility', 'hidden');
    $('#'+ objectName).css('top', '-=' + amount);

};

function moveDown(objectName,amount){    

    if (chkborder(objectName,'down') == true) {return;};
 
    $('.eye').css('visibility', 'visible');
    $('#'+ objectName).css('top', '+=' + amount);
};

function moveLeft(objectName,amount){

    if (chkborder(objectName,'left') == true) {return;};

    $('.eye').css('visibility', 'visible');
    $('#left').css('visibility', 'visible');
    $('#right').css('visibility', 'hidden');
    $('#'+ objectName).css('left', '-=' + amount);
};

function moveRight(objectName,amount){

    if (chkborder(objectName,'right') == true) {return;};

    $('.eye').css('visibility', 'visible');
    $('#left').css('visibility', 'hidden');
    $('#right').css('visibility', 'visible');
    $('#'+ objectName).css('left', '+=' + amount);
};

/* function jump(objectName,amount){

    $('#'+ objectName).animate({top: "-=" + amount,}, 150);
    $('#'+ objectName).animate({top: "+=" + amount,}, 140);
}; */

function squash(objectName){
 
    $('#'+ objectName).stop(true,true).animate({top: "-=2", height: "26px"}, 100);
    $('#'+ objectName).stop(true,true).animate({height: "25px", top: "+=2"}, 150);
};

function chkborder(objectName,direction){

    let objectPos = $('#' + objectName).position(),
    objectHeight = $('#' + objectName).height(),
    objectWidth = $('#' + objectName).width();
    
    borderPos = $('.border').position(),
    borderHeight = $('.border').height(),
    borderWidth = $('.border').width();

    switch(direction) {
        case "up":

            if (objectPos.top <= borderPos.top) {

                squash(objectName);
                return true;
                
        
            }
          // code block
            break;
        case "down":


            if (objectPos.top + objectHeight >= borderPos.top + borderHeight) {
                
                squash(objectName);
                return true;
        
            }
          // code block
            break;
        case "left":

            if (objectPos.left <= borderPos.left) {

                squash(objectName);
                return true;
        
            }
            break;
        case "right":
            if (objectPos.left + objectWidth >= borderPos.left + borderWidth) {

                squash(objectName);
                return true;
        
            }
            break;
        default:
            return false;
      } 

   
};

function chkCollision(idA,objectAName,idB,objectBName){

    var objectAPos = $('#' + objectAName).position(),
    objectAHeight = $('#' + objectAName).height(),
    objectAWidth = $('#' + objectAName).width(),
    objectBPos = $('#' + objectBName).position(),
    objectBHeight = $('#' + objectBName).height(),
    objectBWidth = $('#' + objectBName).width();


    if (objectAPos.top >= objectBPos.top && objectAPos.top + objectAHeight <= objectBPos.top + objectBHeight){

        if (objectAPos.left >= objectBPos.left && objectAPos.left + objectAWidth <= objectBPos.left + objectBWidth){

            return true;
        }

    }

    if (objectAPos.top +  objectAHeight >= objectBPos.top && objectAPos.top + objectAHeight <= objectBPos.top + objectBHeight){

        if (objectAPos.left >= objectBPos.left && objectAPos.left + objectAWidth <= objectBPos.left + objectBWidth){

            return true;
        }

    }


};


//     if (objectPos.top

//     if (objectPos.top <= lowBorder && (objectPos.left >= leftBorder || objectPos.right <= rightBorder)){
//         return true;
//     }
//     else if (objectPos.top + objectHeight <= lowBorder && (objectPos.left >= leftBorder || objectPos.right <= rightBorder)){
//         return true;
//     }

// }

    // switch(direction) {
    //     case "up":

    //         if (objectPos.top <= borderPos.top) {

    //             squash(objectName);
    //             return true;
                
        
    //         }
    //       // code block
    //         break;
    //     case "down":


    //         if (objectPos.top + objectHeight >= borderPos.top + borderHeight) {
                
    //             squash(objectName);
    //             return true;
        
    //         }
    //       // code block
    //         break;
    //     case "left":

    //         if (objectPos.left <= borderPos.left) {

    //             squash(objectName);
    //             return true;
        
    //         }
    //         break;
    //     case "right":
    //         if (objectPos.left + objectWidth >= borderPos.left + borderWidth) {

    //             squash(objectName);
    //             return true;
        
    //         }
    //         break;
    //     default:
    //         return false;
// }