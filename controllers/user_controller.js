const User = require('../models/user');


module.exports.profile = function(req,res){ 
    // console.log(res.cookie);   
        return res.render('user_profile',{
            title : "User_Profile",
            user : user 
            //see here prvioulsy u sent refernce no to home pageas user:user like this where did u send for posts
            // no i m not sending it thiesn  hw will it show ??
            // send hi nhi ho raha hai
             //display part to badmein aaega i know that if u sed then only it will dispaly noo see video craefully and code it agaoin 
             // why post content is not saved in database? some error in code so only u must have missed it some where yeah pwatch videos again and check it witht his code 
             //ok
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




















