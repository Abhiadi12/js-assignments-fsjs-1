const rockElement = document.getElementById("r");
const paperElement = document.getElementById("p");
const sceziorElement = document.getElementById("s");

const userSelection = document.getElementById("result-user-stat");
const computerSelection = document.getElementById("result-comp-stat");
const finalResult = document.getElementById("result-final-stat");

const userScoreCount = document.getElementById("userScoreVal");
const compScoreCount = document.getElementById("compScoreVal");

let userAnswer = null;
let computerAnswer = null;

function labelMapper(ch) {
  switch (ch) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scezior";
  }
}

function result() {
  if (userAnswer === "Rock" && computerAnswer === "Rock") return "Draw";
  else if (userAnswer === "Rock" && computerAnswer === "Paper")
    return "Computer";
  else if (userAnswer === "Rock" && computerAnswer === "Scezior") return "User";
  else if (userAnswer === "Paper" && computerAnswer === "Paper") return "Draw";
  else if (userAnswer === "Paper" && computerAnswer === "Rock") return "User";
  else if (userAnswer === "Paper" && computerAnswer === "Scezior")
    return "Computer";
  else if (userAnswer === "Scezior" && computerAnswer === "Scezior")
    return "Draw";
  else if (userAnswer === "Scezior" && computerAnswer === "Paper")
    return "User";
  else if (userAnswer === "Scezior" && computerAnswer === "Rock")
    return "Computer";
}

function userClickHandler(e) {
  if (userAnswer) {
    return;
  }
  userAnswer = labelMapper(e.currentTarget.id);
  setTimeout(() => {
    const choice = "rps"[Math.floor(Math.random() * "rps".length)];
    if (choice === "r") {
      rockElement.click();
      computerAnswer = labelMapper(choice);
    } else if (choice === "p") {
      paperElement.click();
      computerAnswer = labelMapper(choice);
    } else {
      sceziorElement.click();
      computerAnswer = labelMapper(choice);
    }
    //update current answer
    updateCurrentAnswer();
  }, 1000);
}

function changeCount(winner) {
  if (winner === "User")
    userScoreCount.innerHTML = Number(userScoreCount.innerHTML) + 1;
  if (winner === "Computer")
    compScoreCount.innerHTML = Number(compScoreCount.innerHTML) + 1;
  //reset the value
  userAnswer = null;
  computerAnswer = null;
}

function updateCurrentAnswer() {
  const winner = result();
  userSelection.innerHTML = `User: ${userAnswer}`;
  computerSelection.innerHTML = `Computer: ${computerAnswer}`;
  finalResult.innerHTML = `Winner: ${winner}`;
  changeCount(winner);
}

[rockElement, paperElement, sceziorElement].forEach((ele) => {
  ele.addEventListener("click", (e) => userClickHandler(e));
});
