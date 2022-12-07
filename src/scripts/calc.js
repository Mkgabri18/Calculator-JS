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
function fat(a) {
    if(a<0) return 'Error'
    return (a<2)?1:fat(a-1)*a
}

function sqrt(a) {
    if(a<0) return 'Error'
    return Math.sqrt(a)
}

function loge(a) {
    if(a<0) return 'Error'
    if(a=0) return '-Infinity'
    return Math.log(a)
}

function log10(a) {
    if(a<0) return 'Error'
    return Math.log10(a)
}

function sin(a) {
    // TODO case Infinity
    return Math.sin(a)
}

function cos(a) {
    // TODO case Infinity
    return Math.cos(a)
}

function tan(a) {
    // TODO case Infinity
    return Math.tan(a)
}

function frat(a) {
    return div(1,a)
}

function neg(a) {
    return mult(a, -1)
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
        case 'fat': result = fat(firstOp); break;
        case 'sqrt': result = sqrt(firstOp); break;
        case 'e':  break;
        case 'loge': result = loge(firstOp); break;
        case 'log10': result = log10(firstOp); break;
        case 'sin': result = sin(firstOp); break;
        case 'cos': result = cos(firstOp); break;
        case 'tan': result = tan(firstOp); break;
        case 'frat': result = frat(firstOp); break;
        case 'neg': result = neg(firstOp); break;
        case 'pi': break;
        default: result = 0
    }
    return typeof result === 'string' ? result : parseFloat(result.toFixed(3))
}



export { calculate }
