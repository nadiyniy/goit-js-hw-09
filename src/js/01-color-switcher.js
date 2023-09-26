const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.body;
let isActive = false;
let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClickStart = () => {
  if (!isActive) {
    isActive = true;
    interval = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  btnStart.disabled = true;
  btnStop.disabled = false;//не обов'язково
};

const onClickStop = () => {
  if (isActive) {
    isActive = false;
    clearInterval(interval);
    btnStart.disabled = false;
  }
  btnStop.disabled = true; //не обов'язково
};

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
