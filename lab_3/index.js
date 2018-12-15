const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clear = document.getElementById('js-clear');
const mainColor = document.getElementById('js-color-main');
const secondaryColor = document.getElementById('js-color-secondary');

const solidType = document.getElementById('js-fill-type-solid');
const gradientType = document.getElementById('js-fill-type-gradient');

const getFillSquare = (x0, y0, x1, y1) => {
  if (solidType.checked) {
    return mainColor.value;
  }
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(0, mainColor.value);
  gradient.addColorStop(1, secondaryColor.value);
  return gradient;
}

const getFillCircle = (x0, y0, r0, x1, y1, r1) => {
  if (solidType.checked) {
    return mainColor.value;
  }
  const gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  gradient.addColorStop(0, mainColor.value);
  gradient.addColorStop(1, secondaryColor.value);
  return gradient;
}

const renderClear = () => {
  ctx.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
};

clear.addEventListener('click', renderClear);

const renderSquare = (width, heigth, x, y) => {
  const fill = getFillSquare(0, 0, width, heigth);
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

const renderCircle = (x, y, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  const fill = getFillCircle(x, y, 0, x, y, r);
  ctx.fillStyle = fill;
  ctx.fill();
};

const renderCircleButton = document.getElementById('js-render-circle');
const circleX = document.getElementById('figure__circle-x');
const circleY = document.getElementById('figure__circle-y');
const circleR = document.getElementById('figure__circle-r');

renderCircleButton.addEventListener('click', () => {
  const x = circleX.value;
  const y = circleY.value;
  const radius = circleR.value;
  renderCircle(x, y, radius);
});