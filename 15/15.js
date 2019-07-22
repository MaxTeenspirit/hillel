var form = document.createElement("form");
var input = document.createElement("input");
var submit = input.cloneNode();
input.setAttribute("name", "myInput");
submit.setAttribute("type", "submit");
submit.value = "OK";
form.appendChild(input);
form.appendChild(submit);
form.onsubmit = function (e) {
   console.log("Submitted");
   e.preventDefault();
};
form.elements.myInput.onfocus = function () {
   console.log("Focus", this);
};
form.elements.myInput.onblur = function () {
   console.log("Blur", this);
};
wrapper.appendChild(form);

var clickHandler = function (e) {
    console.log("Bubbling", this, e.target, e.currentTarget);
};

var outer = document.createElement("div");
outer.addEventListener("click", clickHandler);
var middle = document.createElement("p");
middle.addEventListener("click", clickHandler);
var inner = document.createElement("span");
inner.addEventListener("click", clickHandler);
inner.innerHTML = "Click here";
middle.appendChild(inner);
outer.appendChild(middle);
wrapper.appendChild(outer);