let mongoose = require('mongoose');
let schema = mongoose.Schema;

let citaSchema = new schema(
    {
        nombreUsuario: {
            type: String,
        },
        medicoId: {
            type: String,
        },
        pacienteId: {
            type: String,
        },
        fechaInicio: {
            type: String,
        },
        fechaFinalizacion: {
            type: String,
        }
    },
    {
        collection: "citas"
    }
);

module.exports = mongoose.model("cita", citaSchema);