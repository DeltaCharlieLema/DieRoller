const result = document.querySelector('#result');
const rollButton = document.querySelector('#roll-button');
const dieSelector = document.querySelector("#die-selection")
const d4 = document.querySelector("#d4")
const dieImage = document.querySelector("#die-image")
const rollList = document.querySelector("#roll-list")


let rollHistory = []; //used to hold the results of each roll
let rollID = 1; //Used to generate unique IDs for each roll
const date = new Date();

console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

function updateRollHistoryEle(i) {
  rollList.innerHTML +=`<li  class="roll-list-item" onclick="copyToClipboard('#rollresult-${rollID}')"><span id="rollresult-${rollID}">D${i.die} : ${i.roll}</span>  <span class="time">Time: ${getCurrentTime()}</span></li>`
    rollID++;
}
function getCurrentTime(){
   return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}

function roll() {
  let roll = Math.floor(Math.random() * dieSelector.value) + 1;
  let die = "D" + dieSelector.value;
  console.log(die)
  let current = {die:dieSelector.value, roll:roll}
  result.textContent = String(roll);
  rollHistory.push(current);
  updateRollHistoryEle(current);
}
rollButton.addEventListener('click', () => {
  roll();
});

dieSelector.addEventListener("change", () => {
  dieImage.src = `img/d${dieSelector.value}.png`
  roll();
  console.log(dieSelector.value);
})

function copyToClipboard(el) {
    let copyText = document.querySelector(el).textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        //Fix (add some indication of copy taking place)
        // document.querySelector(".popup").style.display = "flex";
        // document.querySelector(".popup").style.visibility = "visible";
        // setTimeout(() => {
        //     document.querySelector(".popup").style.display = "none";
        //     document.querySelector(".popup").style.visibility = "hidden";
        // }, 2000);
        // document.querySelector(".popup").textContent = `${copyText} copied to clipboard!`;

    });
}