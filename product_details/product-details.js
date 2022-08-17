let productDetails = JSON.parse(localStorage.getItem('productDetails'))
let { name, price, image, image2, image3 } = productDetails


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


