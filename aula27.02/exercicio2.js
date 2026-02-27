class Tarefa {
    #titulo;
    #descricao;
    #concluida;

    constructor(titulo, descricao) {
        this.#titulo = titulo;
        this.#descricao = descricao;
        this.#concluida = false;
    }

    getTitulo() {
        return this.#titulo;
    }

    getConcluida() {
        return this.#concluida;
    }

    concluir() {
        this.#concluida = true;
    }

    reabrir() {
        this.#concluida = false;
    }

    mostrar() {
        return `Título: ${this.#titulo} | Concluída: ${this.#concluida}`;
    }
}

class ListaTarefas {
    #tarefas;

    constructor() {
        this.#tarefas = [];
    }

    adicionar(tarefa) {
        this.#tarefas.push(tarefa);
    }

    removerPorTitulo(titulo) {
        this.#tarefas = this.#tarefas.filter(
            t => t.getTitulo() !== titulo
        );
    }

    listar(concluidas = null) {
        if (concluidas === null) {
            return this.#tarefas;
        }

        return this.#tarefas.filter(
            t => t.getConcluida() === concluidas
        );
    }
}

// Criando lista
const lista = new ListaTarefas();

// Criando tarefas
const t1 = new Tarefa("Estudar", "Revisar JS");
const t2 = new Tarefa("Treinar", "Academia");
const t3 = new Tarefa("Ler", "20 páginas");

// Adicionando
lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

// Concluindo 1
t1.concluir();

// Removendo 1
lista.removerPorTitulo("Treinar");

// Listando todas
console.log("Todas:");
lista.listar().forEach(t => console.log(t.mostrar()));

// Listando concluídas
console.log("Concluídas:");
lista.listar(true).forEach(t => console.log(t.mostrar()));

// Listando pendentes
console.log("Pendentes:");
lista.listar(false).forEach(t => console.log(t.mostrar()));