const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const  port = 800;
const db = require('./config/mongoose');
const User = require('./models/user');




app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use(expressLayouts);
//Using Middleware
app.use('/',require('./routes'));


app.set('view engine','ejs');
app.set('views','./views');

//use express routers;

app.listen(port,(err)=>{
    if(err){
        console.log(`Something Went Wrong on ${port}`,err);
    }
    console.log(`app is running on: ${port}`)

});