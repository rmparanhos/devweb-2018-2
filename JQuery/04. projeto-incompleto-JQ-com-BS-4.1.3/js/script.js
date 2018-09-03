
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});


// Vamos configurar um event listener para disparar quando o DOM da página estiver carregado. E dentro do event handler,
// usaremos o jQuery para inserir algum conteúdo na página.

// O parágrafo com os botões é inserido na div 'aqui'.

$("document").ready(function() {
    $("#aqui").append(
        "<p>" +
        "<button id='btn-1' type='button' class='btn btn-outline-primary btn-lg mr-3'>Botão Large</button>" +
        "<button id='btn-2' type='button' class='btn btn-outline-primary mr-3'>Botão Default</button>" +
        "<button id='btn-3' type='button' class='btn btn-outline-primary btn-sm mr-3'>Botão Small</button>" +
        "<button id='btn-4' type='button' class='btn btn-outline-primary btn-sm mr-3'>Botão Small</button>" +
        "<button id='btn-5' type='button' class='btn btn-outline-primary btn-sm mr-3'>Adicionar</button>" +
        "<button id='btn-6' type='button' class='btn btn-outline-primary btn-sm mr-3'>Rodar</button>" +
        "</p>"
    );
});

//  --------------------------------------------------------------------------------------------------------------------
// Inserindo conteúdo usando javascript
// window.addEventListener("DOMContentLoaded", function(evt) {
//     var elem = document.getElementById("aqui");
//     var paragrafo = document.createElement("p");
//     var botao = document.createElement("button");
//     var label = document.createTextNode("Botão Large");
//     botao.appendChild(label);
//     botao.classList.add("btn");
//     botao.classList.add("btn-primary");
//     botao.classList.add("btn-lg");
//     paragrafo.appendChild(botao);
//     // botao.style.cssText = "btn btn-primary btn-lg"
//     elem.appendChild(paragrafo);
// });

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************

// Exercício 1

// Recuperar todos os parágrafos e envolvê-los com uma borda vermelha de 3px
$("p").css("border","3px solid red")

// Recuperar todos os elementos que possuam a classe table e envolvê-los com uma borda verde
$("table").css("border","3px solid green")

// Recuperar o elemento com o id = 'aqui' e envolvê-lo com uma borda azul
$("#aqui").css("border","3px solid blue")

// Recuperar todos os elementos img com a classe rounded e envolvê-los com uma borda preta
$("img.rounded").css("border","3px solid black")

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 2
//
// $("*")	                    Seleciona todos os elementos
// $(this)	                    Seleciona o elemento HTML corrente
// $("p.intro")	                Seleciona todos elementos <p> com a class="intro"
// $("p:first")	                Seleciona o primeiro elemento <p>
// $("ul li:first")	            Seleciona o primeiro elemento <li> do primeiro <ul>
// $("ul li:first-child")	    Seleciona o primeiro elemento <li> de todos elementos <ul>
// $("[href]")	                Seleciona todos os elementos com o atributo href
// $("a[target='_blank']")	    Seleciona todos os elementos <a> com o valor do atributo target igual a "_blank"
// $("a[target!='_blank']")	    Seleciona todos os elementos <a> com o valor do atributo target diferente de "_blank"
// $(":button")	                Seleciona todos os elementos <button> e <input> que possuem type="button"
// $("tr:even")	                Seleciona todos os elementos <tr> pares
// $("tr:odd")	                Seleciona todos os elementos <tr> ímpares

// Recuperar o primeiro elemento na página com a classe rounded-circle que esteja dentro de um elemento com a classe
// table (azul)  Resp: Patricia Maria Soares
$(".table .rounded-circle:first").css("border","3px solid blue")

// Recuperar o último elemento td na página que esteja dentro de um elemento com a classe table (black)
// Resp: 12.500,00
$(".table td:last").css("border","3px solid black")

// Recuperar o último elemento na página com a classe text-center que esteja dentro do primeiro elemento com a classe table
// (orange) Resp: 3.800,00
$(".table:first .text-center:last").css("border","3px solid orange")

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 3
//
// Recuperar todos os elementos tr que são filhos imediatos ou não do elemento th (cinza claro)
// .css("background-color", "#f8f8ff");
$("tr th").css("background-color", "#f8f8ff");

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 4
//
// Recuperar elementos img cujos atributos src contenham o termo 'celio' (green) Resp: Celio Sardinha Lourenço
$("img[src*='celio']").css("border","3px solid green");

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 5
//
// Recupera todos os elementos tr que sejam o primeiro filho (imediato ou não) de um elemento table (orange)
// Diferente de recuperar o elemento tr que seja o primeiro filho de um elemento table (retorna apenas um)
$("table tr:first-child").css("border","3px solid orange");                                                                        // São iguais - Primeiro de cada grupo.
// $("table tr:first-of-type").css("border", "3px solid orange");        // São iguais - Primeiro de cada grupo.
// $("table tr:first").css("border", "3px solid orange");                // Primeiro <tr> dentro da primeiro table.

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 6
//
$("document").ready(function() {

    // Vamos utilizar a função each para iterar sobre um conjunto de elementos tr para tornar sua borda cada vez
    // mais grossa.
    // Vamos utilizar um selector para retornar todos elementos tr que se encontram dentro de um elemento table, e
    // então vamos chamar each() que define uma função callback que será chamada para cada elemento no conjunto.
    // A função callback recebe dois parâmetros: o índice do elemento corrente e uma referência para o elemento.
    // Dentro da função each() recuperamos uma versão jquery ($(element)) de cada um destes trs e aplicamos um
    // estilo a cada um deles. A borda deve ficar cada vez mais grossa.

    let borda = 3
    $("table tr").each( function(indice,elemento){
        $(elemento).css("border",borda + "px dotted red")
        borda += 3
        console.log("indice="+indice)
    })




});

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
//
// Exercício 7
//
$("document").ready(function() {

    $("#btn-1").html('Modificar um TD');  // Para <input type="button" ...> usar .prop('value', 'Label')
    // Para <button type="button" ...> usar .html('Label')
    $("#btn-2").html('Adicionar um TR');
    $("#btn-3").html('Substituir o conteúdo de um TR');
    $("#btn-4").html("Rodar");
    $("#btn-5").addClass("d-none");
    $("#btn-6").addClass("d-none");

    // Modificar o email do empregado número 1 de patriciamaria@yahoo.com.br para patricia@gmail.com
    let numero2 = "1"
    let novoEmail = "patricia@gmail.com"
    $("#btn-1").click(function () {
        $("#tab1 tbody td.d-none").each(function (indice, elemento){
            if($(elemento).text() === numero2){
                $(elemento).next().next().next().html(novoEmail)
            }
        })



    });

    let numero = 5;

    // Inserir um novo empregado na tabela de Empregados Disponíveis
    $("#btn-2").click(function () {
        numero +=1;
        let foto = "vinicius.png";
        let nome = "Vinicius Aguiar Pereira"
        let email = "viniciuspereira@gmail.com";
        let faixaEtaria = "Até 30 Anos";
        let sexo = "Masculino";
        let salario = "9.800,00";






    });

    // Substituir a primeira linha da tabela tab1 pela linha abaixo:
    // <td colspan='6'><p>Aqui estava a funcionária Patricia Maria Soares</p></td>
    $("#btn-3").click(function () {

    });

    // Rodar as linhas de tab1:
    $("#btn-4").click(function () {
        // .before
    });
});

// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
