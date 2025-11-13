import readline = require("readline-sync");
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";

let contas: ContaController = new ContaController()
let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
let titular: string;
const tiposConta = ["Conta corrente", "Conta poupanca"];



while (true) {
    console.log(colors.bg.black, colors.fg.green)
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
    switch (opcao) {
        case 1:
            console.log("\n******** Criar Conta ********");
            agencia = readline.questionInt("Digite o numero da sua agencia: ");
            titular = readline.question("Digite o nome do titular da conta: ");
            console.log("Digite o tipo de conta: ");
            tipo = readline.keyInSelect(tiposConta, "", { cancel: false }) + 1;
            saldo = readline.questionInt("Digite o saldo da conta(R$): ");
            switch (tipo) {
                case 1:
                    console.log("Digite o limite da conta (R$): ");
                    limite = readline.questionInt("");
                    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;
                case 2:
                    console.log("Digite o dia do aniversario da conta poupança: ");
                    aniversario = readline.questionInt("");
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                    break;
            }
            break;
        case 2:
            contas.listarTodas();
            break;
        case 3:
            console.log("\n******** Consultar dados da conta por número ********");
            console.log("Digite o número da conta: ");
            numero = readline.questionInt("");
            contas.procurarPorNumero(numero);
            break;
        case 4:
            console.log("\n******** Atualizar dados da conta ********");
            console.log("Digite o número da conta: ");
            numero = readline.questionInt("");

            let conta = contas.buscarNoArray(numero)

            if (conta != null) {
                agencia = readline.questionInt("Digite o numero da sua agencia: ");
                titular = readline.question("Digite o nome do titular da conta: ");
                console.log("Digite o tipo de conta: ");
                tipo = readline.keyInSelect(tiposConta, "", { cancel: false }) + 1;
                saldo = readline.questionInt("Digite o saldo da conta(R$): ");
                switch (tipo) {
                    case 1:
                        console.log("Digite o limite da conta (R$): ");
                        limite = readline.questionInt("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta poupança: ");
                        aniversario = readline.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
            }else{console.log(`\nConta numero: ${numero} não foi encontrada, tente novamente!`)
            }
            break;
        case 5:
            console.log("\n******** Apagar a conta ********");
            console.log("Digite o numero da conta: ");
            numero = readline.questionInt("");
            contas.deletar(numero)
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