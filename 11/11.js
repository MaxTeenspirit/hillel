/* function MyConstructor() {

}

MyConstructor.prototype.method = function () {
    console.log('Method');
}

var mc = new MyConstructor();
console.log(mc);
mc.method(); */

//>>>>>>>>>ДЗ 10>>>>>>>>>>>>
function MilitaryResource(type, health, distance) {
    console.log('Create', type, this);
    this.type = type;
    this.health = health;
    this.maxHealth = health;
    this.distance = 0;
    this.maxDistance = distance;
 }

 MilitaryResource.prototype.isReadyToMove = function() {
    return this.maxDistance > this.distance;
 }

 MilitaryResource.prototype.isReadyToFight = function() {
     return this.health > this.maxHealth * .1;
 }

 MilitaryResource.prototype.restore = function() {
     return this.health = this.maxHealth;
 }

 MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.maxHealth, this.maxDistance);
}

 var resources = [
     new MilitaryResource('land', 200, 300),
     new MilitaryResource('air', 300, 5000),
     new MilitaryResource('water', 400, 1000)
 ];

 function Squad(resources) {
     this.resources = resources && resources.length ? resources : [];
 }

 Squad.prototype.isReadyToMove = function() {
     return this.resources.every(function(resource) {
         return resource.isReadyToMove();
     })
 }

 Squad.prototype.clone = function() {
     return new Squad(this.resources.map(function(resource) {
         return resource.clone();
     }));
 }

 //>>>>>>>>>>>>>>

 function Card(title, image) {
    this.title = title;
    this.image = image;
 }

 var cards = info.map(function(d) {
     
 })