var apiUrl = 'http://localhost'

$(document).ready(function () {
    console.log($)

    //get
    //delete
    //post
    //put

    CORS // הגנה מדומיינים לא מוכרים

    $('#btn-get').on('click')

    jquery('#btn-post').on('click',() =>{

        const user= {name: jquery('input').val(), id: '2'};
        postToServer(user);

    });


    jquery('#btn-get').on('click',() =>{

        

    });




    function getFromServer(){

        $.get(apiUrl,(res) => {
            $('#result').text(res);



        });

    }


    function (){};


});