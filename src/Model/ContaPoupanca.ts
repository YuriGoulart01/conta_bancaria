import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    private _aniversario: number;

    constructor(numero:number, agencia:number, tipo:number, titular:string, saldo: number, aniversario: number) {
        super(numero,agencia,tipo,titular,saldo);
        this._aniversario = aniversario;
    }

    public get getAniversario() {
        return this._aniversario;
    }

    public set setAniversario(aniversario:number) {
        this._aniversario = aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Data de aniversario: ${this._aniversario}`);
    }
}