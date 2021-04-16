var ToyStory = {
    nome: "Toy Story",
    banner: "https://images-na.ssl-images-amazon.com/images/I/51K8r9COEQL._AC_.jpg",
    trailerEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/v-PjgYDrg70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

var Interstellar = {
    nome: "Interstellar",
    banner: "https://images-na.ssl-images-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg",
    trailerEmbed: '"<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"'
}

var listaFilmes = [ToyStory,Interstellar]

console.log(listaFilmes)

function adicionarFilme() {
  
    var campoFilmeFavorito = document.getElementById('filme')
    
    var filmeFavorito = campoFilmeFavorito.value

   console.log(filmeFavorito)

    for( i = 0; i < listaFilmes.length; i++){
        console.log(listaFilmes[i])
        if (filmeFavorito == listaFilmes[i].nome) {
            console.log(i.nome)
            listarFilmesNaTela(listaFilmes[i])
            break;
        } else if(filmeFavorito != listaFilmes[i].nome){
            continue
        }else{
            alert("error")
        }
    }
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var queryFilmes = document.querySelector('#listaFilmes')
    var elementoFilmeBanner = filme.banner
    var elementoFilmeEmbed = filme.trailerEmbed
    const inserirBanner = '<img id="filme-banner" src=' + elementoFilmeBanner + ">"
    queryFilmes.innerHTML = queryFilmes.innerHTML + inserirBanner + elementoFilmeEmbed
}


