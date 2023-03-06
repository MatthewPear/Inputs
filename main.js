const input1 = document.getElementById('name');
const btn1 = document.getElementById('button1');
const container1 = document.getElementById('container1');

btn1.addEventListener('click', () => passValue(input1.value));

function passValue (value) {
    container1.textContent = value;
}

const input2 = [...document.getElementsByName('macanie')];
const btn2 = document.getElementById('button2');
const container2 = document.getElementById('container2');
console.log('input2', input2);
let result2 = [];
console.log('result2', result2)
btn2.addEventListener('click', () => passCheckBox(input2));

function passCheckBox (list) {
    result2 = [];
    list.forEach((el) => {
        if (el.checked === true) {
            result2.push(el.value);
            container2.textContent = result2;
        }
    })
}

const input3 = [...document.getElementsByName('alko')];
const btn3 = document.getElementById('button3');
const container3 = document.getElementById('container3');
console.log('input3', input3);
btn3.addEventListener('click', () => passRadioChoice(input3));

function passRadioChoice (choice) {
    choice.forEach((el) => {
        if (el.checked === true) {
            container3.textContent = el.value;
        }
    })
}