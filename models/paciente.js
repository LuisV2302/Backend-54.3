let mongoose = require("mongoose");
let schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

let pacienteSchema = new schema(
  {
    username: {
      type: String
    },
    contraseña: {
      type: String
    },
    nombre: {
      type: String
    },
    correo: {
      type: String
    },
    telefono: {
      type: Number
    },
    tipoSangre: {
      type: String
    },
    ciudad: {
      type: String
    },
    role: {
      type: String
    }
  },
  {
    collection: "pacientes"
  }
);

pacienteSchema.pre("save", function(next) {
  var usuario = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(usuario.contraseña, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        usuario.contraseña = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

pacienteSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.contraseña, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("paciente", pacienteSchema);
