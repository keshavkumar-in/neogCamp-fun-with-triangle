const angles = document.querySelectorAll(".angles");
const checkBtn = document.querySelector("#checkTriangle");
const message = document.querySelector("#message");

const calculateSumOfAngles = (angle1, angle2, angle3) => {
  const sumOfAngles = angle1 + angle2 + angle3;

  return sumOfAngles;
};

const isTriangle = () => {
  const sumOfAngles = calculateSumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );

  if (sumOfAngles === 180) {
    message.innerText = "😊 WoHoo!! Given angles can form a triangle.";
  } else {
    message.innerText = "😌 Ohhh!! Given angles cannot form a triangle.";
  }
};

checkBtn.addEventListener("click", isTriangle);
