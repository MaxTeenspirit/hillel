var l = document.getElementById('list'),
    elements = document.getElementsByClassName('element');

setTimeout(function() {
    var newText = l.firstElementChild.innerText = 'NEW TEXT!';
    console.log(newText);
}, 2000);

console.log(l.children[0].nextElementSibling.innerText = '!@#$%&');

var els = document.querySelectorAll('#list .element');
console.log(els);
