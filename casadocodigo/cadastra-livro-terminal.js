var http = require('http');

var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
        // 'Accept': 'text/html'
    }
};

var client = http.request( configuracoes, function( res ) {
    console.log( res.statusCode );

    res.on( 'data', function( body ){
        console.log( 'Corpo ' + body );
    });
});

var produto = {
    titulo: 'Mais sobre node',
    descricao: 'Node, javascript e um pouco sobre HTTP',
    preco: 100
};

client.end( JSON.stringfy( produto ) );
