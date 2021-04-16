var cartaPaulo = {
    nome: "Seiya de Pegaso",
    som: "https://www.myinstants.com/media/sounds/mteoro-de-pegaso.mp3",
    img: "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
    atributos:{
    ATK: "80",
    DEF: "70",
    MANA: "90"
    }
  }

var cartaRafa = {
    nome: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos:{
    ATK: "30",
    DEF: "40",
    MANA: "40"
  }
}
var cartaGui = {
    nome: "Lord Darth Vader",
    img: "https://i.pinimg.com/originals/3e/33/7c/3e337c9208126bee1a4ee1f9cc184fd4.jpg",
    som: "http://soundfxcenter.com/movies/star-wars/8d82b5_Darth_Vader_Breath_Sound_Effect.mp3",
    atributos:{
    ATK: "70",
    DEF: "70",
    MANA: "80"
    }
  }

var cartas = [cartaGui, cartaRafa, cartaPaulo]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
  
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random() * 3)
    }
  
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
  
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
  
    exibeCartaJogador()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.img})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " +
    cartaJogador.atributos[atributo] + "<br>"}

  var html = "<div id='opcoes' class='carta-status'>"
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"

}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.img})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +
    cartaMaquina.atributos[atributo] + "<br>"}

  var html = "<div id='opcoes' class='carta-status'>"
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"

}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked) {
          return radioAtributo[i].value
      }
    } 
  }

function jogar(){
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
  var audioJogador = new Audio(cartaJogador.som)
  var audioMaquina = new Audio(cartaMaquina.som)

  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Você Venceu</p>'
    audioJogador.play()
  }
  else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Você Perdeu</p>'
    audioMaquina.play()
  }
  else if(cartaJogador.atributos[atributoSelecionado] = cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Empate</p>'
  }
  else if(cartaJogador.atributos[atributoSelecionado] = " "){
    htmlResultado = '<p class="resultado-final">Selecione um atributo</p>'
    window.location.reload()
  }
  else{
    htmlResultado = '<p class="resultado-final">Selecione um atributo</p>'
  }
  exibeCartaMaquina()
  divResultado.innerHTML = htmlResultado
}