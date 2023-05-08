let valor1 = prompt("Insira o primeiro valor");
let valor2 = prompt("Insira o segundo valro");

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let mult = valor1 * valor2;
let div = valor1/valor2;

alert("soma: " + soma +
      "\nsubtração: " + subtracao +
      "\nmultiplicação: " + mult +
      "\ndivisão: " + div   
);