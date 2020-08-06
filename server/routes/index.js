const express = require('express');


//const knex = require('../db')

const api = express.Router();

const cliente = require('../controllers/');



/** 
 * Metodos de consulta 
 */


api.get('/', (req, res) => {

	return res.status(200).send({
		message: "Welcome to Api "
	});

});

api.get('/contacts', cliente.getAll);
api.post('/contacts', cliente.save);

module.exports = api;