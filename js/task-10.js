
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("div#boxes")

boxes.style.display = "flex";
boxes.style.alignItems = "flex-end"
boxes.style.gap = "10px";
boxes.style.marginTop = "10px";

create.addEventListener("click", () => {
  const boxAmount = input.value;
  destroyBoxes();
  createBoxes(boxAmount);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
  input.value = 0;
})

function createBoxes(boxAmount) {
  for (let i=0; i<boxAmount; i+=1) {
    let size = 30 + i*10;
    const boxDiv = `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
    boxes.insertAdjacentHTML("beforeend", boxDiv);
  }
};

function destroyBoxes() {
  boxes.innerHTML = "";
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
