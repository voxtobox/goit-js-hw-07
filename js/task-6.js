const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls input');
const listBoxesEl = document.querySelector('div#boxes');

buttonCreateEl.addEventListener('click', getInputValue);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getInputValue() {
  listBoxesEl.innerHTML = '';
  const inputValue = inputEl.value;
  createBoxes(inputValue);
  inputEl.value = '';
}

function createBoxes(amount) {
  if (amount > 100) {
    return;
  }
  const docFragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement('div');
    const size = 30 + i * 10;

    createBox.style.width = `${size}px`;
    createBox.style.height = `${size}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    docFragment.append(createBox);
  }
  listBoxesEl.append(docFragment);
}

function destroyBoxes() {
  listBoxesEl.innerHTML = '';
}