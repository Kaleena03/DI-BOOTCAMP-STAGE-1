
let formElement = document.querySelector('form');
console.log(formElement);


let firstNameInputById = document.getElementById('fname');
let lastNameInputById = document.getElementById('lname');
console.log(firstNameInputById, lastNameInputById);


let firstNameInputByName = document.querySelector('[name="firstname"]');
let lastNameInputByName = document.querySelector('[name="lastname"]');
console.log(firstNameInputByName, lastNameInputByName);


formElement.addEventListener('submit', function(event) {

    event.preventDefault();

    let firstNameValue = firstNameInputById.value.trim();
    let lastNameValue = lastNameInputById.value.trim();


    if (firstNameValue !== "" && lastNameValue !== "") {

        let firstNameLi = document.createElement('li');
        let lastNameLi = document.createElement('li');
        firstNameLi.textContent = firstNameValue;
        lastNameLi.textContent = lastNameValue;

        
        let usersAnswerUl = document.querySelector('.usersAnswer');
        usersAnswerUl.appendChild(firstNameLi);
        usersAnswerUl.appendChild(lastNameLi);
    } else {
       
        alert('Please fill in both fields.');
    }
});
