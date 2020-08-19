(function () {
  "use strict";

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  var $cep = document.querySelector('[data-js="cep"]');
  var $logradouro = document.querySelector('[data-js="logradouro"');
  var $bairro = document.querySelector('[data-js="bairro"]');
  var $cidade = document.querySelector('[data-js="cidade"]');
  var $estado = document.querySelector('[data-js="estado"]');
  var $msg = document.querySelector('[data-js="msg"]');

  var state = {
    0: "Não enviado",
    1: "Conexão aberta",
    2: "Headers recebidos",
    3: "Carregando conteúdo",
    4: "Concluído",
  };

  var xhr = new XMLHttpRequest();
  var $submit = document.querySelector('[data-js="submit"]');
  $submit.addEventListener("click", function (e) {
    var firstPart = $cep.value.match(/\d/g).slice(0, 5).join("");
    var lastPart = $cep.value.match(/\d/g).slice(-3).join("");
    $msg.innerHTML = state[xhr.readyState];
    xhr.open("GET", `https://ws.apicep.com/cep/${firstPart}${lastPart}.json`);
    $msg.innerHTML = state[xhr.readyState];
    xhr.send();
    $msg.innerHTML = state[xhr.readyState];
  });

  xhr.addEventListener("readystatechange", function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      var info = JSON.parse(xhr.responseText);

      if (info.status === 200) {
        $msg.innerHTML = `Endereço referente ao CEP: ${$cep.value}`;

        $logradouro.value = info.address;
        $bairro.value = info.district;
        $cidade.value = info.city;
        $estado.value = info.state;
      } else {
        $msg.innerHTML = `Não encontramos dados para o cep: ${$cep.value}`;
      }
    }
  });
})();
