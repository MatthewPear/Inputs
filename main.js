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

const inputList = [inputName, inputSurname, inputAge, inputSex, inputEmail, inputHobbies];
console.log('inputList', inputList);

let sexChoice = [];
let hobbiesChoice = [];
// console.log('sexChoice: ', sexChoice);
btnSave.addEventListener('click', () => collectData());

function collectData () {
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
        sex: sexChoice[0],
        email: inputEmail.value,
        hobbies: hobbiesChoice, 
    }
    usersList.push(user);
    drawUser(user);
}

function drawUser(user) {
    let outputField = document.getElementById('outputField');
    outputField.classList.add("userField");
    outputField.setAttribute("style", 'visibility:visible;');

    let outputUser = document.createElement('div');
    outputUser.innerHTML = "<strong>Name:</strong> " + user.name + "<br />" + "<strong>Surname:</strong> " + user.surname + "<br />" + "<strong>Age:</strong> " + user.age + "<br />" + "<strong>Sex:</strong> " + user.sex + "<br />" + "<strong>Email:</strong> " + user.email + "<br />" + "<strong>Hobbies:</strong> " + user.hobbies;
    outputUser.classList.add("container");
    outputField.appendChild(outputUser);
}
console.log("user add", usersList);

const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
btn2.addEventListener('click', () => sortNames("ascend"));
btn3.addEventListener('click', () => sortNames("descend"));

function sortNames(argument) {
    console.log('argument', argument);
    const existinContainers = [...document.getElementsByClassName('container')];
    if (existinContainers.length) {
        existinContainers.forEach((el) => {
            el.remove();
        })
    }
    if (argument === "ascend") {        
        let sortedASC = [...usersList].sort((a, b) => a.name.localeCompare(b.name));
        console.log('sortedASC', sortedASC);
        
        sortedASC.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })

    } else {
        let sortedDES = [...usersList].sort((a, b) => -1 * a.name.localeCompare(b.name));
        console.log('sortedDES', sortedDES);
        
        sortedDES.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })
    }
}

const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
btn4.addEventListener('click', () => sortAge("ascend"));
btn5.addEventListener('click', () => sortAge("descend"));

function sortAge (argument) {
    const existinContainers = [...document.getElementsByClassName('container')];
    if (existinContainers.length) {
        existinContainers.forEach((el) => {
            el.remove();
        })
    }
    if (argument === "ascend") {
        let ageASC = [...usersList].sort((a, b) => a.age.localeCompare(b.age));
        console.log('ageASC', ageASC);
        
        ageASC.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })

    } else {
        let ageDES = [...usersList].sort((a, b) => -1 * a.age.localeCompare(b.age));
        console.log('ageDES', ageDES);
        
        ageDES.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })
    }
}

const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
btn6.addEventListener('click', () => filterSex ("M"));
btn7.addEventListener('click', () => filterSex ("F"));

function filterSex (argument) {
    const existinContainers = [...document.getElementsByClassName('container')];
    if (existinContainers.length) {
        existinContainers.forEach((el) => {
            el.remove();
        })
    }
    if (argument === "M") {
        let sexM = [...usersList].filter(el => el.sex === 'Male');
        console.log('sexM', sexM);
        
        sexM.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })
    } else {
        let sexF = [...usersList].filter(el => el.sex === 'Female');
        console.log('sexF', sexF);
        
        sexF.forEach((el) => {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        })
    }
}

const searchField = document.getElementById('site-search');
const btn8 = document.getElementById('button8');
btn8.addEventListener('click', () => seekUsers());
searchField.addEventListener('input', () => seekUsers());

function seekUsers() {
    const existinContainers = [...document.getElementsByClassName('container')];
    if (existinContainers.length) {
        existinContainers.forEach((el) => {
            el.remove();
        })
    }
    let inputText = searchField.value;
    let inputSearch = [...searchField.value];

    usersList.forEach((el) => {
        if (inputSearch.length >= 3 || el.name.toLowerCase().includes(inputText) || el.surname.toLowerCase().includes(inputText) || el.email.toLowerCase().includes(inputText)) {
            let outputUser = document.createElement('div');
            outputUser.innerHTML = "<strong>Name:</strong> " + el.name + "<br />" + "<strong>Surname:</strong> " + el.surname + "<br />" + "<strong>Age:</strong> " + el.age + "<br />" + "<strong>Sex:</strong> " + el.sex + "<br />" + "<strong>Email:</strong> " + el.email + "<br />" + "<strong>Hobbies:</strong> " + el.hobbies;
            outputUser.classList.add("container");
            outputField.appendChild(outputUser);
        }
    })
}