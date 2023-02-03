const botao = document.getElementById("btnClique")

botao.addEventListener("click", fnInicio)

function fnInicio (){
    var numeroSecreto = parseInt(Math.random()*1001);

var quantChutes = 0;
while (chute != numeroSecreto) {
  quantChutes = quantChutes + 1;
  var chute = prompt("digite um número entre 0 e 1000:");
  if (chute == numeroSecreto) {
    alert("Acertou!");
  } else if (chute > numeroSecreto) {
    alert("Errou... o número secreto é menor");
  } else if (chute < numeroSecreto) {
    alert("Errou... o número secreto é maior");
  }
  if (chute != numeroSecreto){
  alert('Voce tentou ' + quantChutes + ' vezes')}
}
  
}
