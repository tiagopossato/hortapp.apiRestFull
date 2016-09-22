var express = require('express');
var cidades = require('../controls/CidadeController');
var enderecos = require('../controls/EnderecoController');
const https = require('https');

var router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access_token, x-id_token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*CIDADES*/
router.get('/cidades', validaToken, cidades.get);
router.get('/cidades/:id', validaToken, cidades.getById);
router.get('/cidades/estado/:id', validaToken, cidades.getByUfId);
/*
router.post('/cidades', validaToken, cidades.post);
router.put('/cidades/:id', validaToken, cidades.put);
router.delete('/cidades/:id', validaToken, cidades.delete);
*/

/*ENDERECOS*/

router.get('/enderecos', validaToken, enderecos.get);
router.get('/enderecos/:id', validaToken, enderecos.getById);
router.post('/enderecos', validaToken, enderecos.post);

function validaToken(req, res, next) {
    next();
    return;
    try {
        var clientId = '281275352003-nrbluthgjnach2lom1u15pct6qj0lgn0.apps.googleusercontent.com';

        var access_token = req.headers['x-access_token'];
        //var id_token = req.headers['x-id_token'];
        //console.log(id_token);

        https.get('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + access_token, (resposta) => {
            console.log('statusCodeGoogle:', resposta.statusCode);
            //console.log('headersGoogle:', res.headers);

            resposta.on('data', (d) => {
                process.stdout.write(d);
                if(resposta.statusCode==200){
                    next();                   
                }
                else{
                    return res.status(resposta.statusCode).json({
                    success: false,
                    data: d
                });
                }
            });

        }).on('error', (e) => {
             console.error(e);

            return res.status(500).json({
                    success: false,
                    data: e
                });
        });

    }
    catch (err) {
        console.log("Erro geral:" + err);
    }
}


module.exports = router;
