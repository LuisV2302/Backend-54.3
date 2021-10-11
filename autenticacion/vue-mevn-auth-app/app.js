var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");
var medico = require("./routes/medicoRoute");
var paciente = require("./routes/pacienteRoute");
var app = express();
var auth = require('./routes/auth');
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose
 .connect(
 "mongodb+srv://grupo3:Misintic543@cluster0.rsktw.mongodb.net/Medictorio?retryWrites=true&w=majority",
 {
 promiseLibrary: require("bluebird")
 }
 )
 .then(() => console.log("connection succesful"))
 .catch(err => console.error(err));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "dist")));
app.use("/medicos", express.static(path.join(__dirname, "dist")));
app.use("/medico", medico);
app.use("/pacientes", express.static(path.join(__dirname, "dist")));
app.use("/paciente", paciente);
app.use('/api/auth', auth);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
 var err = new Error("Not Found");
 err.status = 404;
 next(err);
});
// restful api error handler
7
app.use(function(err, req, res, next) {
 console.log(err);
 if (req.app.get("env") !== "development") {
 delete err.stack;
 }
 res.status(err.statusCode || 500).json(err);
});
module.exports = app;