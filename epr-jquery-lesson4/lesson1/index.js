console.log("hey");
function func(x) {
    console.log(typeof x, arguments.length);
}
func();                //==> "undefined", 0
func(1);               //==> "number", 1
func("1", "2", "3");   //==> "string", 3

// $("p").text = 
func($);
console.log($);
document.getElementById('title').innerText = "Academka";
document.getElementById('title').innerHTML = "<b>A</b>cademka";
$("#title").html("Academ<i>ka2</i>");
$("#title").text("Academ<i>ka2</i>");

$("p").text('ddd')

$("#title").css("color", "red");
$("#fname").on("blur", onBlur);
$("#fname").blur(onBlur2);
$("#fname").on("click", onClick);
$('button').click(function () {
    $("h1").css("color","darkblue").delay(4000).css("color","red");
});

$('input').disable();


$("#fname").off("click");
function onBlur(e) {
    console.log(this);

    console.log("BLUR");
    console.log(e);

}
function onBlur2(e) {
    console.log("BLUR");
    console.log(e);

}
function onClick(e) {
    console.log("CLICK");

    console.log(e);

}

function hide() {
    $('h1').hide();
}
function show() {
    $('h1').show();
}
function toggle() {
    $('h1').toggle();
}


