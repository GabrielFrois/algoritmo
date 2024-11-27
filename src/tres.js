const fs = require('fs');
const txtToArray = require('./loadLivros.js');

function listarLivrosPorAutor(autor) {
    if (!autor) {
        console.log('É necessário fornecer o nome do autor');
        return;
    }

    const livros = txtToArray();

    let livrosEncontrados = false;

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];

        if (livro.autor.toUpperCase().includes(autor.toUpperCase())) {
            console.log(`Título: ${livro.titulo}`);
            console.log(`Autores: ${livro.autor}`);
            console.log(`Editora: ${livro.editora}`);
            console.log(`Ano: ${livro.ano}`);
            console.log('');
            livrosEncontrados = true;
        }
    }

    if (!livrosEncontrados) {
        console.log(`Não existem livros do autor ${autor}`);
    }
}

// Pega o nome do autor na linha de comando
const autor = process.argv[2];

listarLivrosPorAutor(autor);
