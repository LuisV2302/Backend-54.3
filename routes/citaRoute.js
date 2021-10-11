let express = require('express');
let citaRoute = express.Router();
let citaModel = require('../models/cita');

module.exports = citaRoute;

citaRoute.route('/crear').post((req, res) =>{
    citaModel.create(req.body,(err, data) => res.json(data));
});

citaRoute.route('/buscarPorMedicoId/:id').get((req, res) =>{
    let medico = req.params.id;
    let query = { medicoId: medico}

    citaModel.find(query, (err, data) => res.json(data))
});

citaRoute.route('/buscarPorPacienteId/:id').get((req, res) =>{
    let paciente = req.params.id;
    let query = { pacienteId: paciente}

    citaModel.find(query, (err, data) => res.json(data))
});