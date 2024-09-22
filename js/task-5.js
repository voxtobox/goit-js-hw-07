function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('button.change-color');

buttonChangeColor.addEventListener('click', changeColor);

function changeColor() {
  const body = document.body;
  const color = document.querySelector('.color');

  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
}