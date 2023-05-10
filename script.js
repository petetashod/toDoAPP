/** @format */

const button = document.getElementById("button");
const input = document.getElementById("input");
const toDoList = document.getElementById("actualToDoList");
button.addEventListener("click", function (e) {
  e.preventDefault();
  let listOfInformation = document.createElement("div");
  listOfInformation.className = "containerOfEachTask";
  let pElement = document.createElement("p");
  pElement.className = "lineThrough";
  pElement.textContent = input.value;
  listOfInformation.appendChild(pElement);
  let removeButton = document.createElement("button");
  removeButton.innerText = "x";
  removeButton.setAttribute("class", "removeButton");
  let task = toDoList.appendChild(listOfInformation);
  listOfInformation.appendChild(removeButton);
  input.value = "";
  pElement.addEventListener("click", function (e) {
  
   if(e.target.tagName === "p"  ){
    e.target.classList.toggle("lineThrough");
   }
   
    
  });
  removeButton.addEventListener("click", function removeItems() {
    task.remove();
  });
});
