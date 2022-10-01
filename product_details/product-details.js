let productDetails = JSON.parse(localStorage.getItem('productDetails'))
let { name, price, image, image2, image3 } = productDetails
var cart = []


let productMainImg = document.getElementById('main_img')
let productImg1 = document.getElementById('productImg1')
let productImg2 = document.getElementById('productImg2')
let productImg3 = document.getElementById('productImg3')

let productImgLink1 = document.getElementById('productImgLink1')
let productImgLink2 = document.getElementById('productImgLink2')
let productImgLink3 = document.getElementById('productImgLink3')




let productName = document.getElementById('product_name')
let productPrice = document.getElementById('product_price')



productMainImg.src = image
productName.innerHTML += name
productPrice.innerHTML += price

productImg1.src = image
productImg2.src = image2
productImg3.src = image3

productImgLink1.href = image
productImgLink2.href = image2
productImgLink3.href = image3


console.log(productDetails)


addToCart = (e) => {
    let product = {
        name: name,
        price: price,
        image: image,
        quantity: 1,
        subTotal: price
    }

    // cart.push(product)
    let productMatched = false

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
            productMatched = true
        }
    }

    if (productMatched === true) {
        alert("Already added to your cart")
    }
    if (productMatched === false) {
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
    }

}


getCartProducts = () => {
    let products = JSON.parse(localStorage.getItem('cart'))
    cart = products
    if (!cart) {
        cart = []
    }
}
getCartProducts()