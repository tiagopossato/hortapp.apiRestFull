var banco = require('knex')({
    client: 'mysql',
    connection: {
        host: '104.236.59.135',
        user: 'chucrute-testes',
        password: 'chucrute-testes',
        database: 'TESTES-HORTAPP',
        charset: 'utf8'
    }
});
module.exports = {
    get: getCidades,
    getById: getCidadeById,
    getByUfId: getCidadeByUfId
};

function getCidades(req, res) {
    banco
            .select('cidCodigo', 'cidNome', 'ufCodigo')
            .from('CIDADE')
//            .on('query-response', function (response, obj, builder) {             
//            })
            .then(function (response) {
                // Same response as the emitted event
                return res.status(200).json({
                    success: true,
                    data: response
                });
            })
            .catch(function (error) {
                return res.status(500).json({
                    success: false,
                    data: error
                });
            });
}

function getCidadeById(req, res) {
    // Grab data from the URL parameters
    var id = req.params.id;
    banco
            .select('cidCodigo', 'cidNome', 'ufCodigo')
            .from('CIDADE')
            .where({cidCodigo: id})
//            .on('query-response', function (response, obj, builder) {                
//            })
            .then(function (response) {
                // Same response as the emitted event
                return res.status(200).json({
                    success: true,
                    data: response
                });
            })
            .catch(function (error) {
                return res.status(500).json({
                    success: false,
                    data: error
                });
            });
}

function getCidadeByUfId(req, res) {
    // Grab data from the URL parameters
    var id = req.params.id;
    banco
            .select('cidCodigo', 'cidNome', 'ufCodigo')
            .from('CIDADE')
            .where({ufCodigo: id})
//            .on('query-response', function (response, obj, builder) {                
//            })
            .then(function (response) {
                // Same response as the emitted event
                return res.status(200).json({
                    success: true,
                    data: response
                });
            })
            .catch(function (error) {
                return res.status(500).json({
                    success: false,
                    data: error
                });
            });
}