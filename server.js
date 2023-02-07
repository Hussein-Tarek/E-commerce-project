const express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
let path = require("path");
const app = express();
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
require("dotenv/config");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

//connect to db
require("./config/database")();

//some configs to deal with req.body as json and deal with any assets without full path
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
