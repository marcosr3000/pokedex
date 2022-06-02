// console.log('Construindo uma Pokédex')

// const div = document.createElement('div')
// div.innerHTML = 'Criando um Pokédex'
// console.log(div)

const page = document.querySelector('#pokedex-page')
// page.appendChild(div)

fetch('https://pokeapi.co/api/v2/pokemon?limit=150') //acessar a api
    .then(response => {
       return response.json() // convertendo resposta para json
    })
    .then(async data => {
        const box = document.querySelector('#pokemon-box')
        page.innerHTML = ''

        for(let i = 0; i < data.results.length; i++) {
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.textTransform = "capitalize"

            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const image = await pokemonImage.json()
            box.querySelector('#pokemon-img').src = image.sprites.front_default
            
            const pokemonType = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const type = await pokemonType.json()
            

            // cores dos cards por tipo

            if (type.types[0].type.name == 'grass') {
                box.querySelector('#card').style.backgroundColor = '#63BD59'
            } else if (type.types[0].type.name == 'fire') {
                box.querySelector('#card').style.backgroundColor = '#FB9D55'
            } else if (type.types[0].type.name == 'flying') {
                box.querySelector('#card').style.backgroundColor = '#93AADC'
            } else if (type.types[0].type.name == 'poison') {
                box.querySelector('#card').style.backgroundColor = '#A86BCA'
            } else if (type.types[0].type.name == 'normal') {
                box.querySelector('#card').style.backgroundColor = '#9198A2'
            } else if (type.types[0].type.name == 'water') {
                box.querySelector('#card').style.backgroundColor = '#4D90D6'
            } else if (type.types[0].type.name == 'ground') {
                box.querySelector('#card').style.backgroundColor = '#DE7545'
            } else if (type.types[0].type.name == 'bug') {
                box.querySelector('#card').style.backgroundColor = '#8EBF2F'
            } else if (type.types[0].type.name == 'fairy') {
                box.querySelector('#card').style.backgroundColor = '#E890E7'
            } else if (type.types[0].type.name == 'fighting') {
                box.querySelector('#card').style.backgroundColor = '#D03F6A'
            } else if (type.types[0].type.name == 'psychic') {
                box.querySelector('#card').style.backgroundColor = '#F87177'
            } else if (type.types[0].type.name == 'rock') {
                box.querySelector('#card').style.backgroundColor = '#C9B789'
            } else if (type.types[0].type.name == 'electric') {
                box.querySelector('#card').style.backgroundColor = '#F4D23B'
            } else if (type.types[0].type.name == 'ice') {
                box.querySelector('#card').style.backgroundColor = '#74CFC0'
            } else if (type.types[0].type.name == 'ghost') {
                box.querySelector('#card').style.backgroundColor = '#526AA8'
            } else if (type.types[0].type.name == 'dragon') {
                box.querySelector('#card').style.backgroundColor = '#136DC3'
            } else if (type.types[0].type.name == 'dark') {
                box.querySelector('#card').style.backgroundColor = '#5A545E'
            } else if (type.types[0].type.name == 'steel') {
                box.querySelector('#card').style.backgroundColor = '#76A5AF'
            } 


            // nome dos tipos por pokémon

            if (type.types.length == 2) {
                box.querySelector('#pokemon-type').innerHTML = `${type.types[0].type.name}, ${type.types[1].type.name}` 
            } else {
                box.querySelector('#pokemon-type').innerHTML = `${type.types[0].type.name}`
            }
            box.querySelector('#pokemon-type').style.textTransform = "capitalize"

            page.innerHTML += box.outerHTML
           
        }
        
    })

