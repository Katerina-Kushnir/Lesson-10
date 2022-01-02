//task 1
/*
let obj = {};
alert(isEmpty(obj));
obj = {
    name: "Katya"
};
alert(isEmpty(obj));

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
*/

//task 2
/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let size = {
    chest: 85,
    waist: 60,
    hip: 90,
    title: 'size'
}

multiplyNumeric(size);
*/

//task 3
/*
function readNumber() {
    let number;

    do {
        number = prompt("Введите любое число");
    } while (!isFinite(number));

    if (number === null || number === '') {
        return null;
    } else {
        return +number;
    }
}

alert(`Вы ввели число: ${readNumber()}`);
*/

//task 4
/*
function random (min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
*/

//task 5
/*
function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
*/

//task 6
/*
function  ucFirst(str) {
    alert(str[0].toUpperCase() + str.slice(1));
}
ucFirst("вася");
*/

//task 7
/*
function  checkSpam(str) {
    let lowerStr = str.toLowerCase();
    alert(lowerStr.includes('viagra') || lowerStr.includes('xxx'));
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
*/

//task 8
/*
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return (str.slice(0, maxlength - 1) + '...');
    } else {
        return(str);
    }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));
*/

//task 9
/*
function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert(extractCurrencyValue('$120') === 120); 
*/

//task 10
/*
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите значениe...");
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());
*/

//task 12
/*
function checkAge(age) { 

    if (age > 18) {     
        return true;   
    } else {          
        return confirm('Родители разрешили?');   
    } 
} //else не обязателен, если его убрать, то функция будет работать так же
*/

//task 13
/*
function checkAge(age) {   
    if (age > 18) {     
        return true;   
    } else {     
        return confirm('Родители разрешили?');   
    } 
} 

function checkAge(age) {   
    return (age > 18) ? true : confirm('Родители разрешили?');   
} 

function checkAge(age) {   
    return (age > 18) || confirm('Родители разрешили?');   
}
*/

//task 14
/*
function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));
*/

//task 15
/*
function pow(x, n) {
    let rezult = x;

    for (let i = 1; i< n; i++) {
        rezult *= x;
    }

    return rezult;
}

let x = prompt("Введите число");
let n = prompt("Введить в какую степень возвести данное число");

if (n >= 1) {
    alert(pow(x, n));
} else {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}
*/

//task16
/*
function ask(question, yes, no) {   
    if (confirm(question)) yes()   
    else no(); 
}
ask(   
    "Вы согласны?",   
    () => alert("Вы согласились."),   
    () => alert("Вы отменили выполнение.") 
);
*/

//task 17
/*
function buyPalm() {
    let day;
    return day = Math.ceil((8000 / (3333 - 1750) * 30));
}
alert(`Через ${buyPalm()} дня вы насобираете на пальму`);
*/

//task 18
/*
function calc() {
    let sum = 0;
    for(let i = 0; i < 10; i++) {
        let number = +prompt("Введите любое число");
        if (number < 0) {
            sum += number;
        } else {
            sum = sum;
        }
    }
    alert(sum);
}
calc();
*/

//task 19
/*
let fruits = ["Яблоки", "Груша", "Апельсин"]; 
let shoppingCart = fruits; 
shoppingCart.push("Банан"); // ["Яблоки", "Груша", "Апельсин", "Банан"]
alert(fruits.length); // 4
*/

//task 20
/*
let styles = ['Джаз', 'Блюз'];
alert(styles);

styles.push('Рок-н-ролл');
alert(styles);

styles[1] = 'Классика';
alert(styles);

styles.shift();
alert(styles);

styles.unshift('Рэп', 'Регги');
alert(styles);
*/

//task 21
/*
let arr = ["a", "b"]; 
arr.push(function() {   
    alert( this ); 
}) 
arr[2](); // В конец массива добавляется элемент - функция. При вызове второго по индексу элемента массива будет возвращаться "a", "b", function
*/