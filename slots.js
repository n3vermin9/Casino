const slotsBalance = document.querySelector('.slotsBalance')
const playBtn = document.querySelector('.playBtn')
const mainInput = document.querySelector('.mainInput')

const slot1 = document.querySelector('.slot1')
const slot2 = document.querySelector('.slot2')
const slot3 = document.querySelector('.slot3')

const slotPast1 = document.querySelector('.slotPast1')
const slotPast2 = document.querySelector('.slotPast2')
const slotPast3 = document.querySelector('.slotPast3')

const slotFuture1 = document.querySelector('.slotFuture1')
const slotFuture2 = document.querySelector('.slotFuture2')
const slotFuture3 = document.querySelector('.slotFuture3')

const btnPlus = document.querySelector('.btnPlus')
const btnMinus = document.querySelector('.btnMinus')

const betLog = document.querySelector('.betLog')


let emojis = ['💣','💎','🍋','🍎','🍒', '7️⃣']
let lessEmojis = ['💣','💎','🍋','🍒', '7️⃣']

function fillSlotsWithEmojis() {
  const slots = [
    { selector: '.slotPast1', lessEmojiList: lessEmojis },
    { selector: '.slotPast2', lessEmojiList: lessEmojis },
    { selector: '.slotPast3', lessEmojiList: lessEmojis },
    { selector: '.slotFuture1', lessEmojiList: lessEmojis },
    { selector: '.slotFuture2', lessEmojiList: lessEmojis },
    { selector: '.slotFuture3', lessEmojiList: lessEmojis }
  ];

  slots.forEach(slot => {
    const randomEmoji = slot.lessEmojiList[Math.floor(Math.random() * slot.lessEmojiList.length)];
    document.querySelector(slot.selector).innerText = randomEmoji;
  });
}

fillSlotsWithEmojis();

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

window.addEventListener('storage', event => {
  slotsBalance.innerText = localStorage.getItem('balance')
})

let balanceValue;
function init() {
  const localStorageKey = 'balance'; // Ключ для хранения значения в localStorage

  if (typeof(Storage) !== "undefined") {
      balanceValue = localStorage.getItem(localStorageKey);
      slotsBalance.innerHTML += balanceValue; // Вставляем значение в innerText элемента
  } else {
      console.error("Local Storage не поддерживается");
  }
}

let counter = 0;

mainInput.addEventListener('input', (event) => {
  const key = event.key;
  if (!/^\d+$/.test(key)) {
    event.preventDefault();
  }
});

let inputBet = 0

btnPlus.addEventListener('click', () => {
if (inputBet != localStorage.getItem('balance')) {
  inputBet += 50;
  mainInput.innerText = inputBet;
  mainInput.innerText = '$' + mainInput.innerText;
}
  if (mainInput.innerText != '$000') {
    mainInput.style.color = 'black';
  }
})

btnMinus.addEventListener('click', () => {
  if (inputBet > 0) {
    inputBet -= 50;
    mainInput.innerText = inputBet;
    mainInput.innerText = '$' + mainInput.innerText;
  }
  if (inputBet === 0) {
    mainInput.innerText = '$000'
  }
  if (mainInput.innerText == '$000') {
    mainInput.style.color = '#00000060';
  }
})

playBtn.addEventListener('click', () => {
if (mainInput.innerText != '$000' && localStorage.getItem('balance') > 0 && localStorage.getItem('balance') >= inputBet) {
    playBtn.style.visibility = 'hidden';
    btnPlus.style.visibility = 'hidden';
    btnMinus.style.visibility = 'hidden';
    betLog.innerText = `- $${inputBet}`;
    betLog.style.color = 'red';
    const intervalId1 = setInterval(() => {
      let noRepeat = slot1.innerText;
      counter++
      if (counter >= 23 && slot1.innerText === noRepeat) {
        clearInterval(intervalId1);
        slot1.innerText = getRandomEmoji();
      } else {
        let slot1Emojis = [];
        if (slot1.innerText !== '') {
          slot1Emojis.push(slot1.innerText);
        }
        let newEmoji = getRandomEmoji();
        while (slot1Emojis.includes(newEmoji)) {
          newEmoji = getRandomEmoji();
        }
        slot1.innerText = newEmoji;
      }
    }, 100);
    
    const intervalId2 = setInterval(() => {
      let noRepeat = slot2.innerText;
      counter++
      if (counter >= 41 && slot2.innerText === noRepeat) {
        clearInterval(intervalId2);
        slot2.innerText = getRandomEmoji();
      } else {
        let slot2Emojis = [];
        if (slot2.innerText !== '') {
          slot2Emojis.push(slot2.innerText);
        }
        let newEmoji = getRandomEmoji();
        while (slot2Emojis.includes(newEmoji)) {
          newEmoji = getRandomEmoji();
        }
        slot2.innerText = newEmoji;
      }
    }, 100);
  
    const intervalId3 = setInterval(() => {
      let noRepeat = slot3.innerText;
      counter++
      if (counter >= 53 && slot3.innerText === noRepeat) {
        clearInterval(intervalId3);
        slot3.innerText = getRandomEmoji();
      } else {
        let slot3Emojis = [];
        if (slot3.innerText !== '') {
          slot3Emojis.push(slot3.innerText);
        }
        let newEmoji = getRandomEmoji();
        while (slot3Emojis.includes(newEmoji)) {
          newEmoji = getRandomEmoji();
        }
        slot3.innerText = newEmoji;
      }
      if (counter >= 53) {
        playBtn.style.visibility = 'visible';
        btnMinus.style.visibility = 'visible';
        btnPlus.style.visibility = 'visible';
        // console.log(`1 ${slot1.innerText} 2 ${slot2.innerText} 3 ${slot3.innerText}`,)
        if (slot1.innerText === slot2.innerText && slot2.innerText === slot3.innerText){
          let balanceRes = balanceValue += inputBet * 10
          betLog.innerText = `+ $${inputBet * 10}`;
          betLog.style.color = 'green';
          localStorage.setItem('balance', `${balanceRes}`)
          slotsBalance.innerText = localStorage.getItem('balance')
        }
      }
    }, 100);
    counter = 0;

    if (inputBet > 0) {
      let balanceRes = balanceValue -= inputBet
      localStorage.setItem('balance', `${balanceRes}`)
      slotsBalance.innerText = localStorage.getItem('balance')
    }

    
  } else {
    playBtn.style.backgroundColor ='red';
    setTimeout(() => {
      playBtn.style.backgroundColor ='#08C2FF';
    }, 100);
  }
})