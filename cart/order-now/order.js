const firebaseConfig = {
    apiKey: "AIzaSyDOE86Ic6eqF4AWn5cM9vO3oqosWjTItuQ",
    authDomain: "mens-closet.firebaseapp.com",
    projectId: "mens-closet",
    storageBucket: "mens-closet.appspot.com",
    messagingSenderId: "230827167924",
    appId: "1:230827167924:web:810b4663de7e51163f87e1"
};
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();


// Input Values
let userName = document.getElementById('name')
let email = document.getElementById('email')
let phoneNo = document.getElementById('phoneNo')
let address = document.getElementById('location')

let pickLocationBtn = document.getElementById('pick_location_btn')



const pickCurrentLocation = () => {
    pickLocationBtn.innerHTML = '<div id="loader"></div>'
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);

    } else {
        console.log("Geolocation is not supported by this browser.");
        pickLocationBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
    }
}

const success = (position) => {
    let { latitude, longitude } = position.coords

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=78f2f54e689d468192de7b9c6b5ca149`)
        .then(response => response.json()).then(result => {
            let { house_number, neighbourhood, city, country } = result.results[0].components
            console.log(`${house_number}, ${neighbourhood}, ${city}, ${country}`)

            address.value = `${house_number}, ${neighbourhood}, ${city}, ${country}`
            pickLocationBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
        })

    console.log(latitude, longitude)


}


const error = (error) => {
    if (error.code === 1) {
        console.log("your browser is not supporting")
        pickLocationBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
    }
    if (error.code === 2) {
        console.log("location not available")
        pickLocationBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
    }
    else {
        console.log("something went wrong")
        pickLocationBtn.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>'
    }
}



const setOrder = () => {
    db.collection("orders").add({
        name: userName.value,
        email: email.value,
        phoneNo: phoneNo.value,
        address: address.value
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}