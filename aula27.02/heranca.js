class Jogador{
    #nome;
    #numero;


constructor(nome, numero){
    this.#nome = nome;
    this.#numero = numero;
}

getNome(){
    return this.#nome;
}

getNumero(){
    return this.#numero;
}

}

class JogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, totalGols){
        super(nome, numero);
        this.peDominante = peDominante;
        this.totalGols = totalGols;
    }

    fazerGol(qtd){
        this.totalGols += qtd;
    }

    mostrar(){
        return `O jogador ${super.getNome()} camisa número ${super.getNumero()} tem o pé dominante ${this.peDominante} e tem ${this.totalGols} gols.`;
    }

}

const jorge = new JogadorFutebol('Jorge', 10, 'direito', 10);
console.log(jorge.mostrar());