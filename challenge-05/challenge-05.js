/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [1, 2, 3, 4, 5, 6];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var fn1 = (arg) => arg;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(fn1(myvar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var fn2 = (arg1, arg2) => arg1[arg2];

console.log(fn2([1, 2, 3, 4, 5, 6], 3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array1 = [1, "1", [], {}, null, undefined, function () {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(fn1(array1));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = (nomeLivro) => {
  var todosOsLivros = {
    // o nome dos livros poderiam ser strings
    "Eu, Robô": {
      quantidadePaginas: 200,
      autor: "Asimov",
      editora: "Novo mundo",
    },
    "Irmãos Karamazov": {
      quantidadePaginas: 800,
      autor: "Dostoieviski",
      editora: "Frazenfren",
    },
    "História Sem Fim": {
      quantidadePaginas: 400,
      autor: "Michael Ende",
      editora: "Novo mundo",
    },
  };
  // refatorando para ternário
  return !nomeLivro ? todosOsLivros : todosOsLivros[nomeLivro];
  //   if (nomeLivro === undefined) {
  //     return todosOsLivros;
  //   }
  //   return todosOsLivros[nomeLivro];
};

console.log(book("Eu, Robô"));

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

// refatoração para retirar repetições
var nomeLivro = "História Sem Fim";
console.log(
  `O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}`
);
