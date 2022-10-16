var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}


let productsQuantity = document.getElementById('cart_quantity')

getCart = () => {
    let a = JSON.parse(localStorage.getItem('cart'))
    console.log(a.length)

    productsQuantity.innerHTML = a.length
}
getCart()