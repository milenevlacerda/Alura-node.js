var express = require( '../config/express' )();
var request = require( 'supertest' )( express );

describe( '#ProdutoController', function() {

    beforeEach( function( done ) {
        var conn = express.infra.connectionFactory();

        conn.query( 'delete from produtos', function( ex, result ) {

            if( !ex ) {
                done();
            }

        });
    });

    it( '#listagem json', function( done ) {

        request.get( '/produtos' )
        .set( 'Accept', 'application/json' )
        .expect( 'Content-Type', /json/ )
        .expect( 200, done );

    });

    it( '#cadastro de novo produto com dados invalidos', function( done ) {
        request.post( '/produtos' )
        .send({
            titulo: '',
            descricao: 'novo livro',
            preco: 10
        })
        .expect( 400, done);
    });

    it( '#cadastro de novo produto com dados validos', function( done ) {
        request.post( '/produtos' )
        .send({
            titulo: 'Testando banco de dados de teste',
            descricao: 'novo livro',
            preco: 100
        })
        .expect( 302, done);
    });

});
