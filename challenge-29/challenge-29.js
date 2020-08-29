(function (DOM) {
  "use strict";

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var app = (function () {
    var $header = document.createElement("header");
    var $name = document.createElement("h1");
    var $phone = document.createElement("p");
    var $form = new DOM("form");

    return {
      init: function () {
        this.initEvents();
        this.companyInfo();
      },

      initEvents: function () {
        $form.on("submit", this.handleSubmit);
      },

      handleSubmit: function (e) {
        e.preventDefault();
        app.createNewCar();
      },

      createNewCar: function () {
        document.body.appendChild(app.createTable());
      },

      createTable: function () {
        var $table;
        var $thead;
        var $tbody;

        if (!app.hasTable()) {
          $table = document.createElement("table");
          $thead = document.createElement("thead");

          $table.appendChild(app.createTableHead($thead));

          $tbody = document.createElement("tbody");

          $table.setAttribute("id", "mytable");
          $thead.setAttribute("id", "myhead");
          $tbody.setAttribute("id", "mybody");
        } else {
          $table = document.getElementById("mytable");
          $thead = document.getElementById("myhead");
          $tbody = document.getElementById("mybody");
        }

        $table.appendChild(app.createTableBody($tbody));

        return $table;
      },

      hasTableHead: function () {
        if (!app.hasTable()) return false;

        var head = document.getElementById("myhead");
        var table = document.getElementById("mytable");
        return table.contains(head);
      },

      hasTable: function () {
        var table = document.getElementById("mytable");
        return document.body.contains(table);
      },

      createTableHead: function ($thead) {
        var $tr = document.createElement("tr");
        var $thFoto = document.createElement("th");
        var $thMarca = document.createElement("th");
        var $thModelo = document.createElement("th");
        var $thAno = document.createElement("th");
        var $thPlaca = document.createElement("th");
        var $thCor = document.createElement("th");
        var $thAcao = document.createElement("th");

        $thFoto.innerHTML = "Foto";
        $thMarca.innerHTML = "Marca";
        $thModelo.innerHTML = "Modelo";
        $thAno.innerHTML = "Ano";
        $thPlaca.innerHTML = "Placa";
        $thCor.innerHTML = "Cor";
        $thAcao.innerHTML = "Ação";

        $tr.appendChild($thFoto);
        $tr.appendChild($thMarca);
        $tr.appendChild($thModelo);
        $tr.appendChild($thAno);
        $tr.appendChild($thPlaca);
        $tr.appendChild($thCor);
        $tr.appendChild($thAcao);

        $thead.appendChild($tr);

        return $thead;
      },

      createTableBody: function ($tbody) {
        var $photo = new DOM('input[name="photo"]');
        var $marca = new DOM('input[name="marca"]');
        var $modelo = new DOM('input[name="modelo"]');
        var $ano = new DOM('input[name="ano"]');
        var $placa = new DOM('input[name="placa"]');
        var $cor = new DOM('input[name="cor"]');

        var $tr = document.createElement("tr");
        var $tdPhoto = document.createElement("td");
        var $tdMarca = document.createElement("td");
        var $tdModelo = document.createElement("td");
        var $tdAno = document.createElement("td");
        var $tdPlaca = document.createElement("td");
        var $tdCor = document.createElement("td");
        var $remover = document.createElement("input");

        $remover.setAttribute("type", "button");

        $tdPhoto.textContent = $photo.get()[0].value;
        $tdMarca.textContent = $marca.get()[0].value;
        $tdModelo.textContent = $modelo.get()[0].value;
        $tdAno.textContent = $ano.get()[0].value;
        $tdPlaca.textContent = $placa.get()[0].value;
        $tdCor.textContent = $cor.get()[0].value;
        $remover.value = "Remover";

        app.removeItem($remover, $tr);

        $tr.appendChild($tdPhoto);
        $tr.appendChild($tdMarca);
        $tr.appendChild($tdModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);
        $tr.appendChild($remover);

        $tbody.appendChild($tr);

        return $tbody;
      },

      removeItem: function (button, item) {
        button.addEventListener("click", function (e) {
          e.preventDefault();

          var tbody = document.querySelector("tbody");
          tbody.removeChild(item);
        });
      },

      companyInfo: function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "company.json");
        xhr.send();

        xhr.addEventListener("readystatechange", this.getCompanyInfo);
      },
      getCompanyInfo: function () {
        if (this.status === 200 && this.readyState === 4) {
          var { name, phone } = JSON.parse(this.responseText);

          app.setCompanyInfo(name, phone);
        }
      },

      setCompanyInfo: function (name, phone) {
        $name.textContent = name;
        $phone.textContent = phone;

        $header.appendChild($name);
        $header.appendChild($phone);

        document.body.insertBefore($header, $form.get()[0]);
      },
    };
  })();

  app.init();
})(window.DOM);
