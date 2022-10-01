import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStartRef = document.querySelector('[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

btnStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    const startTime = Date.now();
    const calendarTime = new Date(selectedDates[0]);

    if (calendarTime < startTime) {
      alert('Please choose a date in the future');
    } else {
      btnStartRef.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);
