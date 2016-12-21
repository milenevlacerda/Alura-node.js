# Curso Node.js: Inovando com Javascript no backend


#### Aula 01 - Anotações
-------------------------

*Para rodar um arquivo Node:*
```
$ node nomedoarquivo.js
```

*Para importar bibliotecas que necessitaremos*
```
var http = require( 'http' );
```

*Criando Servidor e fazendo com que ele escute uma determinada porta, devolvendo uma resposta simples*

```
var server = http.createServer( function( req, res ){
    res.end( "<html><body><h1> Listando os produtos </h1></body></html>" );
});
server.listen( 3000 );
console.log( 'Servidor rodando' );

```

*Instalando o **Express***
```
$ sudo npm install express -save
```

*Importando o **Express**, evocando o mesmo e subindo o servidor.*
```
var express = require( 'express' );
var app = express();

app.listen(3000, function(){
    console.log("servidor rodando");

});
```
*Criando rota*
```
app.get( '/produtos', function( req, res ){
    res.send( "<html><body><h1>Listagem de produtos</h1></body></html>" );
});

```
