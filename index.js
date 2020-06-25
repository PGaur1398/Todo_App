const express = require('express'); 
const app = express(); 

//Reading Post requests
app.use(express.urlencoded());

//Setting up static files
app.use(express.static("./assets"));

// requiring mongoose to setup db
const db = require('./config/mongoose');

// use express router
app.use('/', require('./routes'));

//Setting Up ejs as View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Starting express server
app.listen(8000, function(err){
    if(err){
        console.log('Error in running the server : 8000');
    }

    console.log('Server is running on port: 8000');
});