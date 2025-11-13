import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    private _listaContas: Array<Conta> = new Array<Conta>();
    numero:number = 0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public gerarNumero():number{
        return ++this.numero;
    }

}