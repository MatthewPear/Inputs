/////////Task1
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
///////////////////////Task2
let usersList = [];
let usersDisplay = [];
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
    usersDisplay.push(user);
    drawUser(user);
}

function drawUser(user) {
    let outputField = document.getElementById('outputField');
    outputField.classList.add("userField");
    outputField.setAttribute("style", 'visibility:visible;');

    let outputUser = document.createElement('div');
    outputUser.classList.add("container");
    outputField.appendChild(outputUser);

    let nameDisplay = document.createElement('div');
    nameDisplay.innerHTML = "Name: " + user.name;
    nameDisplay.classList.add("name");
    outputUser.appendChild(nameDisplay);

    let surnameDisplay = document.createElement('div');
    surnameDisplay.innerHTML = "Surname: " + user.surname;
    surnameDisplay.classList.add("name");
    outputUser.appendChild(surnameDisplay);

    let ageDisplay = document.createElement('div');
    ageDisplay.innerHTML = "Age: " + user.age;
    ageDisplay.classList.add("name");
    outputUser.appendChild(ageDisplay);

    let sexDisplay = document.createElement('div');
    sexDisplay.innerHTML = "Sex: " + user.sex;
    sexDisplay.classList.add("name");
    outputUser.appendChild(sexDisplay);

    let emailDisplay = document.createElement('div');
    emailDisplay.innerHTML = "Email: " + user.email;
    emailDisplay.classList.add("name");
    outputUser.appendChild(emailDisplay);

    let hobbiesDisplay = document.createElement('div');
    hobbiesDisplay.innerHTML = "Hobbies: " + user.hobbies;
    hobbiesDisplay.classList.add("name");
    outputUser.appendChild(hobbiesDisplay);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete"
    deleteBtn.classList.add("smallButton");
    deleteBtn.addEventListener('click', () => deleteUser ());
    outputUser.appendChild(deleteBtn);
}
console.log("user add", usersList);

const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
btn2.addEventListener('click', () => sortUsers("ascendNames"));
btn3.addEventListener('click', () => sortUsers("descendNames"));
btn4.addEventListener('click', () => sortUsers("ascendAge"));
btn5.addEventListener('click', () => sortUsers("descendAge"));
btn6.addEventListener('click', () => sortUsers ("Male"));
btn7.addEventListener('click', () => sortUsers ("Female"));

function sortUsers (sortOption) {
    usersDisplay = [];
    const existingContainers = [...document.getElementsByClassName('container')];
    if (existingContainers.length) {
        existingContainers.forEach((el) => {
            el.remove();
        })
    }
    if (sortOption === "ascendNames") {        
        let namesASC = [...usersList].sort((a, b) => a.name.localeCompare(b.name));
        console.log('sortedASC', namesASC);
        
        namesASC.forEach((el) => {
            usersDisplay.push(el);
        })
    } else if (sortOption === "descendNames") {
        let namesDES = [...usersList].sort((a, b) => -1 * a.name.localeCompare(b.name));
        console.log('sortedDES', namesDES);
        
        namesDES.forEach((el) => {
            usersDisplay.push(el);
        })
    } else if (sortOption === "ascendAge") {
        let ageASC = [...usersList].sort((a, b) => a.age.localeCompare(b.age));
        console.log('ageASC', ageASC);
        
        ageASC.forEach((el) => {
            usersDisplay.push(el);
        })
    } else if (sortOption === "descendAge") {
        let ageDES = [...usersList].sort((a, b) => -1 * a.age.localeCompare(b.age));
        console.log('ageDES', ageDES);
        
        ageDES.forEach((el) => {
            usersDisplay.push(el);
        })
    } else if (sortOption === "Male") {
        let sexM = [...usersList].filter(el => el.sex === 'Male');
        console.log('sexM', sexM);
        
        sexM.forEach((el) => {
            usersDisplay.push(el);
        })
    } else if (sortOption === "Female") {
        let sexF = [...usersList].filter(el => el.sex === 'Female');
        console.log('sexF', sexF);
        
        sexF.forEach((el) => {
            usersDisplay.push(el);
        })
    }
    usersDisplay.forEach((el) => {
        drawUser(el);
    })
}

console.log("usersDisplay" , usersDisplay);

const searchField = document.getElementById('site-search');
const btn8 = document.getElementById('button8');
const btn9 = document.getElementById('button9');
searchField.addEventListener('input', () => seekUsers());
btn8.addEventListener('click', () => clearSearch());

function seekUsers() {
    let inputText = searchField.value.toLowerCase();

    if(inputText.length >= 3) {
        const existingContainers = [...document.getElementsByClassName('container')];
        if (existingContainers.length) {
            existingContainers.forEach((el) => {
                el.remove();
            })
        }
        usersList.forEach((el) => {
            if (el.name.toLowerCase().includes(inputText) || el.surname.toLowerCase().includes(inputText) || el.email.toLowerCase().includes(inputText)) {
                drawUser(el);
            }
        })
    } else if (inputText.length === 0) {
        const existingContainers = [...document.getElementsByClassName('container')];
        if (existingContainers.length) {
            existingContainers.forEach((el) => {
                el.remove();
            })
        }
        usersList.forEach((el) => {
            drawUser(el);
        })
    }
}

function clearSearch() {
    searchField.value = '';

    const existingContainers = [...document.getElementsByClassName('container')];
    if (existingContainers.length) {
        existingContainers.forEach((el) => {
            el.remove();
        })
    }
    usersList.forEach((el) => {
        drawUser(el);
    })
}

// function deleteUser () {
    

//     const existingContainers = [...document.getElementsByClassName('container')];
//     if (existingContainers.length) {
//         existingContainers.forEach((el) => {
//             el.remove();
//         })
//     }
//     usersList.forEach((el) => {
//         drawUser(el);
//     })
// }