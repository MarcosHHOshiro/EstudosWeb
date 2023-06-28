let pacientes = [];
let string = "";
let i = 0;

while(true){
    let escolhas = prompt(`Escolha uma opção: 
    1- Mostrar pacientes
    2- Novo paciente
    3- Consultar paciente
    4- Sair`);

    if(escolhas === "1"){
        i=0;
        string = "";
        pacientes.forEach(function(paciente) {
            i++;
            string = string + i + "° " + paciente + "\n";
        });
        alert(string);
    }else if(escolhas === "2"){
        const novoPaciente = prompt("Informe o nome do paciente: ")
        pacientes.push(novoPaciente);
    }else if(escolhas === "3"){
        alert("O paciente " + pacientes[0] + " foi atendido")
        pacientes.shift();
    }else if(escolhas === "4"){
        break;
    }
}