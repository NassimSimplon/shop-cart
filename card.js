let add = document.querySelectorAll('.add')
let item = document.querySelector('.item-card')
let total = []
let priceTotal = document.querySelector('.total')

let spana = document.getElementById("spana").value




for (let i = 0 ; i< add.length ; i++){

      add[i].addEventListener('click',getItem)
}
 
 function getItem(event){
     let btn = event.target
     let shop = btn.parentElement.parentElement
     let name = shop.querySelector('.title').innerText
     let price = shop.querySelector('.price').innerText
     let imgsrc = shop.querySelector('.img-card').src

     spana += 1
     addToModal(name , price , imgsrc)
     total.push(parseFloat(price))
     console.log(calculTotal())
     addTotatlToModal()

 }


 function addToModal(name , price , imgsrc ){

     item.innerHTML += `
     <div class="row mt-3 ">
     <div class="col-md-2">
       <img src="${imgsrc}" class="img">
     </div>
     <div class="col-md-2">
       <strong>${name}</strong>
     </div>
     <div class="col-md-2">
       <strong>${price}</strong>
     </div>
     <div class="col-md-2">
     <div class="container">
     <input type="button" onclick="decrementValue()" value="-" />
     <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" class="number" />
     <input type="button" onclick="incrementValue()" value="+" />
     </div>
     </div>
     <div class="col-md-2">
       <strong>${parseFloat(price)}</strong>
     </div>
    
   </div>
     `
     
 }
function addTotatlToModal(){
  priceTotal.innerHTML = `
     <h4> Total :  ${calculTotal()} TND</h4>
   
  `
}
 function calculTotal(){
   return total.reduce((a,b) => (a+b))
 }



 function incrementValue()
{
    var value = parseInt(document.querySelector('.number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.querySelector('.number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.querySelector('.number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.querySelector('.number').value = value;
    }

}



let compt = document.querySelectorAll('.add')
for(let i=0;i<compt.length;i++){
    compt[i].addEventListener("click", () => {
        kl()
    })
}
function kl(){
    let local=localStorage.getItem("kl")
    local=parseInt(local);
    if (local){
      localStorage.setItem("kl",local+1)
      document.getElementById('spana').innerHTML=local+1
    }
    else{
        localStorage.setItem("kl",1)
        document.getElementById('spana').innerHTML=1
    }
}


function supp(){

    let total = document.querySelector('.total')
let cart = document.querySelector('.item-card')
     localStorage.clear()
    cart.innerHTML=""
    total.innerHTML=""
  }
