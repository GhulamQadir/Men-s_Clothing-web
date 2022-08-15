let productDetails = JSON.parse(localStorage.getItem('productDetails'))
let { name, price, image } = productDetails


let productImage = document.getElementById('main_img')
let productName = document.getElementById('product_name')
let productPrice = document.getElementById('product_price')



productImage.src = image
productName.innerHTML = name
productPrice.innerHTML = price

console.log(productDetails)


