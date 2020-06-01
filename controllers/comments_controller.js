const Comment = require('../models/comment');
const Post = require('../models/post');


module.exports.create=(req,res)=>{
    Post.findById(req.body.post,(err,post)=>{
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user:req.user._id
            },(err,comment)=>{
                if(err){console.log('Error in Adding a Post');return;}
                post.comments.push(comment);post.save();
                return res.redirect('/');
            })
        }
    })
   
}

module.exports.destroy = (req,res)=>{
    Comment.findById(req.params.id,(err,comment)=>{
        if(comment.user == req.user.id){
            
            let postId = comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId , {$pull : {comments: req.params.id}}, (err,post)=>{
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }

    })
}