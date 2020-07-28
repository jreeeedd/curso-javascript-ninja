(function (window, document) {
  "use strict";

  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  var $input = document.querySelector("input");
  var $zero = document.querySelector('[data-js="zero"]');
  var $one = document.querySelector('[data-js="one"]');
  var $two = document.querySelector('[data-js="two"]');
  var $three = document.querySelector('[data-js="three"]');
  var $four = document.querySelector('[data-js="four"]');
  var $five = document.querySelector('[data-js="five"]');
  var $six = document.querySelector('[data-js="six"]');
  var $seven = document.querySelector('[data-js="seven"]');
  var $eight = document.querySelector('[data-js="eight"]');
  var $nine = document.querySelector('[data-js="nine"]');

  var $equal = document.querySelector('[data-js="equal"]');
  var $addition = document.querySelector('[data-js="addition"]');
  var $minus = document.querySelector('[data-js="minus"]');
  var $multiply = document.querySelector('[data-js="multiply"]');
  var $division = document.querySelector('[data-js="division"]');

  $one.addEventListener("click", function () {
    $input.value += 1;
  });

  $two.addEventListener("click", function () {
    $input.value += 2;
  });
  $three.addEventListener("click", function () {
    $input.value += 3;
  });
  $four.addEventListener("click", function () {
    $input.value += 4;
  });
  $five.addEventListener("click", function () {
    $input.value += 5;
  });
  $six.addEventListener("click", function () {
    $input.value += 6;
  });
  $seven.addEventListener("click", function () {
    $input.value += 7;
  });
  $eight.addEventListener("click", function () {
    $input.value += 8;
  });
  $nine.addEventListener("click", function () {
    $input.value += 9;
  });

  $equal.addEventListener("click", function () {
    operation($input.value);
  });

  $addition.addEventListener("click", function () {
    $input.value += "+";
  });
  $minus.addEventListener("click", function () {
    $input.value += "-";
  });
  $multiply.addEventListener("click", function () {
    $input.value += "*";
  });
  $division.addEventListener("click", function () {
    $input.value += "/";
  });

  var operator1 = {
    "+": (num1, num2) => ($input.value = Number(num1) + Number(num2)),
    "-": (num1, num2) => ($input.value = Number(num1) - Number(num2)),
    "*": (num1, num2) => ($input.value = Number(num1) * Number(num2)),
    "/": (num1, num2) => ($input.value = Number(num1) / Number(num2)),
  };

  function operation(operation) {
    var numbers = operation.match(/\d+/g);
    var operator2 = operation.match(/\D/g);

    operator1[operator2].apply(operator1, numbers);
  }
})(window, document);
