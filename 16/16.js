function Animal() {
    this.type = 'animal';
}

Animal.prototype.move = function() {
    console.log('Run!');
}

function Dog() {
    Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

function Cat() {
    Animal.call(this);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Rat() {
    Animal.call(this);
}

Rat.prototype = Object.create(Animal.prototype);
Rat.prototype.constructor = Rat;

function Bear() {
    Animal.call(this);
    this.subtype = 'mammal';
}

Bear.prototype = Object.create(Animal.prototype);
Bear.prototype.constructor = Bear;

var d = new Dog,
    c = new Cat,
    r = new Rat,
    b = new Bear,
    p = new Pitbull,
    o = new Ovcharka;

Animal.prototype.move = function() {
    console.log('Dig!');
}

Dog.prototype.move = function() {
    console.log('Run!');
}

Bear.prototype.move = function() {
    console.log('Run!');
}

console.log(d, c, r, b, p, o);
d.move();
c.move();
r.move();
b.move();

function Pitbull() {
    Dog.call(this);
}

Pitbull.prototype = Object.create(Animal.prototype);
Pitbull.prototype.constructor = Bear;

function Ovcharka() {
    Dog.call(this);
}

Ovcharka.prototype = Object.create(Animal.prototype);
Ovcharka.prototype.constructor = Bear;