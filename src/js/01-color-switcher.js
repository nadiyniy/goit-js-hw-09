const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClickStart = () => {
    
};
const onClickStop = () => {};

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
