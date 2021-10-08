let express = require('express');
let medicoRoute = express.Router();
let medicoModel = require('../models/medico');

medicoRoute.route('/').get((req, res) => {
    medicoModel.find((err, data) => res.json(data));
})

medicoRoute.route('/crear').post((req, res) =>{
    medicoModel.create(req.body,(err, data) => res.json(data));
});

medicoRoute.route('/buscarPorId/:id').get((req, res) =>{
    medicoModel.findById(req.params.id, (err, data) => res.json(data))
});

medicoRoute.route('/buscarPorEspecialidad/:especialidad').get((req, res) =>{
    let especialidadABuscar = req.params.especialidad;
    let query = { especialidad: especialidadABuscar}

    medicoModel.find(query, (err, data) => res.json(data))
});

// medicoRoute.route('/eliminarPorId/:id').get((req, res) =>{
//     medicoModel.findByIdAndDelete(req.params.id, (err, data) => res.json(data))
// });

module.exports = medicoRoute;