let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("Cors");
let express = require("express");
let miruta = require("./database");

mongoose.Promise = global.Promise; 
mongoose.connect(
    miruta.principal,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => console.log("conexión a la base lista"),
    (error) => console.log(error)
);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const agendamientoAPI = require("./routes/agendamiento.route");
app.use("", agendamientoAPI);
const server = app.listen(8000,() => console.log("conexión correcta :D"));