function moveLeft(objectName,amount){
    $('#'+ objectName).css('left', '+=' + amount);
};

function moveRight(objectName,amount){
    $('#'+ objectName).css('right', '-=' + amount);
};

function jump(objectName,amount){
    $('#'+ objectName).animate({top: "+=" + amount,}, 5000,"easeInBounce");
    $('#'+ objectName).animate({top: "-=" + amount,}, 2500,"easeOutBounce");
};