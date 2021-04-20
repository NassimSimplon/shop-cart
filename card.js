



let add = document.querySelectorAll('.add')
let item = document.querySelector('.products')
let total = []
// let totalCart = document.querySelector('.total')

for (let i = 0 ; i < add.length ; i++){

    add[i].addEventListener('click', addTOCart)
  
}


function addTOCart(event) {

 let btn = event.target
 let shop = btn.parentElement.parentElement
 let name = shop.querySelector('.title').innerText
 let price = shop.querySelector('.price').innerText
 let imgSrc = shop.querySelector('.img-card').src

 console.log (name , price , imgSrc)

 addToModal (name , price , imgSrc , )

 total.push( parseFloat(price))
 console.log(calculTotal())

}


 function addToModal (name , price , imgSrc, ){
    
  
     item.innerHTML += `
     <div class="table-responsive" style="background-color:black; overflow-x: hidden; " >
     <table class="table table-striped table-hover display:flex;flex-direction:clumn; ">
       <thead>
         <tr style="display: flex; flex-direction:row;justify-content: space-around;color:#ffffff; ">
           <th style="margin-left:1rem;" >Product</th>
           <th style="margin-left:-2rem;" >Name</th>
           <th style="margin-left:-3rem;">Price</th>
           <th >quantity</th>
           <th  id="total-price">remove</th>
         </tr>
       </thead>
       <tbody>
<tr class="row" style="display: flex;justify-content: space-around;">
<td style="width: 19%; height:20%" class="col-md-2"> <img src="${imgSrc}" class="img"  ></td>
<td class="col-md-1 text-white " style="margin-left:2rem;" >${name} </td>
<td class="col-md-2 text-white"style="margin-left:3rem;" >${price}</td>
<td class="col-md-2">  <input class="quantity-input " type="number" value="1" style="width:40px"  >
</td>
<td class="col-md-1 "  style="margin-right:3rem;">  <button class="btn btn-danger">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</button> </td>

</tr>
</tbody>
</table>
</div>  

     ` 
     item.innerHTML = `
      <h4>${calculTotal()}</h4>

     `
}



function calculTotal(){

    total = price * quantity;
    return price;

}



