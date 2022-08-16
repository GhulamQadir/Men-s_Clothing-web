let cardsMainDiv = document.getElementById('cards_main_div')


let cardsData = [{
    name: "English Zip Polo Twinset - Black/Red",
    image: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/105A7099copy_2000x.jpg?v=1646229301",
    image2: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/105A7087copy_2000x.jpg?v=1646229301",
    image3: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/105A7099copy_2000x.jpg?v=1646229301",
    price: 2500
},
{
    name: "Men's Red Polo Shirt",
    image: "https://cdn.edenrobe.com/media/catalog/product/cache/27450b6fb6f8a26a4934fc76a933263c/0/n/0n9a1811-emtps21-022.jpg",
    image2: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1803-emtps21-022.jpg",
    image3: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1810-emtps21-022.jpg",
    price: 1700
},
{
    name: "Men's White &amp; Black Graphic Tee",
    image: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1748-emtgt21-008.jpg",
    image2: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1749-emtgt21-008.jpg",
    image3: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1755-emtgt21-008.jpg",
    price: 2000
},
{
    name: "Men's Black Chino Pant",
    image: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a2599-embcp22-007_1.jpg",
    image2: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a2601-embcp22-007_1.jpg",
    image3: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a2607-embcp22-007_1.jpg",
    price: 1600
},
{
    name: "Skull Head Sneakers",
    image: "https://cdn.shopify.com/s/files/1/0518/0581/4952/products/1_3bd3bc81-2af9-4d90-a7b0-32e553a3cc41_590x.jpg?v=1623069035",
    image2: "https://cdn.shopify.com/s/files/1/0518/0581/4952/products/1623066851_1_590x.png?v=1623069036",
    image3: "https://cdn.shopify.com/s/files/1/0518/0581/4952/products/1623066851_1_590x.png?v=1623069036",
    price: 3500
}
]

for (let i = 0; i < cardsData.length; i++) {
    cardsMainDiv.innerHTML += `<div onclick="viewDetails(this)" class="card">
    <div class="view_details_div">
    <button id="viewDetailsBtnStyling" onclick="viewDetailsBtnStyling()" class="view_details_btn">View Details</button>
    </div>
    <img class="card_image"
        src="${cardsData[i].image}">
    <p class="product_name">${cardsData[i].name}</p>
     </div>
</div>`
}


function viewDetails(e) {
    e.className += " cardOnclickTransition"
    setTimeout(() => {
        let name = e.childNodes[5].innerHTML

        for (var i = 0; i < cardsData.length; i++) {
            if (cardsData[i].name === name) {
                localStorage.setItem('productDetails', JSON.stringify(cardsData[i]))

                window.location.assign('../product_details/product-details.html')
            }
        }
    }, 200)

}



function viewDetailsBtnStyling() {
    let styleDetailsBtn = document.getElementById('viewDetailsBtnStyling')
    styleDetailsBtn.className += " detailsBtnOnclickStyling"

}
