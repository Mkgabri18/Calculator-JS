import style from "./styles/style.scss"
import { calculate } from "./scripts/calc.js"

const $calculator = document.querySelector(".calculator");
const $screen= document.querySelector(".screen");
const $display = document.getElementById("curCalc");
const $prevCalc = document.getElementById("prevCalc");
const $baseKbd = document.querySelector(".keyboard");
const $advanceKbd = document.querySelector(".keyboard__advance");
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
    $display.value = "";
    $prevCalc.value = "";
    resetInternal();
}

function canc() {
    $display.value = $display.value.substring(0, $display.value.length-1);
}

function paintResult(op) {
    op1 = op //prepare next calculation
    op2 = ""
    operator = null
    $display.value = op
}

function readyForCalc() {
    let d = $display.value;
    if(op1 && operator && op2) {
        if(simbols.includes(d[d.length-1])) d = d.value.substring(0,d.value.length-1); //controll calculate truncate last operator 23-4+
        $prevCalc.value = d; //passing calc to upper display
        let result = calculate(operator, op1, op2) //limit 3 decimal but trim zeros
        paintResult(result)
    } else {
        console.log("can not calculate");
    }

}

function operation(op) {
    let d = $display.value;
    if(!op1) return false;
    if(simbols.includes(d[d.length-1])) { //if last display value is operator change it with new operator
        $display.value = d.substring(0, d.length-1) + op;
    } else {
        $display.value += op;
    } //control not more operator
    operator = op;
}

function switchCalc(item) {
    console.log("switch changed", item)
    if(item.checked) {
        $advanceKbd.style.display = 'grid';
    } else {
        $advanceKbd.style.display = 'none';
    }
    $screen.classList.toggle("screen--extend")
}

function getOperand(key) {
    if(operator==null) {
        op1+=key;
    } else {
        op2+=key;
    }
    console.log("op1: ",op1,"operantor: ", operator ," op2: ", op2);
    $display.value += key
}

function keyClicked(e) {
    let key = e.target.value;

    if($baseKbd.contains(e.target)) {
        console.log("base keys")
        switch(key) {
            case "CE": cancAll(); break;
            case "C": canc(); break;
            case "+": operation(key); break;
            case "-": operation(key); break;
            case "*": operation(key); break;
            case "/": operation(key); break;
            case "=": readyForCalc(); break;
            default: getOperand(key);
        }
    } else if ($advanceKbd.contains(e.target) && op1) {
        console.log("adv keys", e.target)
        switch(key) {
            case "pow2": paintResult(calculate('pow2', op1)); break;
            case "pow3": paintResult(calculate('pow3', op1)); break;
            case "powx": operation(key); break;
            default: break
        } 
    } else if($switchKey.contains(e.target)) {
        switchCalc(e.target)
    }
}

document.addEventListener("click", (e) => keyClicked(e))

window.addEventListener("load", () => {
    console.log("onload reset")
    cancAll()
    $switchKey.checked = false
})
