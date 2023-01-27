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
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");
let dot5 = document.getElementById("dot5");
let validemail = false;
let pwtest = 5;
let active = false;

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
        active = true;
    }
//JSON
    let obj = {
        "name": email.value, 
        "password": password.value
    };
    let jsonlogin = JSON.stringify(obj);


//Ampel
    if (pwtest === 0) {
        dot1.classList.add("green2");
        dot2.classList.add("green2");
        dot3.classList.add("green2");
        dot4.classList.add("green2");
        dot5.classList.add("green2");
    }
    if (pwtest === 1) {
        dot1.classList.add("green2");
        dot2.classList.add("green2");
        dot3.classList.add("green2");
        dot4.classList.add("green2");
        dot5.classList.remove("green2");
        
    }
    if (pwtest === 2) {
        dot1.classList.add("green2");
        dot2.classList.add("green2");
        dot3.classList.add("green2");
        dot4.classList.remove("green2");
        dot5.classList.remove("green2");
    }
    if (pwtest === 3) {
        dot1.classList.add("green2");
        dot2.classList.add("green2");
        dot3.classList.remove("green2");
        dot4.classList.remove("green2");
        dot5.classList.remove("green2");
    }
    if (pwtest === 4) {
        dot1.classList.add("green2");
        dot2.classList.remove("green2");
        dot3.classList.remove("green2");
        dot4.classList.remove("green2");
        dot5.classList.remove("green2");
    }
    if (pwtest === 5) {
        dot1.classList.remove("green2");
        dot2.classList.remove("green2");
        dot3.classList.remove("green2");
        dot4.classList.remove("green2");
        dot5.classList.remove("green2");
    }
}
//weiter Button alert

let message = function () {
    if (active == true) {
        alert("Herzlichen Glückwunsch, Sie sind registriert.");
    }
}

//login data
let objPeople = [
    {
        emailLogin: "widmerb@bzz.ch",
        passwordLogin: "Passwort123."
    },
    {
        emailLogin: "admin@bzz.ch",
        passwordLogin: "schlechtesPasswort123."
    }
]
function getInfo(){
    let emailCheck = document.getElementById("emaillogin").value;
    let passwordCheck = document.getElementById("passwordlogin").value;

    for(i = 0; i < objPeople.length; i++) {
        if(emailCheck == objPeople[i].emailLogin && passwordCheck == objPeople[i].passwordLogin){
            alert("Hallo " + emailCheck + " Sie sind eingeloggt")
        }
        else {
            alert("Passwort oder Email falsch!");
        }
    }

}
