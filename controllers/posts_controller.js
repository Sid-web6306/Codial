const Post = require ('../models/post');



module.exports.create = (req,res)=>{
    Post.create({
        content: req.body.content,
        user:req.user_id
    },(err,user)=>{
        if(err){console.log('Error in post the content'); return err;}
        return res.redirect('back');
    })
} 