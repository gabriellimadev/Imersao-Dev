var listaImagemFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BZDgzNzdmNjEtMDAwMC00M2FiLTlkMTEtMDE0MDIyNTEwYmJlXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_UY268_CR12,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var listaNomeFilmes = ["Toy Story", "Star Wars", "Interstellar"]

let escolhaFilme = parseInt(prompt("Digite o numero do filme:\n1- Toy Story\n2- Star Wars\n3- Interstellar")) - 1;

document.write("<img src=" + listaImagemFilmes[escolhaFilme] + ">")
document.write("<p>" + listaNomeFilmes[escolhaFilme] + "</p>")