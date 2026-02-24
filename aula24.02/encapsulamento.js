class Pessoa {
    //encapsulamento
    #nome;
    #cpf;
    #salario;

    //metodo getters e setters
    setCpf(valor) {
        this.#cpf = valor;
    }
    getCpf() {
        return this.#cpf;
    }
    setSalario(valor) {
        this.#salario = valor;
    }
    getSalario() {
        return this.#salario;
    }
}
const silva = new Pessoa();
silva.nome = 'Pedro';
silva.setCpf('123.456.789-00');
console.log(silva.getCpf());
silva.setSalario(5000);
console.log(silva.getSalario());
console.log(silva);