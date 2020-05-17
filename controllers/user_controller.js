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