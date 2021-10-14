let mongoose = require("mongoose");
let schema = mongoose.Schema;
let citasSchema = new schema(
    {
        nombre:{
            type: String
        },
        nombreAcompañante:{
            type: String
        },
        fecha:{
            type: Date
        },
        correo:{
            type: String
        },
        celular:{
            type: Number
        }
    },
    {
        collection: "citas"
    }
);

module.exports = mongoose.model("citas", citasSchema);