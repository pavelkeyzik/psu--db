(() => {
  const exerciseTwo_input = document.getElementById('exerciseTwo_input');
  const exerciseTwo_button = document.getElementById('exerciseTwo_button');
  const exerciseTwo_output = document.getElementById('exerciseTwo_output');

  const exerciseTwo_inputLength = document.getElementById('exerciseTwo_inputLength');
  const exerciseTwo_inputWidth = document.getElementById('exerciseTwo_inputWidth');
  const exerciseTwo_inputHeight = document.getElementById('exerciseTwo_inputHeight');
  const exerciseTwo_buttonVolume = document.getElementById('exerciseTwo_buttonVolume');
  const exerciseTwo_outputVolume = document.getElementById('exerciseTwo_outputVolume');

  const exerciseThree_input = document.getElementById('exerciseThree_input');
  const exerciseThree_button = document.getElementById('exerciseThree_button');
  const exerciseThree_output = document.getElementById('exerciseThree_output');

  const exerciseFour_input = document.getElementById('exerciseFour_input');
  const exerciseFour_buttonAbs = document.getElementById('exerciseFour_buttonAbs');
  const exerciseFour_buttonCInt = document.getElementById('exerciseFour_buttonCInt');
  const exerciseFour_buttonFix = document.getElementById('exerciseFour_buttonFix');
  const exerciseFour_buttonInt = document.getElementById('exerciseFour_buttonInt');
  const exerciseFour_buttonSqr = document.getElementById('exerciseFour_buttonSqr');
  const exerciseFour_output = document.getElementById('exerciseFour_output');

  const exerciseFive_inputWidth = document.getElementById('exerciseFive_inputWidth');
  const exerciseFive_inputHeight = document.getElementById('exerciseFive_inputHeight');
  const exerciseFive_button = document.getElementById('exerciseFive_button');
  const exerciseFive_output = document.getElementById('exerciseFive_output');

  const exerciseSix_input = document.getElementById('exerciseSix_input');
  const exerciseSix_button = document.getElementById('exerciseSix_button');
  const exerciseSix_output = document.getElementById('exerciseSix_output');

  exerciseTwo_input.addEventListener('keyup', (ev) => {
    exerciseTwo_input.value = exerciseTwo_input.value.replace(/^0{2}/, '0');
  });

  exerciseTwo_button.addEventListener('dblclick', (ev) => {
    if (+exerciseTwo_input.value === 5) {
      exerciseTwo_output.value = 'Угадал';
    } else {
      exerciseTwo_output.value = 'Не угадал';
    }
  });

  exerciseTwo_buttonVolume.addEventListener('dblclick', (ev) => {
    const length = exerciseTwo_inputLength.value;
    const height = exerciseTwo_inputHeight.value;
    const width = exerciseTwo_inputWidth.value;
    exerciseTwo_outputVolume.value = length * width * height;
  });

  exerciseThree_button.addEventListener('dblclick', (ev) => {
    const number = exerciseThree_input.value;
    let result = 0;
    for (let i = 1; i <= number; i++) {
      result += i;
    }
    exerciseThree_output.value = result;
  });

  exerciseFour_buttonAbs.addEventListener('dblclick', () => {
    exerciseFour_output.value = Math.abs(+(exerciseFour_input.value));
  });

  exerciseFour_buttonCInt.addEventListener('dblclick', () => {
    exerciseFour_output.value = 2 * Math.round(+(exerciseFour_input.value) / 2);
  });

  exerciseFour_buttonFix.addEventListener('dblclick', () => {
    exerciseFour_output.value = Math.ceil(+(exerciseFour_input.value));
  });

  exerciseFour_buttonInt.addEventListener('dblclick', () => {
    exerciseFour_output.value = Math.floor(+(exerciseFour_input.value));
  });

  exerciseFour_buttonSqr.addEventListener('dblclick', () => {
    exerciseFour_output.value = Math.sqrt(Math.abs(+(exerciseFour_input.value)));
  });

  exerciseFive_button.addEventListener('dblclick', () => {
    const width = +(exerciseFive_inputWidth.value);
    const height = +(exerciseFive_inputHeight.value);
    if (width > 0 && height > 0) {
      exerciseFive_output.value = width * height;
    } else {
      exerciseFive_output.value = '';
    }
  });

  exerciseSix_button.addEventListener('dblclick', () => {
    exerciseSix_output.innerText = `Летели ${exerciseSix_input.value.length} вороны`;
  });

  const operation = (lastResult, value, operation) => {
    switch (operation) {
      case "+":
        return (+lastResult) + (+value);
      case "-":
        return (+lastResult) - (+value);
      case "*":
        return (+lastResult) * (+value);
      case "/":
        return (+lastResult) / (+value);
    }
  }

  let lastResult = 0;
  let lastOperation = null;
  let isCalculate = false;
  const calculator__output = document.getElementById('js-calculator__output');
  const handleCalculate = (ev) => {
    switch (ev.target.value) {
      case "C":
        calculator__output.value = '0';
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if (calculator__output.value === '0') {
          calculator__output.value = '';
        }
        calculator__output.value += ev.target.value;
        break;
      case ".":
        if(!calculator__output.value.includes('.')) {
          calculator__output.value += ev.target.value;
        }
        break;
      case "+/-":
        calculator__output.value = (-1 * +calculator__output.value);
        break;
      case "√":
        if (+calculator__output.value > 0) {
          calculator__output.value = Math.sqrt(calculator__output.value);
        }
        break;
      case "sin":
        calculator__output.value = Math.sin(calculator__output.value);
        break;
      case "cos":
        calculator__output.value = Math.cos(calculator__output.value);
        break;
      case "tan":
        calculator__output.value = Math.tan(calculator__output.value);
        break;
      case "backspace":
        calculator__output.value = calculator__output.value.substring(0, calculator__output.value.length - 1);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (!isCalculate) {
          lastResult = calculator__output.value;
          lastOperation = ev.target.value;
          calculator__output.value = '';
        }
        break;
      case "=":
        if (lastOperation) {
          lastResult = operation(lastResult, calculator__output.value, lastOperation);
          calculator__output.value = lastResult;
          lastResult = 0;
          lastOperation = null;
          isCalculate = false;
        }
        break;
    }
  };

  const calculatorButtons = document.querySelectorAll('.calculator__button');
  calculatorButtons.forEach(but => but.addEventListener('click', handleCalculate));

})();