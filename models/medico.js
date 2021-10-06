let mongoose = require("mongoose");

let medicoScheme = new mongoose.Scheme(
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
    correo: {
      type: String,
    },
    direccionConsultorio: {
      type: String,
    },
    especialida: {
      type: String,
    },
  },
  {
    collection: "medicos",
  }
);

module.exports = mongoose.model("medico", medicoScheme);
