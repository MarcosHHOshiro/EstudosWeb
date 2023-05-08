const nome = window.prompt("nome: ");
const sobrenome = prompt("sobrenome: ");
const estudo = prompt("campo de estudo");
const ano = prompt("ano de nascimento");

idade = 2023 - parseFloat(ano);

console.log(idade)

alert(nome + sobrenome + " estuda " + estudo + " tem idade de " + idade);