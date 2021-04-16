




let carts = document.querySelectorAll(".add-to");


let products = [
{
name : "Louis vuitton",
tag : "slv.jpg",
price : 319.99,
inCart : 0    
},

{
    name : "Lv Jacket",
    tag : "slv.jpg",
    price : 724.99,
    inCart : 0    
},
{
    name : "Lv Bag",
    tag : "kacbag.jpgh",
    price : 399.99,
    inCart : 0    
},
{
    name : "Swaggy Lv",
    tag : "vl.jpg",
    price : 929.86,
    inCart : 0    
}
    
];
for(let i=0;i < carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartNumb(products[i]);
        totalCoast(products[i]);
    })
}

function loadnomb(){
    let productNumber = localStorage.getItem('cartNumb');

if(productNumber){
    document.getElementById('spana').textContent = productNumber ;

}
}


function cartNumb(product){

console.log(product);
    let productNumber = localStorage.getItem('cartNumb');
    productNumber = parseInt(productNumber);
    if(productNumber){
        localStorage.setItem('cartNumb', productNumber + 1);
        document.getElementById('spana').textContent = productNumber + 1;

    }else{
        localStorage.setItem('cartNumb', 1);
        document.getElementById('spana').textContent = 1;

    }
    setItem(product);
}

function setItem(product){

let cartItems = localStorage.getItem("productsInCart") 
cartItems = JSON.parse(cartItems);
if (cartItems != null){
    if( cartItems[product.tag] == undefined){
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].inCart += 1;
}else{

    product.inCart = 1;

 cartItems = {
    [product.tag]: product
};
}

localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCoast(product){
  //  console.log("The Product price is", product.price);
  let cartCost = localStorage.getItem("totalCost");
  if(cartCost != null){ 
      cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + product.price);
  }else{
    localStorage.setItem("totalCost", product.price);
}
}

function displayCart(){
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     let productContainer = document.querySelector(".products");
     if( cartItems && productContainer ){
         productContainer.innerHTML = '';
         Object.values(cartItems).map(item => {
             productContainer.innerHTML += `
             <div class="products">  
           
<img src"${item.tag}.jpg">
<span>${item.name}</span>
</div> 
<div class="price">${item.price}</div>

`
         });
     }
}

loadnomb();
displayCart() ;