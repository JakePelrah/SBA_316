function createHeader() {
    const header = document.createElement('header')

    // create and style the nav
    const navBar = document.createElement('nav')
    navBar.classList.add('navbar')
    navBar.style.backgroundColor = 'var(--bg-color)'
    navBar.style.color = 'var(--text-color)'

    // create a container for the nav
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container-fluid')

    // create a navbar brand
    const navbarBrand = document.createElement('div')
    navbarBrand.classList.add('navbar-brand')
    navbarBrand.style.fontSize = '1.5em'
    navbarBrand.style.fontWeight = 'bold'

    // create a navbar image
    const navImg = document.createElement('img')
    navImg.src = 'src/assets/icons/pom.svg'
    navImg.style.height = '2em'
    navImg.style.marginRight = '1em'
    // bark when image is clicked
    navImg.addEventListener('click', bark)
    navImg.style.cursor = 'pointer'

    // create navbar text
    const navBarText = document.createTextNode('Zelda the Pomeranian')

    // construct the nav
    [navImg, navBarText].forEach(node => navbarBrand.appendChild(node))
    containerDiv.appendChild(navbarBrand)
    navBar.appendChild(containerDiv)
    header.appendChild(navBar)

    return header
}


function bark() {
    const randomBark = Math.floor(Math.random() * 4 + 1);
    console.log(randomBark)
    const audio = new Audio(`src/assets/audio/bark_${randomBark}.wav`)
    audio.play()
}





// program setup
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>`
document.head.insertAdjacentHTML('beforeend', bootstrapCDN)

const body = document.body
body.appendChild(createHeader())