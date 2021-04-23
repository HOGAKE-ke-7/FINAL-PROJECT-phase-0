// <!-- write your code here -->

const produkAtas = document.getElementById('produkAtas')

const keranjang = document.getElementById('keranjang')

let idChuros = 1
let idMatcha = 1
let idCupidCap = 1
let idPuding = 1


function cartChuros() { // masukin barang ke keranjang
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idChuros}-cart`
  
  let pic = document.createElement('img')
  pic.src = '/menu/BT-01.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Churos'
 

  let judul = document.createElement('p')
  judul.innerHTML = 'Churos'

  let div = document.createElement('div')
  

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)


  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click', deleteCart)
  
  div.appendChild(button3)
  idChuros += 1
  
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
function cartMatcha() { // masukin barang ke keranjang
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idMatcha}-cart`
  
  let pic = document.createElement('img')
  pic.src = '/menu/NV-01.png' // gambar diganti
  pic.classList.add('sicart')
  pic.innerHTML = 'Matcha Latte'
 

  let judul = document.createElement('p')
  judul.innerHTML = 'Matcha Latte'

  let div = document.createElement('div')
  

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)


  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click', deleteCart)
  
  div.appendChild(button3)
  idMatcha += 1
  
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
function cartCupidCap() { // masukin barang ke keranjang
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idCupidCap}-cart`
  
  let pic = document.createElement('img')
  pic.src = '/menu/LT-01.png' // diganti gambranya
  pic.classList.add('sicart')
  pic.innerHTML = 'Cupid Cap'
 

  let judul = document.createElement('p')
  judul.innerHTML = 'Cupid Cap'

  let div = document.createElement('div')
  

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)


  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click', deleteCart)
  
  div.appendChild(button3)
  idCupidCap += 1
  
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}
function cartPuding() { // masukin barang ke keranjang
  let divKeranjang = document.createElement('div')
  divKeranjang.id = `${idPuding}-cart`
  
  let pic = document.createElement('img')
  pic.src = '/menu/BT-04.png'
  pic.classList.add('sicart')
  pic.innerHTML = 'Puding Cenut'
 

  let judul = document.createElement('p')
  judul.innerHTML = 'Puding Cenut'

  let div = document.createElement('div')
  

  let button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = '+'
  div.appendChild(button)

  let button2 = document.createElement('button')
  button2.type = 'button'
  button2.innerHTML = '-'
  div.appendChild(button2)


  let button3 = document.createElement('button')
  button3.type = 'button'
  button3.innerHTML = 'delete'
  button3.addEventListener('click',deleteCart)
  
  div.appendChild(button3)
  idPuding += 1
  
 
  divKeranjang.appendChild(pic)
  divKeranjang.appendChild(judul)
  divKeranjang.appendChild(div)
  keranjang.appendChild(divKeranjang)
}

function deleteCart(event) {
  const index = event.target.parentElement
  const indexParent = index.parentElement
  console.log(indexParent.remove())
}