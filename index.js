const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hammenu = document.querySelector('.hammenu')
const mobilemenu = document.querySelector('.mobile-menu')
const ccompras = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
hammenu.addEventListener('click', toggleMobilMenu)
ccompras.addEventListener('click', toggleCCompras)

function toggleMobilMenu() {

    if (aside.classList.contains('inactive')) {
        mobilemenu.classList.toggle('inactive')
    } else {
        aside.classList.toggle('inactive')
        mobilemenu.classList.toggle('inactive')
    }
}

function toggleDesktopMenu() {

    if(aside.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')

    } else {
        aside.classList.toggle('inactive')
        desktopMenu.classList.toggle('inactive')

    }
    
}

function toggleCCompras() {

    if(!mobilemenu.classList.contains('inactive')) {
        mobilemenu.classList.add('inactive')
    }

    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

const prodyctList = []

prodyctList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&pr=2&=650&w=940',
})

function renderProducts() {
    for (product of prodyctList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(prodyctList)

