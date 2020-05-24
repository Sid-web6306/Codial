module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.cookie('user_id',13);
    return res.render('home',{
        title: "home"
    });
}

//i switch the branch to master
// it is running fine 
//isko change krna everytime 
//acha  ok
 //main error kya thi
 // tumne branch switch nahi ki thi first time or 
 //vhi hai pe sab code likh diya or setAuthentication me error thi locals likhna tha vha 
 // resolve kr du ?ok smjh gya thnks ok