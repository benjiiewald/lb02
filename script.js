let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("button");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let specialChar = document.getElementById("special-char");
let number = document.getElementById("number");
let length1 = document.getElementById("length");
let emailText = document.getElementById("email-text")
let weiter = document.getElementById("weiter");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
/*
let check = function () {
    if (email.value === "" || email.value == null){
        pwText.innerHTML = ("email and password required");
    }
    else if (email.value.length <= 3) {
        pwText.innerHTML = ("email too short");
    }
    else if (password.value.length <= 8) {
        pwText.innerHTML = ("Password too weak. Your password must have at least 8 characters.");
    }
    else {
        pwText.innerHTML = ("Registration successful");
        weiter.classList.remove("inactive");
        weiter.classList.add("active");
    }
}
*/

let validemail = false;
let pwtest = 5;

let check = function () {

    let pwtest = 5;

//email valid

    if (email.value.match(pattern)) {
        emailText.innerHTML = ("Your Email Address is Valid.");
        emailText.classList.add("green");
        emailText.classList.remove("red");
        validemail = true;


    }
    else {
        emailText.innerHTML = ("Your Email Address is not Valid.");
        emailText.classList.remove("green");
        emailText.classList.add("red");
    }
//password valid
    if (password.value.length >= 12) {
        length1.classList.add("hiden");
        pwtest -= 1;
    }
    if (password.value.match(/[0-9]/)) {
        number.classList.add("hiden");
        pwtest -= 1;
    }
    if (password.value.match(/[A-Z]/)) {
        upper.classList.add("hiden");
        pwtest -= 1;
    }
    if (password.value.match(/[a-z]/)) {
        lower.classList.add("hiden");
        pwtest -= 1;
    }
    if (password.value.match(/[?/+/"/*/ç/%/&///(/)/=/?/!/£/$/;/:/_/-/./,]/)) {
        specialChar.classList.add("hiden");
        pwtest -= 1;
    }

//WEITER button
    if (validemail === true && pwtest === 0){

        text187.innerHTML = ("Registration successful");
        weiter.classList.remove("inactive");
        weiter.classList.add("active");
 
    }
    /*
    let obj = {name: email.value, password: password.value};
    let json = JSON.stringify(obj);
    let blob = new Blob([json], {type: "application/json"});
    let url = URL.createObjectURL(blob);
    
    let a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();

    console.log(json);

   // create a JSON object
    const user = {
        id: 1,
        name: 'John Doe',
        age: 22
    }
    
    // convert JSON object to a string
    const data = JSON.stringify(user)
    
    // write JSON string to a file
    fs.writeFile('login.json', data, err => {
        if (err) {
        throw err
        }
        console.log('JSON data is saved.')
    })
        */
}
let saveData = function (){

    var fs = Npm.require('fs');
    const user = {
        id: 1,
        name: 'John Doe',
        age: 22
    }
    
    // convert JSON object to a string
    const data = JSON.stringify(user)
    
    // write JSON string to a file
    fs.writeFile('login.json', data, err => {
        if (err) {
        throw err
        }
        console.log('JSON data is saved.')
    })
}
