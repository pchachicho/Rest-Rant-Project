// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();

// Express Settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use("/places", require("../Rest-Rant/controllers/places"));
app.use(express.static('public'))

// Controllers & Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render('error404')
});

app.listen(process.env.PORT);
