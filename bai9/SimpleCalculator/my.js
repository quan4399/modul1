function displayValue(value) {
    document.getElementById("display").value+= value;
}
function calculate() {
    let input = document.getElementById("display").value;
    let result = eval(input);
    document.getElementById("display").value = result;
}
function clearResult() {
    document.getElementById("display").value= " ";
}