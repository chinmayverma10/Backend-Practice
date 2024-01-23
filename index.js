const express = require("express");
const app = express()
let port = 1000;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
// app.set('view engine','./views');

app.set('views', './views');
app.set('view engine','ejs');


app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/rolldice',(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render('rolldice',{num: diceval});
})

app.use(express.static("public/css_files"));

app.use(express.static("public/js_files"));

// app.get('/ig/:username',(req,res)=>{
//     const followers = ['Chinmay','Dhoni','Virat','Rohit']
//     let {username} = req.params;
//     res.render('instagram',{username,followers})
// })

app.get('/ig/:username',(req,res)=>{
    const {username} = req.params;
    const completedata = require('./data.json');
    const data = completedata[username];
    if(data){
        res.render('instagram',{data});
    }else{
        res.render('error');
    }
})