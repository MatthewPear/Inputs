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

let sexChoice = [];
let hobbiesChoice = [];
// console.log('sexChoice: ', sexChoice);
const btnSave = document.getElementById('button');
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
    usersDisplay = usersList;
    drawList(usersDisplay);
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

    let myIndex = usersList.findIndex(el => el === user);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete"
    deleteBtn.classList.add("smallButton");
    deleteBtn.setAttribute("id", myIndex);
    deleteBtn.addEventListener('click', () => deleteUser (myIndex));
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
btn6.addEventListener('click', () => filterUsers ("Male"));
btn7.addEventListener('click', () => filterUsers ("Female"));

function sortUsers (sortOption) {
    if (sortOption === "ascendNames") {        
        usersDisplay = usersDisplay.sort((a, b) => a.name.localeCompare(b.name));
        console.log('sortedASC', usersDisplay);
       
    } else if (sortOption === "descendNames") {
        usersDisplay = usersDisplay.sort((a, b) => b.name.localeCompare(a.name));
        console.log('sortedDES', usersDisplay);
        
    } else if (sortOption === "ascendAge") {
        usersDisplay = usersDisplay.sort((a, b) => a.age.localeCompare(b.age));
        console.log('ageASC', usersDisplay);
        
    } else if (sortOption === "descendAge") {
        usersDisplay = usersDisplay.sort((a, b) => b.age.localeCompare(a.age));
        console.log('ageDES', usersDisplay);
  
    }
    drawList(usersDisplay);
}

function filterUsers (filterOption) {
    if (filterOption === "Male") {
        usersDisplay = usersList.filter(el => el.sex === 'Male');
        console.log('sexM', usersDisplay);
    
    } else if (filterOption === "Female") {
        usersDisplay = usersList.filter(el => el.sex === 'Female');
        console.log('sexF', usersDisplay);

    }
    searchField.value = '';
    drawList(usersDisplay);
}
console.log("usersDisplay" , usersDisplay);

const searchField = document.getElementById('site-search');
const btn8 = document.getElementById('button8');
searchField.addEventListener('input', () => seekUsers());
btn8.addEventListener('click', () => clearSearch());

function seekUsers() {
    let inputText = searchField.value.toLowerCase();

    if(inputText.length >= 3) {
        const seekResult = usersList.filter(el => el.name.toLowerCase().includes(inputText) || el.surname.toLowerCase().includes(inputText) || el.email.toLowerCase().includes(inputText));
        usersDisplay = seekResult;
        drawList(usersDisplay);
    } else if (inputText.length < 3 && inputText.length > 0) {
        drawList(usersDisplay);
    } else if (inputText.length === 0) {
        usersDisplay = usersList;
        drawList(usersDisplay);
    }
}

function drawList(list) {
    const existingContainers = [...document.getElementsByClassName('container')];
    if (existingContainers.length) {
        existingContainers.forEach((el) => {
            el.remove();
        })
    }
    list.forEach((el) => {
        drawUser(el);
    })
    if(list.length === 0) {
        let noResult = document.createElement('div');
        noResult.classList.add("container");
        outputField.appendChild(noResult);

        let notification = document.createElement('div');
        notification.innerHTML = "Sorry, no matching users. :( ";
        notification.classList.add("noResult");
        noResult.appendChild(notification);
    }
}

function clearSearch() {
    searchField.value = ''; 
    usersDisplay = usersList;
    drawList(usersDisplay);
}

function deleteUser (myIndex) {
    console.log("Del User: " + myIndex);

    searchField.value = '';
    usersList.splice(myIndex, 1);
    console.log("usersList after splice: ", usersList); 
    usersDisplay = usersList;
    drawList(usersDisplay);
}