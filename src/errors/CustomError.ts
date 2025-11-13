export class ExcecaoSimples extends Error{
    constructor(mensagem:string){
        super()
        this.name = "Exceção simples"
        this.message = mensagem
    }
}
