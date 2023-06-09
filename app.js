const button = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

const colors = ["Red", "Blue", "Green", "Yellow", "Orange"];

button.addEventListener("click", () => {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomColorIndex];

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
