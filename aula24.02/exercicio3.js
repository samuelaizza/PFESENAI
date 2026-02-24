class Bicicleta {
    modelo;
    marca;
    cor;
    #velocidadeMáxima;

    setVelocidadeMáxima(valor){
        this.#velocidadeMáxima = valor;
    }
    getVelocidadeMáxima(){
        return this.#velocidadeMáxima;
    }
}

const bike = new Bicicleta()
bike.marca = 'Gios';
bike.modelo = 'Frs';
bike.cor = 'Vermelha';
bike.setVelocidadeMáxima = '35km';
console.log(bike.getVelocidadeMáxima());
console.log(bike);
