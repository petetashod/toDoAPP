
const button = document.getElementById('button');
const input = document.getElementById('input');
const toDoList = document.getElementById('actualToDoList');

button.addEventListener('click', function(){
    let listOfInformation = document.createElement('p');
    listOfInformation.textContent = input.value;
    toDoList.appendChild(listOfInformation);


})