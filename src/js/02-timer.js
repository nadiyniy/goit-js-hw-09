import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysDisplay = document.querySelector('.value[data-days');
const hoursDisplay = document.querySelector('.value[data-hours');
const minutesDisplay = document.querySelector('.value[data-minutes');
const secondsDisplay = document.querySelector('.value[data-seconds');

let userDate = null;

let isActive = false;
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        // closeButton: true,
        cssAnimationStyle: 'from-top',
        timeout: 5000,
      });
    } else {
      if (!isActive) {
        userDate = selectedDates[0];
        isActive = true;
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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const onClickStart = () => {
  isActive = true;
  btnStart.disabled = true;
  const intervalId = setInterval(() => {
    const currenTime = new Date();
    const result = userDate - currenTime;

    const { days, hours, minutes, seconds } = convertMs(result);

    daysDisplay.textContent = addLeadingZero(days);
    hoursDisplay.textContent = addLeadingZero(hours);
    minutesDisplay.textContent = addLeadingZero(minutes);
    secondsDisplay.textContent = addLeadingZero(seconds);

    if (result < 1000) {
      clearInterval(intervalId);
      isActive = false;
      btnStart.disabled = false;
      Notiflix.Notify.success('Timer finished', {
        // closeButton: true,
        cssAnimationStyle: 'from-top',
        timeout: 5000,
      });
    }
  }, 1000);
};

btnStart.addEventListener('click', onClickStart);
