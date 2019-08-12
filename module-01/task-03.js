"use strict";

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

const password = prompt('Авторизация. Введите пароль');
console.log(password);

if (password === null) {
    message = 'Отменено пользователем!';
} else {
    if (ADMIN_PASSWORD === password) {
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';    
    }
}

alert(message);
