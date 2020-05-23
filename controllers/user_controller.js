const User = require('../models/user');


module.exports.profile = (req,res)=>{
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,(err,user)=>{
            if(user){
                return res.render('user_profile',{
                    title:"User_Profile",
                    user:user
                })
            }else{
                return res.redirect('/users/sign-in');
            }
        })
    }else{
        return res.redirect('/users/sign-in');
    }
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

    //find the user
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log('error in signin',err);
            return ;
        }
        //error in credential user give
        if(user){
            if(user.password!=req.body.password){
                console.log('Password is Incorrect');
                return res.redirect('back');
            }
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }else{
            console.log('User is not found');
            return res.redirect('back');
        }
    })
}


module.exports.signout = (req,res) =>{
    return res.redirect('/home');
}

















