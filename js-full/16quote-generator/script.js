const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const todayElement = document.getElementById("today");

function getQuote() {
  fetch("https://zenquotes.io/api/quotes")
    .then((res) => res.json())
    .then((res) => {
      const random = Math.floor(Math.random() * res.length);
      jokeDiv.innerText = random.text;
    });
}

jokeBtn.addEventListener("click", () => {
  getQuote();
});

todayElement.innerText = `Today: ${new Date().toLocaleDateString()}`;
todayElement.style.textAlign = "center";
