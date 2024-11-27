const fs = require('fs');
const txtToArray = require('./loadLivros.js');

function listarLivros(titulo) {
    if (!titulo) {
        console.log('É necessário fornecer o título do livro');
        return;
    }

    const livros = txtToArray();

    let livrosEncontrados = false;

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];
        if (livro.titulo === titulo) {
            console.log(`Disciplina: ${livro.disciplina}`);
            livrosEncontrados = true;
        }
    }

    if (!livrosEncontrados) {
        console.log(`Não existem disciplinas que utilizam o livro ${titulo}`);
    }
}

//pega o nome da disciplina na linha de comando
const titulo = process.argv[2];

listarLivros(titulo);