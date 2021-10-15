var JwtStrategy = require("passport-jwt").Strategy,
 ExtractJwt = require("passport-jwt").ExtractJwt;
// load up the user model
var Medico = require("../models/medico.js");
var Paciente = require("../models/paciente.js");
var settings = require("../config/settings"); // get settings file
module.exports = function(passport) {
 var opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
 opts.secretOrKey = settings.secret;
 passport.use(
 new JwtStrategy(opts, function(jwt_payload, done) {
 Paciente.findOne({ id: jwt_payload.id }, function(err, usuario) {
 if (err) {
 return done(err, false);
 }
 if (user) {
 done(null, usuario);
 } else {
 done(null, false);
 }
 });
 })
 );
 passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
    Medico.findOne({ id: jwt_payload.id }, function(err, usuario) {
    if (err) {
    return done(err, false);
    }
    if (user) {
    done(null, usuario);
    } else {
    done(null, false);
    }
    });
    })
    );
};