const contacts = require('../model/');


const {
	message
} = require('../utils/tools');


function getAll(req, res) {

    contacts.select().then(reponse => {
        return res.status(200).json(message(true,'respuesta exitosa',reponse));
    }).catch(error => {
        return res.status(500).send(message(false, 'no se encontraron registros', error));
    })

}


async function save(req, res){



    const data = {
        name: req.body.name,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city
    };

    console.log('save contacts',data);

    contacts.insert(data).then(reponse => {
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