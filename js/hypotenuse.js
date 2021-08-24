const sides = document.querySelectorAll(".sides");
const hypotenuseBtn = document.querySelector("#calculateHypotenuse");
const message = document.querySelector("#message");

const calculateSumOfSquares = (a, b) => {
  const sumOfSquares = a * a + b * b;

  return sumOfSquares;
};

const calculateHypotenuse = () => {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  message.innerText = `The length of Hypotenuse is: ${lengthOfHypotenuse}`;
};

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
