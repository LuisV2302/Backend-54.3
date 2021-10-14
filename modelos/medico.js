let mongoose = require("mongoose");
let schema = mongoose.Schema;
let medicoSchema = new schema(
    {
        nombre:{
            type: String
        },
        especialidad:{
            type: String
        },
        calificacion:{
            type: String
        },
        correo:{
            type: String
        },
        ciudad:{
            type: String
        },
        rol:{
            type: String
        },
        celular:{
            type: Number
        },
        direccion:{
            type: String
        }
    },
    {
        collection: "medicos"
    }
);

module.exports = mongoose.model("medicos", medicoSchema);