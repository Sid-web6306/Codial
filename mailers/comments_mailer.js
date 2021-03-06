const nodemailer = require('../config/nodemailer');

exports.newComment = (comment)=>{
    console.log('inside new comment mailer');
    let htmlString = mailer.renderTemplate({comment: comment},'/comment/new_comment.ejs');
    nodemailer.transporter.sendMail({
        from: 'siddhantjain15298@gmail.com', // sender address
        to: comment.user.email, // list of receivers
        subject: "New Comment Published", // Subject line
        html: htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail' ,err);
            return;
        }
        console.log('message sent' ,info);
        return ;
    });
}