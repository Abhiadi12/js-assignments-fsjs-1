const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.innerText);
});

generateEl.addEventListener("click", () => {
  const value = generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    parseInt(lengthEl.value)
  );
  console.log(value);
  resultEl.innerHTML = value;
});

function generatePassword(lower, upper, number, symbol, length) {
  const helperArray = [];
  let myPassword = "";

  if (lower) helperArray.push("lower");
  if (upper) helperArray.push("upper");
  if (number) helperArray.push("number");
  if (symbol) helperArray.push("symbol");
  if (length === 0) {
    alert("can't create password for length 0");
    return;
  }

  for (let i = 1; i <= length; i++) {
    myPassword =
      myPassword +
      randomFunc[helperArray[Math.floor(Math.random() * helperArray.length)]]();
  }
  return myPassword;
}

function getRandomLower() {
  const lowerString = "abcdefghijklmnopqrstuvwxyz";
  return lowerString[Math.floor(Math.random() * lowerString.length)];
}

function getRandomUpper() {
  const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperString[Math.floor(Math.random() * upperString.length)];
}

function getRandomNumber() {
  const numberString = "1234567890";
  return numberString[Math.floor(Math.random() * numberString.length)];
}

function getRandomSymbol() {
  const symbolString = "+-*%@#$!?:";
  return symbolString[Math.floor(Math.random() * symbolString.length)];
}
