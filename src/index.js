import style from "./styles/style.scss"

const display = document.getElementById("display");
const prevCalc = document.getElementById("prevCalc");

let op1 = "";
let op2 = "";
let operator = null;

//TODO prepare case to fix

function resetInternal() {
    op1="";
    op2="";
    operator=null;
}

function cancAll()  {
    display.value = "";
    prevCalc.value = "";
    resetInternal();
}

function canc() {
    display.value = display.value.substring(0, display.value.length-1);
}

function calculate() {
    if(op1 && operator && op2) {
        console.log("can calculate");
        prevCalc.value = display.value
        display.value = eval(display.value);
        resetInternal() //reset operator
        op1 = display.value; //prepare next calculation
    } else {
        console.log("can not calculate");
    }
}

function operation(op) {
    //TODO controll for operator negative
    if(!op1) return false;
    operator = op;
    display.value += op;

}

function getOperand(key) {
    if(operator==null) {
        op1+=key;
    } else {
        op2+=key;
    }
    console.log(op1, op2);
    display.value += key
}

function keyClicked(e) {
    let key = e.target.value;
    switch(key) {
        case "CE": cancAll(); break;
        case "C": canc(); break;
        case "+": operation(key); break;
        case "-": operation(key); break;
        case "*": operation(key); break;
        case "/": operation(key); break;
        case "=": calculate(); break;
        default: getOperand(key);
    }
}

document.addEventListener("click", (e) => keyClicked(e))
