const path = require("path");
const express = require("express");

const app = require("./api");

app.use(
    express.static(
      path.join(__dirname, 'views')
    )
  );



// below express() call

//app.get('**', function(req,res,next) {
    //res.send('<h1>Hi there!</h1>');
//})

// above port definition