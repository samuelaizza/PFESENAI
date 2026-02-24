class Veiculo {
    //atributos ou caracteristicas
    modelo = 'SUV';
    marca = 'Tesla - Cybertruck';
    ano = 2026;

    //metodos ou acoes
    dirgir() {
        console.log('Começou a se mover')
    }
    break() {
        console.log('Parei a bagaça')
    }
}

//instaciar ou criar o objeto
const carro = new Veiculo();
carro.dirgir();
carro.break();