/* jshint esversion:6 */

module.exports = function( app ) {

    app.get( '/produtos', function( req, res ) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO( connection );

        produtosBanco.lista(( error, results ) => {
            res.render( 'produtos/lista', { lista: results });
        });

        connection.end();

    });

};
