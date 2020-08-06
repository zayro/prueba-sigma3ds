const cliente = require('../model/');


const {
	message
} = require('../utils/tools');


function getAll(req, res) {

    cliente.select().then(reponse => {
        return res.status(200).json(message(true,'respuesta exitosa',reponse));
    }).catch(error => {
        return res.status(500).send(message(false, 'no se encontraron registros', error));
    })

}


async function save(req, res){

    const  id_cliente = await general.max('cliente', 'id_cliente');

    const data = {
        id_cliente: id_cliente,
        nombre: req.body.nombre,
        identificacion: req.body.identificacion
    };

    console.log('save cliente',data);

    cliente.insert(data).then(reponse => {
		if (reponse) {
			return res.status(201).send(message(true,'respuesta exitosa',reponse));
		} else {
			return res.status(500).send(message(false, 'no se encontraron registros'));
		}
	}).catch(error => {
        return res.status(500).send(message(false, error));
    });
    

}




module.exports = {
    getAll,
    save
}