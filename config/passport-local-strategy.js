const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');



//authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
    },
    (email,password,done)=>{    
        //finding a user and establish the identity    
        User.findOne({email:email},(err,user)=>{
            if(err) {console.log('Error in finding user');return done(err);}
            if(!user || user.password!=password){
                console.log('User is not found');
                return done(null,false);
            }
            //done function take two arguments one is err and second is input
            return done(null,user);
        })
    }

));
//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user,done)=>{
    done(null,user.id);
})
//deserializing the user from the key in the cookies
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err){
            console.log('Error in finding the user');
            return done(err);
        }
        return done(null,user);
    });
})
//check if the user is authenticated
passport.checkAuthentication = (req,res,next)=>{
    // if the user is signed in,then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we  ae just sending this to the local for the views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;