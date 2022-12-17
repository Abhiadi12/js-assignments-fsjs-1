const checkboxEle = document.querySelector("input[type='checkbox']");
const body = document.body;

checkboxEle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
