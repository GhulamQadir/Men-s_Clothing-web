let navDiv = document.getElementById('navDiv')
let responsiveNavLinksDivMain = document.getElementById('responsiveNavLinksDivMain')

openNavDiv = () => {

    responsiveNavLinksDivMain.className = " showResponsiveNavLinksDiv"

    navDiv.className = " showNavDiv"


}


closeNavDiv = () => {
    navDiv.className = " hideNavDiv"
    responsiveNavLinksDivMain.className += " hideResponsiveNavLinksDiv"


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