const express = require('express');
const app = express();
const  port = 800;

app.use('/',require('./routes'));





//use express routers;

app.listen(port,(err)=>{
    if(err){
        console.log(`Something Went Wrong on ${port}`,err);
    }
    console.log(`app is running on: ${port}`)

});