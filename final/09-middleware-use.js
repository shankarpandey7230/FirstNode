const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware =>res
app.use([logger, authorize]); // order matters so this should be at the top to work for all routes

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});
