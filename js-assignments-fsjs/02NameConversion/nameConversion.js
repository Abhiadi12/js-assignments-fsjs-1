const inputNode = document.getElementById("text");

const allPNode = document.querySelectorAll(".case_div p");

const convertBtn = document.getElementById("convert-btn");

const myLogicForHandleCase = {
  ["camel-case"]: (val) => {
    let allWords = val.split(" ");
    allWords = allWords.map(
      (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
    );
    return allWords.join("");
  },
  ["pascal-case"]: (val) => {
    let allWords = val.split(" ");
    for (let i = 1; i < allWords.length; i++) {
      allWords[i] =
        allWords[i].substring(0, 1).toUpperCase() + allWords[i].substring(1);
    }
    return allWords.join("");
  },
  ["snake-case"]: (val) => {
    let allWords = val.split(" ");
    return allWords.join("_");
  },
  ["screaming-snake-case"]: (val) => {
    let allWords = val.split(" ");
    return allWords.map((word) => word.toUpperCase()).join("_");
  },
  ["kebab-case"]: (val) => {
    let allWords = val.split(" ");
    return allWords.join("-");
  },
  ["screaming-kebab-case"]: (val) => {
    let allWords = val.split(" ");
    return allWords.map((word) => word.toUpperCase()).join("-");
  },
};

function converter(key, hof) {
  const res = hof(inputNode.value);
  document.getElementById(key).innerHTML = res;
}

convertBtn.addEventListener("click", () => {
  if (inputNode.value === "") {
    alert("Please enter something");
    return;
  }
  Object.keys(myLogicForHandleCase).forEach((keyName) => {
    converter(keyName, myLogicForHandleCase[keyName]);
  });
});
