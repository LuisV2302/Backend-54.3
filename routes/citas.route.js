let express = require("express");
let citasRoutes = express.Router();
let modeloCitas = require("../modelos/citas")

citasRoutes.route("/hola").get((req,res) => res.send("Envío de datos satisfactorio"));
citasRoutes.route("/reservar").post((req,res) => {
    modeloCitas.create(req.body,(error, data)=> res.json(data))
});
citasRoutes.route("/buscar/:id").get((req,res) => {
    modeloCitas.findById(req.params.id,(error, data) => res.json(data))
});
module.exports = citasRoutes;