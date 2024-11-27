const fs = require('fs');
const txtToArray = require('./loadLivros.js');

function livroComTituloMaisExtenso() {
    const livros = txtToArray();

    if (livros.length === 0) {
        console.log('Não há livros disponíveis.');
        return;
    }

    let livroMaisExtenso = livros[0];
    let tamanhoMaximo = livroMaisExtenso.titulo.length;

    for (let i = 1; i < livros.length; i++) {
        let livro = livros[i];
        let tamanhoTitulo = livro.titulo.length;

        if (tamanhoTitulo > tamanhoMaximo) {
            livroMaisExtenso = livro;
            tamanhoMaximo = tamanhoTitulo;
        }
    }


    console.log(`Título: ${livroMaisExtenso.titulo}`);
    console.log(`Autores: ${livroMaisExtenso.autor}`);
    console.log(`Editora: ${livroMaisExtenso.editora}`);
    console.log(`Ano: ${livroMaisExtenso.ano}`);
}

livroComTituloMaisExtenso();
