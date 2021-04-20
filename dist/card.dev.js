"use strict";

var add = document.querySelectorAll('.add');
var item = document.querySelector('.item-card');
var total = []; // let totalCart = document.querySelector('.total')

for (var i = 0; i < add.length; i++) {
  add[i].addEventListener('click', addTOCart);
}

function addTOCart(event) {
  var btn = event.target;
  var shop = btn.parentElement.parentElement;
  var name = shop.querySelector('.title').innerText;
  var price = shop.querySelector('.price').innerText;
  var imgSrc = shop.querySelector('.img-card').src;
  console.log(name, price, imgSrc);
  addToModal(name, price, imgSrc);
  total.push(parseFloat(price));
  console.log(calculTotal());
}

function addToModal(name, price, imgSrc) {
  item.innerHTML += "\n     <div class=\"row mt-3 \">\n     <div class=\"col-md-3\">\n       <img src=\"".concat(imgSrc, "\" class=\"img\" >\n     </div>\n     <div class=\"col-md-2\">\n       <strong>").concat(name, "</strong>\n     </div>\n     <div class=\"col-md-3\">\n       <strong>").concat(price, "</strong>\n     </div>\n     <div class=\"col-md-2\">\n       <span>1</span>\n     </div>\n     <div class=\"col-md-2\">\n     <button type=\"button\" class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i></button>\n     </div>\n   </div>\n     ");
  item.innerHTML = "\n      <h4>".concat(calculTotal(), "</h4>\n\n     ");
}

function calculTotal() {
  return total.reduce(function (a, b) {
    return a + b;
  });
}