const Post = require('../models/post');
const Comment = require('../models/comment');



module.exports.create = function(req,res){
    Post.create({
        content : req.body.content,
        user: req.user._id
    },(err,post)=>{
        if(err){console.log('error in creating a post');return;}
        console.log('hello');
        return res.redirect('back');
    })
}

module.exports.destroy = (req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        if(post.user == req.user.id){
            post.remove();
            Comment.deleteMany({post: req.params.id},(err)=>{
                if(err){console.log('Error in deleting a comment');return;}
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    })
}
