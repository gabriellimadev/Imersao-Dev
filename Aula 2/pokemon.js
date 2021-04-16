var pikachu = {
    nome: "Pikachu",
    id: 1,
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  }
var charmander = {
    nome: "Charmander",
    id:2,
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  }
  
var listaPokemons = [pikachu,charmander]

function sortearPokemon(){
    var divImagemPokemon = document.getElementById('pokemon')
    var numeroPokemon = parseInt(Math.random() * listaPokemons.length)
    pokemon = listaPokemons[numeroPokemon]
    divImagemPokemon.innerHTML = `<img src="${pokemon.img}">`
  }

function teste(){
    testeNome = document.getElementById('pokemon-input')
    console.log(testeNome.value)
  }

function enviarResposta(){
    var palpite = document.getElementById('pokemon-input').value;
    var palpiteCaptalize = palpite[0].toUpperCase() + palpite.slice(1)
    if(palpiteCaptalize == pokemon.nome){
        alert("Acertou")
    }else{
        alert("Errou")
    }
  }
  
sortearPokemon()