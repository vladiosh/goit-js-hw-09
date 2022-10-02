import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStartRef = document.querySelector('[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

btnStartRef.addEventListener('click', () => {
  timer.start();
});

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
      Notiflix.Notify.failure('Please choose a date in the future', {
        clickToClose: true,
        position: 'center-center',
        backOverlay: true,
      });
      btnStartRef.disabled = true;
    } else {
      btnStartRef.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

// clearCalendar();

// function clearCalendar() {
//   inputRef.value = '';
// }

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    const selectedTime = new Date(inputRef.value).getTime();

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;

      if (deltaTime < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
      } else {
        const time = this.convertMs(deltaTime);
        btnStartRef.disabled = true;
        this.onTick(time);
      }
    }, 1000);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({ onTick: changeValueTimer });

timer.start();

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function changeValueTimer(obj) {
  daysRef.textContent = obj.days;
  hoursRef.textContent = obj.hours;
  minutesRef.textContent = obj.minutes;
  secondsRef.textContent = obj.seconds;
}
