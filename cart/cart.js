let cartMainDiv = document.getElementById('cart_main_div')



let cartProducts = JSON.parse(localStorage.getItem('cart'))
console.log("cartProducts=>>", cartProducts)


renderProductsOnCart = () => {
    for (let i = 0; i < cartProducts.length; i++) {
        cartMainDiv.innerHTML += `<div class="product">
        <img class="prod-img" src="${cartProducts[i].image}" />
        
        <p class="prod-name">${cartProducts[i].name}</p>
        <p class="prod-price">RS: ${cartProducts[i].price}</p>
        <p>Quantity: <span>${cartProducts[i].quantity}<span></p>
        <button onclick="increaseQuanity(this)" class="increase_quantity">+</button>
        </div>`
    }
}
renderProductsOnCart()

increaseQuanity = (e) => {
    let initialValue = parseInt(e.parentNode.childNodes[7].childNodes[1].innerHTML)
    e.parentNode.childNodes[7].childNodes[1].innerHTML = initialValue + 1



    let productForIncrease = e.parentNode.childNodes[3].innerHTML
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === productForIncrease) {
            cartProducts[i].quantity += 1
            localStorage.setItem("cart", JSON.stringify(cartProducts))
            console.log(cartProducts[i])

        }
    }
    getTotalAmount()


}



getTotalAmount = () => {
    let amountsData = []
    let totalAmount = document.getElementById('total_amount')
    for (let i = 0; i < cartProducts.length; i++) {
        amountsData.push(cartProducts[i].price * cartProducts[i].quantity)
    }

    let total = amountsData.reduce((total, currentVal) => {
        return total += currentVal
    })

    totalAmount.innerHTML = `Total: ${total}`
    console.log(total)
}

getTotalAmount()



