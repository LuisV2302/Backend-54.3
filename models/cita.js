let mongoose = require('mongoose');
let schema = mongoose.Schema;

let citaSchema = new schema(
    {
        area: {
            type: String,
        },
        medicoId: {
            type: String,
        },
        pacienteId: {
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