const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submitAnswers");
const message = document.querySelector("#message");

const correctAnswers = [
  "Equilateral triangle",
  "90°",
  "Right angled",
  "one right angle",
  "True"
];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  message.innerText = `WooHoo!! Your score is: ${score}`;
};
submitBtn.addEventListener("click", calculateScore);
