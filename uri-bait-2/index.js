console.log('Wellcome dude...');
console.log(new Date());
var arr = [];
var hour = 12,min = 0;
var printnum = 0

function printAllValues(printnum) {
    console.group('LIST' + ' ' + printnum) ;
    arr.forEach(console.log);
    console.groupEnd();
}

document.getElementById('regForm')
    .addEventListener("submit", submitRegisterForm);

document.getElementById("hourdown")
    .addEventListener("click",makehourdown);

document.getElementById("hourup")
    .addEventListener("click",makehourup);

function submitRegisterForm(e) {


    e.preventDefault();
    let hitName = document.getElementById('hitName').value;
    let description = document.getElementById('description').value;
    let population = document.getElementById('population').value;
    let weekday = document.getElementById('weekday').value;
    let houratday = document.getElementById('houratday').innerHTML;
    let city = document.getElementById('city').value;
    let street = document.getElementById('street').value;
    let housenum = document.getElementById('housenum').value;
    let adress = street + ' ' + housenum + ' ' + city;
    let mail =  document.getElementById('mail').value;

  
    register({hitName, description, population,weekday,houratday,adress,mail});

}

function register(hitnadvut) {

    arr.push(hitnadvut);

    printnum++
    printAllValues(printnum);

    let conf = confirm('Do You want to add another one?');
    if (conf) {
        document.getElementById("regForm").reset(); ; 
    }

}
