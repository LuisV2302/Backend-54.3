let mongoose = require("mongoose");

let pacienteScheme = new mongoose.Scheme(
  {
    username: {
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
    telefono: {
      type: Number,
    },
    tipoSangre: {
      type: String,
    },
  },
  {
    collection: "pacientes",
  }
);

module.exports = mongoose.model("paciente", pacienteScheme);
