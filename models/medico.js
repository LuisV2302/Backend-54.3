let mongoose = require("mongoose");
let schema = mongoose.Schema;

let medicoSchema = new schema(
  {
    username:{
      type: String,
    },
    contraseña: {
      type: String,
    },
    nombre: {
      type: String,
    },
    ciudad: {
      type: String,
    },
    correo: {
      type: String,
    },
    telefono:{
      type: Number
    },
    tipoSangre:{
      type: String,
    },
    direccionConsultorio: {
      type: String,
    },
    especialidad: {
      type: String,
    },
  },
  {
    collection: "medicos",
  }
);

module.exports = mongoose.model("medico", medicoSchema);
