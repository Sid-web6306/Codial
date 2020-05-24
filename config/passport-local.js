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

));

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById,(err,user)=>{
        if(err){
            console.log('Error in finding the user');
            return done(err);
        }
        return done(null,user);
    }
})



passport.checkAuthentication = (res,req,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-up');
}

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;