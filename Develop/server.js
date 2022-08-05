const express = require("express");
const session = require("express-session");

// const exphbs = require('express-handlebars');

const sequelize = require("./config/connection");

const app = express();

// const helpers = require("./utils/helpers");

const PORT = process.env.PORT || 3001;

//install handlebars
// const hbs = exphbs.create({ helpers });

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
