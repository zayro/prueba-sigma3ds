const dotenv = require('dotenv');
dotenv.config();


const message = (status, mensaje, response, ) => {

    const data = {};
    data.status = status;
    data.data = response;
    data.message = mensaje;

    return data;
};


module.exports = { message };