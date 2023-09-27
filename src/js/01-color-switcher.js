const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
let interval = null;
btnStop.disabled = true;

const disabledBtn = (a, b) => {
  btnStart.disabled = a;
  btnStop.disabled = b;
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const onClickStart = () => {
  interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  disabledBtn(true, false);
};

const onClickStop = () => {
  clearInterval(interval);
  disabledBtn(false, true);
};

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
