let cartMainDiv = document.getElementById('cart_main_div')
let productsQuantity = document.getElementById('cart_quantity')
let total;
let cartProducts = JSON.parse(localStorage.getItem('cart'))
console.log("cartProducts=>>", cartProducts)




getTotalAmount = () => {
    if (cartProducts.length > 0) {
        let amountsData = [0]
        let totalAmount = document.getElementById('total')
        for (let i = 0; i < cartProducts.length; i++) {
            amountsData.push(cartProducts[i].price * cartProducts[i].quantity)
        }

        total = amountsData.reduce((total, currentVal) => {
            return total += currentVal
        })

        totalAmount.innerHTML = `R$ ${total}`
    }
}

getTotalAmount()

renderProductsOnCart = () => {

    cartMainDiv.innerHTML += `
    <div id="mainDiv">
        <div id="productDiv"><p class="mainHeadings">PRODUCT</p></div>
        <div id="quantityDiv"><p class="mainHeadings">QUANTITY</p></div>
        <div id="subtotalDiv"><p class="mainHeadings">SUBTOTAL</p></div>
        <div id="delete_btn_div"></div>
        </div>`


    if (cartProducts.length < 1) {
        cartMainDiv.innerHTML = `CART IS EMPTY`

    }

    else {
        for (let i = 0; i < cartProducts.length; i++) {

            cartMainDiv.innerHTML += `
            <div>
            <div class="product">
            <div class="productImage">
            <img class="prod-img" src="${cartProducts[i].image}" />        
            <div class="productName">
            <p class="prod-name">${cartProducts[i].name}</p>
            <p class="prod-price">R$ ${cartProducts[i].price}</p>
            </div>
            <div class="productQuantity">
            <button onclick="decreaseQuanity(this)" class="decrease_btn">-</button>
            <div class="prodQuantityDiv">${cartProducts[i].quantity}</div>
            <button onclick="increaseQuanity(this)" class="increase_btn">+</button>
            </div>
            <div class="productSubTotal">
            <span class="prod-price">R$ ${cartProducts[i].subTotal}</span>
            </div>
            <div class="deleteProdDiv">
            <button class="deleteProdBtn" onclick="deleteProduct(this)"><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
            </div>
            <hr>
            </div>`
        }
        if (cartProducts.length > 0) {
            let orderPortion = document.getElementById('order_portion')
            orderPortion.style.display = "block"
        }

    }
}
renderProductsOnCart()

increaseQuanity = (e) => {
    let initialValue = parseInt(e.parentNode.childNodes[3].innerHTML)
    e.parentNode.childNodes[3].innerHTML = initialValue + 1


    let productForIncrease = e.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === productForIncrease) {
            cartProducts[i].quantity += 1

            cartProducts[i].subTotal = cartProducts[i].price * cartProducts[i].quantity
            e.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = `R$ ${cartProducts[i].price * cartProducts[i].quantity}`

            localStorage.setItem("cart", JSON.stringify(cartProducts))

        }
    }
    getTotalAmount()
}

decreaseQuanity = (e) => {
    let initialValue = parseInt(e.parentNode.childNodes[3].innerHTML)


    if (initialValue > 0) {
        e.parentNode.childNodes[3].innerHTML = initialValue - 1
        console.log(e.parentNode)
    }
    if (initialValue === 1) {
        e.parentNode.parentNode.parentNode.remove()
    }

    let productForDecrease = e.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === productForDecrease) {
            if (cartProducts[i].quantity > 0) {
                cartProducts[i].quantity -= 1
                cartProducts[i].subTotal = cartProducts[i].price * cartProducts[i].quantity
                e.parentNode.parentNode.childNodes[7].childNodes[1].innerHTML = `R$ ${cartProducts[i].price * cartProducts[i].quantity}`
            }
            if (cartProducts[i].quantity === 0) {
                cartProducts.splice(i, 1)
                productsQuantity.innerHTML = cartProducts.length
                if (productsQuantity.innerHTML == 0) {
                    cartMainDiv.innerHTML = "CART IS EMPTY"
                }
            }

        }
    }
    localStorage.setItem("cart", JSON.stringify(cartProducts))
    getTotalAmount()
}



deleteProduct = (e) => {
    let productName = e.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML


    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === productName) {
            cartProducts.splice(i, 1)
            e.parentNode.parentNode.parentNode.remove()
            productsQuantity.innerHTML = cartProducts.length
        }
        if (cartProducts.length === 0) {
            cartMainDiv.innerHTML = "CART IS EMPTY"
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartProducts))
    getTotalAmount()

}




getCartProducts = () => {
    let products = JSON.parse(localStorage.getItem('cart'))
    cart = products
    if (!cart) {
        cart = []
    }
    productsQuantity.innerHTML = cart.length
}
getCartProducts()