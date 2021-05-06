function strict() {
 'use strict';
 }
// let number = 5;
// const leftBorderWith = 1;

// number = 10;
// console.log(number);

// const persone = "Misha";
// const bool = false; 

// //console.log(something);

// let und;
// console.log(und);

// const obj = {
//   name: "Misha",
//   age: "32",
//   isMarried: "false"
// };
// console.log(obj.name);

// let arr = ["plum.png", "orange.jpeg", "apple.bmp", 6, {}, [] ];

// alert('Hello!'); // окно уведомления

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// const user = "Ivan";
// alert(`Привет, ${user}`);


// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

//console.log(incr++); постфиксный оператор увеличения на один
//в данном случае выводит на консоль значение и только потом  увеличивает на 1

//console.log(--decr);
// префиксный оператор уменьшения на 1, сначала уменьшает, потом выводит
// результат на консоль


// const isChecked = true,   
//       isClose   = true;

//console.log(isChecked && isClose);   // оператор И, возвращает тру, только 
// если все переменные тру, их может быть 2 и больше
// const isChecked1 = true,
//       isClose1   = false,
//       isClose2   = false;

// console.log(isChecked1 || isClose1 || isClose2);
//  оператор ИЛИ, который возвращает тру, если хотя бы одна из переменных тру

//console.log(!isChecked1 || isClose1);
// оператор отрицания ! меняет значение переменной на противоположное

// порядок выполнение операторов
//console.log(2 + 2 * 2 !== '8');
// см таблицу операторов
// = оператор присвоения
// == оператор сравнения по типу данных, например число или строка
// === сравнение и по типу и по значению
// != не равен по значению
// !== не равен по типу данных, если да, то возвращает тру 


// .......ПЕРВОЕ ДОМАШНЕЕ ЗАДАНИЕ, ОПРОС ПО ФИЛЬМАМ

// const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");

// const personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actours: {},
// genres: [],
// privat: false

// };
// const lastFilm = prompt("Какой последний фильм Вы смотрели?", ""), 
//       lastFilmRate = prompt("На сколько оцените его?", ""),
//       lastFilm1 = prompt("Какой последний фильм Вы смотрели?", ""), 
//       lastFilmRate1 = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[lastFilm] = lastFilmRate;
// personalMovieDB.movies[lastFilm1] = lastFilmRate1;

// console.log(personalMovieDB);

// ..............................УСЛОВИЯ
// IF
// if (4 == 9) {
//       console.log('ok!');
// } else {
//       console.log('error');
// }

// const num = 50;

// if (num < 49) {
//       console.log('error');
// } else if (num > 100) {
//       console.log('too much!');
// } else {
//       console.log('ok');
// }

//............. Тринарный оператор (содержат 3 элемента)
// (num === 50) ? console.log('right') : console.log('wrong'); 

// ..............SWITCH (ПРОВЕРКА НА СТРОГОЕ СООТВЕТСТВИЕ)
// const num = 50;
// switch (num) {
//       case 49:
//             console.log('wrong');
//             break;
//       case 100:
//             console.log('wrong');
//             break;
//       case 50:
//             console.log('right');
//             break;
//       default:
//             console.log('not this time');
//             break;
// }

// .........................ЦИКЛЫ

// ...........WHILE
//let num = 50;
// while (num <= 55) {
//       console.log(num);
//       num++;
// }

//............DO
// do {
//       console.log(num);
//       num++;
// } while (num <=55);

//............FOR
// for (let i = 1; i < 8; i++) {
//      if (i===6) {
//        //    break;
//        continue;
//      }  
//      console.log(i);  
// }

// ВТОРОЕ ДОМАШНЕЕ ЗАДАНИЕ С ЦИКЛАМИ И УСЛОВИЯМИ


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actours: {},
genres: [],
privat: false

};

var a;
var b;

for (let i = 0; i < 2; i++) {
    
    do {
    a = prompt ("какой последний фильм вы смотрели?", "");
    } while (a == null || a.length < 1 || a.length > 50);
    
   
    
    do {
    b = prompt ("на сколько вы оцените его?", "");
    } while (b == null || b.length < 1 || b.length > 50);
    
    personalMovieDB.movies[a] = b;
    }

if (+personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");

} else if (+personalMovieDB.count <=30) {
    console.log("Вы классический зритель");

} else if (+personalMovieDB.count > 30) {
    console.log("Вы киноман");

} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
















