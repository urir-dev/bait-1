

console.log("Start")
var i = 0
var multipl = 213 * 51
var divid = 213 / 51
var addi = 12 + 345
var subi = 233 - 56

document.getElementById("submit")
    .addEventListener("click", function () {

  if (i == 0) {
    document.getElementById("txt").innerHTML = "Hello World!";
  } else if (i == 1 {
    document.getElementById("txt").innerHTML = multipl;
  }
    else if (i == 2 {
    document.getElementById("txt").innerHTML = divid;
  }
    else if (i == 3 {
    document.getElementById("txt").innerHTML = (multipl / 2) - divid;
  }

    else if (i == 4 {
    document.getElementById("qst").style.visibility="visible"
    document.getElementById("submit").innerHTML = "OK it's ready" 

  }
    
    else if (i == 5 {
    document.getElementById("txt").innerHTML = "you said:'" + document.getElementById("inpt").value + "'" 
    document.getElementById("inpt").value = ""
    document.getElementById("instruct").innerHTML = "Now, What is your name?"
    document.getElementById("submit").innerHTML = "That's my name" 

  }

  else if (i == 6 {
    document.getElementById("txt").innerHTML = "so your name is: '" + document.getElementById("inpt").value + "'" 
    var nam = document.getElementById("inpt").value
    document.getElementById("inpt").value = ""
    document.getElementById("instruct").innerHTML = "Ok " + nam + ", Would you Write something again?"
    document.getElementById("submit").innerHTML = "Submit" 

  }

  else if (i == 7 {
    document.getElementById("txt").innerHTML = "Great."
    var string itt = document.getElementById("inpt").value
    var n = itt.search("a")
    var m = itt.search("5")
    document.getElementById("txt").innerHTML = "Hello World!";
  } else if (i == 1 {
    document.getElementById("txt").innerHTML = multipl;
  }
  }
   
 
 i = i + 1
}

