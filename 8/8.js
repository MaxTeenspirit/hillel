// Разбор ДЗ 7 занятия

var str = 'abcdefghijklmnopqrstuvwxyz';
var elCount = +prompt('Сколько слов вывести?'), 
min = +prompt('Минимальное количество символов в одном слове'), 
max = +prompt('Максимальное количество символов в одном слове');

var words = [], 
normWords = {};

for (var index = elCount; index > 0; index--) {
    var newWord = '';
    var letterCount = Math.round(Math.random() * (max - min) + min);
    for (var letterIteration = letterCount; letterIteration > 0; letterIteration--) {
        var letterIndex = Math.round(Math.random() * (str.length -1));
        newWord += str[letterIndex];
    }
    words.push(newWord);
    console.log(newWord);
}
for (var index = 0; index < words.length; index++) {
    var element = words[index];
    normWords[element.length] = normWords[element.length] ?
    normWords[element.length].concat([element]) :
    [element];
}

console.log(normWords);


// Занятие 8 функции

/* function roar(lettersCount) {
    lettersCount = lettersCount || 0;
    console.log('Fake log!', lettersCount);
}

roar(8);
roar();
roar(2);
roar(); */

// Угадывание числа
/* var guess,
    guessNum = 0,
    rand = Math.round(Math.random() * 10);
do {
    guess = +prompt('Угадай число от 1 до 10!');
    guessNum++;
} while (guess !== rand && confirm('Ещё попытка?'));
console.log('Количество попыток: ' + guessNum);

 */
// console.log(a);
// function a() {

// }
// var a;
// console.log(b);
// var b = function(){};