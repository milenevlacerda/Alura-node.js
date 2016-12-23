# Curso Node.js: Inovando com Javascript no backend


#### Aula 01 - Instalação do Node
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
*Criando rota e retornando atravéz do .send()*
```
app.get( '/produtos', function( req, res ){
    res.send( "<html><body><h1>Listagem de produtos</h1></body></html>" );
});

```

*Criando rota e retornando atravéz do .render()*
```
app.get( '/produtos', function( req, res ){
    res.render( "produtos/lista" );    
});

```

*Definindo variáveis para dentro do express*
```
app.set( 'view engine', 'ejs' );
```

*Instalando **Nodemon***
```
$ sudo npm install -g nodemon
```
*ROdando o **Nodemon***
```
$ nodemon app
```

#### Aula 02 - Coesão e Acoplamento, organizando o código
-------------------------
***Commonjs***
*É um modo fazer requisições de módulos no JavaScript, e o node o reconhece pelo objeto 'module', e a função é passada para o atributo 'exports'*

*Conectando ao banco*

```
var mysql = require( 'mysql' );

module.exports = function(){

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodigo_nodejs'
    });

};

```

*Para o carregamento automático de rotas*
```
$ npm install express-load --save
```

#### Aula 03 - Verbos HTTP
-------------------------

**Body Parser**
*Preenche a propriedade 'body' do request*
*Instalando o body-parser*

```
$ sudo npm install body-parser --save
```

**Verbos HTTP**
*Definem operações que podem ser feitas sobre o HTTP*


#### Aula 04 - Content Negotiation
-------------------------
*Torna possível servir diferentes formatos de um mesmo conteúdo a partir da mesma url*

```
res.format({
    html: function() {
        res.render( 'produtos/lista', { lista: results } );
    },
    json: function() {
        res.json( results );
    }
});
```

#### Aula 05 - Respeitando o accept
-------------------------
**Express Validator**
*Instalação*

```
$ sudo npm install express-validator --save
```

*Exemplo de código*

```
req.assert( 'titulo', 'O Título é obrigatório!' ).notEmpty();
```
