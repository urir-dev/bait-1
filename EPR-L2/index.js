console.log('hello dodo');
console.log(new Date());
var arr = [];
var warning = "";


document.getElementById('registerForm')
    .addEventListener("submit", onsubmit);
function onSubmit(e) {
    console.log(e);
    e.preventDefault();

    console.log(document.getElementById("firstName"));
    console.log(document.getElementById("lastName"));
    console.log(document.getElementById("age"));

    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let age = Number(document.getElementById("age").value);
    let passw = document.getElementById("password").value;
    let passw2 = document.getElementById("password2").value;


    document.getElementById("warn").innerHTML = "";

    if (!isvalid(age, 18, lastname, passw, passw2)) {

        break;

    }

    //IF VALID

    register(firstname, lastname, age);

}
function register(firstname, lastname, age) {

    let person1 = {
        firstname: "Mishu",
        lastname: "Mashu",
        age: 23,
    };

    arr.push(person1);

    let person = { firstname, lastname, age };
    arr.push(person);
    console.log(arr);

    let person2 = {
        firstname: "Alon",
        lastname: "Mooku",
        age: 67,
    };

    arr.push(person2);
    console.log(arr);

    let cat = {
        firstname: "mew",
        lastname: "bazanav",
        tail: true
    }

    arr.push(cat);
    console.log(arr);

    for (const p of arr) {
        console.log(getFullName(p));
    }


}


function getFullName(person) {
    return person.firstname + ' ' + person.lastname;
}



