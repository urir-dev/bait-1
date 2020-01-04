
console.log("Start");
var i = 0
var multipl = 213 * 51
var divid = 213 / 51
var addi = 12 + 345
var subi = 233 - 56
var nam 

console.log("declerations");

document.getElementById("submit")
    .addEventListener("click", function () 
    
    {
    console.log("First click");

    if (i == 0) {
      document.getElementById("ktext").innerHTML = "Hello World!";
      console.log("Says hello");
    } else if (i == 1) {
      console.log("Multiply 213 by 51 = " + multipl);
      document.getElementById("ktext").innerHTML = multipl;
    }
      else if (i == 2) {
      console.log("Divide 213 by 51 = " + divid);
      document.getElementById("ktext").innerHTML = divid;
    }
      else if (i == 3) {
      console.log(multipl + " / 2 - " + divid);
      document.getElementById("ktext").innerHTML = (multipl / 2) - divid;
    }

      else if (i == 4) {
      console.log("write something");
      document.getElementById("qst").style.visibility="visible";
      document.getElementById("submit").innerHTML = "OK it's ready";

    }
      
      else if (i == 5) {
      console.log("write name");
      document.getElementById("ktext").innerHTML = "you said:'" + document.getElementById("inpt").value + "'"; 
      document.getElementById("inpt").value = "";
      document.getElementById("instruct").innerHTML = "Now, What is your name?";
      document.getElementById("submit").innerHTML = "That's my name"; 

    }

    else if (i == 6) {
      document.getElementById("ktext").innerHTML = "so your name is: '" + document.getElementById("inpt").value + "'";
      nam = document.getElementById("inpt").value;
      console.log(nam);
      document.getElementById("inpt").value = "";
      document.getElementById("instruct").innerHTML = "Ok " + nam + ", Would you Write something again?";
      document.getElementById("submit").innerHTML = "Submit";

    }

    else if (i == 7) {
      document.getElementById("instruct").innerHTML = "";
      var itt = document.getElementById("inpt").value;
      console.log(itt);
      document.getElementById("ktext").innerHTML = "Great, " + nam + ". You said:'" + itt + "'.";
      var n = itt.search("a");
      var m = itt.search("5");
      if (n != -1 || m != -1) {
        console.log("Found");
        document.getElementById("txt").style.backgroundColor ="Green";
        }
      else
        {
          console.log("No Found");
          document.getElementById("txt").style.backgroundColor="Red";
          }
      document.getElementById("submit").innerHTML = "Restart";

      document.getElementById("inpt").value = ""
      
    }

    else if (i == 8)

    {
      
      location.reload();
  
    }

  i = i + 1;
 
});
