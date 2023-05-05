

const button = document.getElementById("button");
const input = document.getElementById("input");
const toDoList = document.getElementById("actualToDoList");
const removeBtn = document.getElementById("removeBtn");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let listOfInformation = document.createElement("p");
  listOfInformation.textContent = input.value;
  toDoList.appendChild(listOfInformation);
  input.value = "";

  listOfInformation.addEventListener("click", function () {
    listOfInformation.style.textDecoration = "line-through";
  });
  removeBtn.addEventListener("click", function () {
    toDoList.removeChild(listOfInformation);
  });
});
