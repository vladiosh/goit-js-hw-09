const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
const PROMT_DELAY = 1000;
let intervalId = null;

btnStartRef.addEventListener('click', onClickBtnStart);
btnStopRef.addEventListener('click', onClickBtnStop);

btnStopRef.disabled = true;

function onClickBtnStart(evt) {
  evt.target.disabled = true;
  btnStopRef.removeAttribute('disabled');
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, PROMT_DELAY);
}

function onClickBtnStop(evt) {
  evt.target.disabled = true;
  btnStartRef.removeAttribute('disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
