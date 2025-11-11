import readline = require("readline-sync");
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";
import { colors } from "./src/util/Colors";

let opcao: number;
let contaCorrente = new ContaCorrente(1,152,2,"Yuri",1800,1500);
let contaPoupanca = new ContaPoupanca(1,152,2,"Yuri",2000,17);

contaCorrente.visualizar();
contaCorrente.sacar(4000);
contaCorrente.depositar(10000);
contaCorrente.visualizar();
contaCorrente.sacar(4000);
contaCorrente.visualizar();

contaPoupanca.visualizar();
contaPoupanca.sacar(2000);
contaPoupanca.visualizar();
contaPoupanca.depositar(10000);
contaPoupanca.visualizar();

while (true) {
    console.log(colors.bg.black,colors.fg.green)
    console.log("\n*****************************************************");
    console.log("           BANCO DO BRAZIL COM Z");
    console.log("*****************************************************");
    console.log("\n         1- Criar conta");
    console.log("         2- Listar todas as contas");
    console.log("         3- Buscar conta por número");
    console.log("         4- Atualizar dados da conta");
    console.log("         5- Apagar conta");
    console.log("         6- Sacar");
    console.log("         7- Depositar");
    console.log("         8- Transferir valores entre contas");
    console.log("         9- Sair");
    console.log("\n*****************************************************");

    opcao = readline.questionInt("\nDigite a opcao desejada: ");

    if (opcao === 9) {
        console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
        break;
    }
    switch(opcao){
        case 1:
            console.log("Opção 1")
            break;
        case 2:
            console.log("Opção 2")
            break;
        case 3:
            console.log("Opção 3")
            break;
        case 4:
            console.log("Opção 4")
            break;
        case 5:
            console.log("Opção 5")
            break;
        case 6:
            console.log("Opção 6")
            break;
        case 7:
            console.log("Opção 7")
            break;
        case 8:
            console.log("Opção 8")
            break;
    }
}

