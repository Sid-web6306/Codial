const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const  port = 800;
const db = require('./config/mongoose');
// const User = require('./models/user');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware');
//use for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require ('./config/passport-local-strategy');
const MongoStore = require ('connect-mongo')(session);
const flash = require('connect-flash');
const customMware = require('./config/middleware');






app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);


app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');


//mongo store is used to store the session cookie
app.use(session({
    name:'codial',
    //TODO change the secret before deployment in production mode
    secret:'somethingsecret',
     saveUninitialized: false,
     resave:false,
     cookie: {
         maxAge:(1000*60*100)
     },
     store: new MongoStore({
         mongooseConnection: db,
         autoRemove: 'disabled'
     },
     (err)=>{
         console.log(err || 'connect-mongodb setup ok');
     })

}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use(flash());
app.use(customMware.setFlash);


app.use(sassMiddleware({
    /* Options */
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix:  '/css'  
}));

//use express routers;
app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err){
        console.log(`Something Went Wrong on ${port}`,err);
    }
    console.log(`app is running on: ${port}`)

});