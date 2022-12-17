let cartMainDiv = document.getElementById('cart_main_div')
let productsQuantity = document.getElementById('cart_quantity')
var getTotal = 0;

let cartProducts = JSON.parse(localStorage.getItem('cart'))
console.log("cartProducts=>>", cartProducts)

renderProductsOnCart = () => {
    if (cartProducts.length < 1) {
        cartMainDiv.innerHTML = `CART IS EMPTY`

    }

    else {
        let prodDiv = document.createElement('div')
        let prodText = document.createTextNode('Product')
        prodDiv.appendChild(prodText)
        prodDiv.setAttribute('id', 'productDiv')
        cartMainDiv.appendChild(prodDiv)

        let quantDiv = document.createElement('div')
        let quantText = document.createTextNode('Quantity')
        quantDiv.appendChild(quantText)
        quantDiv.setAttribute('id', 'quantityDiv')
        cartMainDiv.appendChild(quantDiv)

        let subTotalDiv = document.createElement('div')
        let subTotalText = document.createTextNode('Subtotal')
        subTotalDiv.appendChild(subTotalText)
        subTotalDiv.setAttribute('id', 'subTotalDiv')
        cartMainDiv.appendChild(subTotalDiv)

        let totalDiv = document.createElement('div')
        let totalText = document.createTextNode('Total')
        totalDiv.appendChild(totalText)
        totalDiv.setAttribute('id', 'totalDiv')
        cartMainDiv.appendChild(totalDiv)


        for (let i = 0; i < cartProducts.length; i++) {

            let prodImg = document.createElement('img')
            prodImg.src = cartProducts[i].image
            prodImg.setAttribute('class', 'prodImg')
            prodDiv.appendChild(prodImg)

            let prodQuant = document.createElement('span')
            let prodQuantText = document.createTextNode(cartProducts[i].quantity)
            prodQuant.setAttribute('class', 'prodQuant')
            prodQuant.appendChild(prodQuantText)
            quantDiv.appendChild(prodQuant)


            let prodSubTotal = document.createElement('span')
            let prodSubTotalText = document.createTextNode(cartProducts[i].subTotal)
            prodSubTotal.setAttribute('class', 'prodSubTotal')
            prodSubTotal.appendChild(prodSubTotalText)
            subTotalDiv.appendChild(prodSubTotal)

            let prodTotal = document.createElement('span')
            let prodTotalText = document.createTextNode(`${getTotal}`)
            prodTotal.setAttribute('class', 'prodTotal')
            prodTotal.appendChild(prodTotalText)
            totalDiv.appendChild(prodTotal)

        }
        //     for (let i = 0; i < cartProducts.length; i++) {

        //         cartMainDiv.innerHTML += `<div class="product">
        //     <img class="prod-img" src="${cartProducts[i].image}" />        
        //     <p class="prod-name">${cartProducts[i].name}</p>
        //     <p class="prod-price">RS: ${cartProducts[i].price}</p>
        //     <p>Quantity: <span>${cartProducts[i].quantity}<span></p>
        //     <button onclick="increaseQuanity(this)" class="increase_btn">+</button>
        //     <button onclick="decreaseQuanity(this)" class="decrease_btn">-</button>
        //     <br />
        //     <a href="order-now/order.html"><button class="order_btn">Order Now</button></a>
        //     <span id="sub_total">SubTotal: <span>${cartProducts[i].subTotal}</span></span>
        //     </div>`
        //     }
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

            cartProducts[i].subTotal = cartProducts[i].price * cartProducts[i].quantity
            e.parentNode.childNodes[17].childNodes[1].innerHTML = cartProducts[i].price * cartProducts[i].quantity

            localStorage.setItem("cart", JSON.stringify(cartProducts))

        }
    }
    getTotalAmount()
}

decreaseQuanity = (e) => {
    let initialValue = parseInt(e.parentNode.childNodes[7].childNodes[1].innerHTML)


    if (initialValue > 0) {
        e.parentNode.childNodes[7].childNodes[1].innerHTML = initialValue - 1
        console.log(e.parentNode)
    }
    if (initialValue === 1) {
        e.parentNode.remove()
    }

    let productForDecrease = e.parentNode.childNodes[3].innerHTML
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].name === productForDecrease) {
            if (cartProducts[i].quantity > 0) {
                cartProducts[i].quantity -= 1
                cartProducts[i].subTotal = cartProducts[i].price * cartProducts[i].quantity
                e.parentNode.childNodes[17].childNodes[1].innerHTML = cartProducts[i].price * cartProducts[i].quantity

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


getTotalAmount = () => {
    let amountsData = [0]
    let totalAmount = document.getElementById('total_amount')
    for (let i = 0; i < cartProducts.length; i++) {
        amountsData.push(cartProducts[i].price * cartProducts[i].quantity)
    }

    let total = amountsData.reduce((total, currentVal) => {
        return total += currentVal
    })


    totalAmount.innerHTML = `Total: ${total}`
    getTotal = total
    console.log("totalll=>", getTotal)
    console.log(total)
}

getTotalAmount()







getCartProducts = () => {
    let products = JSON.parse(localStorage.getItem('cart'))
    cart = products
    if (!cart) {
        cart = []
    }
    productsQuantity.innerHTML = cart.length
}
getCartProducts()