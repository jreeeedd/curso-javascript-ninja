(function () {
  /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elemento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

  function DOM(domNode) {
    this.element = document.querySelectorAll(domNode);
  }

  DOM.prototype.on = function on(eventType, callback) {
    this.element.forEach((item) => item.addEventListener(eventType, callback));
  };

  DOM.prototype.off = function off(eventType, callback) {
    this.element.forEach((item) =>
      item.removeEventListener(eventType, callback)
    );
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.isArray = function isArray(array) {
    return Object.prototype.toString.call(array) === "[object Array]";
  };

  DOM.prototype.isFunction = function isFunction(func) {
    return Object.prototype.toString.call(func) === "[object Function]";
  };

  DOM.prototype.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  };

  DOM.prototype.isString = function isString(string) {
    return Object.prototype.toString.call(string) === "[object String]";
  };

  DOM.prototype.isBoolean = function isBoolean(bool) {
    return Object.prototype.toString.call(bool) === "[object Boolean]";
  };

  DOM.prototype.isNumber = function isNumber(numb) {
    return Object.prototype.toString.call(numb) === "[object Number]";
  };

  DOM.prototype.isNull = function isNull(nulli) {
    return Object.prototype.toString.call(nulli) === "[object Null]";
  };

  var $p = new DOM("p");

  var $option = new DOM("option");

  // map
  var tagP = $p.map(function (item) {
    return item;
  });

  console.log(tagP);

  // filter
  var p5 = $p.filter(function (item) {
    return item.textContent === "teste5";
  });

  console.log(p5);

  // reduce
  var concat = $option.reduce(function (total, item) {
    return total.value + item.value;
  });

  console.log(concat);

  console.log(
    Array.from($option.element).reduce((prev, curr) => prev.value + curr.value)
  );

  // some
  var p4 = $p.some(function (item) {
    return item.textContent === "teste4";
  });

  console.log(p4);

  //every
  var pTeste = $p.every(function (item) {
    return item.textContent.includes("teste");
  });

  console.log(pTeste);

  //isArray
  var arr = [1, 2, 3, 4, 5];

  console.log($p.isArray(arr)); //true;
  console.log($p.isArray("string")); // false

  //isFunction

  var func = function () {};
  var obj = {};
  var bool = false;
  var numb = 3;
  var nulli = null;
  var string = "string";

  console.log($p.isFunction(func));
  console.log($p.isObject(obj));
  console.log($p.isString(string));
  console.log($p.isBoolean(bool));
  console.log($p.isNumber(numb));
  console.log($p.isNull(nulli));
})();
