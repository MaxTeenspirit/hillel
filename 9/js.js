// var f = +prompt('1'),
//     s = +prompt('2'),
//     t = +prompt('3');

// var number = function(first, second, third) {
//     var result = (first + second + third) / 3;
//     return console.log(result);
// }

// number(f, s, t);



/* function avarage(a, b, c) {
    return (a+b+c) / 3
}

// квадрат
function pow(a) {
    return Math.pow(a, 2);
}

function sqrt(a) {
    return Math.sqrt(a);
}

function manipulate (number, operation) {
    return operation(number);
}

console.log(manipulate(2, sqrt)); */



// arr.forEach(function () {
//     console.log('Tick!');
// });




//>>>>>>>>FOR EACH!!!>>>>>>>>>>

// var arr = [1, 2, 3, 4];

// var callback = function (el) {
//     console.log('Tick!', el);
// }

// arr.forEach(callback);

// function forEach(arr, callback) {
//     for (let index = 0; index < arr.length; index++) {
//         callback(arr[index], index, arr)
//     }
// }

// var result = forEach(arr, function(el) {console.log(el)});
// console.log(result);


//>>>>>>MAP!!!>>>>>>>>>>


// var newArr = arr.map(function(value) {
//     return value;
// })


// function map(arr, callback) {
//     var newArr = [];
//     for (var index = 0; index < arr.length; index++) {
//         var result = callback(arr[index], index, arr);
//         newArr[index] = result;
//     }
//     return newArr;
// }

// console.log(map(arr, function(el){
//     return el;
// }));



//>>>>>>>>>>FILTER!!!>>>>>>>>>>>>

// var res = arr.filter(function(el, index) {
//     return index > 1;
// })
// console.log(res);

// function filter(arr, callback){
//     var freshArr = [];
//     for (var index = 0; index < arr.length; index++) {
//         var resu = callback(arr[index], index, arr);
//         if (resu) {
//             freshArr.push(arr[index]);
//         }
//     }
//     return freshArr;
// }

// console.log(filter(arr, function(el){
//     return el > 3;
// }))


//>>>>>>>>>>> ДЗ >>>>>>>>>>>>>

//>>>>>>>>>>> EVERY >>>>>>>>>>

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function every(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        var result = callback(array[index], index, array);
        if (result) {
            result;
        }
        return result;
    }
}

console.log('Every ' + every(array, function(el){
    return el < 10;
}));


//>>>>>>>>>>>> SOME >>>>>>>>>>>

function some(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        var result = callback(array[index], index, array);
        if (result === true || result === false) {
            result;
        }
        return result;
    }
}

console.log('Some ' + some(array, function(element){
    return element < 10;
}));


//>>>>>>>>> REDUCE >>>>>>>>

var reduce = function(arr, callback, startValue) {
    var result = startValue;
    for (var index = 0; index < array.length; index++) {
      result = callback.call(null, result, array[index], index, array);
    }
    return result;
  };

console.log('Reduce ' + reduce(array, function(sum, element){
    return sum + element;
}, 0));