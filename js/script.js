"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);
//  замыкание функции - сама функция + все доступные ей
// внешние variables (переменные)

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 7));

// еще одно свойство RETURN это вывод значений
// переменной наружу например:

function ret() {
    let num = 300;

    // какой-то код

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ - FUNCTION EXPRESSION

const logger = function() {
    console.log("Hello!");
};

logger();

// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

const str = "test";

// console.log(str[2]);

// МЕТОДЫ
// например метод изменения регистра. Все методы записываются с круглыми скобками
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

