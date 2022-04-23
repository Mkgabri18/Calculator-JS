import style from "./styles/style.scss"

const $calculator = document.querySelector(".calculator");
const display = document.getElementById("display");
const prevCalc = document.getElementById("prevCalc");
const $advance = document.querySelector(".keyboard__advance");
const $switchKey = document.getElementById("switch");

let op1 = "";
let op2 = "";
let operator = null;
const simbols = ["+", "-", "*", "/"];

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
    let d = display.value;
    if(op1 && operator && op2) {
        console.log("can calculate");
        if(simbols.includes(d[d.length-1])) d = d.value.substring(0,d.value.length-1); //controll calculate truncate last operator 23-4+
        prevCalc.value = d;
        display.value = parseFloat(eval(d).toFixed(3)); //limit 3 decimal but trim zeros
        resetInternal() //reset operator
        op1 = d; //prepare next calculation
    } else {
        console.log("can not calculate");
    }
}

function operation(op) {
    let d = display.value;
    if(!op1) return false;
    if(simbols.includes(d[d.length-1])) { //if last display value is operator change it with new operator
        display.value = d.substring(0, d.length-1) + op;
    } else {
        display.value += op;
    } //control not more operator
    operator = op;
}

function switchCalc(item) {
    console.log("switch changed", item)
    if(item.checked) {
        $advance.style.display = 'grid';
    } else {
        $advance.style.display = 'none';
    }
}

function getOperand(key) {
    if(operator==null) {
        op1+=key;
    } else {
        op2+=key;
    }
    console.log("op1: ",op1," op2: ", op2);
    display.value += key
}

function keyClicked(e) {
    let key = e.target.value;

    if($calculator.contains(e.target)) {
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
    } else if($switchKey.contains(e.target)) {
        switchCalc(e.target)
    }
}

document.addEventListener("click", (e) => keyClicked(e))
