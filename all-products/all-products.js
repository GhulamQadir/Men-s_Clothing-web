let cardsMainDiv = document.getElementById('cards_main_div')

let productsData = [{
    name: "Men's Grey Basic Tee",
    image: "https://cdn.edenrobe.com/media/amasty/amoptmobile/catalog/product/0/n/0n9a6160_emtbt22-001.webp",
    image2: "https://cdn.edenrobe.com/media/amasty/amoptmobile/catalog/product/0/n/0n9a6149_emtbt22-001.webp",
    image3: "https://cdn.edenrobe.com/media/catalog/product/0/n/0n9a6163_emtbt22-001.jpg",
    price: 1000
},
{
    name: "Men's Navy Graphic Tee",
    image: "https://cdn.edenrobe.com/media/catalog/product/6/f/6f5a0602--emtgt21-003_1_1.jpg",
    image2: "https://cdn.edenrobe.com/media/catalog/product/6/f/6f5a0606--emtgt21-003_1_1.jpg",
    image3: "https://cdn.edenrobe.com/media/catalog/product/6/f/6f5a0602--emtgt21-003_1_1.jpg",
    price: 1000
},
{
    name: "Basic Black Pique Polo Shirt",
    image: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_e9bc8203-ac0b-4cd3-8aad-5a0dead72f79_540x.jpg?v=1655816459",
    image2: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_724621b6-7b1d-44ea-ac1b-eb767e6b18b9_540x.jpg?v=1655816459",
    image3: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/5_3f72029f-5541-4597-ac81-bc1a4166d4a0_540x.jpg?v=1655816459",
    price: 2000
},
{
    name: "Pique Zipper Polo Shirt",
    image: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_538306b8-687e-4c1e-b61a-ffa50558851a_540x.jpg?v=1645696697",
    image2: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_7889b260-ce23-4822-9812-5172516a2bc9_540x.jpg?v=1645696697",
    image3: "https://cdn.shopify.com/s/files/1/0041/8797/9905/products/4_2c9462e7-6ef8-4ec6-8351-cfbda57283fe_540x.jpg?v=1645696697",
    price: 1600
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
}, {
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
{
    name: "",
    image: "",
    image2: "",
    image3: "",
    price: 3500
},
]

for (let i = 0; i < productsData.length; i++) {
    cardsMainDiv.innerHTML += `<div onclick="viewDetails(this)" class="card">
    <div class="view_details_div">
    <button id="viewDetailsBtnStyling" onclick="viewDetailsBtnStyling()" class="view_details_btn">View Details</button>
    </div>
    <img class="card_image"
        src="${productsData[i].image}">
    <p class="product_name">${productsData[i].name}</p>
     </div>
</div>`
}