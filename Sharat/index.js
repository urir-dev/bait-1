"use strict";
var apiUrl = 'https://reqres.in/api/',jsn;


// $.get(apiUrl);

$(document).ready(function () {
    console.log(apiUrl);

    $('#btn-get').on('click', () => {

        let pg = $('#page').val();
        if(pg == null){
            pg = '1';
        };
        let unum = $('#userNum').val();
        if(unum == null){
            unum = '?';
        };

        getFromServer(pg,unum);
        buildTable(jsn);

    });
    // $('#btn-post').on('click', () => {
    //     const user = { name: $('input').val(), id: '2' };
    //     console.log(user);

    //     postToServer(user);
    // });

});

function getFromServer(page,usersnum) {

    console.log(apiUrl + 'users' + usersnum + 'page=' + page);
    $.get(apiUrl + 'users' + usersnum + 'page=' + page, function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        jsn = data;
    });

}


function postToServer(user) {

    $.post(apiUrl, user, changeResult);

}


function buildTable(jsn)
{
    for(i = 0;i < jsn.length;i++){

        setrow(parsedStr[i]);

    };

};

function setrow(str){

    $('#tavla').append('<tr>')

    let parsedStr = str.split(",");

    for(i = 0;i < parsedStr.length;i++){

        $('#tavla').append('<td>' + parsedStr[i] + '</td>');

    };

    $('#tavla').append('</tr>')

};