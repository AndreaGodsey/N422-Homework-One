const express = require("express");

const app = express();

const cupcakesCreated = [
    "Strawberry",
    "Chocolate",
    "Vanilla",
    "Birthday",
    "White Chocolate",
    "Oatmeal",
    "Pumpkin",
    "Peppermint",
    "Matcha",
    "Pistacio",
    "Red Velvet",
    "Lemon",
    "Raspberry",
];

app.get("/api/cupcakesCreated", function(req, res) {
    res.status(200).json({ cupcakesCreated: cupcakesCreated });
})

app.post("/api/cupcakescreated/new", function (req, res) {
    cupcakesCreated.push(req.body.cupcakesCreated);
    res.status(200).json({ cupcakesCreated: cupcakesCreated });
  });
  

const port = process.env.PORT || 4032;
app.listen(port);

module.exports = app;

console.log(`http://localhost:${port}`);