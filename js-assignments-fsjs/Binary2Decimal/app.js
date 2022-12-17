const binaryElement = document.getElementById("binary");
const btnElement = document.querySelector(".container");
const result = document.querySelector(".result span");

btnElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = binaryElement.value;
  if (value === "") alert("Please enter a binary number");
  let flag = value.split("").every((val) => val === "0" || val === "1");
  if (!flag) alert("binary only contains 0 and 1");
  else {
    let ans = 0;
    let count = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      ans = ans + Number(value[i]) * Math.pow(2, count);
      count++;
    }
    result.innerText = ans;
  }
});
