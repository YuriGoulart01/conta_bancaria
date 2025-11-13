import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{

    private _listaContas: Array<Conta> = new Array<Conta>();
    numero:number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)
        if(buscaConta != null){
            buscaConta.visualizar()
        } else {
            console.log(`\nConta numero: ${numero} não foi encontrada, tente novamente!`)
        }
    }

    listarTodas(): void {
        for(let conta of this._listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log(`\nA conta número ${conta.numero} foi criada com sucesso.`)
    }

    atualizar(conta: Conta): void {
          let buscaConta = this.buscarNoArray(conta.numero)
        if(buscaConta != null){
            this._listaContas[this._listaContas.indexOf(buscaConta)] = conta
            console.log(`\nA conta número : ${conta.numero} foi atualizada com sucesso` )
        } else {
            console.log(`\nConta numero: ${conta.numero} não foi encontrada, tente novamente!`)
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)
        if(buscaConta != null){
            this._listaContas.splice(this._listaContas.indexOf(buscaConta), 1);
            console.log(`\nA conta número : ${numero} foi apagada com sucesso`);
        } else {
            console.log(`\nConta numero: ${numero} não foi encontrada, tente novamente!`);
        }
    }

    sacar(numero: number, valor: number): void {}

    depositar(numero: number, valor: number): void {}

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {}

    public gerarNumero():number{
        return ++this.numero;
    }

    public buscarNoArray(numero:number): Conta | null {
        for (let conta of this._listaContas){
            if(conta.numero === numero){
                return conta
            }
        }
        return null
    }   
}