const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const  port = 800;
const db = require('./config/mongoose');
const User = require('./models/user');
const session  = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');

const cookieParser = require('cookie-parser');
app.use(express.urlencoded());
app.use(cookieParser());



app.use(session({
    name:'codial',
    secret: 'somethingsecret',
    saveUninitialized: false,
    resave: false,
    cookie: {
     maxAge: (1000*60*100)      
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
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