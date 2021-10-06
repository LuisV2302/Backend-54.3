let express = require('express');
let medicoRoute = express.Router();

medicoRoute.route('/').get((req, res) => {
    console.log('listado de medicos');
})

module.exports = medicoRoute;