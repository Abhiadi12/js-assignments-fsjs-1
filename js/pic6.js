let inputBoxElement = document.querySelector(".searchinput___19uW0");
const changeBgColor = (color, element) => {
  element.style.backgroundColor = color;
};

inputBoxElement.addEventListener("hover", () =>
  changeBgColor("red", inputBoxElement)
);
