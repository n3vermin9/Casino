const tiles = document.querySelector('.tiles')
const tile = document.querySelectorAll('.tile')
const playBtn = document.querySelector('.playBtn')
const bigCount = document.querySelector('.bigCount')
const bigBombCount = document.querySelector('.bigBombCount')
const mainBottom = document.querySelector('.main-bottom')
const btnPlusMines = document.querySelector('.btnPlusMines')
const btnMinusMines = document.querySelector('.btnMinusMines')


let setMineCount = 3

bigCount.textContent = setMineCount


playBtn.addEventListener('click', () => {
  bigBombCount.style.display = 'none';
  mainBottom.style.visibility = 'hidden';
  tile.forEach(element => {
    element.style.display = 'block';
  });
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
let tileCount = 0;
let isntBomb;
let isWin = false;

tile.forEach(element => {
  element.addEventListener('click', () => {
    if (element.classList.contains('clicked')) return;
    if (tileCount == 24 - setMineCount) {
      tile.forEach(element => {
        element.classList.remove('notBomb');
        element.classList.remove('clicked');
        element.classList.remove('thisBomb');
        isWin = true;
      })
    }
    if (isntBomb || tileCount >= 25 - setMineCount) {
    } else {
      if (Math.random() <= 1 && isWin == false) {
        element.classList.add('notBomb');
        element.classList.add('clicked');
        isntBomb = false;
        tileCount++;
        console.log(tileCount);
      } else if (Math.random() >= 1 && isWin == false) {
        element.classList.add('thisBomb');
        element.classList.add('clicked');
        isntBomb = true;
      }    
    }
    element.removeEventListener('click', tileClickHandler);
    
    function tileClickHandler() {
    }
  });
});