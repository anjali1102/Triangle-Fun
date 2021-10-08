const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const ouputE1 = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  ouputE1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(4);
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
