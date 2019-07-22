// var i = 0;  

// do {
//     console.log('Iteration');
// } while (++i < 5);



// var ask = +prompt('Сколько раз повторить?');

// do {
//     console.log(ask);
// } while (--ask > 0);


//var happy = true,
//    i = 0;
//do {
//    happy = confirm ('Счастлив, что число ' + ++i + '?');
//} while (happy);

// var i = 0;

// do { i++ } 
// while (confirm('Счастлив, что число ' +i + '?'));



// var i = 1;
// while (confirm('Счастлив, что число ' + ++i + '?'));

//МОЯ ПОПЫТКА = СЛУЧАЙНОЕ ЧИСЛО С ВОЗМОЖНОСТЬЮ ВЫХОДА И WHILE - ПОЛУЧИЛСЯ БЕСКОНЕЧНЫЙ ЦИКЛ
// var ask = +prompt('Угадай число от 0 до 20'),
//   number = Math.floor(Math.random() * 20),
//   wrongGuess = 0;
// while (ask !== number || confirm('Будешь угадывать ещё?')) {
//     console.log('Не угадал ' + wrongGuess + 'раз!');
//     wrongGuess++;
// }



/* var guess,
    guessNum = 0,
    rand = Math.round(Math.random() * 10);
do {
    guess = +prompt('Guess a number!');
} while (guess !== rand && confirm('Будешь угадывать ещё?')) {
    guessNum++;
};
console.log('GZ ' + guessNum); */




for (var index = 0; index < 5; index++) {
    console.log(index);
}