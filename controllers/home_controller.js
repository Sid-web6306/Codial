const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async (req,res)=>{
    // console.log(req.cookies);
    // res.cookie('user_id',13);
    try{
        let posts = await Post.find({})
            .populate('user')
            .populate(
                {
                    path: 'comments',
                    populate: {
                        path:'user'
                    }
                }
            );
        let users =await User.find({});

        return res.render('home' , {
            title: "Codial | Home",
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log('Error',err);
        return;
    }
        
}

