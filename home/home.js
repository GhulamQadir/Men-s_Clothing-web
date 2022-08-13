let linksDiv = document.getElementById('navLinksResponsive')
let navLinksDiv2 = document.getElementById('navLinksDiv2')

openNavDiv = () => {
    let a = document.getElementById('navDiv')

    navLinksDiv2.className = " hello"

    a.className = " showNavDiv"


    // linksDiv.className = " showResponsiveLinks"
}


closeNavDiv = () => {
    let b = document.getElementById('navDiv')
    b.className = " hideNavDiv"
    navLinksDiv2.className += " hi"


    // linksDiv.className = " hideResponsiveLinks"


}







let button1Clicked = false

myToggle = () => {
    let a = document.getElementById('navIcon')
    let b = document.getElementById('toggleButton')


    if (!button1Clicked) {
        button1Clicked = true

        setTimeout(() => {
            b.innerHTML = '<i id="navIcon" class="fa fa-times" aria-hidden="true"></i>'
        }, 150)
        a.className += " navMenuIcon"
        openNavDiv()
        return;
    }


    if (button1Clicked) {
        button1Clicked = false

        setTimeout(() => {
            b.innerHTML = '<i id="navIcon"class="fa fa-bars" aria-hidden="true"></i>'
        }, 150)
        a.className += " navCloseIcon"
        closeNavDiv()
        return;
    }
}






// <i class="fa-solid fa-bars"></i>
// <i class="fa-solid fa-xmark"></i>