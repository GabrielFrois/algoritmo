const fs = require('fs');
const txtToArray = require('./loadLivros.js');

function listarLivros(disciplina) {
    if (!disciplina) {
        console.log('É necessário fornecer o nome da disciplina');
        return;
    }

    const livros = txtToArray();

    let livrosEncontrados = false;

    for (let i = 0; i < livros.length; i++) {
        const livro = livros[i];
        if (livro.disciplina === disciplina) {
            console.log(`Disciplina: ${livro.disciplina}`);
            console.log(`Título: ${livro.titulo}`);
            console.log(`Autores: ${livro.autor}`);
            console.log(`Editora: ${livro.editora}`);
            console.log(`Ano: ${livro.ano}`);
            console.log('');
            livrosEncontrados = true;
        }
    }

    if (!livrosEncontrados) {
        console.log(`Não existem livros da disciplina ${disciplina}`);
    }
}

//pega o nome da disciplina na linha de comando
const disciplina = process.argv[2]; //os 2 primeiros itens do process argv são caminho do node e script

listarLivros(disciplina);