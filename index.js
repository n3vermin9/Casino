const balance1 = document.querySelector('.balance1');

window.addEventListener('storage', event => {
  balance1.innerText = localStorage.getItem('balance');
});


function init() {
  let balanceValue;
  if (localStorage.getItem('balance') == NaN || localStorage.getItem('balance') == null) {
    localStorage.setItem('balance', '0');
  }
  const localStorageKey = 'balance'; // Ключ для хранения значения в localStorage

  if (typeof(Storage) !== "undefined") {
    balanceValue = localStorage.getItem(localStorageKey);
    balance1.innerText += balanceValue; // Вставляем значение в innerText элемента
  } else {
    console.error("Local Storage не поддерживается");
  }
}
console.log(localStorage.getItem('balance'));