var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");
var UserSchema = new Schema({
 username: {
 type: String,
 unique: true,
 required: true
 },
 contraseña: {
 type: String,
 required: true
 }
});
UserSchema.pre("save", function(next) {
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
UserSchema.methods.comparePassword = function(passw, cb) {
 bcrypt.compare(passw, this.contraseña, function(err, isMatch) {
 if (err) {
 return cb(err);
 }
 cb(null, isMatch);
 });
};
module.exports = mongoose.model("User", UserSchema);