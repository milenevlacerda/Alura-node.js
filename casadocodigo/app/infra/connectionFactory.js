var mysql = require( 'mysql' );

function createDBConnectcion() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodigo_nodejs'
    });
}

// Wrapper
module.exports = function() {
    return createDBConnectcion;
};
