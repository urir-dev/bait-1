
function makehourup(e) {

    e.preventDefault();

    let hourtxt;
    let mintxt;

    min = min + 15;

    if (min == 60){

        min = 0;
        hour ++;
    }


    if (hour == 24){

        hour = 0;

    } 

    tmphourtxt = "0" + hour;

    hourtxt = tmphourtxt.substring(tmphourtxt.length - 2);

    tmphourtxt = "0" + min;

    mintxt = tmphourtxt.substring(tmphourtxt.length - 2);

    document.getElementById("houratday").innerHTML = hourtxt + ":" + mintxt;

}

function makehourdown(e) {

    e.preventDefault();

    let hourtxt;
    let mintxt;
    if  (hour == 0 && min == 0){
        min = 45
        hour = 23
    }
    else if (min == 0)
    {
        min = 45
        hour --
    }
    else{
        min = min - 15
    }

    let tmphourtxt = "0" + hour

    hourtxt = tmphourtxt.substr(tmphourtxt.length - 2)

    tmphourtxt = "0" + min

    mintxt = tmphourtxt.substr(tmphourtxt.length - 2)

    document.getElementById("houratday").innerHTML = hourtxt + ":" + mintxt;

}