const tiles = document.querySelector('.tiles')
const tile = document.querySelectorAll('.tile')
const playBtn = document.querySelector('.playBtn')
const bigCount = document.querySelector('.bigCount')
const bigBombCount = document.querySelector('.bigBombCount')
const mainBottom = document.querySelector('.main-bottom')
const btnPlusMines = document.querySelector('.btnPlusMines')
const btnMinusMines = document.querySelector('.btnMinusMines')


let setMineCount = 3
let chances = []

bigCount.textContent = setMineCount


// Add the makeMines function
function makeMines() {
  for (let i = 1; i <= 25; i++) { // Change the loop condition to <= 25
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.id = `$tile${i}`;
    tiles.appendChild(tile);
  }
}


// Add the event listener to the playBtn
playBtn.addEventListener('click', () => {
  bigBombCount.style.display = 'none';
  mainBottom.style.visibility = 'hidden';
  for (let i = 0; i < 25; i++) {
    if (chances.length < 25 - setMineCount) {
      chances.push(0);
    } else {
      chances.push(1111);
    }
  }
  chances.sort((a, b) => 0.5 - Math.random());
  tile.forEach(element => {
    element.style.display = 'block';
  });
  console.log(chances);
});



btnPlusMines.addEventListener('click', () => {
  if (setMineCount < 24) {
    setMineCount++
    bigCount.textContent = setMineCount
  }
})

btnMinusMines.addEventListener('click', () => {
  if (setMineCount > 3) {
    setMineCount--
    bigCount.textContent = setMineCount
  }
})

tile.forEach(element => {
  element.addEventListener('click', () => {
    if (element.classList.contains('clicked')) return;
    if (chances[0] == 1111) {
      element.classList.add('ThisBomb');
      chances.splice(chances[0], 1);
    } else {
      element.classList.add('notBomb');
      chances.splice(chances[0], 1);
    }
    console.log(chances);
    
    chances.sort((a, b) => 0.5 - Math.random());
    console.log(chances);
    element.removeEventListener('click', tileClickHandler);
    
    function tileClickHandler() {
    }
  });
});