const Post = require('../models/post');


module.exports.home = (req,res)=>{
    // console.log(req.cookies);
    // res.cookie('user_id',13);
        Post.find({}, function(err,posts){
            return res.render('home',{
            title: "Codial | home",
            posts: posts,
            user:user
        });
       
    
    });
}

