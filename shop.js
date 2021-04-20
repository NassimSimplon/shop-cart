const products = [
    {    
        names:"Louis vuitton",
        price:319.99,
    },
{
    names:"Lv Jacket",
    price:724.99,
}, 
{
    names:"Lv Bag",
    price:399.99,
},
 {
    names:"Swaggy Lv",
    price:929.86,
}

]


let cart = {
    item = [],
    totalPrice = 0
}
function renderAllProducts(){
    const productTable = document.getElementById('products')
    productTable.innerHTML = ''
    products.forEach((product, index )=>{
        productTable.innerHTML += `
       
        <td></td>
        </tr>
        `
    })
}
renderAllProducts();