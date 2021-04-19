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

//                      ОПЕРАТОРЫ
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


const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actours: {},
genres: [],
privat: false

};
const lastFilm = prompt("Какой последний фильм Вы смотрели?", ""), 
      lastFilmRate = prompt("На сколько оцените его?", ""),
      lastFilm1 = prompt("Какой последний фильм Вы смотрели?", ""), 
      lastFilmRate1 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = lastFilmRate;
personalMovieDB.movies[lastFilm1] = lastFilmRate1;


console.log(personalMovieDB);




