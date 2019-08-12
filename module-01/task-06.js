'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите любое число...');
  let inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз')
  } else {
    total += inputNumber;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);