const elements = document.querySelectorAll(".as-imagegrid-item-title");
const output = [];

elements.forEach((element) => {
  output.push(element.innerHTML.split(" ")[0]);
});

console.log(output);
