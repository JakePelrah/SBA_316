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
    navImg.addEventListener('click', (e) => bark(e.target))
    navImg.style.cursor = 'pointer'


    // create navbar text
    const textSpan = document.createElement('span')
    textSpan.id ="nav-text"
    textSpan.textContent = 'Zelda the Pomeranian'

    const navItems = [navImg,textSpan]

    // construct the nav
    navItems.forEach(node => navbarBrand.appendChild(node))
    containerDiv.appendChild(navbarBrand)
    navBar.appendChild(containerDiv)
    header.appendChild(navBar)

    return header
}

// create media card fragment
function createMediaCardFragment(imgPath, video = false) {
    const fragment = new DocumentFragment()

    // create col div
    const colDiv = document.createElement('div')
    colDiv.classList.add('col')

    // create media card
    const card = document.createElement('div')
    card.classList.add('card')

    // create card image
    const cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.src = imgPath
 
    // create card body
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    // create structure
    colDiv.appendChild(card)
    card.appendChild(cardImg)
    card.appendChild(cardBody)

    // return fragment
    return fragment.appendChild(colDiv)
}

function bark(target) {
    target.classList.add('bark')
    const navText = document.getElementById('nav-text')
    navText.textContent="WOOF"
    target.style.pointerEvents = 'none'
    const randomBark = Math.floor(Math.random() * 4 + 1);
    const audio = new Audio(`src/assets/audio/bark_${randomBark}.wav`)
    audio.addEventListener('ended', () => {
        target.classList.remove('bark')
        target.style.pointerEvents = 'auto'
    navText.textContent="Zelda the Pomeranian"

    })
    audio.play()

}


// program setup
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>`
document.head.insertAdjacentHTML('beforeend', bootstrapCDN)

// insert header
const body = document.body.insertAdjacentElement('afterbegin', createHeader())
const container = document.querySelector('.container')
container.classList.add('mt-5')


// about me
const likesSpan = document.getElementById('likes')
const likeCodes = [' \u{1F355}',' \u{1F464}',' \u{1F634}',' \u{1F436}' ]

let i = 0
for(const sibling of likesSpan.children){
    console.log(sibling.textContent+=likeCodes[i])
    i++
}
// add a hamburger emoji
likesSpan.firstChild.textContent+='\u{1F354}'




// insert media card fragments
const cardGroup = document.getElementById('card-group')
for (let i = 1; i < 24; i++) {
    cardGroup.appendChild(createMediaCardFragment(`src/assets/images/z_${i}.jpg`))
}
