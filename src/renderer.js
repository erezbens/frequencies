const frequency = document.getElementById('frequency');
const minusButton = document.getElementById('minus-button');
const plusButton = document.getElementById('plus-button');
const volume = document.getElementById('volume');
const step = document.getElementById('step');
// const { playTone } = require('./simpleTones')

minusButton.addEventListener('click', () => {
  const newFrequency = Number(frequency.textContent) - Number(step.value);
  frequency.textContent = (Math.round(newFrequency * 100) / 100).toFixed(2);
  playTone(Number(frequency.textContent), "triangle", 2)
});

plusButton.addEventListener('click', () => {
  const newFrequency = Number(frequency.textContent) + Number(step.value);
  frequency.textContent = (Math.round(newFrequency * 100) / 100).toFixed(2);
  playTone(Number(frequency.textContent), "sine", 2)
});

const getSpeakers = () => {

}