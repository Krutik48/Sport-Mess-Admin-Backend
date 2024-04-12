const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const passport = require('passport');
const cors = require("cors");
const auth = require("./Router/auth");

app.use(passport.initialize());
app.use(cors());
app.use(auth);

require('./config/mongoConnection');

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is listening");
});