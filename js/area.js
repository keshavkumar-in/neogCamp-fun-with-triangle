const sides = document.querySelectorAll(".sides");
const areaBtn = document.querySelector("#calculateArea");
const message = document.querySelector("#message");

const calculateArea = () => {
  const area = (Number(sides[0].value) * Number(sides[1].value)) / 2;

  message.innerText = `The length of Area is: ${area}`;
};

areaBtn.addEventListener("click", calculateArea);
