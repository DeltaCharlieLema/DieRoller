const result = document.querySelector('#result');
const rollButton = document.querySelector('#roll-button');
const dieSelector = document.querySelector("#die-selection")
const d4 = document.querySelector("#d4")
const dieImage = document.querySelector("#die-image")


function roll() {
  result.textContent = Math.floor(Math.random() * dieSelector.value) + 1;
}
rollButton.addEventListener('click', () => {
  roll();
});

dieSelector.addEventListener("change", () => {
  dieImage.src = `img/d${dieSelector.value}.png`
  roll();
  console.log(dieSelector.value);
})