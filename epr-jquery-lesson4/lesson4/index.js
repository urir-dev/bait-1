"use strict";
var jquery = $;
var apiUrl = 'http://localhost:3000';
jquery.get(apiUrl,changeResult);
jquery(document).ready(function () {
    console.log(jquery);

    jquery('#btn-get').on('click', () => {
        getFromServer();
    });
    jquery('#btn-post').on('click', () => {
        const user = { name: jquery('input').val(), id: '2' };
        console.log(user);

        postToServer(user);
    });

});

function getFromServer() {
    let url = apiUrl + '?email=yonatan@yaltman.com';
    //  $.get(url, (res) => { 
    //      jquery('#result').text(res); 
    //     });

    // $.get(url, function (res) { jquery('#result').text(res); });

    let someFnc = changeResult;
    $.get(url, changeResult);

    setTimeout(() => {
        
        changeResult('yonatan');
    }, 1000);
    someFnc('Harel');

    // console.log('After Ajax');

}
function name() {

}
function name(name) {

}
function postToServer(user) {

    $.post(apiUrl, user, changeResult);


    // console.log('After Ajax');

}
function changeResult(str) {
    jquery('#result').text(str);
}
function getFromHere() {
    return 'Some answer';
}
function post() {

}