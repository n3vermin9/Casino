const balance1 = document.querySelector('.balance1');

window.addEventListener('storage', event => {
  balance1.innerText = localStorage.getItem('balance');
});

let balanceValue;
function init() {
  if (!localStorage.getItem('balance')) {
    localStorage.setItem('balance', '500');
  }
  const localStorageKey = 'balance'; // Ключ для хранения значения в localStorage
  let balanceValue;

  if (typeof(Storage) !== "undefined") {
    balanceValue = localStorage.getItem(localStorageKey);
    balance1.innerText += balanceValue; // Вставляем значение в innerText элемента
  } else {
    console.error("Local Storage не поддерживается");
  }
}
console.log(localStorage.getItem('balance'));