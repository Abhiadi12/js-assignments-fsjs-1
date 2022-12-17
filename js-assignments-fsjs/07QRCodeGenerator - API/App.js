const inputElement = document.getElementById("input");
const submitBtn = document.getElementById("submit");
let hasOne = false;
const qrElement = document.getElementById("qrcode");

function generateQc(value) {
  qrElement.innerHTML = "";
  new QRCode(qrElement, value);
}
submitBtn.addEventListener("click", () => {
  if (hasOne) {
    generateQc(inputElement.value);
  } else {
    generateQc(inputElement.value); // make another code.
  }
  hasOne = true;
});
