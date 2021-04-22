const dataKuwe = [
  {
    name: "Bukan Churros Biasa",
    price: 50000,
    rating: 8,
    img: "BT-01.png"
  },
  {
    name: "Puding Cenat Cenut",
    price: 40000,
    rating: 9,
    img: "BT-04.png"
  },
  {
    name: "Cupid Cap",
    price: 35000,
    rating: 7,
    img: "LT-01.png"
  },
  {
    name: "Matcha Taste",
    price: 90000,
    rating: 10,
    img: "NV-01.png"
  },
  {
    name: "",
    price: 0,
    rating: 0,
    img: ""
  }
]

const catalogue = document.getElementbyId("catalogue") // ini id catalogue, tambahin ke div yang buat catalogue
const cart = document.getElementbyId("cart") //  ini id buat cart, tambahin ke div yang buat cart

function generateCatalogue(data) { // generate cataloguenya
  catalogue.innerHTML = ""
  let catalogueCap = 0
  while (catalogueCap <= 4)
  const randomIndex = data[Math.floor(Math.random * data.length)]
    let catalogueCard = document.createElement("div")
    catalogueCard.classList.add("catalogueItem") // ini class item cataloguenya
    console.log(catalogueCard)

    let catalogueName = document.createElement("h1")
    catalogueName.innerHTML = randomIndex["name"]
    catalogueCard.appendChild(catalogueName)
    console.log(catalogueName)

    let cataloguePrice = document.createElement("h3")
    cataloguePrice.innerHTML = randomIndex["price"]
    cataloguePrice.appendChild(cataloguePrice)
    console.log(cataloguePrice)
  
    let catalogueRating = document.createElement("h5")
    catalogueRating.innerHTML = randomIndex["rating"]
    catalogueRating.appendChild(catalogueRating)
    console.log(catalogueRating)

    let catalogueImage = document.createElement("img")
    catalogueImage.src = randomIndex["image"]
    catalogueCard.appendChild(catalogueImage)
    console.log(catalogueImage)

    let button = document.createElement("button")
    button.innerHTML = "Add to Cart"
    button.addEventListener("click", addToCart)
    button.setAttribute("idnya", catalogueCap)
    catalogueCard.appendChild(button)
    console.log(button)

    catalogue.appendChild(catalogueCard)
    catalogueCap++
}

function addToCart() { // buat ngeklik dan nambahin ke array cartnya
  //cari idnya
  const index = event.target.getAttribute("nanti dimasukkin idnya")

}

function generateCart(obj) { // buat nambahin ke cartnya, dimasukkin class buat cartnya
// classnya cartItem
let cart = document.createElement("div")
    catalogueCard.classList.add("cartItem") 
    console.log(catalogueCard)
}

function deleteFromCart () { // buat ngapus dari cartnya

}


