let count = 0;
let number1 = "",
    opertor1="";
let number2 = "",
    opertor2="";
function cliked_value(valu) {
    let values = document.getElementById('display').value + valu;
    document.getElementById('display').value = innerHTML = values;


}
function cliked_opretor(opertor) {

    count++;
    if (count == 1) {

        number1 = document.getElementById('display').value;
        opertor1 = opertor;
        document.getElementById('display').value = innerHTML = "";

    } else {
        console.log(count);

        number2 = document.getElementById('display').value;
        opertor2 = opertor;
        number1 = number1 + opertor1 + number2;
        try {
            number1 = Function(`'use strict'; return (${number1})`)();
            
        } catch (error) {
            console.log(error);
            
        }
        
        opertor1 = opertor2;
        document.getElementById('display').value = innerHTML = "";

    }


}
function submit() {

    cliked_opretor();
    document.getElementById('display').value = innerHTML = number1;


}
function clean() {
    count = 0;
    document.getElementById('display').value = innerHTML = " ";
    number1 = 0;


}
