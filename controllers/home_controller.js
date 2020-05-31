const Post = require('../models/post');


module.exports.home = (req,res)=>{
    // console.log(req.cookies);
    // res.cookie('user_id',13);
        Post.find({})
        .populate('user')
        .populate(
            {
                path: 'comments',
                populate: {
                    path:'user'
                }
            }
        )
        .exec(function(err,posts){
            return res.render('home',{
            title: "Codial | home",
            posts: posts
        });
       
    
    });
}

