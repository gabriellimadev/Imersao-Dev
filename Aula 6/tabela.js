var paulo = {
    nome: "Paulo",
    img: "https://img.itch.zone/aW1nLzE2ODQ5NTgucG5n/347x500/grp9WT.png",
    vitorias: 2,
    empates: 5,
    derrotas: 3,
    pontos: 0
  }
  var rafa = {
    nome: "Rafa",
    img: "https://img.itch.zone/aW1nLzE2ODQ5NTgucG5n/347x500/grp9WT.png",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  
  rafa.pontos = calculaPontos(rafa)
  paulo.pontos = calculaPontos(paulo)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas * 3
    return pontos
  }
  
  var jogadores  = [rafa, paulo]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
   var html = ""
   for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td><img id='icon-player' src=" + jogadores[i].img + "></td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button id='button-win' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td"
    html += "<td><button id='button-draw' onClick='adicionarEmpate(" + i + ")'>Empate</button>"
    html += "<button id='button-loss' onClick='adicionarDerrota(" + i + ")'>Derrota</button>"
    html += "<button id='button-delete' onClick='deletarJogador(" + i + ")'>Excluir</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
  } 

  function deletarJogador(i){
    var jogador = jogadores[i]
    jogadores.splice(i, 1)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarJogador(novoJogador){
    var nome = prompt("Informe o nome do jogador.")
    var vitorias = parseInt(prompt("Informe o numero de vitórias do jogador."))
    var empates = parseInt(prompt("Informe o numero de empates do jogador."))
    var derrotas = parseInt(prompt("Informe o derrotas do jogador."))
    
    var novoJogador = {
        nome: nome,
        vitorias: vitorias,
        empates: empates,
        derrotas: derrotas
    }
        jogadores.push(novoJogador)
        novoJogador.pontos = calculaPontos(novoJogador) 
        exibirJogadoresNaTela(jogadores)
  }