openNavDiv = () => {
    let d = document.getElementById('navbar')
    let a = document.getElementById('open_nav_div')
    a.className = " showDiv"
    d.className += " navHeigthIncrease"
}


closeNavDiv = () => {
    let b = document.getElementById('open_nav_div')
    b.className += " hideDiv"

    setTimeout(() => {
        b.className = " none"
    }, 550)
}