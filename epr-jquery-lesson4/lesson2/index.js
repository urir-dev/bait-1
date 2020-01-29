// https://docs.google.com/document/d/1DjyREXiQB6zNy72Kl7D1S_Ufa9Dxbz2fDD5s9GdAHlw/edit
console.log('Script Ready', new Date().getTime());


$(document).ready(function () {
    console.log('Dom Ready', new Date().getTime());

    $('button').click(animateBox1);

    $("p").click(function () {
        let whatIsThis = this;
        console.log(whatIsThis);

        $(whatIsThis).css("backgroundColor", "green");
    });
    $("p").dblclick(function () {
        let whatIsThis = this;
        console.log(whatIsThis);

        $(whatIsThis).css("backgroundColor", "red");
    });


});

$(() => {
    console.log('Dom Ready ()=>{}', new Date().getTime());

})
$(function () {
    console.log('Dom Ready ()=>{}', new Date().getTime());
    // Handler for .ready() called.
});


function funcToggle(e) {
    console.log("TOGGLE START");

    $("p.normal").toggle();
    $("p.fast").toggle("fast");
    $("p.slow").toggle("slow");
    $("p.very-fast").toggle(50);
    $("p.very-slow").toggle(2000, () => {

        console.log("TOGGLE END");
    });
}
function animateBox(){ 
    $(".box")
    .animate({width: "300px"})
    .animate({height: "300px"})
    .animate({marginLeft: "150px"})
    .animate({borderWidth: "10px"})
    .animate({backgroundColor: "blue"})
    .animate({opacity: 0.5});


}
function animateBox1(){ 
    $(".box").animate({
        width: "300px",
        height: "300px",
        marginLeft: "150px",
        borderWidth: "10px",
        opacity: 0.5,
       
    });

}
function funcHide(e) {
    $("p.normal").hide();
    $("p.fast").hide("fast");
    $("p.slow").hide("slow");
    $("p.very-fast").hide(50);
    $("p.very-slow").hide(2000);
}
function someFunction1() {
    $('body')
        .append("<h1>😎someFunction!!</h1>")

}