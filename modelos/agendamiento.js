let mongoose = require("mongoose");
let schema = mongoose.Schema;
let agendamientoSchema = new schema(
    {
        nombre:{
            type: String
        },
        nombreAcompañante:{
            type: String
        },
        correo:{
            type: String
        },
        celular:{
            type: Number
        }
    },
    {
        collection: "agendamiento"
    }
);

module.exports = mongoose.model("agendamiento", agendamientoSchema);