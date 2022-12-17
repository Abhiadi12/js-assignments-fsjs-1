const canvasElement = document.getElementById("canvas");
const btnClickMe = document.getElementById("button");

function bgChanger() {
  const myMagicString = "123456790ABCDEF";
  let myColor = "#";
  for (let i = 0; i < 6; i++) {
    myColor =
      myColor + myMagicString[Math.floor(Math.random() * myMagicString.length)];
  }
  return myColor;
}

btnClickMe.addEventListener("click", () => {
  canvasElement.style.backgroundColor = bgChanger();
});
