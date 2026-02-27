class Produto {
    #nome;
    #preco;
    #estoque;

    constructor(nome, preco, estoque) {
        if (preco < 0 || estoque < 0) {
            console.log("Erro: preço e estoque devem ser maiores ou iguais a 0.");
            return;
        }

        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    getEstoque() {
        return this.#estoque;
    }

    aplicarDesconto(percentual) {
        if (percentual < 0 || percentual > 100) {
            console.log("Percentual inválido.");
            return;
        }

        this.#preco -= this.#preco * (percentual / 100);
    }

    valorEmEstoque() {
        return this.#preco * this.#estoque;
    }

    mostrar() {
        return `Produto: ${this.#nome} | Preço: R$${this.#preco} | Estoque: ${this.#estoque}`;
    }
}

// Criando produtos
const p1 = new Produto("Notebook", 3000, 5);
const p2 = new Produto("Mouse", 100, 10);

// Aplicando desconto no primeiro
p1.aplicarDesconto(10);

console.log(p1.mostrar());
console.log(p2.mostrar());

// Comparando
if (p1.valorEmEstoque() > p2.valorEmEstoque()) {
    console.log("Produto 1 tem maior valor em estoque.");
} else {
    console.log("Produto 2 tem maior valor em estoque.");
}