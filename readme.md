# Entendendo prepend(), prependTo(), appeend() e appeendTo() do Jquery
## botão bootstrap add dinamico

<p align="center"><img src="Captura de tela_2019-07-01_12-21-31.png"></p><br>
<p align="center"><img src="Captura de tela_2019-07-01_12-22-08.png"></p><br>

## Entendendo prepend(), prependTo(), appeend() e appeendTo() do Jquery
> Olá Pessoal

> Quando comecei utilizar o framework JQuery, cheguei a um certo momente que precisei desenvolver uma aplicação que gerasse um código dinâmicamente, nesse caso DOM com JQuery. Como estava aprendendo JQuery resolvi pesquisar para não precisar misturar código javascript, ai pesquisei… pesquisei até encontrar 4 maneiras, que foram o prepend(), prependTo(), appeend() e appeendTo(). Sendo que uma das minhas dúvidas naquela época era qual utilizar para meu projeto.

### Nesse Post mostrarei como utilizar e quando utilizar cada um desses métodos:

## prepend() 

Esse método permite adicionar conteúdo ao INÍCIO de um elemento HTML. Este conteúdo pode ser um seletor, um elemento HTML, uma string HTML ou um objeto jQuery.

Exemplo:

```html
<html>
    <head>
        <title>Utilizando o método prepend() do Jquery</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
         
        <script type="text/javascript">
            $(document).ready(function() {
                $("#prepend").click(function () {
                    $('.conteudo').prepend("<div class='novo_conteudo'>Novo conteúdo Prepend()</div>");
                });  
            })
             
        </script>
         
        <style type="text/css">
            .conteudo { padding:5px; border:1px solid #000; width:200px; height:200px; }
            .novo_conteudo { padding:5px; border:1px solid #F00; width:100px; height:50px; }
        </style>
         
    </head>
     
    <body>
         
        <div class="conteudo">Conteúdo Normal</div>
 
        <br/>
         
        <input type="button" name="prepend" id="prepend" value="Executar Prepend()">
         
    </body>
</html>
```

Ao executarmos esse exemplo e clicarmos algumas vezes no botão “Executar Prepend()” veremos que irá inserir o
<div class=’novo_conteudo’>Novo conteudo Prepend()</div> acima do Conteúdo Normal, e ao clicarmos em exibir o código fonte o seguinte coóigo será exibido:


<div class="conteudo">
    <div class="novo_conteudo">Novo conteudo Prepend()</div>
    <div class="novo_conteudo">Novo conteudo Prepend()</div>
    Conteudo Normal
</div>
Com o método prepend() o conteúdo sempre será inserido após o <div class=”conteudo”>.

## append()

Esse método permite adicionar conteúdo ao FINAL de um elemento HTML. Este conteúdo pode ser um seletor, um elemento HTML, uma string HTML ou um objeto jQuery.

Exemplo:

```html
<html>
    <head>
        <title>Utilizando o método append() do Jquery</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
         
        <script type="text/javascript">
            $(document).ready(function() {
                $("#append").click(function () {
                    $('.conteudo').append("<div class='novo_conteudo'>Novo conteúdo Append()</div>");
                });  
            })
             
        </script>
         
        <style type="text/css">
            .conteudo { padding:5px; border:1px solid #000; width:200px; height:200px; }
            .novo_conteudo { padding:5px; border:1px solid #F00; width:100px; height:50px; }
        </style>
         
    </head>
     
    <body>
         
        <div class="conteudo">Conteúdo Normal</div>
 
        <br/>
         
        <input type="button" name="append" id="append" value="Executar Append()">
         
    </body>
</html>
```

Ao executarmos esse exemplo e clicarmos algumas vezes no botão “Executar Append()” veremos que irá inserir <div class=’novo_conteudo’>Novo conteudo Append()</div> abaixo do Conteúdo Normal, e ao clicarmos em exibir o código fonte o seguinte codigo será exibido:


<div class="conteudo">
    Conteudo Normal
    <div class="novo_conteudo">Novo conteudo Append()</div>
    <div class="novo_conteudo">Novo conteudo Append()</div>
</div>
Com o método append() o conteúdo sempre será inserido antes da </div>.

## prependTo()

Esse método é usado quando queremos recortar algum conteúdo da página e colar para dentro de um seletor. Esse conteúdo é inserido no INÍCIO desse seletor. Executado o exemplo abaixo fica mais fácil de se entender.

```html
<html>
    <head>
        <title>Utilizando o método prependTo() do Jquery</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
         
        <script type="text/javascript">
            $(document).ready(function() {
                $("#prependto").click(function () {
                    $(".novo_conteudo").prependTo(".conteudo"); 
                });  
            })
             
        </script>
         
        <style type="text/css">
            .conteudo { padding:5px; border:1px solid #000; width:200px; height:200px; }
            .novo_conteudo { padding:5px; border:1px solid #F00; width:100px; height:50px; }
        </style>
         
         
    </head>
     
    <body>
         
        <div class="novo_conteudo">Novo conteúdo prependTo()</div>
         
        <div class="conteudo">Conteúdo Normal</div>
 
        <br/>
         
        <input type="button" name="prependto" id="prependto" value="Executar prependTo()">
         
    </body>
</html>
```
Ao executarmos esse exemplo, e clicarmos no botão “Executar prependTo()” veremos que irá recortar o conteúdo <div class=”novo_conteudo”>Novo conteúdo prependTo()</div> e colocar dentro do <div class=”conteudo”>Conteúdo Normal</div>, ficando:

```html
<div class="conteudo">
    <div class="novo_conteudo">
        Novo conteúdo prependTo()
    </div>
    Conteúdo Normal
</div>
```

## appendTo() 

Esse método é usado quando queremos recortar algum conteúdo da página e colar para dentro de um seletor. Esse conteúdo é inserido no FINAL desse seletor. Executado o exemplo abaixo fica mais fácil de se entender.

```html
<html>
    <head>
        <title>Utilizando o método appendTo() do Jquery</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
         
        <script type="text/javascript">
            $(document).ready(function() {
                $("#appendTo").click(function () {
                    $(".novo_conteudo").appendTo(".conteudo"); 
                });  
            })
             
        </script>
         
        <style type="text/css">
            .conteudo { padding:5px; border:1px solid #000; width:200px; height:200px; }
            .novo_conteudo { padding:5px; border:1px solid #F00; width:100px; height:50px; }
        </style>
         
         
    </head>
     
    <body>
         
        <div class="novo_conteudo">Novo conteúdo appendTo()</div>
         
        <div class="conteudo">Conteúdo Normal</div>
 
        <br/>
         
        <input type="button" name="appendTo" id="appendTo" value="Executar appendTo()">
         
    </body>
</html>
```
Ao executarmos esse exemplo, e clicarmos no botão “Executar appendTo()” veremos que irá recortar o conteúdo <div class=”novo_conteudo”>Novo conteúdo prependTo()</div> e colocar dentro do <div class=”conteudo”>Conteúdo Normal</div> antes da </div>, ficando:

```html
<div class="conteudo">
    Conteúdo Normal
    <div class="novo_conteudo">
        Novo conteúdo prependTo()
    </div>    
</div>
```

### Espero te ajudado, até a próxima pessoal

- http://blog.renatolucena.net
- https://jsfiddle.net/cpdrenato/1ghwad46/
- https://stackoverflow.com/questions/38091406/dynamically-populating-input-text-boxes-and-removing-them-using-jquery

<br>

<a href="https://twitter.com/cpdrenato"><img src="https://img.shields.io/twitter/url/http/shields.io.svg" alt="Follow @cpdrenato on Twitter"></img></a><br>
> Renato Lucena - 2019

