let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let express = require("express");

let db = require("./db");

mongoose.Promise = global.Promise;

mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log("db conectada"),
    (err) => console.log(err)
  );

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, ContentType, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

const medicosAPI = require("./routes/medicoRoute");
const pacientesAPI = require("./routes/pacienteRoute");
const citasAPI = require("./routes/citaRoute");
//uso de la API para los medicos
app.use("/medicos", medicosAPI);
app.use("/pacientes", pacientesAPI);
app.use("/citas", citasAPI);

// para base de datos local
const server = app.listen(8000, () => console.log("conectado"));

// para cuando se suba el proyecto a heroku
// app.set("PORT", process.env.PORT || 3000);
// app.listen(app.get("PORT"), () => {
//   console.log(`Servidor en: ${app.get("PORT")}`);
// });
