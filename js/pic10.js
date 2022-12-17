const target = document.querySelector(
  ".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default"
);

const spanElement = target.querySelector(".login-btn-text");
target.addEventListener("mouseover", () => {
  spanElement.style.backgroundColor = "red";
  spanElement.innerHTML = "changed";
});
