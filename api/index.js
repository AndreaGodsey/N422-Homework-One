const express = require("express");

const app = express();

const port = process.env.PORT || 4032;
app.listen(port);

module.exports = app;

console.log(`http://localhost:${port}`);