console.log("hey");

function func(x);
{
    console.log(typeof x, arguments.lenght);
}

func();
func(1);
func("1","2","3");

func($);
console.log($);
document.getElementById('title').innerText = "Academka";
document.getElementById('title').innerHTML = "<b>A</b>cademka";
$("#title").html("Academka");
$("#fname").on("blur",onBlur);
$("#fname").blur(onBlur2);
$("#fname").val("dddddd");
$('button').CSS("Color","red");
$("#title").off("click");

//ALT + SHIFT + DOWN

$('button').click(function() {
    $('h1').toogle(300);
}
)

$('button').click(function() {
    $('h1').css("color","green").delay(4000).css("color","black");
});

