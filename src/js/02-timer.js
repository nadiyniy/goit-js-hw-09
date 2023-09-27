import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('.value[data-days');
const hours = document.querySelector('.value[data-hours');
const minutes = document.querySelector('.value[data-minutes');
const seconds = document.querySelector('.value[data-seconds');

let isActive = false;
if (!isActive) {
  isActive = false;
  btnStart.disabled = true;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      if (!isActive) {
        isActive = false;
        btnStart.disabled = false;
      }
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const onClickStart = () => {};

btnStart.addEventListener('click', onClickStart);
