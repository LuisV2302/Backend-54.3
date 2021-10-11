let express = require("express");
let agendamientoRoutes = express.Router();
let modeloAgendamiento = require("../modelos/agendamiento")

agendamientoRoutes.route("/hola").get((req,res) => res.send("Envío de datos satisfactorio"));
agendamientoRoutes.route("/agendar").post((req,res) => {
    modeloAgendamiento.create(req.body,(error, data)=> res.json(data))
});

module.exports = agendamientoRoutes;