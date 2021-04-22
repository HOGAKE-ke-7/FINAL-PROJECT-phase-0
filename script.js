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


const content = document.getElementById('content')
console.log(content)

generateCard(pokemons)

function generateCard(data) {
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
  console.log('masuk')
  console.log(event.target)

}











































