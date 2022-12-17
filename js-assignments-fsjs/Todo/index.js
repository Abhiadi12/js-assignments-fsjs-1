const submitBtn = document.querySelector(".addButton");
const inputEle = document.querySelector(".input");
const containerEle = document.querySelector(".container");
let id = 0;
const handleEdit = (ele) => {
  console.log(ele.firstChild);
  const pTag = ele.firstChild;
  let currentText = pTag.innerText;
  let updatedText = prompt("Change it", pTag.innerText);

  pTag.innerText = updatedText;
};

const handleDelete = (ele) => {
  ele.remove();
};

const createList = () => {
  const listElement = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const note = document.createElement("p");
  const btnContainer = document.createElement("div");

  note.innerText = inputEle.value;
  editButton.innerText = "EDIT";
  deleteButton.innerText = "REMOVE";
  editButton.id = `${id}-edit`;
  deleteButton.id = `${id}-delete`;

  listElement.classList.add("list");
  editButton.classList.add("editButton");
  deleteButton.classList.add("deleteButton");
  listElement.classList.add("item");

  editButton.onclick = () => handleEdit(editButton.parentElement.parentElement);
  deleteButton.onclick = () =>
    handleDelete(deleteButton.parentElement.parentElement);

  listElement.appendChild(note);
  btnContainer.appendChild(editButton);
  btnContainer.appendChild(deleteButton);
  listElement.appendChild(btnContainer);
  containerEle.appendChild(listElement);
  inputEle.value = "";

  id++;
};

submitBtn.addEventListener("click", createList);
