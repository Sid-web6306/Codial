const User = require('../models/user');


module.exports.profile = (req,res)=>{
    res.render('user_profile',{
        title : "User_Profile"
    })
}

module.exports.signUp = (req,res)=>{
    res.render('user_sign_up',{
        title: "Codial | Sign-Up"
    })
}

module.exports.signIn = (req,res)=>{
    res.render('user_sign_in',{
        title: "Codial | Sign-In"
    })
}


module.exports.create = (req,res)=>{
    
    if(req.body.password!=req.body.confirm_password){
        return res.render('back');
    }
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log('error in signup');
            return ;
        }
        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){
                    console.log('error in signup');
                    return ;
                }
                return res.render('/users/sign-in');
            })
        }else{
            return res.render('back');
        }
    })
}

























