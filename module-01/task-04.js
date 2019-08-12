"use strict";

let credits = 23580;

const pricePerDroid = 3000;

const quantityDroid = prompt('Какое количество дроидов желаете преобрести? Цена одного дроида 3000 кредитов');

let totalPrice;
let message = undefined;

console.log(quantityDroid);

if (quantityDroid === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else { totalPrice = quantityDroid * pricePerDroid;
    if (totalPrice > credits) {
        alert(` Общая сумма Вашего заказа составила ${totalPrice} кредитов. Но на Вашем счету недостаточно средств!`);
    } else {

        alert(` Вы купили ${quantityDroid} дроидов, на счету у Вас осталось  ${credits - totalPrice} кредитов.`);
    }
}


