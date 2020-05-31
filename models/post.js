const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //include the array of ids of all elements in the post schema itself
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ]
},{
    timestamps: true
});

const Post  = mongoose.model('Post',postSchema);

module.exports = Post;

// bro not that dude i am talking about posts how will home page know what is posts u have send it from controllers no ssee
