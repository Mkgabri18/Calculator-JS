import style from "./styles/style.scss"

const display = document.getElementById("display");
let op1 = null;
let op2 = null;


function cancAll()  {
    display.value = "";
}

function canc() {
    display.value = display.value.substring(0, display.value.length-1);
}

function calculate() {
    
}

function operator() {
    //TODO controll for operator before calculation
}

function add() {
    operator();
}

function keyClicked(e) {
    let key = e.target.value;
    switch(key) {
        case "CE": cancAll(); break;
        case "C": canc(); break;
        case "/": divide(); break;
        case "*": multiple(); break;
        case "+": add(); break;
        case "-": sub(); break;
        case "=": calculate(); break;
        default: display.value += e.target.value;
    }
}

document.addEventListener("click", (e) => keyClicked(e))
