const editCalc = document.getElementById("display");

function canc(e) {
  editCalc.value = editCalc.value.substring(0, editCalc.value.length - 1);
}

function edit(e) {
  editCalc.value += e.value;
}

function calc(e) {
  editCalc.value = eval(editCalc.value);
}

function cancAll(e) {
  editCalc.value = "";
}
