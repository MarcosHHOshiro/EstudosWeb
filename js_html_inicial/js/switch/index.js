let valor = prompt("Insira um valor em metros");
const conversor = prompt("Qual unidade de medida deseja aplicar? (mm, cm, dm, dam, hm, km):");

valor = parseFloat(valor);
let convertido;

switch(conversor){
    case "mm":
        convertido = valor * 1000;
        alert(valor + " metro = " + convertido + " milimetro");
    break;

    case "cm":
        convertido = valor * 100;
        alert(valor + " metro = " + convertido + " centimetros");
    break;

    default:
        alert("opção invalida, largar de ser burro plmds");
    break;
}