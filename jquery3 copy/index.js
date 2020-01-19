$(document).ready(function () {
    console.log("$document ready")

    let srcOfThing = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'

    let id = $('input').attr("id");

    let txt =`
    <div>
        <input type="text">

    </div>

    `
    setAttr('img','src',srcOfThing)
    setAttr('img','alt',"PIZZA")
    setAttr('img','title',"BIG PIZZA")
    getAttr('input','id');
    getAttr('input','type');
    getAttr('img','src');
    getAttr('a','href');
    setAttr('input','value',80000);
    $('a').text('a PIZZA');
    setAttr('a','href',"http://www.google.com");
    setAttr('target','_blank');
    $('.prop').text('this is just a div');
    $('.prop').html(txt)

    let tagName = $('.my-link').prop('tagname');
    console.log(tagName)

    // alert(id);
});

function getAttr(tagname,attr){

    console.group(tagname.toUpperCase()+ ' ' + attr)
    console.log($(tagname).attr(attr));
    console.groupEnd;

}

function setAttr(tagname,attr,value){

    $(tagname).attr(attr,value);

}