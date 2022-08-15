let cardsMainDiv = document.getElementById('cards_main_div')

let cardsData = [{
    name: "English Zip Polo Twinset - Black/Red",
    image: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/105A7099copy_2000x.jpg?v=1646229301"
},
{
    name: "Men's Red Polo Shirt",
    image: "https://cdn.edenrobe.com/media/catalog/product/cache/27450b6fb6f8a26a4934fc76a933263c/0/n/0n9a1811-emtps21-022.jpg"
},
{
    name: "Men's White & Black Graphic Tee",
    image: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a1748-emtgt21-008.jpg"
},
{
    name: "Men's Black Chino Pant",
    image: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a2599-embcp22-007_1.jpg"
},
{
    name: "Skull Head Sneakers",
    image: "https://cdn.shopify.com/s/files/1/0518/0581/4952/products/1_3bd3bc81-2af9-4d90-a7b0-32e553a3cc41_590x.jpg?v=1623069035"
}
]

for (let i = 0; i < cardsData.length; i++) {
    cardsMainDiv.innerHTML += `<div class="card">
    <div class="quickview"><button>quickview</button></div>
    <img class="card_image"
        src="${cardsData[i].image}">
    <p>${cardsData[i].name}</p>
</div>`
}