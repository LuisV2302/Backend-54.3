var mongoose = require("mongoose");
var passport = require("passport");
var settings = require("../config/settings");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var Paciente = require("../models/paciente");
var Medico = require("../models/medico");

router.post("/login", function(req, res) {
  let role = req.body.role;

  if (role == "medico") {
    Medico.findOne(
      {
        username: req.body.username
      },
      function(err, usuario) {
        if (err) {
          console.log(err);
        }
        if (!usuario) {
          res.status(401).send({
            success: false,
            msg: "Usuario no encontrado."
          });
        } else {
          // check if password matches
          usuario.comparePassword(req.body.contraseña, function(err, isMatch) {
            if (isMatch && !err) {
              // if usuario is found and password is right create a token
              var token = jwt.sign(usuario.toJSON(), settings.secret);
              // return the information including token as JSON
              res.json({ success: true, token: "JWT " + token, userId: usuario._id });
            } else {
              res.status(401).send({
                success: false,
                msg: "Contraseña incorrecta."
              });
            }
          });
        }
      }
    );
  } else {
    Paciente.findOne(
      {
        username: req.body.username
      },
      function(err, usuario) {
        if (err) {
          console.log(err);
        }
        if (!usuario) {
          res.status(401).send({
            success: false,
            msg: "Usuario no encontrado"
          });
        } else {
          // check if password matches
          usuario.comparePassword(req.body.contraseña, function(err, isMatch) {
            if (isMatch && !err) {
              // if usuario is found and password is right create a token
              var token = jwt.sign(usuario.toJSON(), settings.secret);
              // return the information including token as JSON
              res.json({ success: true, token: "JWT " + token , userId: usuario._id});
            } else {
              res.status(401).send({
                success: false,
                msg: "Contraseña incorrecta"
              });
            }
          });
        }
      }
    );
  }
});

router.post("/register", function(req, res) {
  if (!req.body.username || !req.body.contraseña) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    if (req.body.role == "medico") {
      var nuevoMedico = new Medico({
        username: req.body.username,
        contraseña: req.body.contraseña,
        nombre: req.body.nombre,
        ciudad: req.body.ciudad,
        correo: req.body.correo,
        telefono:req.body.telefono,
        tipoSangre:req.body.tipoSangre,
        precio: req.body.precio,
        direccionConsultorio: req.body.direccionConsultorio,
        especialidad: req.body.especialidad,
        role: req.body.role
      });
      // save the user
      nuevoMedico.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: "Username ya existe." });
        }
        res.json({ success: true, msg: "Medico creado." });
      });
    } else {
      var nuevoPaciente = new Paciente({
        username: req.body.username,
        contraseña: req.body.contraseña,
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        tipoSangre: req.body.tipoSangre,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        role: req.body.role
      });
      // save the user
      nuevoPaciente.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: "Username ya existe." });
        }
        res.json({ success: true, msg: "Paciente creado correctamente." });
      });
    }
  }
});

module.exports = router;
