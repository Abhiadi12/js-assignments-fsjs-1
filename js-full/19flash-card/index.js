const inputBox = document.getElementById("textbox");
const cardElement = document.querySelector(".card");

inputBox.addEventListener("keyup", () => {
  console.log("hello");
  cardElement.innerText = inputBox.value;
});
