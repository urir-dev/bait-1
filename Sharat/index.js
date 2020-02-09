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

if (res){
{
    for(let i = 0;i < jsn.length;i++){

        setrow(i);

    };

}
};

function setrow(i){

    let objrow = jsn[i];

    let id = objrow.id
    let firstName = objrow.first_name;
    let lastName = objrow.last_name;
    let email = objrow.email;
    let avatar = objrow.avatar;

    $('#tavla').append('<tr>' + '<td>' + id + '</td>' + '<td>' + firstName + '</td>'  + '<td>' + lastName + '</td>'
    + '<td>' + email + '</td>' + ' <img src="' + avatar + '"></td>' + '</tr>');

};