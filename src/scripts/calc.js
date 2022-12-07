function sum(a, b) {
    return a + b
}

function diff(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    if(b===0) return 'Error'
    return a / b
}

function pow2(a) {
    return Math.pow(a, 2)
}

function pow3(a) {
    return Math.pow(a, 3)
}

function powXY(a, b) {
    if(a<0 && (b>-1 && b<1)) return 'Error'
    return Math.pow(a, b)
}

function calculate (simb, op1, op2=0) {
    console.log("all I need: ", simb, op1, op2 )
    let firstOp = Number(op1),
        secondOp = Number(op2)
    let result = 0
    
    switch (simb) {
        case '+': result = sum(firstOp, secondOp); break;
        case '-': result = diff(firstOp, secondOp); break;
        case '*': result = mult(firstOp, secondOp); break;
        case '/': result = div(firstOp, secondOp); break;
        case 'pow2': result = pow2(firstOp); break;
        case 'pow3': result = pow3(firstOp); break;
        case 'powx': result = powXY(firstOp, secondOp); break;
        default: result = 0
    }
    return parseFloat(result.toFixed(3))
}



export { calculate }
