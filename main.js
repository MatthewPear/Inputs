// const input1 = document.getElementById('name');
// const btn1 = document.getElementById('button1');
// const container1 = document.getElementById('container1');

// btn1.addEventListener('click', () => passValue(input1.value));

// function passValue (value) {
//     container1.textContent = value;
// }

// const input2 = [...document.getElementsByName('macanie')];
// const btn2 = document.getElementById('button2');
// const container2 = document.getElementById('container2');
// console.log('input2', input2);
// let result2 = [];
// console.log('result2', result2)
// btn2.addEventListener('click', () => passCheckBox(input2));

// function passCheckBox (list) {
//     result2 = [];
//     list.forEach((el) => {
//         if (el.checked === true) {
//             result2.push(el.value);
//             container2.textContent = result2;
//         }
//     })
// }

// const input3 = [...document.getElementsByName('alko')];
// const btn3 = document.getElementById('button3');
// const container3 = document.getElementById('container3');
// console.log('input3', input3);
// btn3.addEventListener('click', () => passRadioChoice(input3));

// function passRadioChoice (choice) {
//     choice.forEach((el) => {
//         if (el.checked === true) {
//             container3.textContent = el.value;
//         }
//     })
// }
let usersList = [];
console.log('usersList', usersList);

const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputAge = document.getElementById('age');
const inputSex = [...document.getElementsByName('sex')];
const inputEmail = document.getElementById('email');
const inputHobbies = [...document.getElementsByName('hobbies')];
const btnSave = document.getElementById('button');
const pre = document.getElementById('pre');
const inputList = [inputName, inputSurname, inputAge, inputSex, inputEmail, inputHobbies];
console.log('inputList', inputList);

let sexChoice = [];
let hobbiesChoice = [];

btnSave.addEventListener('click', () => collectData(inputList));

function collectData (list) {
    sexChoice = [];
    inputSex.forEach((el) => {
        if (el.checked === true) {
            sexChoice.push(el.value);
        }
    })
    hobbiesChoice = [];
    inputHobbies.forEach((el) => {
         if (el.checked === true) {
            hobbiesChoice.push(el.value);
         }
    })
    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        age: inputAge.value,
        sex: sexChoice,
        email: inputEmail.value,
        hobbies: hobbiesChoice, 
    }
    usersList.push(user);
    drawUsers(usersList);
}

function drawUsers(list) {
    console.log('list', list);

    let outputField = document.getElementById('outputField');
    outputField.classList.add("fieldset");
    outputField.setAttribute("style", 'visibility:visible;');

    list.forEach((el) => {
        usersTest(el);
    })
}

function usersTest (el) {
    usersList = [];
    let outputUser = document.createElement('div');
        outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
        outputUser.classList.add("container");
        outputField.appendChild(outputUser);
}