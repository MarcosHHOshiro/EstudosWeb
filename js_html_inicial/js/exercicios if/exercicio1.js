const nome1 = prompt("Insira o nome do primeiro carro: ");
const vel1 = prompt("Insira a velocidade do primeiro carro: ");
const nome2 = prompt("Insira o nome do segundo carro: ");
const vel2 = prompt("Insira a velocidade do segundo carro:");

if(vel1 > vel2){
    alert(nome1 + " mais rapido que " + nome2)
}else{
    alert(nome2 + " mais rapido que " + nome1)
}