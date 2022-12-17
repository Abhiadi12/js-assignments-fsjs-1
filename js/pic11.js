const element = document.querySelector(".icon-logo");
element.classList.remove("icon-logo");
const newStyle = document.querySelector("span.icon");
newStyle.style.backgroundImage =
  "url('https://ineuron.ai/images/ineuron-logo.png')";
newStyle.style.backgroundPosition = "top center";
newStyle.style.backgroundSize = "100% auto";
newStyle.style.backgroundRepeat = "no-repeat";
