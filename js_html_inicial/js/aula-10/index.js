let nome = "Isaac";

console.log(nome);
console.error(nome);
console.warn(nome);

window.alert(nome); //aparece uma telinha de alerta
nome = window.prompt("Insira o seu nomes");//parece uma telinha para pegar seu nome 
let confirmacao = window.confirm("confirmar essa ação"); // aparece uma telinha para confimar uma certa açaõ

//posso usar só o confirm, alert, prompt, sem o window

console.log(nome);