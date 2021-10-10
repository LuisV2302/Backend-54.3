let mongoose = require('mongoose');
let schema = mongoose.Schema;

let citaSchema = new schema(
    {
        area: {
            type: String,
        },
        medico: {
            type: String,
        },
        paciente: {
            type: String,
        },
        fecha: {
            type: Date,
        }
    },
    {
        collection: "citas"
    }
);

module.exports = mongoose.model("cita", citaSchema);