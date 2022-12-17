const inputText = document.getElementById("search");
const ulElement = document.getElementById("myMenu");
const liElement = ulElement.getElementsByTagName("li");

function handleClick(current) {
  inputText.value = current.innerText;
}

function myFunction() {
  console.log("ok");
  const filter = inputText.value.toUpperCase();
  if (filter.length > 0) {
    for (let i = 0; i < liElement.length; i++) {
      let a = liElement[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        liElement[i].style.display = "";
      } else {
        liElement[i].style.display = "none";
      }
    }
    ulElement.style.display = "block";
  } else {
    ulElement.style.display = "none";
  }
}
