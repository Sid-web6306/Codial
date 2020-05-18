module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.cookie('user_id',13);
    return res.render('home',{
        title: "home"
    });
}