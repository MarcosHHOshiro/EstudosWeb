const nome1 = prompt("Insira o nome do personagem 1: ");
let atq1 = prompt("Insira o poder de ataque do personagem 1:");
const nome2 = prompt("Insira o nome do personagem 2: ");
let def2 = prompt("Insira a defesa do personagem 2: ");
let vida2 = prompt("Insira a vida do personagem 2: ");
const escudo = prompt("O personagem 2 tem escudo?s/n");

atq1 = parseFloat(atq1);
def2 = parseFloat(def2);
vida2 = parseFloat(vida2);

let danoCausado;

if(atq1 > def2 && escudo == "n"){
    danoCausado = atq1 - def2;
}else if(atq1 > def2 && escudo == "s"){
    danoCausado = (atq1 - def2)/2;
}else{
    danoCausado = 0;
}

vida2 = vida2 - danoCausado;

alert(
    "Dano Causado: " + danoCausado +
     "\n Vida do defendente: " + vida2 
);