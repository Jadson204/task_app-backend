const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

router.get('/users', UserController.buscarTodos);
router.get('/user/:email', UserController.buscarUm);
router.post('/user', UserController.cadastrarUsuario);
router.put('/user/:email', UserController.alterarUsuario);
router.delete('/user/:email', UserController.excluirUsuario);


module.exports = router;