let name = document.getElementById('name')
let email = document.getElementById('email')

orderNow = (e) => {
    e.preventDefault();

    console.log("name=>>", name.value, "email=>>", email.value)
    name.value = ""
    email.value = ""
}