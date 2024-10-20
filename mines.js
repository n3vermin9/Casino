const tiles = document.querySelector('.tiles')
const tile = document.querySelectorAll('.tile')
const playBtn = document.querySelector('.playBtn')
const bigCount = document.querySelector('.bigCount')
const bigBombCount = document.querySelector('.bigBombCount')
const mainBottom = document.querySelector('.main-bottom')
const btnPlusMines = document.querySelector('.btnPlusMines')
const btnMinusMines = document.querySelector('.btnMinusMines')


let setMineCount = 3
let coef = 0.8;

bigCount.textContent = setMineCount


playBtn.addEventListener('click', () => {
  bigBombCount.style.display = 'none';
  mainBottom.style.visibility = 'hidden';
  tile.forEach(element => {
    element.style.display = 'block';
  });
  console.log(coef)
});



btnPlusMines.addEventListener('click', () => {
  if (setMineCount < 24) {
    setMineCount++
    bigCount.textContent = setMineCount
    coef -= 0.03
    console.log(coef)
  }
})

btnMinusMines.addEventListener('click', () => {
  if (setMineCount > 3) {
    setMineCount--
    bigCount.textContent = setMineCount
    coef += 0.03
  }
})
let tileCount = 0;
let isntBomb;
let isWin = false;
let winChance = Math.random()


tile.forEach(element => {
  element.addEventListener('click', () => {
    winChance = Math.random()
    if (element.classList.contains('clicked')) return;
    console.log(tileCount)
    if (tileCount == 24 - setMineCount) {
      tile.forEach(element => {
        isWin = true;
        tile.forEach(leftElem => {
          if (!(leftElem.classList.contains('clicked'))) {
            leftElem.classList.add('thisBomb')
          }
        });
      })
    }
    if (isntBomb || tileCount >= 25 - setMineCount) {
    } else {
      if (winChance < coef && isWin == false) {
        element.classList.add('notBomb', 'clicked');
        isntBomb = false;
        tileCount++;
      } else if (winChance > coef && isWin == false) {
        element.classList.add('thisBomb', 'clicked');
        tile.forEach(leftElem => {
          if (!(leftElem.classList.contains('clicked'))) {   
            leftElem.classList.add('thisBomb', 'clicked')
          }
        });
        isntBomb = true;
      }    
    }
    element.removeEventListener('click', tileClickHandler);
    
    function tileClickHandler() {
    }
  });
});

// убрать слоты при победе, показать победное окно, вернуть кнопку play,
// убрать клики до следующего раунда