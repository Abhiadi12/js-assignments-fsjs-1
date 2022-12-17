const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(e, idx) {
  const allAnswer = document.querySelectorAll(".faq p");
  if (allAnswer[idx].classList.contains("hidden"))
    allAnswer[idx].classList.remove("hidden");
  else allAnswer[idx].classList.add("hidden");

  btnStatusUpdate(e);
}

function createFaq(data) {
  const createDiv = document.createElement("div");
  createDiv.classList.add("faq");

  const headerElement = document.createElement("div");
  headerElement.classList.add("faq_header");

  const createHeading = document.createElement("h3");
  const textNodeForHeading = document.createTextNode(data?.question);
  createHeading.appendChild(textNodeForHeading);

  const createParagraph = document.createElement("p");
  createParagraph.innerHTML = data?.answer;
  createParagraph.classList.add("hidden");

  const button = document.createElement("button");
  button.innerHTML = "+";
  button.classList.add("show_btn");

  headerElement.appendChild(createHeading);
  headerElement.appendChild(button);
  createDiv.appendChild(headerElement);
  createDiv.appendChild(createParagraph);
  accordianBody.appendChild(createDiv);
}

function btnStatusUpdate(e) {
  if (e.target.innerHTML === "+") e.target.innerHTML = "-";
  else e.target.innerHTML = "+";
}

faqData.forEach((faq) => {
  createFaq(faq);
});

const accordionBtns = document.querySelectorAll(".faq .show_btn");

accordionBtns.forEach((btnElement, idx) => {
  btnElement.addEventListener("click", (e) => showFaq(e, idx));
});
