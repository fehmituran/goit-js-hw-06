
const color = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");


btnColor.addEventListener("click", changeColor);


function changeColor () {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}














