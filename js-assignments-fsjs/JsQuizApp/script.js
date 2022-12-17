const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.getElementsByClassName("answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  if (currentQuiz >= quizData.length) {
    quiz.innerHTML = `
        <div>
        <h3 style="text-align: center; color: red;">Your Score is: ${score}</h3>
        </div>
        `;
    return;
  }
  const { question, a, b, c, d } = quizData[currentQuiz];
  questionEl.innerText = question;
  a_text.innerText = a;
  b_text.innerText = b;
  c_text.innerText = c;
  d_text.innerText = d;
}

function deselectAnswers() {
  document.querySelector('input[name="answer"]:checked').checked = false;
}

function getSelected() {
  const { correct } = quizData[currentQuiz];
  const val = document.querySelector('input[name="answer"]:checked');
  if (val.id === correct) score++;

  currentQuiz++;
  deselectAnswers();
  loadQuiz();
}

submitBtn.addEventListener("click", () => {
  getSelected();
});
