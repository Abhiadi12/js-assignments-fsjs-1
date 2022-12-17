const languagesElement = document.getElementById("SIvCob").children;
for (let i = 0; i < languagesElement.length; i++) {
  if (i % 2 != 0) languagesElement[i].remove();
}
