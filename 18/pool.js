// function delay(ms) {
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             res([4, 164, 542, 98, 56]);
//         }, ms);
//     });
// };


// var pr = delay(1000)

// pr.then(function(value) {
//     return [].concat(value).sort();
// })

// pr.then(function(value){
//     console.log(value);
// })



// function pool (ms) {
//     return new Promise(function(res, rej){
//         setTimeout(function(){
//             res(Array(Math.round(Math.random() * 100))
//             .fill('💧' ));
//         }, ms)
//     })
// }

// var p = pool(1000)
//     .then(function(water){
//         return water.slice(0 , 10);
//     });
    
// p.then(function(water){
//     console.log(water);
// });