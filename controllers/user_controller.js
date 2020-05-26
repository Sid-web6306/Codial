const User = require('../models/user');


module.exports.profile = function(req,res){ 
    // console.log(res.cookie);   
        return res.render('user_profile',{
            title : "User_Profile",
            // user : user
        })
    
}

    

module.exports.signUp = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title: "Codial | Sign Up"
    })
}

module.exports.signIn = (req,res)=>{
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title: "Codial | Sign In"
    })
}


module.exports.create= (req,res)=>{
    
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log('error in signup',err);
            return ;
        }
        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){
                    console.log('error in signup',err);
                    return ;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = (req,res) =>{
    return res.redirect('/');
}


module.exports.destroySession = (req,res) => {
    req.logout();
    return res.redirect('/');
}




















