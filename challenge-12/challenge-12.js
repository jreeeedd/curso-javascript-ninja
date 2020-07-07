/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function () {
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    name: "Ed",
    lastname: "Batista",
    age: 30,
  };
  console.log('Propriedades de "person":');

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push(
    { name: "The Idiot", pages: 435 },
    { name: "The Brothers Karamazov", pages: 800 },
    { name: "Crime and Punishment" }
  );
  console.log("\nLista de livros:");

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log("\nLivro que está sendo removido:");
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log("\nAgora sobraram somente os livros:");
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var booksStr = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(booksStr);

  /*
  Converta os livros novamente para objeto.
  */
  booksobj = JSON.parse(booksStr);
  console.log("\nAgora os livros são objetos novamente:");

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // itero sobre o array de objetos, usando o length do array
  // após iterar sobre os objetos que estão dentro do array, agora itero sobre os props dentro do objeto corrente
  // depois disso, exibo a prop e o valor, usando notação de array pra acessar no indice x a prop y do objeto
  for (var i = 0; i < booksobj.length; i++) {
    for (prop in booksobj[i]) {
      console.log(`${prop}: ${booksobj[i][prop]}`);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ["E", "D", "S", "O", "N"];
  console.log("\nMeu nome é:");

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(""));

  console.log("\nMeu nome invertido é:");

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(""));

  console.log("\nAgora em ordem alfabética:");
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
