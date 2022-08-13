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





var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}