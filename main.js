const input1 = document.getElementById('name');
const btn1 = document.getElementById('button1');
const container1 = document.getElementById('container1');

btn1.addEventListener('click', () => passValue(input1.value));

function passValue (value) {
    container1.textContent = value;
}

const input2 = document.getElementsByName('macanie');
const btn2 = document.getElementById('button2');
const container2 = document.getElementById('container2');
console.log(input2);
btn2.addEventListener('click', () => passCheckBox(input2.chilNodes.checked));

function passCheckBox (list) {
    //console.log(list);
    if (list.childNodes.checked === true) {
        container2.textContent = list.childNodes.value;
    // } else {
    }
}

const input3 = document.getElementsByName('alko');
const btn3 = document.getElementById('button3');
const container3 = document.getElementById('container3');
console.log(input3);
btn3.addEventListener('click', () => passRadioChoice(input3));

function passRadioChoice (choice) {
    //console.log(choice);
    if (choice.childNodes.checked === true) {
        container3.textContent = choice.childNodes.value;
    // } else {
    }
}