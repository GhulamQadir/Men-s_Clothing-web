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


const pickCurrentLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

const success = (position) => {
    let { latitude, longitude } = position.coords
    console.log(latitude, longitude)
}


const error = (error) => {
    if (error.code === 1) {
        console.log("your browser is not supporting")
    }
    if (error.code === 2) {
        console.log("location not available")
    }
    else {
        console.log("something went wrong")
    }
}



const setOrder = () => {
    db.collection("orders").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}