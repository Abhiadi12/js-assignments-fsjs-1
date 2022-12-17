const jokeDiv = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

function getJoke() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => {
      jokeDiv.innerText = res.value;
    });
}

jokeBtn.addEventListener("click", () => {
  getJoke();
});
