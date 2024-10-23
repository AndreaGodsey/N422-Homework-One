const express = require('express');
const app = express();

app.use(
    express.static(
      path.join(__dirname, 'views')
    )
  );

const path = require('path');

const port = process.env.PORT || 4032;


app.listen(port);

// below express() call

//app.get('**', function(req,res,next) {
    //res.send('<h1>Hi there!</h1>');
//})

// above port definition