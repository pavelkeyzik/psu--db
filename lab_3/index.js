const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clear = document.getElementById('js-clear');
const mainColor = document.getElementById('js-color-main');
const secondaryColor = document.getElementById('js-color-secondary');

const solidType = document.getElementById('js-fill-type-solid');
const gradientType = document.getElementById('js-fill-type-gradient');

console.log();
console.log();

const getFill = (x0, y0, x1, y1) => {
  if (solidType.checked) {
    return mainColor.value;
  }
  if (gradientType.checked) {
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    gradient.addColorStop(0, mainColor.value);
    gradient.addColorStop(1, secondaryColor.value);
    return gradient;
  }
}

const renderClear = () => {
  ctx.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
};

clear.addEventListener('click', renderClear);

const renderSquare = (width, heigth, x, y) => {
  const fill = getFill(0, 0, width, heigth);
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, width, heigth);
};

const renderSquareButton = document.getElementById('js-render-square');
const squareX = document.getElementById('figure__square-x');
const squareY = document.getElementById('figure__square-y');
const squareW = document.getElementById('figure__square-w');
const squareH = document.getElementById('figure__square-h');

renderSquareButton.addEventListener('click', () => {
  const x = squareX.value;
  const y = squareY.value;
  const width = squareW.value;
  const heigth = squareH.value;
  renderSquare(width, heigth, x, y);
});