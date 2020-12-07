var express = require('express');
var router = express.Router();

const usuarioControlador = require('../controller/usuarioController')
const servicioDePassword = require('../service/servicioDeRecuperacion')


router.post('/crearUsuario', usuarioControlador.crearUsuario)
router.post('/iniciarSession', usuarioControlador.login)
router.post('/envioDelToken', servicioDePassword.envioDelToken)

router.post('/password/:token', servicioDePassword.comparaElToken);

module.exports = router;
