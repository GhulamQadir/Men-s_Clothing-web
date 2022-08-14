let cardsMainDiv = document.getElementById('cards_main_div')

let cardsData = [{
    name: "Card 1",
    image: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/DSC00131.jpg?v=1645467411"
},
{
    name: "Card 2",
    image: "https://s.alicdn.com/@sc04/kf/H052b399dbf5b431e9bb2b857fb4c59f8f.jpg_960x960.jpg"
},
{
    name: "Card 3",
    image: "https://cdn.shopify.com/s/files/1/0518/0581/4952/products/1_3bd3bc81-2af9-4d90-a7b0-32e553a3cc41_590x.jpg?v=1623069035"
},
{
    name: "Card 4",
    image: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/AY5A2616_2000x.jpg?v=1659622146"
},
{
    name: "Card 4",
    image: "https://cdn.shopify.com/s/files/1/0144/7827/8739/products/AY5A2616_2000x.jpg?v=1659622146"
}
]

for (let i = 0; i < cardsData.length; i++) {
    cardsMainDiv.innerHTML += `<div class="cards">
    <img class="cards_images"
        src="${cardsData[i].image}">
    <p>${cardsData[i].name}</p>
</div>`
}