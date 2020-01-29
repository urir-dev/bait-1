var text = `
<div>

<input id="inputId" type="number">
</div>
<div>

<a class="my-link">link</a>
</div>

`;



$(document).ready(function () {
    console.log('$(document).ready');
    // let id = $('input').attr("id");
    let srcOfPoekemon = 'http://t2.gstatic.com/images?q=tbn:ANd9GcQwIUCwsTaVNXLCnv3yrMK7pejRax_j4Yr9UZNQrkCEru5OvEALiO2yBpZ-';
    setAttr('img', 'src', srcOfPoekemon);
    setAttr('input', 'disabled', true);
    setAttr('input', 'value', 80000);
    $('input').val(7000);

    getAttr('input', 'id');
    getAttr('input', 'disabled');
    getAttr('input', 'type');
    getAttr('img', 'src');
    getAttr('img', 'title');
    getAttr('a', 'href');
    $('a').text('Academka');
    setAttr('a','href','http://academka.tech');
    setAttr('a','target','_blank');
    $('.prop').text('this is just a div');
    $('.prop').html('this is <b><span class="prop">just</span> a div</b>');
    $('.prop').html(text);

    let tagName = $('.my-link').prop('tagName');



});


function getAttr(tagname, attr) {
    console.group(tagname.toUpperCase() + ' ' + attr.toUpperCase());
    console.log($(tagname).attr(attr));
    console.groupEnd();
}

function setAttr(tagname, attr, value) {
    $(tagname).attr(attr, value);
}