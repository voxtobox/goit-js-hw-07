function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  let boxHtml = '';

  for (let i = 0; i < amount; i++) {
    boxHtml += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }

  boxes.innerHTML = boxHtml;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  
});

destroyButton.addEventListener('click', destroyBoxes);