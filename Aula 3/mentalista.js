var points = 0;

function game(){

    var secretNumber = parseInt(Math.random() * 11);
    var numberOfTries = 3;
  
    while(numberOfTries >= 0){

        if(numberOfTries == 0){
            alert('Você errou.\nO numero secreto era: ' + secretNumber);
            points = points - 1
            break;
        }
     
      var guess = parseInt(prompt('Digite um número de 0 a 10.\nTentativas: ' + numberOfTries + '\nPontos: ' + points));

        if(isNaN(guess)){
            break;
        }
        if (secretNumber == guess){
            alert('Acertou')
            points = points + 1
            break;
        } 
        else if(secretNumber > guess){
            numberOfTries = numberOfTries - 1;
            alert('O numero secreto é maior');
        } 
        else if(secretNumber < guess){
            numberOfTries = numberOfTries - 1;
            alert('O número secreto é menor');
        }
    }
}

const button = document.getElementById("start-game");

button.addEventListener("click", function(){

    game();

});