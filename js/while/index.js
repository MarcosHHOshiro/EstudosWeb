let cidades = "";
let i = 0;
const nome = prompt("Qual seu nome? ");

let visitou = "s";

while(true){
    let visitou = prompt("Visitou alguma cidade? ");

    if(visitou == "s"){
        let cidade = prompt("Qual o nome da cidade?");
        i++;
        cidades = cidades + " - " + cidade ; 
    }else{
        break;
    }
};

alert("O turista " + nome + " vistou " + i + " cidades" +
      "\nSendo elas: " + cidades);