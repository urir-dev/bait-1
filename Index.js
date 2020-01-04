

console.log("Start")


document.getElementById("submit")
    .addEventListener("click", function () {
        console.log("Submit!");
        console.log(document.getElementById("userName").value);
        console.log(document.getElementById("password").value);
        console.log(document.getElementById("age").value);
    });

document.getElementById('log').innerHTML = "text";
