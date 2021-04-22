// <!-- write your code here -->

let pokemons = [{
    name: 'Charmander',
    type: 'Fire Pokemon',
    image: './assets/charmander.png',
  },
  {
    name: 'Bulbasaur',
    type: 'Grass Pokemon',
    image: './assets/bulbasaur.png',
  },
  {
    name: 'Squirtle',
    type: 'Water Pokemon',
    image: './assets/squirtle.png',
  }
]

let dataAllPokemon = [
  {
      name: 'Charmander',
      type: 'Fire Pokemon',
      image: './assets/charmander.png',
  },
  {
      name: 'Bulbasaur',
      type: 'Grass Pokemon',
      image: './assets/bulbasaur.png',
  },
  {
      name: 'Squirtle',
      type: 'Water Pokemon',
      image: './assets/squirtle.png',
  },
  {
      name: 'Pikachu',
      type: 'Electric Pokemon',
      image: './assets/pikachu.png',
  },
  {
      name: 'Magmar',
      type: 'Fire Pokemon',
      image: './assets/magmar.png',
  },
  {
      name: 'Lapras',
      type: 'Water Pokemon',
      image: './assets/lapras.png',
  },
  {
      name: 'Cyndaquil',
      type: 'Fire Pokemon',
      image: './assets/cyndaquil.png',
  }
]

const content = document.getElementById('content')
console.log(content)
const menuFilter = document.getElementById('menuFilter')
menuFilter.addEventListener('click',filterPokemon)

function filterPokemon() {
  const inputPrompt = prompt('input','Fire Pokemon')
  console.log(inputPrompt)
  let tampung = []
  for (let i = 0 ; i < pokemons.length ; i ++) {
    const pokemon = pokemons[i]
    if (pokemon.type === inputPrompt ) {
      tampung.push(pokemon)
    }
  }
  generateCard(tampung)
}

generateCard(pokemons)

function generateCard(data) {
  content.innerHTML = ''
  for (let i = 0 ; i < data.length ; i ++) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')
    console.log(divCard)
  
    let pokemonName = document.createElement('h1')
    pokemonName.innerHTML = data[i]['name']
    divCard.appendChild(pokemonName)
    console.log(pokemonName)
    
    let typePokemon = document.createElement('h4')
    typePokemon.innerHTML = data[i]['type']
    divCard.appendChild(typePokemon)
    console.log(typePokemon)
    
    let imgPokemon = document.createElement('img')
    imgPokemon.src = data[i]['image']
    divCard.appendChild(imgPokemon)
    console.log(imgPokemon)
    
    let button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.addEventListener('click',deleteData)
    button.setAttribute('id_pokemon',i)
    divCard.appendChild(button)
    console.log(button)
  
    content.appendChild(divCard)

  }

}

function deleteData(event) {
  // console.log('masuk')
  // console.log(event.target.getAttribute('id_pokemon'))
  const index =  +event.target.getAttribute('id_pokemon')
  // console.log(index)
  pokemons.splice(index,1)
  console.log(pokemons)
  generateCard(pokemons)
  console.log(content)
}

function addPokemon() {
  console.log('nambah')
  const randomIndex = Math.floor(Math.random()*dataAllPokemon.length)
  // console.log(randomIndex)
  // console.log(dataAllPokemon.length)
  pokemons.push(dataAllPokemon[randomIndex])
  console.log(pokemons)
  generateCard(pokemons)
}











































