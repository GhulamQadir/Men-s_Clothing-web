let cartMainDiv = document.getElementById('cart_main_div')



let cartProducts = JSON.parse(localStorage.getItem('cart'))
console.log("cartProducts=>>", cartProducts)


renderProductsOnCart = () => {
    for (let i = 0; i < cartProducts.length; i++) {
        cartMainDiv.innerHTML += `<div class="product">
        <img class="prod-img" src="${cartProducts[i].image}" />
        
        <p class="prod-name">${cartProducts[i].name}</p>
        <p class="prod-price">RS: ${cartProducts[i].price}</p>
        <p>Quantity: ${cartProducts[i].quantity}</p>
        <button onclick="increaseQuanity()" class="increase_quantity">+</button>
        </div>`
    }
}
renderProductsOnCart()

increaseQuanity = () => {
}



getTotalAmount = () => {
    let amountsData = []
    let totalAmount = document.getElementById('total_amount')
    for (let i = 0; i < cartProducts.length; i++) {
        amountsData.push(cartProducts[i].price)
    }

    let total = amountsData.reduce((total, currentVal) => {
        return total += currentVal
    })

    totalAmount.innerHTML += total
    console.log(total)
}

getTotalAmount()



