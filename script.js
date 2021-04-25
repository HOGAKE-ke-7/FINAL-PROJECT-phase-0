// <!-- write your code here -->

// console.log('masuk')
const produkAtas = document.getElementById('produkAtas')
// console.log(produkAtas)

const keranjang = document.getElementById('keranjang')
// console.log(keranjang)

// const cart = document.getElementById('cart')
// console.log(cart)

// cart.appendChild(keranjang)

////////////////////////////////////////////////////////
let idAwal = 1
function cart1() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/BT-01.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Churos'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Churos'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)

function deleteCart(event) {
  console.log('masukdfasdf')
  console.log(event.target)
  const index = event.target.parentElement
  const indexParent = index.parentElement

  // console.log(index)
  console.log(indexParent.id)
  // keranjang.splice(index,1)
  console.log(keranjang,'fsdfsdafd')
  console.log(indexParent.remove())
  
}


let idAwal2 = 1
function cart2() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal2}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/BT-02-min.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Tiramisu'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Tiramisu'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)




let idAwal3 = 1
function cart3() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal3}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/BT-03-min.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Blueberry'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Blueberry'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)





let idAwal4 = 1
function cart4() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal4}-cart`
  
  let pic = document.createElement('img')
  pic.src = '/menu/BT-04.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Puding Cenut'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Puding Cenut'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)






let idAwal5 = 1
function cart5() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal5}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/LT-01.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Cupid Cap'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Cupid Cap'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)



let idAwal6 = 1
function cart6() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal6}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/LT-02-min.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Kuma Kumi'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Kuma Kumi'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)



let idAwal7 = 1
function cart7() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal7}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/LT-03-min.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Minami'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Minami'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)





let idAwal8 = 1
function cart8() {
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idAwal8}-cart`
  
  let pic = document.createElement('img')
  pic.src = './menu/LT-04-min.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Super Seger'
  // console.log(pic)

  let judul = document.createElement('p')
  judul.innerHTML = 'Super Seger'

  let div = document.createElement('div')
  // div.id = 'btn'
  // console.log(div)

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)
  // console.log(button)

  // let angka = document.createElement('p')
  // angka.style = 'display: inline-block'
  // let tos = document.createElement('a')
  // tos.id = 'btn'
  // tos.innerHTML = 0
  // angka.innerHTML = tos
  // console.log(angka)

          // var tag = document.createElement("a"); 
          // tag.id = 'btn'
          // var element = document.getElementsByTagName("p")[0];
          // element.style = 'display: inline-block'
          // element.appendChild(tag); 
          // div.appendChild(element)
  // console.log(element)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)
  // console.log(button2)

  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  // button3.setAttribute('id',`${idAwal}-cart`)
  div.appendChild(button3)
  idAwal += 1
  // console.log(button3)
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
console.log('dsfdsfdsafasdfds',keranjang)











// let pokemons = [{
//   name: 'Charmander',
//   type: 'Fire Pokemon',
//   image: './assets/bajuhijau.jpg',
// },
// {
//   name: 'Bulbasaur',
//   type: 'Grass Pokemon',
//   image: './assets/bulbasaur.png',
// },
// {
//   name: 'Squirtle',
//   type: 'Water Pokemon',
//   image: './assets/squirtle.png',
// }
// ]

// let dataAllPokemon = [
// {
//     name: 'Charmander',
//     type: 'Fire Pokemon',
//     image: './assets/charmander.png',
// },
// {
//     name: 'Bulbasaur',
//     type: 'Grass Pokemon',
//     image: './assets/bulbasaur.png',
// },
// {
//     name: 'Squirtle',
//     type: 'Water Pokemon',
//     image: './assets/squirtle.png',
// },
// {
//     name: 'Pikachu',
//     type: 'Electric Pokemon',
//     image: './assets/pikachu.png',
// },
// {
//     name: 'Magmar',
//     type: 'Fire Pokemon',
//     image: './assets/magmar.png',
// },
// {
//     name: 'Lapras',
//     type: 'Water Pokemon',
//     image: './assets/lapras.png',
// },
// {
//     name: 'Cyndaquil',
//     type: 'Fire Pokemon',
//     image: './assets/cyndaquil.png',
// }
// ]

// const content = document.getElementById('content')
// console.log(content)
// const menuFilter = document.getElementById('menuFilter')
// menuFilter.addEventListener('click',filterPokemon)

// function filterPokemon() {
// const inputPrompt = prompt('input','Fire Pokemon')
// console.log(inputPrompt)
// let tampung = []
// for (let i = 0 ; i < pokemons.length ; i ++) {
//   const pokemon = pokemons[i]
//   if (pokemon.type === inputPrompt ) {
//     tampung.push(pokemon)
//   }
// }
// generateCard(tampung)
// }

// generateCard(pokemons)

// function generateCard(data) {
// content.innerHTML = ''
// for (let i = 0 ; i < data.length ; i ++) {
//   let divCard = document.createElement('div')
//   divCard.classList.add('card')
//   console.log(divCard)

//   let pokemonName = document.createElement('h1')
//   pokemonName.innerHTML = data[i]['name']
//   divCard.appendChild(pokemonName)
//   console.log(pokemonName)
  
//   let typePokemon = document.createElement('h4')
//   typePokemon.innerHTML = data[i]['type']
//   divCard.appendChild(typePokemon)
//   console.log(typePokemon)
  
//   let imgPokemon = document.createElement('img')
//   imgPokemon.src = data[i]['image']
//   divCard.appendChild(imgPokemon)
//   console.log(imgPokemon)
  
//   let button = document.createElement('button')
//   button.innerHTML = 'Delete'
//   button.addEventListener('click',deleteData)
//   button.setAttribute('id_pokemon',i)
//   divCard.appendChild(button)
//   console.log(button)

//   let tombol = document.createElement('button')
//   tombol.id = 'counter'
//   tombol.innerHTML = '+'
//   tombol.addEventListener('click',tambahAngka)
//   tombol.setAttribute('id_pokemon',i)
//   divCard.appendChild(tombol)
//   console.log(tombol)

//   let counter = document.createElement('h4')
//   counter.id = 'count'
//   counter.innerHTML = 1
//   counter.setAttribute('index',i)
//   divCard.appendChild(counter)
//   console.log(counter)

//   let tombolMin = document.createElement('button')
//   tombolMin.innerHTML = '-'
//   tombolMin.addEventListener('click',deleteData)
//   tombolMin.setAttribute('id_pokemon',i)
//   divCard.appendChild(tombolMin)
//   console.log(tombolMin)

//   content.appendChild(divCard)

// }

// }

// function deleteData(event) {
// // console.log('masuk')
// // console.log(event.target.getAttribute('id_pokemon'))
// const index =  +event.target.getAttribute('id_pokemon')
// // console.log(index)
// pokemons.splice(index,1)
// console.log(pokemons)
// generateCard(pokemons)
// console.log(content)
// }

// function addPokemon() {
// console.log('nambah')
// const randomIndex = Math.floor(Math.random()*dataAllPokemon.length)
// // console.log(randomIndex)
// // console.log(dataAllPokemon.length)
// pokemons.push(dataAllPokemon[randomIndex])
// console.log(pokemons)
// generateCard(pokemons)
// }

// function tambahAngka(event) {
// const index =  +event.target.getAttribute('id_pokemon')
// let angka = document.getElementById('count')
// console.log(angka.index)

// console.log(event.target)

// }








































