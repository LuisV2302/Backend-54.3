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
 Paciente.findOne(
 {
 username: req.body.username
 },
 function(err, usuario) {
 if (err) throw err;
 if (!usuario) {

 res
 .status(401)
 .send({
 success: false,
 msg: "Authentication failed. User not found."
 });
 } else {
 // check if password matches
 Paciente.comparePassword(req.body.contraseña, function(err, isMatch) {
 if (isMatch && !err) {
 // if user is found and password is right create a token
 var token = jwt.sign(user.toJSON(), settings.secret);
 // return the information including token as JSON
 res.json({ success: true, token: "JWT " + token });
 } else {
 res
 .status(401)
 .send({
 success: false,
 msg: "Authentication failed. Wrong password."
 });
 }
 });
 }
 }
 );
 Medico.findOne(
    {
    username: req.body.username
    },
    function(err, usuario) {
    if (err) throw err;
    if (!usuario) {
   
    res
    .status(401)
    .send({
    success: false,
    msg: "Authentication failed. User not found."
    });
    } else {
    // check if password matches
    Medico.comparePassword(req.body.contraseña, function(err, isMatch) {
    if (isMatch && !err) {
    // if user is found and password is right create a token
    var token = jwt.sign(user.toJSON(), settings.secret);
    // return the information including token as JSON
    res.json({ success: true, token: "JWT " + token });
    } else {
    res
    .status(401)
    .send({
    success: false,
    msg: "Authentication failed. Wrong password."
    });
    }
    });
    }
    }
    );
});
module.exports = router;