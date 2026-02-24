class Cidade {
    qtdeHabitantes = 533000;
    estado = 'Para';
    nome = 'Ilha de Marajo';

    mostrar() {
        console.log(this.qtdeHabitantes);
        console.log(this.estado);
        console.log(this.nome);
    }
}

const city = new Cidade();
console.log(city);
city.mostrar();