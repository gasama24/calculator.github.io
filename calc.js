let div1 = document.getElementById("C1");
let div2 = document.getElementById("C2");
let div3 = document.getElementById("C3");
let div4 = document.getElementById("C4");
let divEqual = document.getElementById("C=");
let display = document.getElementById("display");
let PreviousInput = ">";
let CanDot = false;
let HasDot = true;

function CheckIfInputIsValid(input) {
    if (input == "+" || input == "-" || input == "*" || input == "/" || input == "." || input == ">") {
        return false;
    }
    return true;
}

document.getElementById("+").onclick = function() {
    if (CheckIfInputIsValid(PreviousInput)) {
        display.innerText += "+";
        PreviousInput = "+";
        HasDot = true;
        CanDot = false;
    }
}

document.getElementById("-").onclick = function() {
    if (CheckIfInputIsValid(PreviousInput)) {
        display.innerText += "-";
        PreviousInput = "-";
        HasDot = true;
        CanDot = false;
    }
}

document.getElementById("/").onclick = function() {
    if (CheckIfInputIsValid(PreviousInput)) {
        display.innerText += "/";
        PreviousInput = "/";
        HasDot = true;
        CanDot = false;
    }
}

document.getElementById("x").onclick = function() {
    if (CheckIfInputIsValid(PreviousInput)) {
        display.innerText += "*";
        PreviousInput = "*";
        HasDot = true;
        CanDot = false;
    }
}

document.getElementById(".").onclick = function() {
    if (CanDot && HasDot) {
        display.innerText += ".";
        PreviousInput = ".";
        CanDot = false;
        HasDot = false;
    }
}

document.getElementById("C").onclick = function() {
    display.innerText = ">";
    PreviousInput = ">";
    HasDot = true;
    CanDot = false;
}

document.getElementById("0").onclick = function() {
    display.innerText += "0";
    PreviousInput = "0";
    CanDot = true;
}

document.getElementById("1").onclick = function() {
    display.innerText += "1";
    PreviousInput = "1";
    CanDot = true;
}

document.getElementById("2").onclick = function() {
    display.innerText += "2";
    PreviousInput = "2";
    CanDot = true;
}

document.getElementById("3").onclick = function() {
    display.innerText += "3";
    PreviousInput = "3";
    CanDot = true;
}

document.getElementById("4").onclick = function() {
    display.innerText += "4";
    PreviousInput = "4";
    CanDot = true;
}

document.getElementById("5").onclick = function() {
    display.innerText += "5";
    PreviousInput = "5";
    CanDot = true;
}

document.getElementById("6").onclick = function() {
    display.innerText += "6";
    PreviousInput = "6";
    CanDot = true;
}

document.getElementById("7").onclick = function() {
    display.innerText += "7";
    PreviousInput = "7";
    CanDot = true;
}

document.getElementById("8").onclick = function() {
    display.innerText += "8";
    PreviousInput = "8";
    CanDot = true;
}

document.getElementById("9").onclick = function() {
    display.innerText += "9";
    PreviousInput = "9";
    CanDot = true;
}

document.getElementById("=").onclick = function() {
    display.innerText = ">" + eval(display.innerText.substring(1, display.innerText.length));
    if (display.innerText.includes(".")) {
        HasDot = false;
        CanDot = false;
    }
    else {
        HasDot = true;
        CanDot = true;
    }
    if (display.innerText == ">Infinity") {
        display.innerText = ">0";
    }
}