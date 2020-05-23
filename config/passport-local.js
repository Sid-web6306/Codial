const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
    usernameField:'email'
    },
    function(email,password,done){
        User.findOne({email:email},(err,user)=>{
            if(err) {console.log('Error in finding user');return done(err);}
            if(!user || user.password!=password){
                console.log('User is npt found');
                return done(null,false);
            }
            return done(null,user);
        })
    }

))