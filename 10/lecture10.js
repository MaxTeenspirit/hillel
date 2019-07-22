/* var timerId = setTimeout(function() {
    console.log(new Date);
}, 1000)

clearTimeout(timerId); */



/* 
function task(number) {
    console.log('Task num: ' + number);
}

var i = 1;

var timer = setTimeout(function callback() {
    task(i++);
    timer = setTimeout(callback, 500);
    if(i > 10){
        clearTimeout(timer);
    }
}, 500)
 */


/* function User(id, name) {
    this.id = id;
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }    
};

User.prototype.sayHello = function(){
    console.log('Hello! I`m ' + this.name);
}

var user1 = new User(1, 'Vasya');
var user2 = new User(2, 'Petya'); */

// user1.sayHello();
// user2.sayHello();


// console.log(user1, user2);


/* String.prototype.circus = function(){
    for(var key in this){
        if(String[key] % 2 === 0) {
            String[key].toUpperCase;
        }
        return this;
    }
}
console.log('asfsdgasd'.circus()); */


String.prototype.circus = function(){
    for(var key in this){
        String[key].toUpperCase();
    }
}
console.log('asfsdgasd'.circus());