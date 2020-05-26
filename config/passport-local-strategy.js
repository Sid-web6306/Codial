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

// passport.checkAuthentication = function(req,res,next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     return res.redirect('/users/sign-up');
// }

// passport.setAuthenticatedUser = (req,res,next)=>{
//     if(req.isAuthenticated()){
//         res.locals.user = req.user;
//     }
//     next();
// }


module.exports = passport;