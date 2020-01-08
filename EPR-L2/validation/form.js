function isFeildsEqual(fld1,fld2) 

{  
    return fld1 === fld2;

}

function isgreater(num,littlenum){

    return num >= littlenum;
}

function chkfor(str,letter){

    str.toLowerCase;
    let b = (str.indexOf(letter) != -1)
    return b  
}


function isvalid(Dage,BorderAge,Dlastname,Dpass,Dpass2)
{
    if (isgreater(Dage,BorderAge))
    {
        
        warning = warning + " Age should be greater then 18 ";

    }

    if (isFeildsEqual(Dpass,Dpass2))
    {
        
        warning = warning + " Passwords dosen't match ";

    }

    if (chkfor(Dlastname,"t"))
    {
        
        warning = warning + " Last name has a 'T' ";

    }

    if (warning != ""){

        document.getElementById("warn").innerHTML = warning;
        return false;

    }

}