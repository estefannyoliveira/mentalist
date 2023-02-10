var numberToFind = 0;
var attemps = 0;

function refresh(){
    // gera um numero aleatorio
    attemps = 0;
    numberToFind = parseInt(Math.random()*1001);

    console.log(numberToFind)
}

function verifyNumber(){

    var chute = document.getElementById("chute").value;
    if (chute > 1000 || chute < 0){
        alert('Chute invalido');
        return;
    }
  
    if(chute > numberToFind){
        attemps++;
        alert("Errou... número secreto é menor!");
    }
    else if(chute < numberToFind){
        attemps++;
        alert("Errou... o número secreto é maior!")
    }
    else{
        alert("Parabéns, você acertou!! Com "+attemps+" erros");
        refresh()
    }
 
}
refresh();