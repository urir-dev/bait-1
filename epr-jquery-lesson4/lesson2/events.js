/**
 *  EVENTS
 */
$("button").on("click", function () {
    
});
$("button").on("dblclick", function () {
    
});
$("button").on("hover", function () {
    
});
$("button").on("keypress", function () {
    
});
$("input").on("change", function () {
    
});
$("input").on("focus", function () {
    
});
$("input").on("blur", function () {
    
});

$("form").submit(function(event){
    var regex = /^[a-zA-Z]+$/;
    var currentValue = $("#firstName").val();
    if(regex.test(currentValue) === false){
        $("#result").html('<p class="error">Not valid!</p>').show().fadeOut(1000);
        // Preventing form submission
        event.preventDefault();
    }
});