// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// const car = {
//     manufacturer: 'Mercedes-benz',
//     model: 'GLE',
//     year: 2020,
//     averageSpeed: 40
// }


// Функция для вывода на экран информации об автомобиле;

// function displayInfo(obj) {
//     for (let key in obj) {
//         console.log(`${key} - ${obj[key]}`);
//     }
// }

// displayInfo(car)

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// function getTravelTime(obj, distance) {

//     let time = (distance / obj.averageSpeed);
//     let restTime = Math.floor(time / 4);

//     return `${time + restTime} hours`;
// }

// console.log(getTravelTime(car, 159));


// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// const fraction1 = {
//     numerator: 1,
//     denominator: 2
// }

// const fraction2 = {
//     numerator: 3,
//     denominator: 4
// }
// Функция сложения 2-х объектов-дробей;

// function addition(obj1, obj2) {
//     let numerator;
//     let denominator;

//     if (obj1.denominator === obj2.denominator) {
//         numerator = obj1.numerator + obj2.numerator;
//         denominator = obj1.denominator;
//     } else {
//         numerator = (obj1.numerator * obj2.denominator) + (obj2.numerator * obj1.denominator);
//         denominator = obj1.denominator * obj2.denominator;
//     }

//     return `${numerator}/${denominator}`;
// }
// console.log(addition(fraction1, fraction2))

// Функция вычитания 2-х объектов-дробей;

// function subtraction(obj1, obj2) {
//     let numerator;
//     let denominator;

//     if (obj1.denominator === obj2.denominator) {
//         numerator = obj1.numerator - obj2.numerator;
//         denominator = obj1.denominator;
//     } else {
//         numerator = (obj1.numerator * obj2.denominator) - (obj2.numerator * obj1.denominator);
//         denominator = obj1.denominator * obj2.denominator;
//     }

//     return `${numerator}/${denominator}`;
// }
// console.log(subtraction(fraction1, fraction2))

// Функция умножения 2-х объектов-дробей;

// function multiplication(obj1, obj2) {
//     let numerator;
//     let denominator;

//     numerator = obj1.numerator * obj2.numerator;
//     denominator = obj1.denominator * obj2.denominator;

//     return `${numerator}/${denominator}`;
// }
// console.log(multiplication(fraction1, fraction2))

// Функция деления 2-х объектов-дробей;

// function division(obj1, obj2) {
//     let numerator;
//     let denominator;

//     numerator = obj1.numerator * obj2.denominator;
//     denominator = obj1.denominator * obj2.numerator;

//     return `${numerator}/${denominator}`;
// }
// console.log(division(fraction1, fraction2))


// Функция сокращения объекта-дроби.

// function getMaxDivider(a, b) {
//     const min = a < b ? a : b;
//     let reducer = 1;
//     let i = 2;

//     while (i <= min) {
//         if (!(a % i) && !(b % i)) {
//             reducer = i;
//         }
//         i++;
//     }
//     return reducer;
// }

// function reducing(obj) {
//     let numerator = obj.numerator;
//     let denominator = obj.denominator;
//     let reducer = getMaxDivider(numerator, denominator)

//     return `${numerator / reducer}/${denominator / reducer}`;
// }
// console.log(reducing(fraction1))



// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

const time = {
    hours: 5,
    minutes: 40,
    seconds: 30
}

// Функция вывода времени на экран;

// function displayTime(obj) {
//     console.log(`${obj.hours}:${obj.minutes}:${obj.seconds}`);
// }
// displayTime(time)

// Функция изменения времени на переданное количество секунд;

// function changeSeconds(obj, changeSeconds) {
//     let newMinutes = obj.minutes;
//     let newSeconds = obj.seconds + changeSeconds;

//     if (newSeconds >= 60) {
//         newMinutes += Math.floor(newSeconds / 60);
//         newSeconds %= 60;
//     }

    // if (newSeconds < 10) {
    //     return `${obj.hours}:${newMinutes}:0${newSeconds}`;
    // }

//     return `${obj.hours}:${newMinutes}:${newSeconds}`;
// }
// console.log(changeSeconds(time, 20))

// Функция изменения времени на переданное количество минут;

// function changeMinutes(obj, changeMinutes) {
//     let newHours = obj.hours;
//     let newMinutes = obj.minutes + changeMinutes;

//     if (newMinutes >= 60) {
//         newHours += Math.floor(newMinutes / 60);
//         newMinutes %= 60;
//     }

// if (newMinutes < 10) {
//     return `${newHours}:0${newMinutes}:${obj.seconds}`;
// }
//     return `${newHours}:${newMinutes}:${obj.seconds}`;
// }
// console.log(changeMinutes(time, 21))

// Функция изменения времени на переданное количество часов.

// function changeHours(obj, changeHours) {
//     let newHours = obj.hours + changeHours;

//     if (newHours >= 24) {
//         newHours %= 24;
//     }

//     if (newHours < 10) {
//         return `0${newHours}:${obj.minutes}:${obj.seconds}`;
//     }

//     return `${newHours}:${obj.minutes}:${obj.seconds}`;
// }
// console.log(changeHours(time, 19))

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

