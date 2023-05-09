let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"));

while (true) {
  let escolha = prompt(`Dinheiro disponível: R$ ${dinheiro.toFixed(2)}
Escolha uma opção:
1 - Adicionar dinheiro
2 - Remover dinheiro
3 - Sair`);

  if (escolha === "1") {
    let quantidade = parseFloat(prompt("Digite a quantidade de dinheiro a ser adicionada:"));
    dinheiro += quantidade;
  } else if (escolha === "2") {
    let quantidade = parseFloat(prompt("Digite a quantidade de dinheiro a ser removida:"));
    dinheiro -= quantidade;
  } else if (escolha === "3") {
    break;
  } else {
    alert("Opção inválida! Tente novamente.");
  }
}
