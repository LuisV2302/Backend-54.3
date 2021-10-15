let express = require('express');
let pacienteRoute = express.Router();
let pacienteModel = require('../models/paciente');

//ruta para obtener todos los pacientes
pacienteRoute.route('/').get((req, res) => {
    pacienteModel.find((err, data) => res.json(data));
})

//ruta para crear pacientes
pacienteRoute.route('/crear').post((req, res) =>{
    pacienteModel.create(req.body,(err, data) => res.json(data));
});

//ruta para buscar un paciente por su id
pacienteRoute.route('/buscarPorId/:id').get((req, res) =>{
    pacienteModel.findById(req.params.id, (err, data) => res.json(data))
});

//ruta para eliminar pacientes
// pacienteRoute.route('/eliminarPorId/:id').get((req, res) =>{
//     pacienteModel.findByIdAndDelete(req.params.id, (err, data) => res.json(data))
// });

module.exports = pacienteRoute;