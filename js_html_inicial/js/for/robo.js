let numero = prompt("digite um numero para fazer a tabuada");

numero = parseFloat(numero);
let tabuada;
let string = "";
let i;

for(i=1; i<=20; i++){
    tabuada = numero * i;
    string =string + i + " * " + numero + " = " + tabuada + "\n";  
}

alert(string);
