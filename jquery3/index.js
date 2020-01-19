
$("li").parent().addClass("highLight");
$("li").parents().addClass("frame");
$("li").parents("div").addClass("frame");
$("li").parentsUntil("html").addClass("frame");
$("ul").children().addClass("highLight"); 
$("div").find("li").addClass("frame"); 
$("p").siblings().addClass("highLight");
$("p").siblings("ul").addClass("highLights");
$("p").next().addClass("highlighto");
$("p").nextAll().addClass("highlighto");
// $("h1").nextUntil("ul").addClass("highlight");
// $("ul").prev().addClass("highlight");
// $("ul").prevAll().addClass("highlight");
// $("ul").prevUntil("h1").addClass("highlight");
