



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

    var objectPos = $('#' + objectName).position(),
    borderPos = $('.border').position(),
    objectHeight = $('#' + objectName).height(),
    borderHeight = $('.border').height(),
    objectWidth = $('#' + objectName).width(),
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

   
}