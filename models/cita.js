let mongoose = require('mongoose');

let citaScheme = new mongoose.Scheme(
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

module.exports = mongoose.model("cita", citaScheme);