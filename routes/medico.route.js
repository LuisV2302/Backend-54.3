let express = require("express");
let medicoRoutes = express.Router();
let modeloMedico = require("../modelos/medico")

medicoRoutes.route("/holaaa").get((req,res) => res.send("Envío de datos satisfactorio"));
medicoRoutes.route("/reservarmedico").post((req,res) => {
    modeloMedico.create(req.body,(error, data)=> res.json(data))
});

module.exports = medicoRoutes;