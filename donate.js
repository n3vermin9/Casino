const hundred = document.querySelector('.hundred')
const fiveHundred = document.querySelector('.fiveHundred')
const thousand = document.querySelector('.thousand')
const balance = document.querySelector('.balance')
const balance1 = document.querySelector('.balance1')
const back = document.querySelector('.back')


let balik = parseInt(balance.innerText)

function addToBalance(value) {
  balik+=value;
  let currentBalance = localStorage.getItem('balance');
  let newBalance = parseFloat(currentBalance) + value;
  localStorage.setItem('balance', newBalance);
  balance.innerText = newBalance
}

hundred.addEventListener('click', () => {
  addToBalance(100)
})

fiveHundred.addEventListener('click', () => {
  addToBalance(500)
})

thousand.addEventListener('click', () => {
  addToBalance(1000)
})

window.addEventListener('storage', event => {
  balance.innerText = localStorage.getItem('balance')
})

function init() {
  const localStorageKey = 'balance'; // Ключ для хранения значения в localStorage
  let balanceValue;

  if (typeof(Storage) !== "undefined") {
      balanceValue = localStorage.getItem(localStorageKey);
      balance.innerHTML += balanceValue; // Вставляем значение в innerText элемента
  } else {
      console.error("Local Storage не поддерживается");
  }
}