class Livro {
    // atributos ou caracteristicas
    titulo = 'O Senhor dos Aneis';
    autor = 'J.R.R. Tolkien';
    genero = 'Fantasia';
    editora = 'HarperCollins';
    anoPublicacao = 1954;
    numeroPaginas = 1216;
    idioma = 'Portugues';
    isbn = '9788595084759';

    // metodos ou acoes
    abrir() {
        console.log('O livro foi aberto');
    }

    fechar() {
        console.log('O livro foi fechado');
    }
}

// instanciar ou criar o objeto
const livro1 = new Livro();
livro1.abrir();
livro1.fechar();