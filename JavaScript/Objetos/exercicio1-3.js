const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

reader.favoriteBooks[1] = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}

if (reader.favoriteBooks.length == 1){
  console.log('Júlia tem 1 livro favorito');
} else{
  console.log(`"${reader.name} tem ${reader.favoriteBooks.length} livros favoritos!"`);
}
