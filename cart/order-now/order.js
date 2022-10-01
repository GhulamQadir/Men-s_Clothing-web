import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDOE86Ic6eqF4AWn5cM9vO3oqosWjTItuQ",
    authDomain: "mens-closet.firebaseapp.com",
    projectId: "mens-closet",
    storageBucket: "mens-closet.appspot.com",
    messagingSenderId: "230827167924",
    appId: "1:230827167924:web:810b4663de7e51163f87e1"
};

const app = initializeApp(firebaseConfig);






//////////               FUNCTIONALITY              ////////////////// 

let name = document.getElementById('name')
let email = document.getElementById('email')
let phoneNo = document.getElementById('phoneNo')

orderNow = (e) => {
    e.preventDefault();

    console.log("name=>>", name.value)
    console.log("email=>>", email.value)
    console.log("phoneNo=>>", phoneNo.value)

    name.value = ""
    email.value = ""
    phoneNo.valuec = ""
}