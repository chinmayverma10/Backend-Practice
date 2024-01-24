const express = require("express");
const app = express();
let port = 1000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
app.use(express.urlencoded({extended: true}));
app.set('views','./views');
app.set('view engine','ejs');
app.get('/register',(req,res)=>{
    let {user,pass} = req.query;
    res.render('welcome',{user});
    // res.send("Get response")
})
app.post('/register',(req,res)=>{
    let {user,pass} = req.body;
    res.send(`Welcome to the post account of ${user}`)
})