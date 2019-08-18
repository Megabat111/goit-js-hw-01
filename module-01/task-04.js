"use strict";

let credits = 23580;

const pricePerDroid = 3000;

const quantityDroid = prompt('Какое количество дроидов желаете преобрести? Цена одного дроида 3000 кредитов');

let totalPrice;
let message = undefined;

console.log(quantityDroid);

if (quantityDroid === null) {
    message = 'Отменено пользователем!';
    
} else { totalPrice = quantityDroid * pricePerDroid;
    if (totalPrice > credits) {
        message = ` Общая сумма Вашего заказа составила ${totalPrice} кредитов. Но на Вашем счету недостаточно средств!`;
    } else {

        message = ` Вы купили ${quantityDroid} дроидов, на счету у Вас осталось  ${credits - totalPrice} кредитов.`;
    }
}

alert(message);
