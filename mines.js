const tiles = document.querySelector('.tiles')
const tile = document.querySelectorAll('.tile')
const playBtn = document.querySelector('.playBtn')
const bigCount = document.querySelector('.bigCount')
const bigBombCount = document.querySelector('.bigBombCount')
const mainBottom = document.querySelector('.main-bottom')
const btnPlusMines = document.querySelector('.btnPlusMines')
const btnMinusMines = document.querySelector('.btnMinusMines')
const takeBtn = document.querySelector('.takeBtn')


let setMineCount = 3
let coef = 0.8;

bigCount.textContent = setMineCount


playBtn.addEventListener('click', () => {
  bigBombCount.style.display = 'none';
  mainBottom.style.visibility = 'hidden';
  takeBtn.style.visibility = 'visible'
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
    element.style.WebkitAnimationPlayState = "running";
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
        element.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="currentColor"  class="tile-diamond"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z" /></svg>'
        isntBomb = false;
        tileCount++;
      } else if (winChance > coef && isWin == false) {
        element.classList.add('thisBomb', 'clicked');
        tile.forEach(leftElem => {
          if (!(leftElem.classList.contains('clicked'))) {   
            element.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="currentColor"  class="tile-bomb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.499 3.996a2.2 2.2 0 0 1 1.556 .645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567 .567l.043 .192a8.5 8.5 0 0 1 -3.732 8.83l-.23 .144a8.5 8.5 0 1 1 -2.687 -15.623l.192 .042l.567 -.566a2.2 2.2 0 0 1 1.362 -.636zm-4.499 5.004a4 4 0 0 0 -4 4a1 1 0 0 0 2 0a2 2 0 0 1 2 -2a1 1 0 0 0 0 -2z" /><path d="M21 2a1 1 0 0 1 .117 1.993l-.117 .007h-1c0 .83 -.302 1.629 -.846 2.25l-.154 .163l-1.293 1.293a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.293 -1.292c.232 -.232 .375 -.537 .407 -.86l.007 -.14a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" /></svg>'
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





takeBtn.addEventListener('click', ()=> {
  if (tileCount == 0) {
   return 
  }
})



//показать победное окно, вернуть кнопку play



//сделать мультиплаер ставки, меню коэфов, локалстореж